const arr=[1,2,3,4,5];
const name=['anik','priya']
const mix=['java',66,['anik',70]]


console.log(arr)
console.log(name)
console.log(mix)

console.log(arr.length)
console.log(Array.isArray(name))


arr[0]='Das';
console.log(arr)

const a=[1,2,3,4,5,6]
let value=a.indexOf(5)
console.log(value)

//modifying array

//a.push(7)
//a.unshift(10)
//a.pop()
//a.shift()
//a.splice(1,3)
a.reverse()
console.log(a)


let a1=[1,2,3,4]
let a2=[5,6,7,8]

a1=a1.concat(a2)

console.log(a1)


//object

let info={
	name: 'Anik',
	id: 18101070,
	dept:'CSE',
	Cgpa:[3.49,3.54,3.56,3.79]
}
console.log(info)
console.log(info.Cgpa)

