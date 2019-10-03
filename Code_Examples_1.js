//1. convert an object properties into Arr 
let x={a:1,b:2};

//Sol:
const xAr=[];
for(i in x){
    xAr.push(i);
}
console.log(xAr);

//2. Reverse of String 
let str1 = 'hi';
let str2 = 'ih';
const reverString = (str) =>str.split('').reverse().join('');

console.log(reverString(str1));
console.log(reverString(str1) === str2);


//3. Make changes to below code so that it will print 'ab'
const obj1={ 
    a:1, 
    b:2, 
    getA(){
        console.log(this.a);
    },
    getB(){
        console.log(this.b);
    }
}

const obj2 = {
    a:1,
    b:2, 
    getA(){
        console.log(this.a);
        return this; // this will return the object & then we can access it as per line 45
    },
    getB(){
        console.log(this.b);
    }
}


obj2.getA().getB();


//4. Print  //1,2 for below array
const Ar2 = [1,2];

Array.prototype.print = () => {
    this.result = '';
    // for(let[i,elem] of this){
    //     if(i === )
    // }
    console.log(result);
}

Ar2.print();