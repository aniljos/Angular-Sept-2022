//default import
import libone from './one.js';

//named import 
import {add as Add, multiply, version} from './one.js';


console.log("in two.js")

function process(){

    console.log("in process of two.js");
    libone.add(2,4);
    add(3,4);
    Add(3,4);
    multiply(4,6);

}

function add(a, b){
    console.log("in add of two.js")
}


export default process;