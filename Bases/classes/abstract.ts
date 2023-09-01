(() => {

    abstract class Mutant {
        constructor(
            public name: string,
            public realName: string
        ) { }
        // Abstract methods must be implemented in the child class
        abstract saveTheWorld(): string;

        // Methods can be defined in the abstract class and used in the child class
        public bio(): string {
            return `${this.name} ${this.realName}`;
        }
    }

    class Xmen extends Mutant {
        public saveTheWorld(): string {
            return "Save the world!";
        }
    }

    // wolwerine is an instance of Xmen, but we can declare it as Mutant because Xmen extends Mutant
    const wolverine: Mutant = new Xmen("Wolverine", "Logan");

    // console.log(wolverine);
    // console.log(wolverine.bio());
    // console.log(wolverine.saveTheWorld());

})();