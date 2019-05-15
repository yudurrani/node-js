
const getNotes = function(){
   return ' The Notes are as follows:'
}

const addNote = function(title, body){
   const notes = loadNotes()
   console.log(notes)

}

const loadNotes = function(){
   try {
      const databuffer = fs.readFileSync('notes.json')
      const dataJSON = databuffer.toString()
      return JSON.parse(dataJSON)

   } catch(e){
      return[]

   }

  

}

module.exports = {
   getNotes: getNotes,
   addNote: addNote,

}

