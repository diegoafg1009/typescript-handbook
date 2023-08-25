"use strict";
(() => {
    let avengers = 10;
    console.log(avengers);
    const villains = 20;
    if (avengers < villains) {
        console.log('We are in trouble');
    }
    else {
        console.log('We are safe');
    }
    avengers = Number('55A');
    console.log({ avengers });
})();
