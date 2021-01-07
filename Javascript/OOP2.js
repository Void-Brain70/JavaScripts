console.log("prototype related tutorial")

let obj={
	name:'Anik',
	blog:'void_brain',
	address:'WWW.blogspot.com'
}

function Obj(name) {
	// body...
	this.name=name
}

Obj.prototype.getName= function()
{
	return this.name
}

let obj2=new Obj("Mitu das")
console.log(obj);