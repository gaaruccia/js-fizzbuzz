// Contare da 1 a 100
for (var i = 1; i <= 100; i++) {
//ma per i multipli di 3 stampi “Fizz” al posto del numero
  if((i % 3 == 0) && (i % 5 == 0)){
    var n = "Fizz Buzz"
  }
//e per i multipli di 5 stampi “Buzz”.
  else if(i % 3 == 0){
    var n = "Fizz"
  }
//infine per i numeri che sono sia multipli di 3 che di 5 stampi” FizzBuzz”
  else if(i % 5 == 0){
   var n = "Buzz"
  }
  else{
    var n = i
  }
  var numeroPrecedente = document.getElementById('mio_id').innerHTML
  document.getElementById('mio_id').innerHTML = numeroPrecedente + "<li>" + n + "</li>";
}
