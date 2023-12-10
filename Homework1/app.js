function presmetka(numberPhones, phonePrice, taxRate){
    let subCena= numberPhones*phonePrice; // dobivame cena bez danok
    let tax=subCena*(taxRate/100); // dobienata cena ja mnozime so stapkata na danok
    let vkupnoCena=subCena+tax; // vkupnata cena e zbir na cena bez danok i stapka na danok

    return{
        subCena: subCena.toFixed(2), //  gi ogranicuvam na 2 decimali zaradi preglednost i preciznost
        tax: tax.toFixed(2), //  gi ogranicuvam na 2 decimali zaradi preglednost i preciznost
        vkupnoCena: vkupnoCena.toFixed(2), //  gi ogranicuvam na 2 decimali zaradi preglednost i preciznost
    };

}

let numberPhones=prompt("Vnesete go brojot na telefoni");
let pnumberPhones = parseInt(numberPhones) // morame da napravime parseInt bidejki koga imame prompt go zema kako string vrednost a nie vnesuvame broj na odredeno nesto

if(!isNaN(pnumberPhones)&& pnumberPhones>0){ // proveruvame dali brojot sto e vnesen e navistana broj i dali e pogolem od 0 
    let phonePrice=119.95;
    let taxRate=5;
    let result=presmetka(pnumberPhones, phonePrice, taxRate);

    console.log(`Broj na telefoni : ${pnumberPhones}`);
    console.log(`Cena na eden telefon: $${phonePrice.toFixed(2)}`); // koristime dvojni "$" za da se prikaze samiot znak da dolar
    console.log(`Tax Rate: ${taxRate}%`);
    console.log(`subCena: $${result.subCena}`); // koristime dvojni "$" za da se prikaze samiot znak da dolar
    console.log(`Tax: $${result.tax}`); // koristime dvojni "$" za da se prikaze samiot znak da dolar
    console.log(`Vkupno  Cena: $${result.vkupnoCena}`); // koristime dvojni "$" za da se prikaze samiot znak da dolar

}
else{
    console.log("Vnesete povtorno broj");
}