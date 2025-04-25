// Global Variables
//  global variables are declared with var
//  local variables are declared wih let
//  

var name = "Mike";

// myName = "Meredith Louise Engel" - Allowed but frowned upon

function names() {
    var name1 = "Mike";
    //fix the errors
    var firstName = "Michael",
        lastName = "Tapia";
    document.getElementById("name").innerHTML = name1;
    document.getElementById("full-name").innerHTML = firstName + " " + lastName;
    var firstName = "Doctor";
    var name = "Beba";
    document.getElementById("first").innerHTML = name;
    document.getElementById("nick-name").innerHTML = firstName;

}

function scope() {
    //fix the errors
    var firstName = "Michael";
    var taxRate = .07; // This is a constant
    document.getElementById("global").innerHTML = name;
    document.getElementById("local").innerHtml = firstName;
    document.getElementById("tax").innerHTML = taxRate;
    var taxRate = .08
    document.getElementById("new-tax").innerHTML = taxRate;
}

function letMe() {
    // Fix the errors
    let dog1 = "Ollie";
    dog2 = "Nessie";
    dog2 = "Nessie";
    var dog3 = "Paisley";
    var dog2;
    document.getElementById("dog1").innerHTML = dog1;
    document.getElementById("dog2").innerHTML = dog2;
    document.getElementById("dog3").innerHTML = dog3;
    var dog2 = "Oreo"
    document.getElementById("dog1-2").innerHTML = dog2;
}

function constants() {
    // fix the errors
    const PI = 3.14;
    const dogs = ["Ollie", "Nessie", "Ory"];
    document.getElementById("doggos").innerHTML = dogs;
    dogs[0] = "Ollie Bear";
    document.getElementById("new-doggos").innerHTML = dogs;
    const breed = ["Shepherd", "Collie", "Bouvier"];
    document.getElementById("pi").innerHTML = PI;
    document.getElementById("breeds").innerHTML = breed;

}

function myMath() {
    // create statements demonstrating the use of each operator
    let addition = 9 + 10
    document.getElementById("addition").innerHTML = "9 + 10 = " + addition;
    let subtraction = 10 - 9
    document.getElementById("subtraction").innerHTML = "10 - 9 = " + subtraction;
    let multiplication = 10 * 9
    document.getElementById("multiplication").innerHTML = "10 * 9 = " + multiplication;
    let x = 10
    let exponent = x ** 2 
    document.getElementById("exponent").innerHTML = "10 ** 2 = " + exponent;
    let division = 10 / 2
    document.getElementById("division").innerHTML = "10 / 2 = " + division;
    let modulus = x % 3
    document.getElementById("modulus").innerHTML = "10 % 3 = " + modulus;
    let z = 10;
    z++;
    let increment = z
    document.getElementById("increment").innerHTML = "10++ = " + increment;
    var y = 10
    y--;
    let decrement = y
    document.getElementById("decrement").innerHTML = "10-- = " + decrement;
}

function assignments() {
    // create statements demonstrating the use of each assignment type
    x = 10
    document.getElementById("equals").innerHTML = "x = 10  = " + "x = " + x;
    x += 1
    document.getElementById("plus-equals").innerHTML = "x += 1 = " + "x = " + x;
    x -= 1
    document.getElementById("minus-equals").innerHTML = "x -= 2 = " + "x = " + x;
    x *= 2
    document.getElementById("times-equals").innerHTML = "x *= 2 = " + "x = " + x;
    x /= 2
    document.getElementById("divide-equals").innerHTML = "x /= 2 = " + "x = " + x;
    x %= 2
    document.getElementById("modulus-equals").innerHTML = "x %= 2 = " + "x = " + x;
}

function dataTypes() {
    // create samples of each of the data types from the
    // index page and display them in the Data Types section
    const cats = ["Orange", "Tabby", "Maine Coon"];
    document.getElementById("array").innerHTML = cats;
    const cars = {type:"BMW ", model:"2024 ", color:"black "}
    cars.color = "red";
    document.getElementById("object").innerHTML = cars.type + cars.model + cars.color;

}
