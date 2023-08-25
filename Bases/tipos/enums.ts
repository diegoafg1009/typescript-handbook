(() => {

    enum AudioLevel {
        min = 0,
        medium,
        max = 10
    }

    let currentAudio = AudioLevel.max;

    console.log(currentAudio);
    console.log(AudioLevel);

})();