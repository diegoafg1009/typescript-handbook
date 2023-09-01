(() => {
    class Avenger {
        //Traditional way to declare properties and constructor like another languages (Java, C#, etc):
        /*public name: string;
        public weapon: string;
        public age?: number;
        public static planet: string = "Earth";
        constructor(name: string, weapon: string, age?: number){
            this.name = name;
            this.weapon = weapon;
            this.age = age;
        }*/

        //A more simplified way to declare properties and constructor in TypeScript:
        public static planet: string = "Earth";
        constructor(
            public name: string,
            public weapon: string,
            public age?: number
        ) {
        }

        //default method is public
        public bio(): string {
            let message: string = `${this.name} ${this.weapon} ${Avenger.planet}`;
            if (this.age) {
                message += `, ${this.age}`;
            }
            return message;
        }

        static getPlanet(): string {
            return this.planet;
        }

    }

    const antMan: Avenger = new Avenger("Hank Pim", "Shrink");
    // console.log(antMan);
    // console.log(Avenger.planet);
    // console.log(antMan.bio());
    // console.log(Avenger.getPlanet());

})();