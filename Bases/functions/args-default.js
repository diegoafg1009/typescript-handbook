"use strict";
(() => {
    const fullName = (firstName, lastName, upper = false) => {
        const fullName = `${firstName} ${lastName || "Doe"}`;
        if (upper) {
            return fullName.toUpperCase();
        }
        return fullName;
    };
    const name = fullName('Tony', 'Stark', true);
    console.log({ name });
})();
