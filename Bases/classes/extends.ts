(() => {

    class Hero {
        constructor(
            public name: string,
            private _realName: string
        ) {
        }

        get realName(): string {
            return this._realName;
        }

        set realName(realName: string) {
            this._realName = realName;
        }

        //need to be protected to be used in the child class
        protected getFullName(): string {
            return `${this.name} ${this._realName}`;
        }
    }

    class Avenger extends Hero {
        constructor(
            name: string,
            realName: string,
            public canFight?: boolean,
            public wins?: number
        ) {
            super(name, realName);
        }

        public secretIdentity(): string {
            return `${this.getFullName()}`;
        }
    }

    const antMan: Avenger = new Avenger("AntMan", "Scott Lang", true, 1);
    // console.log(antMan.secretIdentity());
    // console.log(antMan.realName);
    antMan.realName = "Hank Pim";
    // console.log(antMan.realName);

})();