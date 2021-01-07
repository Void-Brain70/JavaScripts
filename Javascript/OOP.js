console.log("object oriented in javascripts")

 //object

 let car={
 	name:'Audi',
 	speed:200,
 	run:function () {
 		// body...
 		console.log('car is running')
 	}
 }

 console.log(car)

 //constructor

 function Car(name,speed){
 	this.name=name
 	this.speed=speed
 	this.run=function()
 	{
 		console.log(`${this.name} is running`)
 	}
 	this.analyze= function()
 	{
 		console.log(`this car is slower by ${300-this.speed} km/H then Tesla`)
 	}
 }

 car1= new Car('Audi',200)
 car2= new Car('BMW',180)
 console.log(car2)