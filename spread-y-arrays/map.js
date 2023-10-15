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
    "name": "John Doe",
    "age": 30,
    "city": "New York",
    "gender": "Male",
    "occupation": "Engineer"
  },
  {
    "name": "Jane Smith",
    "age": 25,
    "city": "Los Angeles",
    "gender": "Female",
    "occupation": "Teacher"
  },
  {
    "name": "Michael Johnson",
    "age": 35,
    "city": "Chicago",
    "gender": "Male",
    "occupation": "Doctor"
  },
  {
    "name": "Emily Davis",
    "age": 28,
    "city": "San Francisco",
    "gender": "Female",
    "occupation": "Designer"
  }
]
//dom
const inputNombre = document.getElementById('nombre');
console.log(inputNombre);

const divNombres = document.querySelector('.nombres');
console.log(divNombres);

//SPREAD
//functions
const nameAndOccupation = (person) => {
  return `${person.occupation} ${person.name}`;
}
const createIndividual = (individual) =>{
  const{name,occupation,...rest} = individual;
  return{
    'name-occupation': nameAndOccupation(individual),
    rest
  }
}

//MAP
const newPeople = people.map(createIndividual);
console.log('Nuevo Array:',newPeople);

//REDUCE
const totalEdades = people.reduce((acumulador,person)=>{return acumulador+ person.age},0);
console.log('Suma de edades:',totalEdades);

//FILTER
//functions
const mayores = people.filter((person) => person.age>=30)
console.log('filtrados por edad',mayores);

const busquedaNombre = people.filter((person))

