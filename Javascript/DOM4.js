let cont=document.querySelector('.no')
cont=document.querySelector('.container')
// console.log(cont.childNodes)
// console.log(cont.children)


let nodeName=cont.childNodes[1].nodeName
console.log(nodeName)

// 1.element
// 2.attribute
// 3.text node
// 8.comment
// 9.document
// 10.doc type

let nodeType=cont.childNodes[1].nodeType
console.log(nodeType) 


let con=document.querySelector('div.container')
// console.log(con.children[1])
// console.log(con.children[1].children[0].children)
// console.log(con.firstChild)
// console.log(con.firstElementChild)


// console.log(con.lastChild)
// console.log(con.lastElementChild)

// console.log(con.childElementCount)


console.log(con.firstElementChild.parentNode)
console.log(con.firstElementChild.nextSibling)
console.log(con.firstElementChild.nextElementSibling)