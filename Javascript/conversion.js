//type conversion and type coercion

// let v
// v= 34
// console.log(v,(typeof v));

let v;
v=String(34);
console.log(v,(typeof v));

// let boolv = true;
// console.log(boolv,(typeof boolv));

let boolv =String(true);
console.log(boolv,(typeof boolv));

// let date =String(new Date());
// console.log(date,(typeof date));

let date = new Date();
console.log(date,(typeof date));

// let a = [1,1,3,4,5];
// console.log(a,(typeof a));

// let a = [1,1,3,4,5];
// console.log(a.length,(typeof a));

let a =String([1,1,3,4,5]);
console.log(a.length,(typeof a));

let i = 70;
console.log(i.toString());


// let str= 'Anik'
// console.log(str,(typeof str))

// let str= Number('Anik');
// console.log(str,(typeof str))

// let str= Number('123');
// console.log(str,(typeof str))


// let str= parseInt('123.032');
// console.log(str,(typeof str))

// let str= parseFloat('123.032');
// console.log(str,(typeof str))

let str= parseInt('123.032');
console.log(str.toFixed(4),(typeof str))


//Type coercion

let s1='777'
let s2=5
console.log(s1+s2)

let s3=777
let s4=5
console.log(s3+s4)