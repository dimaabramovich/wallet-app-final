import 'reflect-metadata';
import * as bodyParser from 'body-parser';
import { Container } from 'inversify';
import { interfaces, InversifyExpressServer, TYPE } from 'inversify-express-utils';
import { WalletIteractor } from './wallet.iteractor';
import { WalletRepository } from './wallet.repository';
import { WalletRepositoryInMemory } from './wallet.repository-inmemory';
//import { express } from 'express';
import './wallet.controller';



let container = new Container();
container.bind<WalletIteractor>("WalletIteractor").to(WalletIteractor);
container.bind<WalletRepository>("WalletRepository").to(WalletRepositoryInMemory).inSingletonScope();

let server = new InversifyExpressServer(container);
server.setConfig((app) => {
    // add body parser
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(bodyParser.json());
    //app.use(express.static(__dirname + '/public'));

    app.get('/', (req, res) => {
        res.sendFile(__dirname + '/client/index.html');
    });
    app.get('/dist/bundle.js', (req, res) => {
        res.sendFile(__dirname + '/dist/bundle.js');
        //res.set('Content-Type', 'application/javascript');
    })
});

let app = server.build();
app.listen(3000, () => {
    console.log("wallet app is running at http://localhost:3000");
});