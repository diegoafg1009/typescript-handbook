(() => {

    type Hero = {
        name: string,
        age?: number,
        powers: string[],
        getName?: () => string
    };

    let flash: Hero = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Super velocity', 'Travel in time']
    };

    let superman: Hero = {
        name: 'Clark Kent',
        age: 25,
        powers: ['Superpower', 'X-ray vision'],
        getName() {
            return this.name;
        }
    };

});