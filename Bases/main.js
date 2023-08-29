"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
(() => {
    const avengers = {
        nick: 'Samuel L. Jackson',
        ironman: 'Robert Downey Jr.',
        vision: 'Paul Bettany',
        captain: 'Chris Evans',
        active: true,
        power: 5000
    };
    const { nick, ironman, power } = avengers, rest = __rest(avengers, ["nick", "ironman", "power"]);
    console.log(nick);
    console.log(ironman.toUpperCase());
    console.log(power.toFixed(2));
    const printAvenger = (_a) => {
        var { ironman } = _a, rest = __rest(_a, ["ironman"]);
        console.log(ironman, rest);
    };
    printAvenger(avengers);
    const avengersArr = ['Cap. America', 'Hulk', 'Spider-man'];
    const [cap, hulk,] = avengersArr;
    console.log({ hulk, cap });
})();
(() => {
    const ironMan = {
        name: "Tony Stark",
        weapon: "Mk-50"
    };
    const captainAmerica = {
        name: "Steve Rogers",
        weapon: "Shield"
    };
    const thor = {
        name: "Thor Odinson",
        weapon: "Mjolnir"
    };
    const avengers = [ironMan, captainAmerica, thor];
    for (let i = 0; i < avengers.length; i++) {
        console.log(avengers[i].name, avengers[i].weapon);
    }
    for (const avenger of avengers) {
        console.log(avenger.name, avenger.weapon);
    }
})();
(() => {
    let a = 10;
    a = 15;
    console.log(a);
    const name = "Diego";
    console.log(name);
    if (true) {
        let a = 20;
        console.log(a);
    }
    console.log(a);
    const hero = {
        name: "Barry Allen",
        age: 24
    };
    hero.name = "Clark Kent";
    hero.age = 25;
})();
//# sourceMappingURL=main.js.map