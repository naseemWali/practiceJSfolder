// method overiding concept
class engineer{
constructor(name){
    this.name=name
    console.log(`${name} - engineer constructor is here`);
}

login(){
       console.log("employy is login"); 
    }


Logout () {
    console.log("employee has logout");
}

requestleaves(leaves){
    console.log(`employee has requested ${leaves + 1} leaves`);
}
}

class programmer extends engineer{
// constructor(args){
//     super(args)  
//  }

constructor(name){
    super(name)
    this.name=name
    console.log(`${name} - programmer constructor is here`);
}

requestedcoffee(x){
console.log(`employee has requested ${x + 2} coffee `);
}

requestleaves(leaves){
super.requestleaves(5) // this is for when we make changes here it will also reflect in above requestleaves in engineer class.
// console.log("one is granted");
// console.log(`employee has requested ${leaves + 1} leaves {one extra}`);
// console.log(`employee has requested ${leaves} leaves`);
}

}
let e=new programmer("harry");
e.login()
e.requestleaves(5)
e.requestedcoffee(5)

// static method  concept in javacsript.
class animal{
    constructor(person) {
        this.person=person
    }

with() {
    console.log(" animal " + this.person  + " is walking ");
}   


}
j=new animal("naseem")
j.with()


// getters setters and instanceof operators.
class Human{
 constructor(name){
    this._name=name // also here
 }

 fly(){
    console.log("ma udh raha hoo");
 }

 get name(){
    return this._name //setting undesrscore at this point because of getters
 }

 set name(newName){
     this._name=newName
 }

}

class people1 extends Human{
eatcarrot () {
    console.log("eating carrots");
}
}

let g=new people1 ("bruno")
console.log(g.name)
g.fly()
g.name="jack" // changing name from bruno to jack
console.log(g.name);
console.log(g instanceof Human);
console.log(g instanceof people1);

 // here we directly access the function getter without calling it.
// It seems like it is a property of an object.

// instanceOf operator
// it allows to check whether an object belongs to a class.























































