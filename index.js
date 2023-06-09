#!/usr/bin/env node
import {count} from './utils.js'

const note = process.argv[2]; //first two things are env and this file
const newNote = {
    content: note,
    id: Date.now()
}

console.log(newNote); 

