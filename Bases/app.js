"use strict";
(() => {
    // Types
    const batman = 'Bruce';
    const superman = 'Clark';
    const exist = false;
    // Tuples
    const coupleHeroes = [batman, superman];
    const villain = ['Doom', 5, true];
    // Arrays
    const allies = ['Wonder Woman', 'Aqua Man', 'Plastic Man', 'Flash'];
    //Enums
    let Power;
    (function (Power) {
        Power[Power["flash"] = 5] = "flash";
        Power[Power["superman"] = 100] = "superman";
        Power[Power["batman"] = 1] = "batman";
        Power[Power["aquaMan"] = 0] = "aquaMan";
    })(Power || (Power = {}));
    const forceFlash = Power.flash;
    const forceSuperman = Power.superman;
    const forceBatman = Power.batman;
    const forceAquaMan = Power.aquaMan;
    // return of a function
    function activeBatSignal() {
        return 'active';
    }
    function askForHelp() {
        console.log('I need HELP!!!');
    }
    // Type assertions
    const power = '100';
    const lengthPower = power.length;
    console.log(lengthPower);
})();
