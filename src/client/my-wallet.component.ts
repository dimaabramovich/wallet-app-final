import { Component } from "ng-metadata/core";
import { WalletService } from './wallet.service';
import { Wallet } from '../wallet';


@Component({
    selector: "my-wallet",
    template: `
    <div>
        Wallet ID: <input ng-model='$ctrl.walletId'></input>
        <button ng-click=$ctrl.getWallet($ctrl.walletId)>Get My Wallet</button>
        <br>Your Balance Is: {{$ctrl.wallet._balance}}
    </div>`
})
export class MyWallet {

    constructor(private walletService: WalletService) { }
    private wallet: Wallet;

    getWallet(walletId: number) {
        this.walletService.get(walletId).then((wallet) => {
            this.wallet = wallet;
        })
    }
}