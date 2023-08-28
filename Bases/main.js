"use strict";
(() => {
    const sum = (a, b) => {
        return a + b;
    };
    const count = (heroes) => {
        return heroes.length;
    };
    const superHeroes = ["Flash", "Arrow", "Superman", "Green Lantern"];
    count(superHeroes);
    const callBatman = (call = true) => {
        if (call) {
            console.log("Batiseñal activada");
        }
    };
    callBatman();
    const joinHeroes = (...heroes) => {
        return heroes.join(", ");
    };
    const doesNothing = (number, text, boolean, array) => {
    };
    let alsoDoesNothing;
    alsoDoesNothing = doesNothing;
})();
(() => {
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
    console.log(charles);
    const apocalypse = {
        leader: true,
        members: ["Magneto", "Storm", "Psylocke", "Angel"]
    };
    console.log(apocalypse);
    let mystique;
    mystique = charles;
    mystique = apocalypse;
})();
(() => {
    const batman = 'Bruce';
    const superman = 'Clark';
    const exist = false;
    const coupleHeroes = [batman, superman];
    const villain = ['Doom', 5, true];
    const allies = ['Wonder Woman', 'Aqua Man', 'Plastic Man', 'Flash'];
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
    function activeBatSignal() {
        return 'active';
    }
    function askForHelp() {
        console.log('I need HELP!!!');
    }
    const power = '100';
    const lengthPower = power.length;
    console.log(lengthPower);
})();
(() => {
    const fullName = (firstName, lastName, upper = false) => {
        const fullName = `${firstName} ${lastName || "Doe"}`;
        if (upper) {
            return fullName.toUpperCase();
        }
        return fullName;
    };
    const name = fullName('Tony', 'Stark', true);
    console.log({ name });
})();
(() => {
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName || "Doe"}`;
    };
    const name = fullName('Tony');
    console.log({ name });
})();
(() => {
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName}`;
    };
    const name = fullName('Tony', 'Stark');
    console.log({ name });
})();
(() => {
    const fullName = (firstName, ...restNames) => {
        return `${firstName} ${restNames.join(" ")}`;
    };
    const superman = fullName("Clark", "Joseph", "Kent");
    console.log({ superman });
})();
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
    myFunction = saveTheWorld;
    console.log(myFunction());
})();
(() => {
    const hero = "Flash";
    const returnName = () => {
        return hero;
    };
    function activeBatSignal() {
        return "Bat signal is now active!";
    }
    console.log(typeof activeBatSignal());
})();
(() => {
    let flash = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Super velocity', 'Travel in time']
    };
    flash = {
        name: 'Clark Kent',
        age: 25,
        powers: ['Superpower', 'X-ray vision'],
        getName() {
            return this.name;
        }
    };
    console.log(flash);
})();
(() => {
    let flash = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Super velocity', 'Travel in time']
    };
    let superman = {
        name: 'Clark Kent',
        age: 25,
        powers: ['Superpower', 'X-ray vision'],
        getName() {
            return this.name;
        }
    };
});
(() => {
    let myCustomVariable = 'Dick Grayson';
    console.log(typeof myCustomVariable);
    myCustomVariable = 20;
    console.log(typeof myCustomVariable);
    myCustomVariable = {
        name: "Bruce Wayne",
        age: 30,
        powers: ["Super intellect"]
    };
    console.log(typeof myCustomVariable);
})();
(() => {
    let avenger = 123;
    let exist;
    let power;
    avenger = 'Dr. Strange';
    console.log(avenger.charAt(0));
    avenger = 150.5555;
    console.log(avenger.toFixed(2));
    console.log(exist);
    console.log(power);
})();
(() => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const villains = ['Doom', 'Dormammu', 'Green Goblin'];
    villains.forEach(v => console.log(v.toUpperCase()));
    console.log(numbers);
    console.log(villains);
})();
(() => {
    let isSuperman = true;
    let isBatman = false;
    console.log({ isSuperman });
});
(() => {
    let AudioLevel;
    (function (AudioLevel) {
        AudioLevel[AudioLevel["min"] = 0] = "min";
        AudioLevel[AudioLevel["medium"] = 1] = "medium";
        AudioLevel[AudioLevel["max"] = 10] = "max";
    })(AudioLevel || (AudioLevel = {}));
    let currentAudio = AudioLevel.max;
    console.log(currentAudio);
    console.log(AudioLevel);
})();
(() => {
    const abc = (message) => {
        throw new Error(message);
    };
    abc('Help!');
})();
(() => {
    let isActive = undefined;
    console.log(isActive);
})();
(() => {
    let avengers = 10;
    console.log(avengers);
    const villains = 20;
    if (avengers < villains) {
        console.log('We are in trouble');
    }
    else {
        console.log('We are safe');
    }
    avengers = Number('55A');
    console.log({ avengers });
})();
(() => {
    var _a;
    const batman = 'Batman';
    const greenLantern = "Green Lantern";
    const flash = `Flash`;
    console.log(`I'm ${batman}`);
    console.log(((_a = batman[10]) === null || _a === void 0 ? void 0 : _a.toUpperCase()) || 'Is not here');
})();
(() => {
    const hero = ['Dr. Strange', 100, true];
    hero[0] = 'Ironman';
    hero[1] = 50;
    hero[2] = false;
    console.log(hero);
});
(() => {
    function callBatman() {
        return;
    }
    const callSuperman = () => {
        return;
    };
    const a = callBatman();
    console.log(a);
})();
//# sourceMappingURL=main.js.map