import { Wallet } from './wallet';
import { WalletRepository } from './wallet.repository';
import { injectable } from 'inversify';

@injectable()
export class WalletRepositoryInMemory implements WalletRepository {

    wallets: Array<Wallet> = new Array();
    findById(id: number): Wallet {
        return this.wallets.find(w => w.id == id);
    }
    save(wallet: Wallet): Wallet {
        var foundWallet = this.wallets.find(w => w.id == wallet.id);
        if (foundWallet) {
            foundWallet = wallet;
        } else {
            wallet.id = Math.floor(Math.random() * Math.floor(1000));;
            this.wallets.push(wallet);
        }
        return wallet;
    }
}
