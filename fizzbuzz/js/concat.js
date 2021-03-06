/****************
  * Exercice : FizzBuzz
  * Solution construisant le message à afficher par concaténation
******************************************************************* */

for (var nombre = 1; nombre <= 100; nombre++) {

  // Message à afficher, initialement vide
  var message = "";

  if (nombre % 3 === 0) {
    // Nombre divisible par 3 : on ajoute "Fizz" au message
    message += 'Fizz';
  }
  if (nombre % 5 === 0) {
    // Nombre divisible par 5 : on ajoute "Buzz" au message
    message += 'Buzz';
  }
  if (message === '') {
    // Si message est vide, le nombre n'est divisible ni par 3, ni par 5 :
    // le message affiché sera le nombre
    message = nombre;
  }
  console.log(message);

}

/*
for ( var n = 1; n <= 100; n++ ) {

  var output = '';

  if (n % 3 === 0)
  output += "Fizz";

  if (n % 5 === 0)
  output += 'Buzz';

  console.log( output || n );
  
}
*/
