class Employee{

    // id: number;
    // name: string;
    // salary: number;

    constructor(public id?: number, public name?: string, public salary?: number){

    }
}

let emp = new Employee(1, "Anil", 50000);
console.log("emp", emp);
