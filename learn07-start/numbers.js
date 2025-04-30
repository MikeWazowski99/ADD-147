function start() {

    // print your name to the name heading
    document.getElementById("name").innerHTML = "Michael Tapia"
        /*
            read/watch the associated reference and complete the directions in the comments.

        */

    /* JS Numbers: https://www.w3schools.com/js/js_numbers.asp
        We will focus on the things with numbers that are significantly
        different than python. Please read the page linked to above before 
        completing the following:
    */

    /* Write a line of code demonstrating what will happen if 
       you try to add a number and a string. Print to the add paragraph to 
       display both the equation and the results. 
    */
       let x = "100";
       let y = 20;
       let z = x + y;   
       document.getElementById("add").innerHTML = `"100" + 20 = ${z}`;


    /*
        JS Number Methods: https://www.w3schools.com/js/js_number_methods.asp
    */

    // Demonstrate the use of toString() and print to the to-string paragraph
    let num = 123;
    document.getElementById("to-string").innerHTML = num.toString() + " HELLO WORLD";

    // Demonstrate the use of toExponential() and print to the exponent paragraph
    let num1 = 5
    document.getElementById("exponent").innerHTML = num1.toExponential()

    // Demonstrate the use of toFixed() and print to the fixed paragraph\
    let num2 = 5.645
    document.getElementById("fixed").innerHTML = num2.toFixed()

    // Demonstrate the use of toPrecision() and print to the precision paragraph
    document.getElementById("precision").innerHTML = num2.toPrecision()

    // Demonstrate the use of parseFloat() and print to the float paragraph
    document.getElementById("float").innerHTML = parseFloat("30 years")

    // Demonstrate the use of parseInt() and print to the int paragraph
    document.getElementById("int").innerHTML = parseInt("-30.3 years")


    // Watch Simple Comparisons: https://www.linkedin.com/learning/learning-the-javascript-language-2/simple-comparisons?autoplay=true&resume=false&u=69317474

    /* In the equals paragraph explain your understanding of the difference between using == and ===  (You will probably
    need to do an additional web search to really get it.)
    */
    document.getElementById("equals").innerHTML = "The difference be tween == and === is that == will perform type coercion which will change the objects to common types before comparing whereas === will not do that before comparing"
    // Watch Arithmetic Operators: https://www.linkedin.com/learning/learning-the-javascript-language-2/arithmetic-operators?autoplay=true&resume=false&u=69317474
    // Watch Logical Operators: https://www.linkedin.com/learning/learning-the-javascript-language-2/logical-operators?autoplay=true&resume=false&u=69317474
    // In the logic paragraph describe the order of precedence for and / or operators
    document.getElementById("logic").innerHTML = "The order of the precedence is that the and would go first before the or is evaluated"


    // Watch Conditional If: https://www.linkedin.com/learning/learning-the-javascript-language-2/logical-operators?autoplay=true&resume=false&u=69317474
    // Watch Conditionals Switch: https://www.linkedin.com/learning/learning-the-javascript-language-2/conditionals-switch?autoplay=true&resume=false&u=69317474


    // Write code to demonstrate the use of the switch statement and display results to switch paragraph
    let answer = window.prompt("Please type Hello or Yello. Then Click Okay");
    switch(answer) {
        case "Hello":
            console.log("Hello world");
            break;
        case "Yello":
            console.log("Yellow like the color");
            break;
        default:
            console.log("This is the default txt");
            break;
    }
    document.getElementById("switch").innerHTML = answer
    // Watch Terse ifs: https://www.linkedin.com/learning/learning-the-javascript-language-2/terse-ifs?autoAdvance=true&autoSkip=true&autoplay=true&resume=false&u=69317474
    // Watch Ternary Operator:https://www.linkedin.com/learning/learning-the-javascript-language-2/ternary-operator?autoplay=true&resume=false&u=69317474
    // Write code to demonstrate the use of the ternary operator and print to the ternary paragraph
    var car = "red";

    document.getElementById("trenary").innerHTML =  car === "red"
    ? console.log("The car is red")
    : console.log("The car is not red");
}