// Basic Functions
const sum = (a: number, b: number): number => {
    return a + b;
}

const count = (heroes: string[]): number => {
    return heroes.length;
}
const superHeroes: string[] = ["Flash", "Arrow", "Superman", "Green Lantern"];
count(superHeroes);

//Default Params
const callBatman = (call: boolean = true): void => {
    if (call) {
        console.log("Batiseñal activada");
    }
}


callBatman();

// Rest?
const joinHeroes = (...heroes: string[]): string => {
    return heroes.join(", ");
}


// Function Type
const doesNothing = (number: number, text: string, boolean: boolean, array: any[]):void => {
}

// Create the type of function that accepts doesNothing
let alsoDoesNothing: (n: number, t: string, b: boolean, a: any[]) => void;
alsoDoesNothing = doesNothing;
