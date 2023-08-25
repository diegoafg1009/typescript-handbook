(() =>{
    const batman: string = 'Batman';
    const greenLantern: string = "Green Lantern";
    const flash: string = `Flash`;

    console.log(`I'm ${ batman }`);

    console.log(batman[10]?.toUpperCase() || 'Is not here');
})();