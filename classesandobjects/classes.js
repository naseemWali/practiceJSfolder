// objects have special property name prototype

const student={
    fullname:"naseemwali",
    marks:90,
    age:24,
}

console.log(student.fullname);

// arrays are objects internally
let arr=["apple","mango","juice"];
console.log(arr);
typeof arr

// we can make prototype by ourself.

const employee={
    name:"eshaal baig",
    tax(){
        console.log("tax rate is 50%");
    }
}
console.log(employee.tax);

const naseem1={
    salary:100000,

};

const naseem2={
    salary:100000,

};

const naseem3={
    salary:100000,

};

const naseem4={
    salary:100000,

};
naseem1.__proto__=employee; // to set first object properties and methods in second object we use this method
naseem2.__proto__=employee;
naseem3.__proto__=employee;
naseem4.__proto__=employee;


// classes in javascrit
class fortuner {
  constructor(a,milege){
    console.log("creating constructor");
    this.name=a;
    this.names=milege;
  }

  start(){
    console.log("start the car");
  }

  stop(){
    console.log("stop the car");
  }
  
//   brandname(a){
//   newobject.name=a;
//   }
}

// syntax of creating object from the class
let newobject=new fortuner("12","122");// constructor        // inheriting all properties and methods of class to newobject that is object.
// newobject.brandname(10)

let lexus=new fortuner("11","111"); // constructor


// inheritance in javascript
class person{
    constructor(brandnaming,otherbrand){
    this.somevalue=brandnaming
    this.otherbrand=otherbrand
    }
   eat() {
   console.log("eating");
   }

   sleep() {
   console.log("sleeping");
   }
}

class engineer extends person {
    work() {
    console.log("making buildings etc,solve problems.");
    }
}

class docter extends engineer{
    constructor(brandnaming,otherbrand){
        super(brandnaming,otherbrand); // must call super keyword in child class befor initializing constructor when we have two constructors 
        this.clothesname="limelight,jdot";
    }

    treat(){
    super.eat();
    console.log("treat patients betterly.");
    }
}


let naseemwalikhan=new docter("khadi brand","bathic");
console.log(naseemwalikhan);

// practice questions



























































































































