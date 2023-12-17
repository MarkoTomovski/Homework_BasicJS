function CheckType(value){
    let ValueCheck= typeof value;
    console.log(`The type of ${value} is ${ValueCheck}`);
}
CheckType(null);      
CheckType(true);      
CheckType(42);        
CheckType("hello"); 
CheckType(undefined); 