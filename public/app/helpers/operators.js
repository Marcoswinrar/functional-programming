export const partialize = (fn, ...params) =>
  fn.bind(null, ...params);

export const compose = (...fns) => value =>
  fns.reduceRight((acc, fn) => fn(acc), value);
