//basic types
let id: number =5;
let company: string ="my company ";
let isPublish: boolean= true;
let x: any = "hello";
let age:number;
age=10;
let ids: number[] = [1,2,3,4];


//tuple 
//in tuple we can decide the exact type inside array
let person: [number,string,boolean] = [1,"hello",true]
//tuple array
let employee:[number,string][];
employee = [
    [1,'ram'],  
    [2,'shyam'],
    [3,'hari'],
    [4,'sita'],
]


//union
// TypeScript allows us to use more than one data type for a variable or a function parameter. This is called union type.


let pid : number | string;
pid = 1;
pid = "hello string";



//object
type User ={
    name:string,
    age:number
}


let user:User ={
    name:"abc",
    age:20
}


//type assertion

let cid:any = "hello";
let customerId = <number>cid

let newMethodItem = cid as number

//functions 

//functions parameters default type will be any and to make them accept you can uncomment 
//noImplicityAny:true

function addNum(a: number,b: number): number{
    return a +b
}
//void method doesnot return anything
function log(message: number | string): void{
    console.log(message);
}

//interfaces
//interfaces and type are same but in interfaces we cant use union
//we can create two interface with same name and use it but we cant use it on type 
interface myInterface  {
    height:number | string,
    weight:string,
    length?:string
}

let obj1:myInterface ={
    height:13,
    weight:"prakash"
}
//here length may not occour in object

//interface inside the functions
interface myfunction {
    (x:number,y:number):number
}

const myfn: myfunction=(x: number, y:number):number => x + y;
const myfns: myfunction=(a: number, b:number):number => a - b;

//classes

interface PersonInterface{
    id:number,
    name:string,
    register():string
}

class Person implements PersonInterface{
    id:number
    name:string
    constructor(id:number,name:string){
        this.id = id;
        this.name =  name
    }

    register(){
        return `${this.name} was registered`
    }
}

class Employee extends Person{
    salary:number
    constructor(id:number,name:string,salary:number){
        super(id,name);
        this.salary = salary;
    }
}

const emp1 = new Employee(1,"prakash",200);
const emp2 = new Employee(2,"ram",300);
// console.log(emp1.register())


//Generics

function getArray<T>(item:T[]):T[]{
    return new Array().concat(item);
}

let numArray = getArray<number>([1,2,3,4,5]);
let stringArray = getArray<string>(["hello","world","i","am","testing"]);


//interface example in details to learn

interface UserDetails{
    name:string,
    age:number,
    speak(a:number):void,
    spend(a:number):number
}

const myNewUser:UserDetails = {
    name:"prakash",
    age:20,
    speak(p:number):void{console.log("hello world")},
    spend(q:number):number{return q}
}

function allUser(allUsers:UserDetails){
        console.log(allUsers.name);
}

allUser(myNewUser);












