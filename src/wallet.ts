export class Wallet {

    constructor(balance: number) {
        this._balance = balance;
    }
    private _id: number;
    get id(): number {
        return this._id;
    }
    set id(value: number) {
        this._id = value;
    }
    private _balance: number
    get balance(): number {
        return this._balance;
    }
    set balance(value: number) {
        this._balance = value;
    }
}