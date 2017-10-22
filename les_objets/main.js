'use strict';

// Création d'un object littéral
var stylo = {
  type: "bille",
  couleur: "bleu",
  marque: "Bic"
};

// Utilisation d'un objet
document.write('<p>' + stylo.type + '</p>');
document.write('<p>' + stylo.couleur + '</p>');
document.write('<p>' + stylo.marque + '</p>');

document.write('<p>' + stylo['type'] + '</p>');
document.write('<p>' + stylo['couleur'] + '</p>');
document.write('<p>' + stylo['marque'] + '</p>');

document.write('<p>Mon stylo à ' + stylo.type + ' ' + stylo.marque + ' écrit en ' + stylo.couleur + '</p>');

// Modification d'un object
stylo.couleur = "rouge";

document.write('<p>Mon stylo à ' + stylo.type + ' ' + stylo.marque + ' écrit en ' + stylo.couleur + '</p>');

// Création d'un objet à l'aide d'un constructeur
/*
// Constructeur MonObjet
function MonObjet() {
  // Initialisation de l'objet
  // ...
}
// Instanciation d'un objet à partir du constructeur
var monObj = new MonObjet();
*/


/*

  Mini Jeu de rôle

  Plus modestement, nous allons modéliser un personnage de notre jeu
  en le dotant de trois caractéristiques :

  son nom,
  sa santé (nombre de points de vie),
  sa force.

*/

// Création d'un personnage
var perso = {
  nom: "Aurora",
  sante: 150,
  force: 25
};

document.write('<p>' + perso.nom + ' a ' + perso.sante + ' points de vie et ' + perso.force + ' en force.</p>');

// Aurora est blessée par une flèche
perso.sante =  perso.sante - 20;

// Aurora trouve un bracelet de force
perso.force = perso.force + 10;

document.write('<p>' + perso.nom + ' a ' + perso.sante + ' points de vie et ' + perso.force + ' en force.</p>');

// La notion de méthode
// Ajout d'une méthode à un objet

// Aurora trouve un kit de soin
perso.sante =  perso.sante + 80;

// Aurora trouve un bracelet de force
perso.force = perso.force + 50;

// Renvoie la description du personnage
function decrire(personnage) {
  var description = perso.nom + ' a ' + perso.sante + ' points de vie et ' + perso.force + ' en force.';
  return description;
}
document.write('<p>' + decrire(perso) + '</p>');

var perso = {
  nom: "Aurora",
  sante: 150,
  force: 25,

  // Renvoie la description du personnage
  decrire: function() {
    var description = this.nom + ' a ' + this.sante + ' point de vie et ' + this.force + ' en force.';
    return description;
  }
};

document.write('<p>' + perso.decrire() + '</p>');

// Aurora est blessée par une flèche
perso.sante =  perso.sante - 20;

// Aurora a perdu de la force
perso.force = perso.force - 10;

document.write('<p>' + perso.decrire() + '</p>');

var perso = {
  nom: "Aurora",
  sante: 150,
  force: 25,
  xp: 0,

  // Renvoie la description du personnage
  decrire: function() {
    var description = this.nom + ' a ' + this.sante + ' point de vie et ' + this.force + ' en force et ' + this.xp + ' d\'expérience.';
    return description;
  }
};

document.write('<p>' + perso.decrire() + '</p>');

// Aurora trouve un kit de soin
perso.sante =  perso.sante + 50;

// Aurora trouve un bracelet de force
perso.force = perso.force + 30;

// Aurora trouve un bracelet de force
perso.xp = perso.xp + 20;

document.write('<p>' + perso.decrire() + '</p>');
