function functionName(parameter1, parameter2, parameter3) {
    // code to be executed
}

//Osztálytermi példa: bemegy Kovács Ferenc nevű diák a terembe, és előtte kap egy alma jelet. Ezután a tanár csak alma jelű diákként hivatkozhat rá. Kovács Ferenc: argumentum, alma jel: paraméter. A paraméter sima zárójelek közt van. A sima zárójel a kapu, ahol megkapja az alma jelet. Number= alma jelű gyerek.

//A függvény paraméterei a függvény definíciójában vannak listázva.

//A függvény argumentumai a valós értékei, amiket megkap a függvény.

/*PARAMETER RULES
JavaScript function definitions do not specify data types for parameters.
JavaScript functions do not perform type checking on the passed arguments.
JavaScript functions do not check the number of arguments received.*/

/*THE ARGUMENT OBJECTS
JavaScript functions have a built-in object called the arguments object.
The argument object contains an array of the arguments used when the function was called (invoked).
This way you can simply use a function to find (for instance) the highest value in a list of numbers:*/

//Example
x = findMax(1, 123, 500, 115, 44, 88);

function findMax() {
    let max = -Infinity;
    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i] > max) {
            max = arguments[i];
        }
    }
    return max;
}

/*Arguments are Passed by Value
The parameters, in a function call, are the function's arguments.
JavaScript arguments are passed by value: The function only gets to know the values, not the argument's locations.
If a function changes an argument's value, it does not change the parameter's original value.
Changes to arguments are not visible (reflected) outside the function.

Objects are Passed by Reference
In JavaScript, object references are values.
Because of this, objects will behave like they are passed by reference:
If a function changes an object property, it changes the original value.
Changes to object properties are visible (reflected) outside the function.*/


//https://webiskola.hu/javascript-ismeretek/javascript-fuggvenyek-eljarasok-metodusok/

//http://weblabor.hu/cikkek/javascript-fuggvenyek

//