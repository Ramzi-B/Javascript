var ordinateurs = ["processeur", "carte mere", "carte graphique", "ram", "alimentation"];

for(var i = 0; i < ordinateurs.length; i++){
  document.write('<p>' + ordinateurs[i] + '</p>');
  document.write('<p>' + ordinateurs[i].length + '</p>');
}

ordinateurs.forEach(function(ordi){
  console.log(ordi);
  console.log(ordi.length);
})

document.write('<p>' + ordinateurs[0] + '</p>');
document.write('<p>' + ordinateurs[1] + '</p>');
document.write('<p>' + ordinateurs[2] + '</p>');
document.write('<p>' + ordinateurs[3] + '</p>');
document.write('<p>' + ordinateurs[4] + '</p>');


ordinateurs.push("boitier");
document.write('<p>' + ordinateurs[i] + '</p>');

// Tableaux d'objets
var Car = {
  init: function (marque, annee) {
    this.marque = marque;
    this.annee = annee;
  },
  decrire: function() {
    var description = this.marque + "(" + this.annee + ")";
    return description;
  }
};

var car1 = Object.create(Car);
car1.init("Mercedes", 2015);

var car2 = Object.create(Car);
car2.init("Bmw", 2016);

var car3 = Object.create(Car);
car3.init("Porche", 2013);

var car4 = Object.create(Car);
car4.init("Audi", 2017);

var cars = [];
cars.push(car1);
cars.push(car2);
cars.push(car3);
cars.push(car4);

cars.forEach(function(car){
  document.write('<p>' + car.decrire() + '</p>');
  console.log(car.decrire());
});

// Répétez des instructions
document.write('<p>Début du programme</p>');
var nombre = 1;
// Boucle while
while (nombre <= 5) {
  document.write('<p>' + nombre + '</p>');
  nombre++;
}
document.write('<p>Fin du programme</p>');

// Boucle for
var count;
for(count = 1; count <= 5; count++){
  document.write('<p>' + count + '</p>');
}

for (var count = 1; count <= 5; count++) {
  document.write('<p>' + count + '</p>');
  count++; // La variable est modifiée dans le corps de la boucle
}
