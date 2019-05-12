const fs = require('fs')

fs.writeFileSync('notes.txt', 'My name is Yasir')

fs.appendFileSync('notes.txt', 'And this is added text')