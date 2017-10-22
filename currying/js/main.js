/* ******************
  ## Currying
  define triple function by a curried multiply function
  définir la triple fonction par une fonction de multiplication currying

  f(n, m) --> f'(n)(m)
******************************* */

multiply = (n, m) => (n * m);
console.log(multiply(3, 4));

curriedMultiply = (n) => ( (m) => multiply(n, m) );
triple = curriedMultiply(3);
console.log(triple(4));


/* ******************
  ## Uncurrying

  f(n)(m) --> f(n, m)
******************************* */

curriedMultiply = (n) => (m) => n * m;
console.log(curriedMultiply(3)(4));

/* ******************
  ## Partial application

  f(n, m) --> f'(m)
******************************* */

multiply = (n, m) => n * m;
console.log(multiply(3, 4));

triple = (m) => multiply(3, m);
console.log(triple(4));


/********************
 ## Rendering HTML
******************* */

renderHtmlTag = tagName => content => `<${tagName}>${content}</${tagName}>`;

renderDiv = renderHtmlTag('div');
renderH1 = renderHtmlTag('h1');

console.log(renderDiv('this is a really cool div'));
console.log(renderH1('and this is an even cooler h1'));

/*********************
  ## Curry as Higher Order function
********************** */

curry = f => a => b => f(a, b);
uncurry = f => (a, b) => f(a)(b);
papply = (f, a) => b => f(a, b);

add = (a, b) => a + b;
curriedAdd = a => b => a + b;

console.log(add(5,6));
console.log(curriedAdd(5)(6));

console.log(uncurry(curry(add))(5,6));
console.log(curry(uncurry(curriedAdd))(5)(6));
