//Recursion: it's a function that refers itself inside of the function
function inception() {
  debugger;
  inception();
}
inception(); //Maximum call stack size exceeded: stack overflow
