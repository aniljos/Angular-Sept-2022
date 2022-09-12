//var x,y,z;
console.log("Hello Typescript");


console.log("x", x);
var x; //any ==> var x: any
x = 10;
console.log("x", x);
x = "hello";
console.log("x", x);

var y: number; //Type annotattion
y = 20;
console.log("y", y);
//y = "abc"; //compiler error

var z = 30; // Type inferrence z: number
console.log("z", z);
//z = "abc"; //compiler error

var user : {id: number, name: string, location?: string};

user = {id: 1, name: "anil"};
console.log("user", user);

var foo : (a: number, b: number) => number;
//console.log("foo", foo(3,5));
foo = (a : number, b: number): number => {

    
    return a + b;
}

console.log("foo", foo(3,5));

function bar(){

    var x = 15;
    if(x > 5){
        let msg = "hello";
        console.log("msg", msg);
    }
    

}

bar();
