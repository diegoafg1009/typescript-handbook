"use strict";
(() => {
    const addNumbers = (a, b) => {
        return a + b;
    };
    const greet = (name) => {
        return `Hello ${name}`;
    };
    const saveTheWorld = () => {
        return `The world is saved!`;
    };
    let myFunction;
    // = addNumbers;
    //console.log(myFunction(1, 2));
    //myFunction = greet;
    //console.log(myFunction("Clark Kent"));
    myFunction = saveTheWorld;
    console.log(myFunction());
})();
