const fs = require('fs')
const color = require('chalk')

const getNotes=() => {
   return 'Your Notes...'
}

const addNote =(title, body) =>{
   const notes = loadNotes()
   const duplicateNotes = notes.find((note) => note.title === title)

   // const duplicateNotes = notes.filter(function(note){
   //    return note.title === title
   // })

   //  console.log(duplicateNotes)

   debugger

   if (!duplicateNotes){

      notes.push({
         title : title,
         body : body,
   
      })
      saveNotes(notes)
      console.log(color.green.inverse('New note added !'))

   } else { console.log(color.green.inverse('console title taken'))
  
   }
  
}

const saveNotes =(notes) => {
   const dataJSON = JSON.stringify(notes)
   fs.writeFileSync('notees.json', dataJSON)
}

const loadNotes = () =>{
   try{
   const databuffer = fs.readFileSync('notees.json')
   const dataJSON = databuffer.toString()
   return JSON.parse(dataJSON)
   } catch(e){
      return []
   }
}



const removeNote = (title) => {
   const notes = loadNotes()
   const notesToKeep = notes.filter((note) => note.title !== title)

   saveNotes(notesToKeep)

         if ( notesToKeep.length<notes.length  ){

            
         console.log(color.green.inverse('The Notes have been removed'))
      
         } else { console.log(color.red.inverse('No note found'))
   }
}

const readNote = (title) =>{
   const notes = loadNotes()
   const note = notes.find((note) => note.title === title)

   if (note){

      
      console.log(color.inverse(note.title))
      console.log(note.body)

   } else { console.log(color.green.inverse('Cannot Find this note'))
  
   }

}

const listNotes = () => {
   const notes = loadNotes()

   
   console.log(color.inverse('Your Notes'))
   
   notes.forEach((note) => {
      console.log(note.title)

   })
      
}


module.exports = {
   getNotes : getNotes,
   addNote : addNote,
   removeNote : removeNote,
   listNotes :listNotes,
   readNote : readNote,
}



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

