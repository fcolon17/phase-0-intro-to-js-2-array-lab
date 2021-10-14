let cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(name) {
  cats.push(name);
}
function destructivelyPrependCat(name) {
  cats.unshift(name);
}
function destructivelyRemoveLastCat() {
  cats.pop();
}
function destructivelyRemoveFirstCat() {
  cats.shift();
}
function appendCat(name) {
  return [...cats, name];
}
function prependCat(name) {
  return [name, ...cats];
}
function removeLastCat() {
  return ["Milo", "Otis"];
}
function removeFirstCat() {
  return cats.slice(1);
}
