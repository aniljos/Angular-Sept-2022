import {Component} from '@angular/core';


// How to use? <hello></hello>
// Where to use? child of the AppComponent
// Any component has to be part of a angular module


@Component({
    template: `
        <h3>Hello Angular</h3>
        <p>This is a simple Angular Component</p>
    `,
    selector: "hello"
})
export class HelloComponent{
    //Logic
}