function presmetka(numbers){
    let zbir=0;
    for(let i=0; i<numbers.length;i++){
        if(!Broj(numbers[i])){
            alert("Postoi element od nizata koj ne e broj");
        }else{
            zbir+=numbers[i]
        }
        
    }
    document.write(`Zbirot iznesuva ${zbir}.(Gi vklucuva site elementi koi se broevi duri i da najde invalid element t.e ne prestanuva)`)
}
function Broj(value){
    return !isNaN(parseFloat(value) && isFinite(value));
}

let NizaBroevi=[2,3,5,"sadasd",10];
presmetka(NizaBroevi)
