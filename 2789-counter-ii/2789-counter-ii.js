/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    const value=init
  const counter={
  increment: ()=>{
   init=init+1
  return init
  },
  reset:()=>{

  init= init=value
    return init
  }

  ,
  decrement:()=>{
   init= init-1
     return init
  },

  }

return  counter

};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */