import {Component}from "@angular/core"

@Component({
    selector: 'my-app',
    template: `
        <p *ngIf="user">Welcome,{{user}}</p>
        <h5>It's my first angular App</h5>
    `
})
export class AppComponent {
    user: string

    constructor() {
        this.user = ""
    }
}