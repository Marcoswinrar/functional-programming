import { notesService as service } from './helpers/service-helper.js';
import { log } from './helpers/promise-helper.js';

const button = document.querySelector('#myButton');

button.onclick = () => service.sumItems('2143')
  .then(log)
  .catch(log);