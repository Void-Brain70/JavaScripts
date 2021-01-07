// let name='Priya'

//1
function fun(name,t='Thank you'){
	console.log(`happy birthday ${name} ${t}`);
	return 1;
}

let n1='Priya'
let n2='Pooja'
let n3='MOmo'

fun(n1,'Thanks a lot') 
fun(n2)
let v=fun(n3)
console.log(v)

//2
function fun1(name,t='Thank you'){
	let msg=`happy birthday ${name} ${t}`;
	return msg;
}

let n='Anuska'

let v1=fun(n)
console.log(v1)

//3
const myfun= function(name)
{
	let str =`Hi i am ${name}`
	return str
}

let name='jerry'

let val=myfun(name)
console.log(val)


//4
const info={
	name:'Anik',
	car:function()
	{
		return "BMW"
	}
}
console.log(info.car())


arr=['BMW','AUDI','Tesla','HUNDAI']

arr.forEach(function(element,index,array)
{
	console.log(element,index,array)
})