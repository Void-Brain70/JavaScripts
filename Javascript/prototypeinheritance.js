console.log("prototypeinheritance tutorial")


const proto={
	slogan:function()
	{
		return `this company is the best`
	},
	changeName:function(newName)
	{
		this.name=newName
	}
}


//This create anik object
// const anik = Object.create(proto);
// anik.name="Anik"
// anik.role="Programmer"
// anik.changeName("Anik Das")
// console.log(anik)


//This is another way of create anik object
const anik = Object.create(proto,
	{
		name:{value:'Anik',writable:true},
		role:{value:"Programmer"},
	});
anik.changeName("Anik Das")
// console.log(anik)


function Employee(name,salary,experience){
	this.name=name;
	this.salary=salary;
	this.experience=experience;
}

Employee.prototype.slogan=function()
{
	return `this company is the best.. REgards,${this.name}`;
}


let anikobj = new Employee("Anik DAS",50000,4);
console.log(anikobj.slogan())


function Programmer(name,salary,experience,language){
	Employee.call(this,name,salary,experience);
	this.language=language;
}

//inherit the prototype

Programmer.prototype=Object.create(Employee.prototype);

//manually set the constructor

Programmer.prototype.constructor=Programmer;

let Mitu=new Programmer("Mitu das",20000,2,"JavaScript")
console.log(Mitu)