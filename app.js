const color = require('chalk')
const notes = require('./notes.js')

const getNotes = notes()

console.log(color.red.inverse(getNotes))

console.log(color.blue('i am blue'))



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