// console.log('event tutorial')

// let btn=document.getElementById('btn')
// btn.addEventListener('click',fun1)
// btn.addEventListener('dblclick',fun2)
// btn.addEventListener('mousedown',fun3)

// function fun1(e) {
// 	// body...
// 	console.log('thanks',e)
// 	e.preventDefault()
// }

// function fun2(e) {
// 	// body...
// 	console.log('thanks for double click',e)
// 	e.preventDefault()
// }

// function fun3(e) {
// 	// body...
// 	console.log('thanks for mouse down',e)
// 	e.preventDefault()
// }


// document.querySelector('.no').addEventListener('mouseenter',function(){
// 	// body...
// 	console.log("you entered no")
// })

// document.querySelector('.no').addEventListener('mouseleave',function(){
// 	// body...
// 	console.log("you exited no")
// })

// document.querySelector('.container').addEventListener('mousemove',function(){
// 	// body...
// 	console.log("you tiggered mousemove ")
// })

document.querySelector('.container').addEventListener('mousemove',function(e){
	// body...
	console.log(e.offsetX,e.offsetY)
	// document.body.style.backgroundColor='Gray'
	document.body.style.backgroundColor=`rgb(${e.offsetX}, ${e,offsetX}, ${e.offsetX})`
	console.log("you tiggered mousemove")
})