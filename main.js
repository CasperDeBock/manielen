document.getElementsByTagName("select")[0].onchange = function () {
  var vals = ["hart", "koek", "kla", "schop"];
  var theChoise;
  var sel = document.getElementById("sel");
  var index = this.selectedIndex;
  var inputText = this.children[index].innerHTML.trim();
  sel.classList.remove("hart");
  sel.classList.remove("koek");
  sel.classList.remove("kla");
  sel.classList.remove("schop");
  switch (inputText) {
    case "HARTEN":
      sel.classList.add("hart");
      break;
    case "KOEKEN":
      sel.classList.add("koek");
      break;
    case "KLAVERS":
      sel.classList.add("kla");
      break;
    case "SCHOPPEN":
      sel.classList.add("schop");
      break;
    case "RANDOM":
      theChoise = vals[Math.floor(Math.random() * vals.length)];
      sel.classList.add(theChoise);
      break;
    default:
    // code block
  }
};

var score1 = 0;
var score2 = 0;
document.getElementById("speler1").innerHTML = score1;
document.getElementById("speler2").innerHTML = score2;
function voegtoe(speler) {
  if (speler == "speler1") {
    var aantal = document.getElementById("aantal").value;
    score1 = parseInt(aantal) + score1;
    document.getElementById(speler).innerHTML = score1;
  } else {
    var aantal = document.getElementById("aantal2").value;
    score2 = parseInt(aantal) + score2;
    document.getElementById(speler).innerHTML = score2;
  }
}
