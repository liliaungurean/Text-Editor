import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  console.log('putDb not implemented');
  
  //create a connection 
  const jateDb = await openDB('jate', 1);

  //create a new tranaction 
  const tx = jateDb.transaction('jate', 'readwrite');

  //open desired object store
  const store = tx.objectStore('jate');

  const request = store.put({ id: 1, value: content });

  //confermation of the request
  const result = await request;
  console.log('data saved to the database', result);
};

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  console.log('getDb not implemented');
  const jateDb = await openDB('jate', 1);
  const tx = jateDb.transaction('jate', 'readonly');
  const store = tx.objectStore('jate');
  const request = store.getAll();

  //confermation of the request
  const result = await request;
  console.log('result.value', result);
  return result?.value;

};

initdb();
