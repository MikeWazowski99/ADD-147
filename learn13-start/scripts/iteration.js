/*
Iterables: https://www.w3schools.com/js/js_iterables.asp
Read the page
Demonstrate iteration of a list 
Create a list of movies, books, or games at least 5 items long and 
display them in the list paragraph
*/
let series = ["Read Dead Redemption I", "Read Dead Redemption 2", "Yakuza", "Cyberpunk 2077", "ELDEN RING"]

let text = "";
for (const x of series) {
    text += x + "<br>"
}
document.getElementById("list").innerHTML = text


/*
JS Sets

https://www.w3schools.com/js/js_sets.asp

Create a set with at least 5 song titles in it
display the contents of the set in the set1 paragraph (use iteration)

*/
const songs = new Set(["ICARUS","Pathos","Secunda", "Bewitched", "6 Chants polonais"]);
let text2 = "";
for (const x of songs) {
    text2 += x + "<br>"
}
document.getElementById("set1").innerHTML = text2

// add two more songs to the set then display in the set2 paragraph
songs.add("Try")
songs.add(`Virgo "The Perfectionist"`)
let text3 = "";
for (const x of songs) {
    text3 += x + "<br>"
}
document.getElementById("set2").innerHTML = text3




/* 
Maps
https://www.w3schools.com/js/js_maps.asp

Maps are like dictionaries in python
Create a map with five names and emails in it.
Display the contents of the map in map1 use the forEach() method (bottom of
    the reference page)
*/
txt = "";
const mail = new Map([
    ["Jack", "Jack@gmail.com"],
    ["John", "John@gmail.com"],
    ["Jake", "Jake@gmail.com"],
    ["Josh", "Josh@gmail.com"],
    ["Bob", "Bob@gmail.com"]
  ]);
mail.forEach((function(value, key) {
    txt += key + ' = ' + value + "<br>"}));
document.getElementById("map1").innerHTML = txt;

// add two new names and emails and display in map2 use the forEach() method
mail.set("Erick", "Erick@gmail.com");
mail.set("Jorge", "Jorge@gmail.com");
txt2 = "";
mail.forEach(function(value, key) {
    txt2 += key + ' = ' + value + "<br>";
});
document.getElementById("map2").innerHTML = txt2;

// get and display the email of one person, display in map3
let erickEmail = mail.get("Erick");
document.getElementById("map3").innerHTML = "Erick's email = " + erickEmail;