// Write your solution here!
const drivers= ['Milo','Otis','Garfield'];

function destructivelyAppendDriver(name){
  drivers.push('Ralph');
}

function destructivelyPrependDriver(name){
  drivers.unshift('Bob');
}

function destructivelyRemoveLastDriver(name){
  drivers.pop();
}

function destructivelyRemoveFirstDriver(name){
  drivers.shift();
}

function appendDriver(name){
const appendDriver = [...drivers, name];
return appendDriver;
}

function prependDriver(name){
  const prependDriver = [name, ...drivers];
  return prependDriver;
}

function removeLastDriver(){
  slice.drivers();
}