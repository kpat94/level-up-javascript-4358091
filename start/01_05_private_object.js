// Write your code here
const username = Symbol("username");
const password = Symbol("password");

const user = {
  [username]: "kparth",
  [password]: "1241351",
  age: 27
}

console.log(user.username);
console.log(user.password);