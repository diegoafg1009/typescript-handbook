"use strict";
(() => {
    const hero = "Flash";
    const returnName = () => {
        return hero;
    };
    function activeBatSignal() {
        return "Bat signal is now active!";
    }
    console.log(typeof activeBatSignal());
})();
