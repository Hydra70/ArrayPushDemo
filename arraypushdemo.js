//build an array that stores first and last names. The default value of the array will be empty
var firstNames = [];
var lastNames = [];
//Ask user for a first name, and store it in the first names array
var question1 = prompt("Enter your first name");
firstNames.unshift(question1);
//Ask user for a last name, and store it in the last names array
var question2 = prompt("Enter your last name");
lastNames.unshift(question2);
//display to the window both first and last name from the array with the length of both the arrays
window.alert(firstNames[0] + " " + lastNames[0] + " " + firstNames.length + lastNames.length);