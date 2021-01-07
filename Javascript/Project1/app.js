// console.log('Note app')


//If a user addas a node add it to the  localStroage

let addbtn = document.getElementById('addbtn');
addbtn.addEventListener("click",function(e){
	// body...
	let addtxt = document.getElementById("addtxt");
	let addtitle = document.getElementById("addtitle");
	let notes = localStorage.getItem("notes");
	if(notes==null){
		notesobj=[];
	}
	else
	{
		notesobj = JSON.parse(notes);	
	}
	let myObj={
		title:addtitle.value,
		text:addtxt.value
	}
	notesobj.push(myObj);
	localStorage.setItem("notes", JSON.stringify(notesobj));
	addtxt.value= "";
	addtitle.value= "";
	// console.log(notesobj);
	showNotes()
})

//function to show element
function showNotes()
{
	let notes = localStorage.getItem("notes");
	if(notes==null){
		notesobj=[];
	}
	else
	{
		notesobj = JSON.parse(notes);	
	}
	let html="";
	notesobj.forEach(function(element,index)
	{
		html+=`
        <div class="notecard my-2 mx-2 card" style="width: 18rem;">
           <div class="card-body">
              <h5 class="card-title">${element.title}</h5>
              <p class="card-text">${element.text}</p>
              <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
           </div>
        </div>`
	})
	let notesele = document.getElementById('notes');
	if(notesobj.length != 0)
	{
		notesele.innerHTML = html;
	}
	else
	{
		notesele.innerHTML=`Nothing to Sh ow! use "Add a Note"`
	}	
}

//function to Delete a note

function deleteNote(index) {
	// body...
	// console.log('I am deleteNote',index);
	let notes = localStorage.getItem("notes");
	if(notes==null){
		notesobj=[];
	}
	else
	{
		notesobj = JSON.parse(notes);	
	}	
	notesobj.splice(index,1);
	localStorage.setItem("notes", JSON.stringify(notesobj));
	showNotes();
}


let search =  document.getElementById('searchtxt');
search.addEventListener("input",function()
{
	let inputval = search.value.tolowerCase();
	// console.log(inputval);
	let noteCards= document.getElementsByClassName('notecard');
	Array.from(noteCards).forEach(function(element)
	{
		let cardtxt =  element.getElementsByTagName("h5")[0].innerText;
		if(cardtxt.includes(inputval))
		{
			element.style.display = "block";
		}
		else
		{
			element.style.display = "none";
		}
	})
})


// Further features


// 1.add card-title
// 2. mark a note as a important
// 3. spearate notes by user