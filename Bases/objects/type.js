"use strict";
(() => {
    let flash = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Super velocity', 'Travel in time']
    };
    let superman = {
        name: 'Clark Kent',
        age: 25,
        powers: ['Superpower', 'X-ray vision'],
        getName() {
            return this.name;
        }
    };
});
