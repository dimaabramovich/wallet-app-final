import 'reflect-metadata';
import { describe, it, setup } from "mocha";
import { expect } from "chai";
import { inject } from 'inversify';
import { Wallet } from './wallet';
import { WalletRepository } from './wallet.repository';
import { WalletRepositoryInMemory } from './wallet.repository-inmemory';
import { WalletIteractor } from './wallet.iteractor';

describe("wallet app", () => {

    var repository: WalletRepositoryInMemory;
    var iteractor: WalletIteractor;

    setup(() => {
        repository = new WalletRepositoryInMemory();
        iteractor = new WalletIteractor(repository);
    })

    it("should be able to transfer the amount", () => {
        runTransfer(5, 10, 20, 5, 25);
    })

    it("should not transfer in case of low source balance", () => {
        runTransfer(11, 10, 20, 10, 20);
    })

    it("transfer should do nothing in case of negative amount", () => {
        runTransfer(-11, 10, 20, 10, 20);
    })

    function runTransfer(amount, sourecBalance, targetBalance, sourecEcpected, targetExpected) {

        var sourceWallet = new Wallet(sourecBalance);
        var targetWallet = new Wallet(targetBalance);
        repository.save(sourceWallet);
        repository.save(targetWallet);

        iteractor.transfer(sourceWallet.id, targetWallet.id, amount);
        expect(iteractor.getWallet(sourceWallet.id).balance, "source balance").equals(sourecEcpected);
        expect(iteractor.getWallet(targetWallet.id).balance, "target balance").equals(targetExpected);
    }
})



