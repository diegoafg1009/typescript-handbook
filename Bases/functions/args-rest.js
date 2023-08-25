"use strict";
(() => {
    const fullName = (firstName, ...restNames) => {
        return `${firstName} ${restNames.join(" ")}`;
    };
    const superman = fullName("Clark", "Joseph", "Kent");
    console.log({ superman });
})();
