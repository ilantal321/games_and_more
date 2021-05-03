function clickn(n) {
  myform.screen.value += n;
}
function equalto() {
  myform.screen.value = eval(myform.screen.value);
}
function ac() {
  myform.screen.value = "";
}
function back() {
  var p = myform.screen.value;
  myform.screen.value = p.substr(0, p.length - 1);
}
function fsin() {
  myform.screen.value = Math.sin(myform.screen.value);
}
function fcos() {
  myform.screen.value = Math.cos(myform.screen.value);
}
function ftan() {
  myform.screen.value = Math.tan(myform.screen.value);
}
function pow2() {
  myform.screen.value = Math.pow(myform.screen.value, 2);
}
function rot2() {
  myform.screen.value = Math.pow(myform.screen.value, 1 / 2);
}
function fac() {
  var i = 1;
  var sum = 1;
  p = myform.screen.value;
  for (i = 1; i <= p; i++) {
    sum *= i;
  }
  myform.screen.value = sum;
}
function rotN() {
  var p = prompt("Please enter your number", "3");
  myform.screen.value = Math.pow(myform.screen.value, 1 / p);
}
function powN() {
  var p = prompt("Please enter your number", "3");
  myform.screen.value = Math.pow(myform.screen.value, p);
}
function ran() {
  myform.screen.value = Math.floor(Math.random() * 100 + 1);
}
