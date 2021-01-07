let a = document

a=document.all
// a=document.body
// a=document.forms[0]
//console.log(a)

// Array.from(a).forEach(function(element)
// {
// 	console.log(element)
// })


a=document.links
a=document.links[0]
a=document.links[0].href
console.log(a)

//use document.image and document.script and print thelist of image and script on an html page

let v= document.links;
Array.from(v).forEach(function(element){
    if(element.href.includes("deep")){
        console.log(element.href);
    }


    });