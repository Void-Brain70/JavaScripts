// console.log('local and session storage tutorial')

// //add a key value pair inside of local Storage
// localStorage.setItem('Name','Anik')
// localStorage.setItem('Name2','Mitu')

// //clear all local stroage
// // localStorage.clear()

// //clear a particular key value pair 
// //localStorage.removeItem('Name')

// //retrieve an item from the local Storage 
// let name=localStorage.getItem('Name')
// console.log(name)


// // let impArray=["CSE","EEE","ME","TE"]
// // localStorage.setItem('dept',impArray)
// // let d=localStorage.getItem('dept')
// // console.log(d)

// let impArray=["CSE","EEE","ME","TE"]
// localStorage.setItem('dept',JSON.stringify(impArray))
// let d= JSON.parse(localStorage.getItem('dept'))
// console.log(d)


sessionStorage.setItem('sessionName','sAnik')
sessionStorage.setItem('sessionName2','sMitu')

let name=sessionStorage.getItem('sessionName')
console.log(name)



