var a = ["Penny", "David", "Your name", "Just one word", "Charcoal"];
var q = [
  "What has a head, a tail, is brown, and has no legs?",
  "David's father has three sons : Snap, Crackle and _____ ?",
  "What belongs to you, but other people use it more than you?",
  "Re-arrange the letters, O O U S W T D N E J R, to spell just one word. What is it?",
  "What is black when you buy it, red when you use it, and gray when you throw it away?"
];
var number;
function showbases() {
  a = document.getElementById("numb").value;
  if (document.getElementById("r2").checked == true) {
    b = 2;
  }
  if (document.getElementById("r4").checked == true) {
    b = 4;
  }
  if (document.getElementById("r8").checked == true) {
    b = 8;
  }
  if (document.getElementById("r10").checked == true) {
    b = 10;
  }
  if (document.getElementById("r16").checked == true) {
    b = 16;
  }
  a = parseInt(a, b);
  document.getElementById("b2").innerHTML = a.toString(2);
  document.getElementById("b4").innerHTML = a.toString(4);
  document.getElementById("b8").innerHTML = a.toString(8);
  document.getElementById("b10").innerHTML = a.toString();
  document.getElementById("b16").innerHTML = a.toString(16);
}
function showv() {
  x1 = document.getElementById("x1").value;
  x2 = document.getElementById("x2").value;
  y1 = document.getElementById("y1").value;
  y2 = document.getElementById("y2").value;
  x1 = parseInt(x1);
  x2 = parseInt(x2);
  y1 = parseInt(y1);
  y2 = parseInt(y2);
  document.getElementById("px3").innerHTML = x1 + x2;
  document.getElementById("py3").innerHTML = y1 + y2;
  document.getElementById("sx3").innerHTML = x1 - x2;
  document.getElementById("sy3").innerHTML = y1 - y2;
  document.getElementById("mul").innerHTML = x1 * x2 + y1 * y2;
  if (x1 * x2 + y1 * y2 == 0) {
    document.getElementById("ver").innerHTML = "yes";
  } else {
    document.getElementById("ver").innerHTML = "no";
  }
}
function start() {
  number = Math.floor(Math.random() * q.length);
  document.getElementById("r1").innerHTML = q[number];
  document.getElementById("picgame").src = "img/game.png";
  document.getElementById("r1").style.color = "whitesmoke";
  document.getElementById("r1").style.fontSize = "16px";
}
function answer() {
  if (a[number] == document.getElementById("uanswer").value) {
    document.getElementById("picgame").src = "img/win.png";
    document.getElementById("r1").innerHTML = "WIN!!!!";
    document.getElementById("r1").style.color = "gold";
  } else {
    document.getElementById("picgame").src = "img/lose.png";
    document.getElementById("r1").innerHTML = "LOSE!!!";
    document.getElementById("r1").style.color = "red";
  }
  document.getElementById("r1").style.fontSize = "42px";
}
function showpic() {
  document.getElementById("big").src =
    "img/" + document.getElementById("view").value + ".jpeg";
}
function Arithmetic() {
  s = "";
  sum = 0;
  var k;
  n0 = document.getElementById("n0").value;
  k = n0;
  n = document.getElementById("n").value;
  d = document.getElementById("idorq").value;
  for (i = 1; i <= n; i++) {
    s = s + k + ", ";
    k = k * 1 + d * 1;
  }
  k = k * 1 - d * 1;
  document.getElementById("series").innerHTML = s;
  document.getElementById("sum").innerHTML = (n * (k * 1 + n0 * 1)) / 2;
}
function geometric() {
  s = "";
  sum = 0;
  n0 = document.getElementById("n0").value;
  k = n0;
  n = document.getElementById("n").value;
  q = document.getElementById("idorq").value;
  for (i = 1; i <= n; i++) {
    s = s + k + ", ";
    sum += k * 1;
    k = k * 1 * q;
  }
  k = (k * 1) / q;
  document.getElementById("series").innerHTML = s;
  document.getElementById("sum").innerHTML = sum;
  if (q > -1 && q < 1) {
    document.getElementById("mitcanes").innerHTML = "mitcanes:Yes";
    document.getElementById("infisum").innerHTML =
      "sum to infinity:" + n0 / (1 - q);
  }
}
function showse() {
  document.getElementById("dorq").style.visibility = "visible";
  if (document.getElementById("sd").checked == true) {
    document.getElementById("pdorq").innerHTML = "d:";
    document.getElementById("btnq").style.visibility = "hidden";
    document.getElementById("btnd").style.visibility = "visible";
  }
  if (document.getElementById("sq").checked == true) {
    document.getElementById("pdorq").innerHTML = "q:";
    document.getElementById("btnd").style.visibility = "hidden";
    document.getElementById("btnq").style.visibility = "visible";
  }
}
