function spoeno(firstNames, lastNames){
    if(!Array.isArray(firstNames) || !Array.isArray(lastNames)){
        alert("Invalid input");
        return [];
    }

    let CeloImePrez=[] // pravime prazna niza kade sto kje se cuva i ime i prez
    for(let i=0;i<firstNames.length;i++){
        let celosno = `${i + 1}. ${firstNames[i]} ${lastNames[i]}`;
        CeloImePrez.push(celosno);
    }
    return CeloImePrez;
}
let firstNames=["Marko", "Ivan"];
let lastNames=["Tomovski","Ivanov"];
let result=spoeno(firstNames,lastNames);
console.log(result)