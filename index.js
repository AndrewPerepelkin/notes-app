const yargs = require("yargs")
const { addNote, printNotes, removeNote } = require("./notes.controller")
const pkg = require('./package.json')

yargs.version(pkg.version)

yargs.command({
  command: 'add',
  describe: 'Add a new note to the Notes List',
  builder: {
    title: {
      type: 'string',
      describe: 'Note Title',
      demandOption: true
    }
  },
  handler({title}) {
    addNote(title)
  }
})

yargs.command({
  command: 'remove',
  describe: 'Remove note by id',
  builder: {
    id: {
      type: 'string',
      describe: 'Note Title',
      demandOption: true
    }
  },
  handler({id}) {
    removeNote(id)
  }
})

yargs.command({
  command: 'list',
  describe: 'Print all notes',
  async handler() {
    printNotes()
  }
})

yargs.parse()