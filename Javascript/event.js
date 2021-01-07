console.log('event tutorial')


//mouseover or click
document.getElementById('heading').addEventListener('click',function(e)
{
	let variable
	console.log('click the heading')
    variable= e.target

    variable =e.target.className
    // variable=e.target.classList
    variable=Array.from(e.target.classList)
    variable=e.target.id

    variable =e.offsetX
    variable =e.offsetY
    variable =e.clientX
    variable =e.clientY
	console.log(variable)
})