console.log("Class related tutorial")


class Employee{
	constructor(name,experience,division){
		this.name=name;
		this.experience=experience;
		this.division=division;
	}

	slogan()
	{
		return `I am ${this.name} and this company is the best`
	}

	joiningYear()
	{
		return 2020-this.experience
	}

	static add(a,b){
		return a+b;
	}
}



class Programmer extends Employee{
	constructor(name,experience,division,language,github){
		super(name,experience,division);
		this.language=language;
		this.github=github
	}

	favourite()
	{
		if(this.language=="Python"){
			return 'Python'
		}
		else
		{
			return 'JavaScript'
		}
	}
	static mul(a,b)
	{
		return a*b
	}
}



// anik=new Employee("Anik Das",5,"Programmer")
// console.log(anik.joiningYear())

diya=new Programmer("Diya Das",3,"tester","java",'VoidBrain')
console.log(diya)
console.log(diya.favourite())
console.log(Programmer.mul(5,5))