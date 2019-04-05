import { notesService as service } from './helpers/service-helper.js';
import { log, setTimeoutPromise, retry } from './helpers/promise-helper.js';
import { takeUntil, debounceTime } from './helpers/operators.js';

const button = document.querySelector('#myButton');

const action = debounceTime(500,
  takeUntil(3, () =>
    retry(3, 3000, () =>
      setTimeoutPromise(200,
        service.sumItems('2143'))
        .then(log)
        .catch(log)))
)

button.onclick = action;