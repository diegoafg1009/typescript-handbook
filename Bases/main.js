"use strict";
(() => {
    class Mutant {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
        }
        bio() {
            return `${this.name} ${this.realName}`;
        }
    }
    class Xmen extends Mutant {
        saveTheWorld() {
            return "Save the world!";
        }
    }
    const wolverine = new Xmen("Wolverine", "Logan");
})();
(() => {
    class Avenger {
        constructor(name, weapon, age) {
            this.name = name;
            this.weapon = weapon;
            this.age = age;
        }
        bio() {
            let message = `${this.name} ${this.weapon} ${Avenger.planet}`;
            if (this.age) {
                message += `, ${this.age}`;
            }
            return message;
        }
        static getPlanet() {
            return this.planet;
        }
    }
    Avenger.planet = "Earth";
    const antMan = new Avenger("Hank Pim", "Shrink");
})();
(() => {
    class Hero {
        constructor(name, _realName) {
            this.name = name;
            this._realName = _realName;
        }
        get realName() {
            return this._realName;
        }
        set realName(realName) {
            this._realName = realName;
        }
        getFullName() {
            return `${this.name} ${this._realName}`;
        }
    }
    class Avenger extends Hero {
        constructor(name, realName, canFight, wins) {
            super(name, realName);
            this.canFight = canFight;
            this.wins = wins;
        }
        secretIdentity() {
            return `${this.getFullName()}`;
        }
    }
    const antMan = new Avenger("AntMan", "Scott Lang", true, 1);
    antMan.realName = "Hank Pim";
})();
(() => {
    class Singleton {
        constructor() {
        }
        static getInstance() {
            if (!Singleton.instance) {
                Singleton.instance = new Singleton();
            }
            return Singleton.instance;
        }
    }
})();
//# sourceMappingURL=main.js.map