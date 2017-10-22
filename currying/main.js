function add(a,b,c) {
  return a + b + c
};

var abc = function(a, b, c){
  return a + b + c;
};

var curried =_.curry(abc);

var addBy2 = curried(2);

console.log(addBy2(0,0));
// => 2
console.log(addBy2(1,1));
// => 4
console.log(curried(1, 2, 3));
// => 6
console.log(curried(4)(5)(6));
// => 15
console.log(curried(7,8)(9));
// => 24
