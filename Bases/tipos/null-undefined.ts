(() => {
    // if I want to set a variable as null or undefined, I need to set the type or put strictNullChecks to false in tsconfig.json
    let isActive: (boolean | undefined) = undefined;

    console.log(isActive);

})();