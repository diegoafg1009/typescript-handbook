"use strict";
(() => {
    let myCustomVariable = 'Dick Grayson';
    console.log(typeof myCustomVariable);
    myCustomVariable = 20;
    console.log(typeof myCustomVariable);
    myCustomVariable = {
        name: "Bruce Wayne",
        age: 30,
        powers: ["Super intellect"]
    };
    console.log(typeof myCustomVariable);
})();
