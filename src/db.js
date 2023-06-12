import fs from 'node:fs/promises';
//hard code the path to our database (files)
const DB_PATH = new URL('../db.json', import.meta.url).pathname;

//get the entire database
export const getDB = async () => {
    const db = await fs.readFile(DB_PATH, 'utf-8');
    return JSON.parse(db);

}
//take in a db object, turn into json, save it into database
export const saveDB = async (db) => {
    await fs.writeFile(DB_PATH, JSON.stringify(db, null, 2)); //space everything up by 2 spaces
    return db;
}

//takes in a js object representing a note and add it to the notes array in the db.json file
export const insertDB = async (note) => {
    const db = await getDB();
    db.notes.push(note);
    await saveDB(db);
    return note;
}