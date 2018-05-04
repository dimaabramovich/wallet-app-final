import { Injectable, Inject } from "ng-metadata/core";
import { IPromise } from "angular";


@Injectable()
export class WalletService {

    constructor(@Inject('$resource') private $resource) {

    }
    public get(walletId: number): any {
        return this.$resource("/api/wallet/:id").get({ id: walletId }).$promise;
    }
    public create(amount: number): any {
        return this.$resource("/api/create/:amount").get({ amount: amount }).$promise;
    }
    public transfer(sourceId, targetId, amount){
        return this.$resource("/api/transfer/:sourceId/:targetId/:amount").get({sourceId: sourceId, targetId: targetId, amount: amount }).$promise;
    }
}