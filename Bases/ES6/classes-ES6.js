(() => {

    class Avenger {
        name;
        power;

        constructor(name = "John Doe", power = 0) {
            this.name = name;
            this.power = power;
        }
    }

    class FlyingAvenger extends Avenger {
        flying;
        constructor(name, power) {
            super(name, power);
            this.flying = true;
        }
    }

    const hulk = new Avenger("Bruce Banner", 100000);
    console.log(hulk);

    const falcon = new FlyingAvenger("Sam Wilson", 50);
    console.log(falcon);

})();