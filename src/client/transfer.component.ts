import { Component } from "ng-metadata/core";
import { WalletService } from './wallet.service';

@Component({
    selector: 'transfer',
    template: `<div>
    From: <input ng-model='$ctrl.sourceId'></input> -> To: <input ng-model='$ctrl.targetId'></input> 
    Amount : <input ng-model='$ctrl.amount'></input>
    <button ng-click='$ctrl.transfer($ctrl.sourceId, $ctrl.targetId, $ctrl.amount)'>Transfer</button>
    </div>`
})
export class Transfer {

    constructor(private walletService: WalletService){

    }
    transfer(sourceId, targetId, amount){
        this.walletService.transfer(sourceId, targetId, amount);
    }
}