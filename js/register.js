class Pet {
  constructor(name, age, gender, breed, service, owner, phone) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.breed = breed;
    this.service= service;
    this.owner = owner;
    this.phone = phone;
  }
}

const scooby = new Pet("Scooby", 50, "male", "Dane", "Full Service", "Shaggy", "555-555-5555");
const scrappy = new Pet("Scrappy", 20, "male", "Dane", "Nails Cut", "Shaggy", "555-555-5555");
const pets = [scooby, scrappy];

const petNameInput = document.getElementById('petName');
const petAgeInput = document.getElementById('petAge');
const petGenderInput = document.getElementById('petGender');
const petBreedInput = document.getElementById('petBreed');
const petServiceInput = document.getElementById('petService');
const ownerNameInput = document.getElementById('ownerName');
const ownerPhoneInput = document.getElementById('ownerPhone');
const addPetBtn = document.getElementById('addPetBtn');

function getNewPet() {
  const pet = new Pet(
    petNameInput.value,
    petAgeInput.value, 
    petGenderInput.value, 
    petBreedInput.value, 
    petServiceInput.value, 
    ownerNameInput.value, 
    ownerPhoneInput.value
  );
  return pet;
}

function register() {
  const new_pet = getNewPet();
  console.log(new_pet);
  pets.push(new_pet);
  console.log(pets);
  display();
}

addPetBtn.addEventListener('click', function(e) {
  e.preventDefault();
  register();
});

display();