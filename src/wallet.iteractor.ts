import { inject, injectable } from 'inversify';
import { WalletRepository } from './wallet.repository';
import { Wallet } from './wallet';

@injectable()
export class WalletIteractor {
    constructor(@inject("WalletRepository") private repository: WalletRepository) {

    }
    transfer(sourceWalletId: number, targetWalletId: number, ammount: number) {
        var sourceWallet = this.repository.findById(sourceWalletId);
        var targetWallet = this.repository.findById(targetWalletId);

        if (sourceWallet.balance - ammount >= 0 && ammount > 0) {

            sourceWallet.balance -= ammount;
            targetWallet.balance += ammount;

            this.repository.save(sourceWallet);
            this.repository.save(targetWallet);
        }
    }
    getWallet(walletId: number): Wallet {
        return this.repository.findById(walletId);
    }
    create(amount: number): Wallet {
        var wallet = this.repository.save(new Wallet(amount));
        return wallet;
    }
}