function findsum(arr) {
    var Broevi = [];
    
    for (var i = 0; i < arr.length; i++) {
      if (typeof arr[i] === 'number') { //dokolku tipot number, dodadi go
        Broevi.push(arr[i]);
      }
    }
  
    if (Broevi.length === 0) {
      return "No numeric values in the array.";
    }
  
    var max = Broevi[0]; // go postavuvame max da e prviot element od nizata
    var min = Broevi[0]; // isto i za min
    var sum = 0;
  
    for (var i = 0; i < Broevi.length; i++) {
      sum += Broevi[i];
  
      if (Broevi[i] > max) { //// dokolku momentalniot broj od nizata e pogolem od MAX(koj vo prviot slucaj e prviot element od nizata), postavi go max da e toj broj. Drug nacin na koj mozhe da se resi e so postavuvanje na max i min na max Number.NEGATIVE_INFINITY i Number.POSITIVE_INFINITY no ova mi e ostanato vo memorija od strukturno programinje T_T(ne znam dali e najdobar nacin)
        max = Broevi[i];
      }
  
      if (Broevi[i] < min) {
        min = Broevi[i];
      }
    }
    let SUMAmaximin=max+min;
  
    return { Max: max, Min: min, Sum: SUMAmaximin, Vkupno: sum }; //tuka e  zbir na max + min i zbir na site broevi od nizata 
  }
  
  var arr = [3, 5, 6, 8, 11, "abc", true, null, 2];
  var result = findsum(arr);
  console.log(result);
  