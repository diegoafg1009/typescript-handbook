"use strict";
// Basic Functions
const sum = (a, b) => {
    return a + b;
};
const count = (heroes) => {
    return heroes.length;
};
const superHeroes = ["Flash", "Arrow", "Superman", "Green Lantern"];
count(superHeroes);
//Default Params
const callBatman = (call = true) => {
    if (call) {
        console.log("Batiseñal activada");
    }
};
callBatman();
// Rest?
const joinHeroes = (...heroes) => {
    return heroes.join(", ");
};
// Function Type
const doesNothing = (number, text, boolean, array) => {
};
// Create the type of function that accepts doesNothing
let alsoDoesNothing;
alsoDoesNothing = doesNothing;
