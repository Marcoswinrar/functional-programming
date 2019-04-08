export const partialize = (fn, ...params) =>
  fn.bind(null, ...params);

export const compose = (...fns) => value =>
  fns.reduceRight((acc, fn) => fn(acc), value);

export const pipe = (...fns) => value =>
  fns.reduce((acc, fn) => fn(acc), value);

export const takeUntil = (times, fn) =>
  () => times-- > 0 && fn();

export const debounceTime = (milleseconds, fn) => {
  let timer = 0;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(fn, milleseconds);
  }
}  