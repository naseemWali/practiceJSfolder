const student={
    name:"naseemwalikhan",
    marks:90,
    age:12,
    var:function () {
        console.log("name",this.name); // here i am accessing values of object inside function that is already present inside object.
    }
}
console.log(student);
student.var();
// student.marks;                 /// accessing object values method from console


// Even the arrays are a type of the objects.
let arr=["apple","mango","banana","peach"];
console.log(arr);

const employee={
   calctax2() {
    console.log("tax rate is 10%");
    },
    // calctax2:function () {
    //     console.log("tax rate is 10%"); // same method
    // }

};

console.log(employee);
employee.calctax2();


const salary ={
    price:3000,
    calctax2() {
        console.log("tax rate is 20%");
    }
}
// const salary2={
//     salary:10000,
// }

// const salary3={
//     salary:10000,
// }

// const salary4={
//     salary:10000,
// }


console.log(salary);
// now if we want ot pass/use  first object properties in second object.
 salary.__prototype__=employee; // even we can access direct function log i mean message using salary4.calctax();
//  salary2.__prototype__=employee;
//  salary3.__prototype__=employee;
//  salary4.__prototype__=employee;
  
  
// classes in javascript

class toyotacar {
    constructor(brand,name) {
        console.log("creatingg");
        this.BrandName=brand;
        this.name=name;
    }

    start() {
     console.log("start tha car");
    }

    stop() {
     console.log("stop the car");
    }
}
 
   let fortuner =new toyotacar("helllo","123");
//    console.log(fortuner);
   
   
   let newarr=new toyotacar ("abc","def");
//    console.log(newarr);



// INHERITANCE in javascript
// SIMPLE  EXAMPLE
class parent {
    hello() {
        console.log("hii");
    }
     
    
}

class child extends parent{}
let ourobject = new child();

// second best example
class people {
    constructor (){
        this.species="homosapiens"
    }


    eat() {
        console.log("eat");
    }
    
    sleep() {
        console.log("sleep");
    }

    work() {
        console.log("do nothing");
    }

}
// here now egineer class(child class) extends properties from parent class (people class)

class engineer extends people {
    work() {
        console.log("solve problems","build something");
    }
    build() {
        console.log("buildng");
    }
}
// here docter class extends/inherit properties from parent class that is (engineer class).

class doctor extends engineer {
   work() {
    console.log("treat petient");
   }
}

let peopleobject=new people();
let docterobject=new doctor();
let engineerobject=new engineer();

// some imporant keywords are extends, super .

// SUPER KEYWORD
class person {
    constructor(a,b){
        this.newvalue=a;
        this.valueb=b;
        this.scientificname="social animal";
}
  eat () {
    console.log("eating");
  }
}

class Enginer extends person{
    constructor(branch,a,b){
        super(a,b); // to invoke parent class constructor
        this.newbranch=branch
       
        
    }
 work(){
    super.eat(); // if we want to add/print first eat function then work function then we do super.eat();
    console.log("to buld different things");
 }
}

let enginerobj=new Enginer("chemicaleng","1","12");
let personobj=new person();

// Practice Questions

let showme=function () {
    console.log("guys");
}

showme();
















































































































































































































































































 
 
  

  



















































