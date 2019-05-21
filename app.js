const color = require('chalk')
const notes = require('./notes.js')
const yargs = require('yargs')

yargs.version('1.1.0')


//  writing the " Add command"

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
        
      
    }
})


//  writing the " Remove command"

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

    }
})

//  writing the " Read command "

yargs.command({
    command: 'read',
    describe: 'This is a read command',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        },
    },
    handler(argv){
        notes.readNote(argv.title)
    }
})


//  writing the "List command"

yargs.command({
    command: 'list',
    describe: 'This will list the items',
   
    handler(){
        notes.listNotes()
        
    },
})

console.log(yargs.argv)
