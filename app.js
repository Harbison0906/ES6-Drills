let favMovie = (name = 'World', movie = 'The Room') => console.log(`My name is ${name} and my favorite movie is ${movie}.`);

favMovie();



const getFirstName = (name) => {
  let firstName = name.split(' ');
  console.log(firstName[0]);
}
getFirstName('Joshua Harbison');


const getNameOne = name => console.log(name.split(' ')[0]);

getNameOne('Joshua Harbison');

const sethsFunc = (x, y) => {
  let exp = Math.pow(x, y);
  let product = x * y;

  return { exp, product };
}

let math = sethsFunc(4, 5);

console.log(math);

const newFunc = (name, location, favFood) => {
  let array = ['Jim', 'New York', 'hot pockets'];
  let arrayCopy = [...array];
  console.log(arrayCopy);
}

newFunc();

let name = 'Seth Harbison';

const myFunc = nameArray => {
  let newName = [...name];
  let i;
  for (i = 0; i < name.length; i++) {
    console.log(newName[i]);
  }
  // console.log(newName[0]);
}

myFunc();


