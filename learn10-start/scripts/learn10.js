function start() {
    // Math: https://www.w3schools.com/js/js_math.asp
    // Demonstrate the use of round, ceil, floor, trunc, sign
    // pow, min, and random and display to the appropriate paragraphs
    document.getElementById("round").innerHTML = Math.round(3.14);
    document.getElementById("ceil").innerHTML = Math.ceil(4.4);
    document.getElementById("floor").innerHTML = Math.floor(7.7);
    document.getElementById("trunc").innerHTML = Math.trunc(3.4);
    document.getElementById("sign").innerHTML = Math.sign(-2);
    document.getElementById("pow").innerHTML = Math.pow(9,2);
    document.getElementById("min").innerHTML = Math.min(1, 350, 60, 50, -56, -1000);
    document.getElementById("random").innerHTML = Math.random();

    // Random: https://www.w3schools.com/js/js_random.asp
    // create a random integer between 1 and 100 and display in the random2 paragraph
    document.getElementById("random2").innerHTML = Math.floor(Math.random() * 101);

    // Booleans: https://www.w3schools.com/js/js_booleans.asp
    // read the reference


    // Comparisons: https://www.w3schools.com/js/js_comparisons.asp
    // demonstrate and explain the difference between == and === in the
    // comparisons paragraph
    let x = 5
    let y = "5"
    document.getElementById("comparisons").innerHTML = `The difference between == and === is 
    that == will look to see if the values that are being compared are of the same value whereas
    === will check to see if the values being compared are of the same value and type. 
    <br> X = 5<br> Y = "5"
    <br>Example 1. X == Y: ${x == y} 
    <br>Example 2. X === Y: ${x === y}`


    // Conditions: https://www.w3schools.com/js/js_if_else.asp
    // Read the conditions page
}