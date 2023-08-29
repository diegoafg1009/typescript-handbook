(() => {

    type Avengers = {
        nick: string,
        ironman: string,
        vision: string,
        captain: string,
        active: boolean,
        power: number
    }

    const avengers: Avengers = {
        nick: 'Samuel L. Jackson',
        ironman: 'Robert Downey Jr.',
        vision: 'Paul Bettany',
        captain: 'Chris Evans',
        active: true,
        power: 5000
    }

    // Destructuring
    const { nick, ironman, power, ...rest } = avengers;

    console.log(nick);
    console.log(ironman.toUpperCase());
    console.log(power.toFixed(2));

    const printAvenger = ( {ironman, ...rest}: Avengers ) => {
        console.log(ironman, rest);
    }

    printAvenger( avengers );

    // Destructuring Arrays
    const avengersArr: string[] = ['Cap. America', 'Hulk', 'Spider-man'];

    const [cap , hulk ,] = avengersArr;
    console.log({ hulk, cap });

})();
