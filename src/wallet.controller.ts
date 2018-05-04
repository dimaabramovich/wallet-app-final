import { controller, httpGet, requestParam, queryParam } from 'inversify-express-utils';
import { inject } from 'inversify';
import { WalletIteractor } from './wallet.iteractor';
import { Wallet } from './wallet';

@controller("/api")
export class WalletController{
    constructor(@inject("WalletIteractor") private walletIteractor: WalletIteractor){

    }
    @httpGet("/transfer/:sourceId/:targetId/:amount")
    transfer(@requestParam("sourceId") sourceId: number,@requestParam("targetId") targetId: number, @requestParam("amount") amount: number){
        this.walletIteractor.transfer(+sourceId, +targetId, +amount);
    }
    @httpGet("/wallet/:id")
    getWallet(@requestParam("id") id): Wallet{
        return this.walletIteractor.getWallet(+id);
    }
    @httpGet("/create/:amount")
    create(@requestParam("amount") amount): Wallet{
        return this.walletIteractor.create(+amount);
    }
}