(() =>{
    const hero: string = "Flash";

    const returnName = () : string => {
        return hero;
    }

    function activeBatSignal():string{
        return "Bat signal is now active!";
    }

    console.log(typeof activeBatSignal());
})();