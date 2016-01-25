/*
Author: Juan Flores

Assignments - Variables
Date: 1-22-16
 */

//0-The Fortune Teller

var NumChildren = 2
var wife = "Lynnze"
var GeoLocation = "Miami Beach"
var JobTitle = "Apple Genius"

alert("You will be an " + JobTitle + " in " + GeoLocation + ", and married to " + wife + " with " + NumChildren + " kids.");

//1-The Age Calculator

var CurrentYear = 2016
var UsrBirthYear = prompt("What year were you born? ");
var age = CurrentYear - UsrBirthYear;

alert("They are either " + age + " or " + --age);

//2-The Lifetime Supply Calculator

var MyAge = 33
var MaxAge = 90
var calories = 2000

alert("You will need " + ((MaxAge - MyAge) * calories) + " calories to last you until the ripe old age of " + MaxAge + ".");

//3-The Geometrizer

var diameter = prompt("Enter value of a Diameter: ")
var radius = diameter / 2;
var circumference = (2 * 3.14) * radius

alert("The circumference is " + circumference);

//4-The Temperature Converter

var celcius = 30
var fahrenheit = ((celcius * 9) / 5) + 32;
var fsymbol = '\u2109';
var csymbol = "\u2103";

alert(celcius + csymbol + " is " + fahrenheit + fsymbol);




