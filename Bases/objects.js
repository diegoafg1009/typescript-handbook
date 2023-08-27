"use strict";
const batMobile = {
    bodywork: "Black",
    model: "6x6",
    bulletproof: true,
    passengers: 4
};
const bumblebee = {
    bodywork: "Black and Yellow",
    model: "4x2",
    bulletproof: true,
    passengers: 4,
    shoot() {
        console.log("Shooting");
    }
};
const villains = [{
        name: "Lex Luthor",
        age: 54,
        mutant: false
    }, {
        name: "Erik Magnus",
        age: 49,
        mutant: true
    }, {
        name: "James Logan",
        age: undefined,
        mutant: true
    }];
const charles = {
    power: "psychic",
    height: 1.78
};
const apocalypse = {
    leader: true,
    members: ["Magneto", "Storm", "Psylocke", "Angel"]
};
// Mystique must be able to be any of those two mutants (charles or apocalypse)
let mystique;
mystique = charles;
mystique = apocalypse;
