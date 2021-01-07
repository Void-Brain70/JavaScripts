console.log("editable div tutorial")

//create a new element
let divele= document.createElement('div')
//add text to that created element
let val=localStorage.getItem('text');
let text
if(val==null)
{
	text = document.createTextNode('this is my element click to edit it')
}
else
{
	text = document.createTextNode(val);
}
divele.appendChild(text)
//give element id style and class
divele.setAttribute('id','elem')
divele.setAttribute('class','elem')
divele.setAttribute('style','border:2px solid black;width:150px;margin:34px;padding:23px;');

let container=document.querySelector('.container')
let f=document.getElementById('first')

//insert the element before element with id first
container.insertBefore(divele,f)


console.log(divele,container,f)

//add event lister to the divele
divele.addEventListener('click',function() {
	// body...
	let notextarea=document.getElementsByClassName('textarea').length;
	if(notextarea==0){
	let html=divele.innerHTML
	divele.innerHTML=`<textarea class="textarea form-control" id="textarea" rows="3">${html}</textarea>`;
    }

    //listen for the blur event on textarea
    let textarea=document.getElementById('textarea')
    textarea.addEventListener('blur',function () {
	// body...
	divele.innerHTML=textarea.value;
	localStorage.setItem('text',textarea.value)
    })
}) 

