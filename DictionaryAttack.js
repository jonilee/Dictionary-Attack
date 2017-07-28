var wordsList = [];

function init() {

var wordsFile = "https://raw.githubusercontent.com/GirlsFirst/SIP-2017-starter/master/Unit2_Applications/dictionary-attack/dictionary.txt";
$.get(wordsFile, function(data) {
document.getElementById("btnSubmit").disabled = true;
wordsList = data.split('\n');
document.getElementById("btnSubmit").disabled = false;
});
}

window.onload = init;


function checkPassword() {
  var word = document.getElementById("pw").value;
  var x = false;
  for (var i=0; i < wordsList.length; i++) {
    if (word == wordsList[i]){
      x=true;
      break;
    }
  }
  if (x==false) {
      document.getElementById("results").innerHTML = "Strong Password";
  }
  else {
    document.getElementById("results").innerHTML = "Weak Password";
  }
}
