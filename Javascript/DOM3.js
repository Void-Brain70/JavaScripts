//element selector
//single element selector
//multiple element selector

let element=document.getElementById('first')
// element =element.className
// element=element.childNoods
//element= element.parentNode
// element.style.color='red'
// element.innerText ="Void Brain"
// element.innerHTML='<b>Coding Blog</b>'
// console.log(element.innerHTML)

//single element selector
// let sel =document.querySelector('#first')
// sel=document.querySelector('child')
// sel=document.querySelector('div')
// sel.style.color='green'
// console.log(sel)


//multiple element selector

let ele=document.getElementsByClassName('child')
ele=document.getElementsByClassName('container')
ele=document.getElementsByTagName('div')
console.log(ele)


Array.from(ele).forEach(element=>{
	console.log(element)
	element.style.color='blue'
})

// console.log(ele[0],getElementsByClassName('child'))