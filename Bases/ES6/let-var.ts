(() => {
    // var is no longer used in ES6, instead now we use let and const
    let a: number = 10;
    a = 15;
    console.log(a);

    const name: string = "Diego";
    //name is a constant, so it can't be changed
    //name = "Andre";
    console.log(name);

    //let and const are block scoped
    if (true) {
        let a:number = 20;
        console.log(a);
        // "a" is 20 because it's inside the block
    }
    console.log(a);
    //"a" is 15 because it's outside the block

    const hero:{name: string; age: number} = {
        name: "Barry Allen",
        age: 24
    }

    //hero is a constant, so it can't be changed
    //hero = {
    //    name: "Clark Kent",
    //    age: 25
    //}

    //but we can change its properties
    hero.name = "Clark Kent";
    hero.age = 25;

})();