(() => {

    // Types
    const batman: string = 'Bruce';
    const superman: string = 'Clark';

    const exist:boolean = false;

    // Tuples
    const coupleHeroes: [string, string] = [batman,superman];
    const villain:[string, number, boolean] = ['Doom',5,true];

    // Arrays
    const allies: string[] = ['Wonder Woman','Aqua Man','Plastic Man', 'Flash'];

    //Enums
    enum Power {
        flash = 5,
        superman = 100,
        batman = 1,
        aquaMan = 0
    }

    const forceFlash: Power = Power.flash;
    const forceSuperman: Power = Power.superman;
    const forceBatman: Power = Power.batman;
    const forceAquaMan: Power = Power.aquaMan;

    // return of a function
    function activeBatSignal(): string{
        return 'active';
    }

    function askForHelp(): void{
        console.log('I need HELP!!!');
    }

    // Type assertions
    const power: any = '100';
    const lengthPower:number = (power as string).length;
    console.log( lengthPower );


})();

