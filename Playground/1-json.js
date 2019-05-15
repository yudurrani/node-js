const fs= require('fs')

const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
const data = JSON.parse(dataJSON)

data.name='safia'
data.age=25


const infoChal = JSON.stringify(data)
fs.writeFileSync('1-jason.json' , data)

console.log(data)


// const book={
//     Title:'Ego is the Enemy',
//     Author:'Ryan Holiday'
// }

// const bookJSON = JSON.stringify(book)
// fs.writeFileSync('1-json.json', bookJSON)




// console.log(bookJSON)

// const parseData = JSON.parse(bookJSON)
// console.log(parseData.Title)