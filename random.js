// for Utils

// console.log('utils.js')

// const name='Yasir'

// const sub= function(a,b){
//     return a-b
// }

// module.exports = sub 




// notes.txt

// My name is YasirAnd this is added text A  nd this is added text A  nsdfasdd this is added text


// arrow function

// const square= function(x){
//     return x * x
// }

// const square = (x) =>{
//     return x*x
// }

// const square = (x) => x*x

// console.log(square(2))

// const event = {
//     name : 'Birthday Party',
//     guestList: ['Andrew', 'Jen', 'Mike'],
//     // printGuestList : function(){   ,,,, or we can simple write this
//     printGuestList(){
//         console.log('Guest list for ' + this.name)

//         this.guestList.forEach((guest) => {
//             console.log(guest + ' is attending ' + this.name)
//         })
//     }
// }

// event.printGuestList()



//arrow challenge
////
// // Goal: Create method to get incomplete tasks
// //
// // 1. Define getTasksToDo method
// // 2. Use filter to to return just the incompleted tasks (arrow function)
// // 3. Test your work by running the script

// const tasks = {
//     tasks: [{
//         text: 'Grocery shopping',
//         completed: true
//     },{
//         text: 'Clean yard',
//         completed: false
//     }, {
//         text: 'Film course',
//         completed: false
//     }],


//         // getTasksToDo(){ 
//         //     const taskToDo = this.tasks.filter((tasks) => {
//         //         return tasks.completed === false
//         //     })
//         //     return taskToDo

//         // }
        

//         getTasksToDo(){ 
//            return this.tasks.filter((tasks) =>tasks.completed === false)
//         }
//     }


// console.log(tasks.getTasksToDo())


//  playground fs

// const fs= require('fs')

// const dataBuffer = fs.readFileSync('1-json.json')
// const dataJSON = dataBuffer.toString()
// const data = JSON.parse(dataJSON)

// data.name='safia'
// data.age=25


// const infoChal = JSON.stringify(data)
// fs.writeFileSync('1-jason.json' , data)

// console.log(data)


// // const book={
// //     Title:'Ego is the Enemy',
// //     Author:'Ryan Holiday'
// // }

// // const bookJSON = JSON.stringify(book)
// // fs.writeFileSync('1-json.json', bookJSON)




// // console.log(bookJSON)

// // const parseData = JSON.parse(bookJSON)
// // console.log(parseData.Title)




// practice app.js
//  





// const getNotes = notes()


// const command = console.log(process.argv)

// if ( command === 'add'){
//     console.log('adding note')
// }

//  else if (command === 'remove'){
//     console.log('removing note')
// }

//console.log(color.red.inverse(getNotes))

//console.log(color.blue('i am blue'))

//console.log('hi')

// const validator = require('validator')

// const notes = require('./notes.js')

// const chalk = require('chalk')

// const getNotes = notes()

// console.log(getNotes)

// console.log(validator.isEmail('yasir@gmails.ca'))

// console.log(validator.isURL('www.gmail.com'))

// console.log(chalk.blue('Hi there'))

// console.log(chalk.red.bold('Hi there'))

// const minus=require('./utils.js')

// const sub=minus(4,2)

// console.log(sub)




//const firstName=require('./utils.js')



//console.log(firstName)






//const fs = require('fs')

// fs.writeFileSync('notes.txt', 'My name is Yasir')

//fs.appendFileSync('notes.txt', ' And this is added text')



// practice notes.js

// const getNotes = function(){
//    return ' The Notes are as follows:'
// }

// const addNote = function(title, body){
//    const notes = loadNotes()
//    console.log(notes)

// }

// const loadNotes = function(){
//    try {
//       const databuffer = fs.readFileSync('notes.json')
//       const dataJSON = databuffer.toString()
//       return JSON.parse(dataJSON)

//    } catch(e){
//       return[]

//    }

  

// }

// module.exports = {
//    getNotes: getNotes,
//    addNote: addNote,

// }

