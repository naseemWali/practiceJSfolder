// create a javascript  class to create a complex number.create a constructor to set the real and the complex part?
class complex{
    constructor(real,imaginary){
    this.real=real
    this.imaginary=imaginary
    }
    add(num){
    this.real=this.real + num.real
    this.imaginary=this.imaginary + num.imaginary

    // return new complex()
    }
    
// Q3 Use getters and setters to set and get the real and imaginary parts of the complex numbers.

   get real(){          
     return this._real
   }

   get imaginary(){
   return this._imaginary
   }
  
   set real (newreal){
   return this._real=newreal
   }

   set imaginary(newimaginary){
    return this._imaginary=newimaginary
   }

}

let a=new complex(2,4)
console.log(a);

a.real=10
a.imaginary=10
let b=new complex(6,2)
console.log(a);
a.add(b)
console.log(a.real,"real num","imaginary nums ",a.imaginary );

// part 2 write a method to add two complex numbers in the above class?

// Q2 create a class student from a class human.override a method and see changes?
class human{
    constructor(name,favfood){
    this.name=name
    this.favfood=favfood
    }

    walk(){
        console.log(this.name + "human is walking");
        
    }
}

class student extends human{
 
    walk(){
        console.log(this.name + "student is walking");
        
    }
}

let h = new student("harry","bindi")
console.log(h);
h.walk()
console.log(h instanceof human);

// Q3 Use getters and setters to set and get the real and imaginary parts of the complex numbers.
















