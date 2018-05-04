import { Component } from "ng-metadata/core";


@Component({
    selector: "wallet-app",
    template: `
    <div>
        <create-wallet></create-wallet><br>
        <my-wallet></my-wallet><br>
        <transfer></transfer>
    </div>`
})
export class AppComponent {
}