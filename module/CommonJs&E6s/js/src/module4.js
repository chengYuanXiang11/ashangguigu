export let t1 = [1,2,3,4];
export function bar(){
    console.log('module4')
}

let t2 ="hello word";
class Dog{
    constructor(name,age){
        this.name = name;
        this.age = age;  
    }

    static toColor(){
        console.log(this.name)
    }
}
class Dog2 extends Dog{
    constructor(name,age,color){
        super(name,age);
        this.color = color;
        console.log(new.target.name)
    }
    su(){
        console.log(new.target)
    }
}
let d1  = new Dog('xb',5);
let d2  = new Dog2('wc',3,'#fff');
export{t2,d1,d2,Dog }

export default{
    "school":'hngy'
}