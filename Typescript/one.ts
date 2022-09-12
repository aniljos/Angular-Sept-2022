console.log("in one.js");

export function add(x, y){
    console.log("in add of one.js")
}

export function multiply(x, y){
    console.log("in multiply of one.js")
}

export function divide(x, y){
    console.log("in divide of one.js")
}

export const version = 1.0;



export default {
    add, multiply, version
}