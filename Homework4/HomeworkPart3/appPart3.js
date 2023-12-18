function NizaString(arrayOfStrings){
    if(!Array.isArray(arrayOfStrings)){ // pravime proverka za niza
        return "Input is not an array"
    }
    let resultString=""//pravime prazen string kade sto kje se cuva rezultatot
    for(let i=0;i<arrayOfStrings.length;i++){
        resultString+=arrayOfStrings[i]; // vo prazniot string go dodavame sekoj element sto e vnesen
        if(i<arrayOfStrings.length-1){
            resultString+=" ";
        } // za preglednost pravam proverka kade sto kje se dodade prazno mesto osven na posledniot element
    }
    return resultString;
}
let VnesiNiza=["Hello", "there", "students", "of", "SEDC", "!"];
let result=NizaString(VnesiNiza); // pravam nova promenliva vo koja kje se cuva rezultatot po izvrsuvanjeto na samata funkcija
document.write(result)
