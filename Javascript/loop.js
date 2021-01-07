//for loop
for(let i=0;i<=10;i++)
{
	console.log(i)
}


for(i=1;i<=10;i++)
{
	document.write(i+"</br>")
}

//while loop
let j=0
while(j<=10)
{
	console.log(j)
	j+=1
}


//do while loop
// let k=0
// do{
//    console.log(k)
//    if(k==5)
//    {
//    	break;
//    }
//    k+=1
// }
// while(k<=10)
// console.log('done')


let k=0
do{
   if(k==5)
   {
   	k+=1
   	continue;
   }
  console.log(k+1)
   k+=1
}
while(k<=10)
console.log('done')



let a=[1,2,3,4,5,6]
a.forEach(function(element){
	console.log(element)
})


let a1=[1,2,3,4,5,6]
a1.forEach(function(element,index,array){
	console.log(element,index,array)
})



let ar=[1,2,3,4,5]
for (let i=0; i<=ar.length;i++)
{
   let element=ar[i]
   console.log(element)
}

let info={
	name:'Anik',
	id:18101070,
	sub:'CSE'
}
for(let i in info)
{
	console.log(info[i])
}