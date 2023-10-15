numeros = [
  5, 12, 34, 7, 18, 34, 56, 21, 9, 45, 12, 73, 2, 81, 37, 6, 19, 5, 91, 23, 42,
  64, 8, 31, 17, 56, 5, 12, 29, 47, 18, 77, 13, 65, 6, 43, 16, 5, 12, 54, 68,
  27, 8, 57, 14, 36, 5, 9, 62, 38, 72, 11, 27, 33, 19, 5, 30, 58, 10, 5, 26, 51,
  15, 39, 79, 5, 18, 44, 6, 67, 22, 5, 28, 70, 55, 47, 8, 5, 82, 41, 17, 9, 5,
  53, 35, 75, 12, 16, 48, 5, 63, 85, 10, 61, 24, 5, 20, 66, 32, 74, 5, 46, 69,
  1,
];

people = [
  {
    name: "John Doe",
    age: 30,
    city: "New York",
    gender: "Male",
    occupation: "Engineer",
  },
  {
    name: "Jane Smith",
    age: 25,
    city: "Los Angeles",
    gender: "Female",
    occupation: "Teacher",
  },
  {
    name: "Michael Johnson",
    age: 35,
    city: "Chicago",
    gender: "Male",
    occupation: "Doctor",
  },
  {
    name: "Emily Davis",
    age: 28,
    city: "San Francisco",
    gender: "Female",
    occupation: "Designer",
  },
];
//VARIABLES
let encontradas =[];

//FUNCTIONS

/**
 * Esta función concatena el atributo occupation y name de cada objeto del array people.
 * @param person Será el objeto en el array people a analizar 
 * @returns string, devuelve un string que es la concatenación de los valores de los atributos name y occupation.
 */
const nameAndOccupation = (person) => {
  return `${person.occupation} ${person.name}`;
};

/**
 * Esta funcion separa los atributos name y occupation del resto, en cada objeto para luego utilizar la funcion nameAndOccupation.
 * creando un nuevo objeto con el atributo name-occupation que pasara a ser la concatenacion de los dos separados.
 * @param individual nuevo objeto en un nuevo array modificado antes era person, ahora es individual.
 * @returns object, devuelve el objeto modificado.
 */
const createIndividual = (individual) => {
  //spread
  const { name, occupation, ...rest } = individual;
  return {
    "name-occupation": nameAndOccupation(individual),
    rest,
  };
};

/**
 * Esta función verifica si lo que el usuario busca en el input del formulario existe entre los atributos name de cada objeto en el array people.
 * @param {*} person elemento del tipo objeto en el array analizado.
 * @returns 
 */
const buscarPersonas = (person) =>
  person.name.toLowerCase().includes(inputNombre.value.toLowerCase());

//DOM
const formulario = document.querySelector("form");
console.log(formulario);
formulario.addEventListener("submit", (ev) => {
  ev.preventDefault();
  encontradas = people.filter(buscarPersonas);
  console.log("Personas encontradas:", encontradas);
});

const inputNombre = document.getElementById("nombre");
console.log(inputNombre);
const divNombres = document.querySelector(".nombres");
console.log(divNombres);

//MAP
const newPeople = people.map(createIndividual);
console.log("Nuevo Array:", newPeople);

//REDUCE
const totalEdades = people.reduce((acumulador, person) => {
  return acumulador + person.age;
}, 0);
console.log("Suma de edades:", totalEdades);

//FILTER
const mayores = people.filter((person) => person.age >= 30);
console.log("filtrados por edad", mayores);