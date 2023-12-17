function ATM(){
    let Balance=10000;

    let withdrawlAmount = parseFloat(prompt("Vnesete suma koja sakate da ja izvadite: "))
    if(isNaN(withdrawlAmount) || withdrawlAmount<=0){
        return "Invalid input";
    }
    if(withdrawlAmount>Balance){
        return "Not enough money, hustle harder";
    }
    else{
        let ostanato=Balance-withdrawlAmount;
        return `Ste izvadile ${withdrawlAmount}, imate ostanato uste ${ostanato}`;
    }
}

document.write(ATM())