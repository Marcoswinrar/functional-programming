import { handleStatus } from '../helpers/promise-helper.js';
import { partialize, pipe } from './operators.js';

const _API = 'http://localhost:3000/notes';

const getItemsForNotes = notes => notes.flatMap(notes => notes.items);
const getItemsByCode = (code, items) => items.filter(item => item.code === code);
const getSumOfItems = items => items.reduce((acc, item) => acc + item.value, 0);

export const notesService = {

  listAll() {
    return fetch(_API)
      .then(handleStatus)
      .catch(err => {
        console.log(err);
        return Promise.reject('An error ocurred in server!');
      });
  },

  sumItems(code) {

    const filterItems = partialize(getItemsByCode, code);
    const sumItems = pipe(
      getItemsForNotes,
      filterItems,
      getSumOfItems
    );

    return this.listAll()
      .then(sumItems);
  }
}