(() => {

    type Avenger = {
        name: string;
        weapon: string;
    }

    const ironMan: Avenger = {
        name: "Tony Stark",
        weapon: "Mk-50"
    }

    const captainAmerica: Avenger = {
        name: "Steve Rogers",
        weapon: "Shield"
    }

    const thor: Avenger = {
        name: "Thor Odinson",
        weapon: "Mjolnir"
    }

    const avengers: Avenger[] = [ironMan, captainAmerica, thor];

    //traditional "for"
    for(let i = 0; i < avengers.length; i++){
        console.log(avengers[i].name, avengers[i].weapon);
    }

    //for of: it's a more elegant way to iterate over arrays
    for(const avenger of avengers){
        console.log(avenger.name, avenger.weapon);
    }


})();