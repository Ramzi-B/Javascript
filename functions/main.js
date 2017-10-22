/*
  - implicit Binding
  - explicit Binding
  - new Binding
  - window Binding
*/

// implicit Binding
// left of the Dot at Call Time
var sayName = function(name) {
  console.log('hello, ' + name);
};
sayName('Hack');


var me = {
  name: 'Hackawax',
  age: 40,
  sayName: function(){
    console.log(this.name);
  }
};
me.sayName();

var sayNameMixin = function(obj) {
  obj.sayName = function() {
    console.log(this.name);
  };
  obj.sayAge = function() {
    console.log(this.age);
  };
};

var you = {
  name: 'Toto',
  age: 35
};
sayNameMixin(you);

var him = {
  name: 'Dodo',
  age: 38
};
sayNameMixin(him);

//you.sayName();
you.sayAge();
him.sayName();


var Person = function(name, age) {
  return {
    name: name,
    age: age,
    sayName: function() {
      console.log(this.name);
    },
    mother: {
      name: 'Nany',
      sayName: function() {
        console.log(this.name);
      }
    }
  };
};

var jojo = Person('Jojo', 48);
jojo.sayName();
jojo.mother.sayName();


/*************************
    explicit Binding
    call, apply, Binding
*********************************/

var sayName = function() {
  console.log('My name is ' + this.name);
};

var gege = {
  name: 'Gege',
  age: 36
};
sayName.call(gege) // call

var sayName = function(lang1, lang2, lang3) {
  console.log('My name is ' + this.name + ' and I know ' + lang1 + ', ' + lang2 + ', and ' + lang3);
};

var gigi = {
  name: 'Gigi',
  age: 34
};

var languages = ['Javascript', 'PHP', 'Python'];
sayName.apply(gigi, languages); // apply


var newFn = sayName.bind(gigi, languages[0], languages[1], languages[2]); // bind

console.log('HERE');

newFn();

/***************
    new Binding
***********************/

var Animal = function(color, name, type) {
  this.color = color;
  this.name = name;
  this.type = type;
};

var zebra = new Animal('Black and white', 'Zorro', 'Zebra');

/***************
    window Binding
***********************/

var sayAge = function() {
  'use strict';
  console.log(this.age);
};

var meme = {
  age: 78
};

// sayAge(); // Uncaught TypeError: Cannot read property 'age' of undefined
sayAge.call(meme);


/*******************************
********************************

var color_td;
document.write('<table border="1px">');

for(var i = 1; i < 12; i++) {
  document.write('<tr style="height:50px;">');
  for(var j = 1; j < 12; j++) {
    if (j == 1 || i == 1) {
      color_td = 'blue';
    } else {
      color_td = 'purple';
    }
    document.write('<td style="width:50px;background-color:' + color_td + '">' + i*j + '</td>');
  }
  document.write('</tr>');
}
document.write('</table>');

**************************/

/************************
function
**********************/

function measureLoopSpeed() {
  var count = 0;
  function addOne() {
    count = count + 1;
  }

  // Date.now() returns a big number representing the number of
  // milliseconds that have elapsed since Jan 01 1970
  var now = Date.now();

  // Loop until Date.now() is 1000 milliseconds (1 second) or more into
  // the future from when we started looping. On each loop, call addOne
  while (Date.now() - now < 1000) addOne();
  // Finally it has been >= 1000ms, so let's print out our total count
  console.log(count);
}

measureLoopSpeed();
