const events = new Map();

export const EventEmitter = {

  emit(event, data) {
    const listeners = events.get(event);
    if (listeners) listeners
      .forEach(listener => listener(data));
  },

  on(event, listener) {
    if (!events.has(event)) events.set(event, []);
    events.get(event).push(listener);
  }
}




