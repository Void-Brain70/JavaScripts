a=['BMW','AUDI']
document.write(a)

//if else elseif  switch

// let age= 19
// if (age>18)
// {
// 	document.write('you are adult')
// }

let age= 18
if (age==18)
{
	document.write('you are teenage')
}
else if(age>=18)
{
	console.log('you are adult')
}
else
{
	console.log('You are not adult')
}


var a=20
if(a%2==0)
{
	document.write('even number')
}
else
{
	document.write('Odd number')
}


var b=20;  
if(b==10){  
console.log("a is equal to 10");  
}  
else if(b==15){  
console.log("a is equal to 15");  
}  
else if(b==20){  
console.log("a is equal to 20");  
}  
else{  
console.log("a is not equal to 10, 15 or 20");  
}  


var day=10;
switch (day){
  case 0:
    console.log("Sunday");
    break;
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case  6:
    console.log("Saturday");
    break;
  default:
    console.log('Error')
    break;     
}


var grade='B';  
var result;  
switch(grade){  
case 'A':  
result="A Grade";  
break;  
case 'B':  
result="B Grade";  
break;  
case 'C':  
result="C Grade";  
break;  
default:  
result="No Grade";  
}  
document.write(result);  