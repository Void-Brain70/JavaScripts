const a='Anik'
const b='18101070'
console.log(a + ' ' + b)

let html
html= '<h1>JavaScript</h1>'+"<p>Tutorial</p>"

html=html.concat('String')
console.log(html)
console.log(html.length)
console.log(html.toLowerCase())
console.log(html.toUpperCase())
console.log(html[5])
console.log(html.indexOf('Tutorial'))
console.log(html.indexOf('Anik'))
console.log(html.lastIndexOf('Tutorial'))
console.log(html.charAt(10))
console.log(html.endsWith('Tutorial'))
console.log(html.endsWith('String'))
console.log(html.includes('Tutorial'))
console.log(html.includes('Anik'))
console.log(html.substring(0,10))
console.log(html.slice(0,12))
console.log(html.split(" "))
console.log(html.replace('String','Array'))


let f1='Apple'
let f2='Mango'

let h= `Hello
       <h1>this is heading</h1>
       <p>You like ${f1} and ${f2}</p>`;

document.body.innerHTML = h;       


