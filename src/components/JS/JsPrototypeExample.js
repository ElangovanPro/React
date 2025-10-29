      /* primitive values vs objects 
    primitive- string, number, boolean, undefined,null (immutable, stored directly, lightweight)--storing by value...call stack--quick access
   non-primitive- arrays,objects----storing by reference...heap memory--slower access
    */
export const JsPrototypeExample=()=>{

    class Person{
 
   constructor(name,age){
    this.name=name;
    this.age=age;
   }

   greeting(){
    console.log(this.name," "+ this.age);
   }

    }

  let person1=new Person("elango",26);
  person1.greeting();


    let name="jagadish";
    let age=25;
    
    name[0]="B";
    age+6;
    
    console.log(name[0],age+6);

    console.log(name," "+age);
    
  //re assign
  const newName=name +" sanjay";
  console.log(newName);
  console.log(name);
    
  //re assign
    age=age+6;
    console.log(age);


    const user={name:"Elango"};
    user.name="Divya";

    const arr=[1,2,3];
    arr.push(4);
    
    console.log(user.name, arr);

  //call by value
    let e=10;
    let f=e;
    let g=20;
    console.log(e);
    console.log(f);
    console.log(g);

 //call by reference
    let obj1={name:"divya"};
    let obj2=obj1;
    obj2.name="sangavi";
    console.log(obj1.name);

    return (
        <>
    <h1>Javascript Prototype Concepts</h1>
    </>
    );
}