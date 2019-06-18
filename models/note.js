const mongoose = require('mongoose'),
      uniqueValidator = require('mongoose-unique-validator');

// Schema 
const Schema = mongoose.Schema;

// note schema
const NoteSchema = new Schema({
  text: {
    type: String,
    required: true
  },
  // date is set when added to database
  date: {
    type: Date,
    default: Date.now
  }
});

// add unique-validator plugin
NoteSchema.plugin(uniqueValidator);

// create the Note model with the NoteSchema
const Note = mongoose.model("Note", NoteSchema);

// export the model
module.exports = Note;