"use strict";
//basic types
let id = 5;
let company = "my company ";
let isPublish = true;
let x = "hello";
let age;
age = 10;
let ids = [1, 2, 3, 4];
//tuple 
//in tuple we can decide the exact type inside array
let person = [1, "hello", true];
//tuple array
let employee;
employee = [
    [1, 'ram'],
    [2, 'shyam'],
    [3, 'hari'],
    [4, 'sita'],
];
//union
let pid;
pid = 1;
pid = "hello string";
let user = {
    name: "abc",
    age: 20
};
//type assertion
let cid = "hello";
let customerId = cid;
let newMethodItem = cid;
//functions 
//functions parameters default type will be any and to make them accept you can uncomment 
//noImplicityAny:true
function addNum(a, b) {
    return a + b;
}
//void method doesnot return anything
function log(message) {
    console.log(message);
}
let obj1 = {
    height: 13,
    weight: "prakash",
};
const myfn = (x, y) => x + y;
const myfns = (a, b) => a - b;
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} was registered`;
    }
}
class Employee extends Person {
    constructor(id, name, salary) {
        super(id, name);
        this.salary = salary;
    }
}
const emp1 = new Employee(1, "prakash", 200);
const emp2 = new Employee(2, "ram", 300);
// console.log(emp1.register())
//Generics
function getArray(item) {
    return new Array().concat(item);
}
let numArray = getArray([1, 2, 3, 4, 5]);
let stringArray = getArray(["hello", "world", "i", "am", "testing"]);
