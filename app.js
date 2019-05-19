const color = require('chalk')
const notes = require('./notes.js')
const yargs = require('yargs')

// customize yargs version

yargs.version('1.1.0')

// make add function

yargs.command({
    command: 'add',
    describe: 'This will add it to the line',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type:'string',         
        }, 

        body: {
            describe: 'Note Body',   
            demandOption: true,
            type:'string'
        },
    },
    handler(argv){
        notes.addNote(argv.title, argv.body)
        
        // console.log('Title :', argv.title)
        // console.log('Body:', argv.body)
    }
})


// make remove command

yargs.command({
    command: 'remove',
    describe: 'This will remove the title from Notes',
    builder: {
        title:{
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        },
    },

    handler(argv){
        notes.removeNote(argv.title)

        //console.log('this is a removing command')
    }
})

// make a read command

yargs.command({
    command: 'read',
    describe: 'This is a read command',
    handler(){
        console.log('its a removing function')
    }
})


// make a list command

yargs.command({
    command: 'list',
    describe: 'This will list the items',
    handler(){
        console.log('its a listing function')
    }
})

console.log(yargs.argv)


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