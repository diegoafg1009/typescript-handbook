(() => {

    // private constructor are useful for singleton pattern, because it prevents the class from being instantiated more than once
    class Singleton {
        // instance is a static property, so it is shared between all instances of the class
        // instance is private, so it can only be accessed from inside the class
        private static instance: Singleton;

        // private constructor, so it can only be instantiated from inside the class
        private constructor() {
            // do something construct...
        }

        // static method to get the instance of the class
        public static getInstance(): Singleton {
            if (!Singleton.instance) {
                Singleton.instance = new Singleton();
            }

            return Singleton.instance;
        }
    }

})();