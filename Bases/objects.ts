
// Objects
type Car = {
    bodywork: string;
    model: string;
    bulletproof: boolean;
    passengers: number;
    shoot?: () => void;
}

const batMobile: Car = {
    bodywork: "Black",
    model: "6x6",
    bulletproof: true,
    passengers:4
};

const bumblebee: Car = {
    bodywork: "Black and Yellow",
    model: "4x2",
    bulletproof: true,
    passengers:4,
    shoot(){ // This method is optional
        console.log("Shooting");
    }
};


// Villains must be an array of custom objects
type Villain = {
    name: string;
    age?: number;
    mutant: boolean
}

const villains: Villain[] = [{
    name:"Lex Luthor",
    age: 54,
    mutant:false
},{
    name: "Erik Magnus",
    age: 49,
    mutant: true
},{
    name: "James Logan",
    age: undefined,
    mutant: true
}];


// Multi types
// create two types, one for charles and another for apocalypse
type Charles = {
    power: string;
    height: number;
}

type Apocalypse = {
    leader: boolean;
    members: string[];
}

const charles: Charles = {
    power:"psychic",
    height: 1.78
};

const apocalypse: Apocalypse = {
    leader:true,
    members: ["Magneto","Storm","Psylocke","Angel"]
}

// Mystique must be able to be any of those two mutants (charles or apocalypse)
let mystique: Charles | Apocalypse;

mystique = charles;
mystique = apocalypse;
