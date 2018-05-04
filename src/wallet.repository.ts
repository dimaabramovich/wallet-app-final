import { Wallet } from './wallet';
export interface WalletRepository {
    findById(id: number): Wallet;
    save(wallet: Wallet): Wallet;
}