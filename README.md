# Notes App

## Summary  

 The main note app is divided into two main sections. The "app.js" provides the base / entry point for the app and the detail functions are written in "notes.js".  

 * yargs module is used to do 4 main functions of the app.
 * The app can add, remove, list and read any notes provided.

 * * add: takes in 2 unique parameters; 'Title' and 'Body', which is then added to its library.
 * * remove: takes a 'Title' and after locating remove it from the library.
 * * list: Displays all the items in the library withour taking in any parameters.
 * * read: takes a 'Title' as well and displays the specific file from the library.
