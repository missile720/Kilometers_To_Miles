let kilometers = 0;
let miles = 0;

document.querySelector('#addButton').onclick = function(){converter()};

function converter(){
  kilometers = Number(document.getElementById("inputText").value);
  miles = kilometers/1.609344;
  document.querySelector("#result").innerHTML = miles;
}