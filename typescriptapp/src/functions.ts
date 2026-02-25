function sayHello(name: string): string {
  return "Hello " + name.toUpperCase();
}

const message = sayHello("varinder gupta");
console.log(message);

// Optional parameters
function sayBye(name = "John"): string {
  return "Bye " + name.toUpperCase();
}

console.log(sayBye("varinder gupta"));

// Arrow function
const sayBye1 = (name = "John"): string => {
  return "Bye " + name.toUpperCase();
};

console.log(sayBye1());
