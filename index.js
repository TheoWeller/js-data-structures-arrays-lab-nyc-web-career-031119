// Write your solution here!

const drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver(name) {
  drivers.push(name);
}

function destructivelyPrependDriver(name) {
  drivers.unshift(name)
}

function destructivelyRemoveLastDriver() {
  drivers.pop();
}

function destructivelyRemoveFirstDriver() {
  drivers.shift();
}

function appendDriver(name) {
  let myNewArray = [...drivers, name];
  return myNewArray;
}

function prependDriver(name) {
  let myNewArray = [...drivers];
  myNewArray.unshift(name);
  return myNewArray;
}

function removeLastDriver() {
  let myNewArray = drivers.pop();
  return myNewArray;
}
