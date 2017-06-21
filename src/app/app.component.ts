import {Component, OnInit}from "@angular/core"

@Component({
    selector: 'my-app',
    template: `
        <p>Welcome</p>
        <h5>It's my first angular App123123</h5>
    `
})
export class AppComponent implements OnInit {
    ngOnInit() {
        console.log(123)
    }
}