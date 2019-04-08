import { notesService as service } from './helpers/service-helper.js';
import { log, setTimeoutPromise, retry } from './helpers/promise-helper.js';
import { takeUntil, debounceTime } from './helpers/operators.js';
import { EventEmitter } from './helpers/event-emitter.js';
import { Normalizer } from './helpers/normalizer.js';

const button = document.querySelector('#myButton');

const action = debounceTime(500,
  takeUntil(3, () =>
    retry(3, 3000, () =>
      setTimeoutPromise(200,
        service.sumItems('2143'))
        .then(total => EventEmitter.emit('total', total))
        .catch(log)))
)

button.onclick = action;

const maybe = Normalizer.of(15)
  .map(valor => valor + 1);

console.log(maybe.get());