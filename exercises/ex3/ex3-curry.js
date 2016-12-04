function curry(fn, ...args) {
   return (function c(...arr) {
      if(arr.length == fn.length) {
         return fn(...arr); 
      }
      return c.bind(null, ...arr);
   })(...args)
}