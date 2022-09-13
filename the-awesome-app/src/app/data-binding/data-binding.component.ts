import { Component } from "@angular/core";

@Component({
    selector: "data-binding",
    templateUrl: "./data-binding.component.html"
})
export class DataBindingComponent{

    public name: string;
    public count: number;
    public ctrPlaceHolder = "The Count"
    public message: string;

    
    

    constructor(){
        this.name = "Anil Joseph";
        this.count = 10;
        this.message = "Hello Angular";
        
    }

    inc(evt: any){
        this.count++;
        console.log(evt);
    }
}