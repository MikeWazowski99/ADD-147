// for loop - https://www.w3schools.com/js/js_loop_for.asp
// Write 99 bottles of beer on the wall using a for loop
// hints - decrement at the end, create a variable, save the song lyrics from
// the loop to the variable. use <br> instead of \n with the inner html. 
text = "";

for (let i = 99; i >= 0; i--) {
    document.getElementById("beer").innerHTML +=  `${i} beers on the wall ` + "<br> Take one down and pass it around <br>";
  }



//for in: https://www.w3schools.com/js/js_loop_forin.asp
// create an array of months and use the for in
// command to print them to the for-in paragraph
var month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug", "Sep", "Oct", "Nov", "Dec"];

month.forEach(myFunction);
document.getElementById("for-in").innerHTML = text;
function myFunction(value, index, array) {
    text += value + "<br>"; 
  }


// For of: https://www.w3schools.com/js/js_loop_forof.asp
// demonstrate the use of For Of to print letters from a string. 
// Create your own string variable of at least 5 letters
// print the results in the for-of paragraph
let string = "Hello World"
let txt = "";
for (let x of string) {
    txt += x + "<br>";
}

document.getElementById("for-of").innerHTML = txt;


// While loop: https://www.w3schools.com/js/js_loop_while.asp
// Create a while loop to print the numbers 1 to 50
// print the results in the while paragraph

let txt2 = "";
let x = 0;
while (x <= 50) {
    txt2 += "<br>The number is " + x;
    x++;
}
document.getElementById("while").innerHTML = txt2;