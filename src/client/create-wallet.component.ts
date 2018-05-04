import { Component, Inject } from 'ng-metadata/core';
import { WalletService } from './wallet.service';


@Component({
    selector: "create-wallet",
    template: `
        <div>Amount: <input ng-model='$ctrl.amount'></input><button ng-click='$ctrl.create($ctrl.amount)'>Create</button>
        Your Wallet ID: {{$ctrl.walletId}}
        </div>
    `
})
export class CreateWallet {

    private walletId;
    constructor(private walletService : WalletService){

    }

    create(amount: number){
        this.walletService.create(amount).then((wallet) => {
            this.walletId = wallet._id;
        })
    }
}