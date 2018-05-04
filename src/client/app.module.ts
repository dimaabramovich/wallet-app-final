
import { NgModule } from 'ng-metadata/core';
import { WalletService } from './wallet.service';
import { AppComponent } from './app.component';
import { CreateWallet } from './create-wallet.component';
import * as ngResource from 'angular-resource';
import { Transfer } from './transfer.component';
import { MyWallet } from './my-wallet.component';

@NgModule({
    declarations: [AppComponent, MyWallet, CreateWallet, Transfer],
    providers: [WalletService],
    imports: [ngResource]
})
export class AppModule {

}