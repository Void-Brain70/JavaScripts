let element =document.createElement('li')

//another way
let text=document.createTextNode('Text Node')
element.appendChild(text)


//add a class name to the li element
element.className ='child'
element.id='create'
element.setAttribute('title','lititle')

// element.innerText = 'created list'
// element.innerHTML = '<b>created list</b>'

let ul=document.querySelector('ul.this')
ul.appendChild(element)
// console.log(ul)

// console.log(element)

//repalce element 

let element2=document.createElement('h2')
element2.id= 'element2'
element2.className='element2'
let textnode=document.createTextNode('created node for element2')
element2.appendChild(textnode)
element.replaceWith(element2)

let myul = document.getElementById('ul')
myul.replaceChild(element, document.getElementById('fui'))
myul.removeChild(document.getElementById('lui'))