// var obj = {
//   name: 'Awolad'
// }
//
// var objStringify = JSON.stringify(obj);
// console.log(typeof objStringify);
// console.log(objStringify);

// var stringObj = '{"name": "Awolad", "age": 29}';
// var realObj = JSON.parse(stringObj);
// console.log(typeof realObj);
// console.log(realObj);


const fs = require('fs');

var originalNote = {
  title: 'Some title',
  body: 'Some body'
};

var originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('notes.json', originalNoteString);

var noteString = fs.readFileSync('notes.json');
var note = JSON.parse(noteString);
console.log(typeof note);
console.log(note.title);