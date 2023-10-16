//DATA
pets = [
  {
    name: "Buddy",
    age: 3,
    species: "Dog",
    color: "Golden",
    vaccinated: true,
  },
  {
    name: "Whiskers",
    age: 2,
    species: "Cat",
    color: "Cream and Brown",
    vaccinated: true,
  },
  {
    name: "Nibbles",
    age: 1,
    species: "Hamster",
    color: "Gray",
    vaccinated: false,
  },
  {
    name: "Rio",
    age: 5,
    species: "Parrot",
    color: "Red and Blue",
    vaccinated: true,
  },
  {
    name: "Luna",
    age: 4,
    species: "Rabbit",
    color: "Brown",
    vaccinated: false,
  },
  {
    name: "Spike",
    age: 2,
    species: "Hedgehog",
    color: "Brown and White",
    vaccinated: false,
  },
  {
    name: "Misty",
    age: 3,
    species: "Ferret",
    color: "Sable",
    vaccinated: false,
  },
  {
    name: "Tigger",
    age: 2,
    species: "Rabbit",
    color: "Orange",
    vaccinated: true,
  },
  {
    name: "Oreo",
    age: 2,
    species: "Guinea Pig",
    color: "Black and White",
    vaccinated: false,
  },
  {
    name: "Fluffy",
    age: 3,
    species: "Cat",
    color: "White",
    vaccinated: true,
  },
  {
    name: "Max",
    age: 4,
    species: "Dog",
    color: "Yellow",
    vaccinated: true,
  },
  {
    name: "Coco",
    age: 3,
    species: "Rabbit",
    color: "Black and White",
    vaccinated: true,
  },
  {
    name: "Milo",
    age: 2,
    species: "Cat",
    color: "Orange and White",
    vaccinated: true,
  },
  {
    name: "Lucy",
    age: 3,
    species: "Dog",
    color: "Tricolor",
    vaccinated: true,
  },
  {
    name: "Peanut",
    age: 1,
    species: "Hamster",
    color: "Light Brown",
    vaccinated: false,
  },
  {
    name: "Charlie",
    age: 2,
    species: "Cat",
    color: "Black",
    vaccinated: true,
  },
  {
    name: "Rocky",
    age: 5,
    species: "Dog",
    color: "Brown and Black",
    vaccinated: true,
  },
  {
    name: "Bella",
    age: 4,
    species: "Dog",
    color: "White",
    vaccinated: true,
  },
  {
    name: "Daisy",
    age: 3,
    species: "Cat",
    color: "Calico",
    vaccinated: true,
  },
  {
    name: "Snowball",
    age: 2,
    species: "Rabbit",
    color: "White",
    vaccinated: false,
  },
];
//VARIABLES Y DOM
let myVaccinatedPets = [];
let myNotVaccinatedPets = [];
const clearLocal = document.querySelector('.localClear');
clearLocal.addEventListener('click',(ev)=>{clearLocalStorage()});
//FUNCTIONS
const clearLocalStorage = () =>{
  localStorage.clear();
}
const localVaccinated = (el) => {
  if (!localStorage.vaccinated) {
    console.log('creo array myPets');
  } else {
    myVaccinatedPets = JSON.parse(localStorage.getItem("vaccinated"));
  }
  myVaccinatedPets.push(el);
  localStorage.setItem("vaccinated", JSON.stringify(myVaccinatedPets));
};
const localNotVaccinated = (el) => {
  if (!localStorage.notVaccinated) {
    console.log('creo array myPets');
  } else {
    myNotVaccinatedPets = JSON.parse(localStorage.getItem("notVaccinated"));
  }
  myNotVaccinatedPets.push(el);
  localStorage.setItem("notVaccinated", JSON.stringify(myNotVaccinatedPets));
};

const itsVaccinated = (pet) => {
  if (pet.vaccinated) {
    return pet;
  }
};
const notVaccinated = (pet) => {
  if (!pet.vaccinated) {
    return pet;
  }
};
const petCard = (pet) => {
  const template = `
  <div>
    <p>Name: ${pet.name}</p>
    <p>Name: ${pet.age}</p>
    <p>Name: ${pet.species}</p>
    <p>Name: ${pet.color}</p>
    <p>Name: ${pet.vaccinated}</p>
  </div>
  `;
  return template;
};

//PROMISE
const petsPromise = new Promise((done) => {
  setTimeout(() => {
    done(pets);
  }, 2000);
});
//PROGRAM
petsPromise
  .then((petList) => petList.filter(itsVaccinated))
     .then(result => localVaccinated(result)) 
  .then(petsPromise
      .then((petList) => petList.filter(notVaccinated))
         .then(result => localNotVaccinated(result)));
