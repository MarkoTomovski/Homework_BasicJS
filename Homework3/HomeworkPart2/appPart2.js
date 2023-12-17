function presmetkaGodini(isDoggo=true){
    let CovekGodini=parseFloat(prompt("Vnesete kolku godini imate: ")); // koristam parseFloat dokolku se najde nekoj genijalec koj kje pise imam 10.5 godini T_T
    if(isNaN(CovekGodini) || CovekGodini<0){ // mi tekna od prethodnata domasna deka imam propusteno ekstra proverka 
        return 'Invalid input'
    }
    if(isDoggo){
        let dogYears=CovekGodini*7;
        return `Vasheto kuche ima ${dogYears} godini`;
    }
    else{
        let dogYearsobratno= CovekGodini/7;
        return `Vasheto kuche ima ${dogYearsobratno.toFixed(2)} godini`;
    }

}
console.log(presmetkaGodini());
console.log(presmetkaGodini(false)) // go testiram obratniot slucaj