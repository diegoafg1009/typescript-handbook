(() => {
    let flash : { name: string, age: number, powers: string[], getName?: () => string}  = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Super velocity', 'Travel in time']
    }

    flash = {
        name: 'Clark Kent',
        age: 25,
        powers: ['Superpower', 'X-ray vision'],
        getName() {
            return this.name;
        }
    }
    console.log(flash);
})();