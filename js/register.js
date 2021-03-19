class Pet {
  constructor(name, age, gender, petType, breed, service, owner, phone) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.petType = petType.slice(2);
    this.breed = breed;
    this.service = service;
    this.owner = owner;
    this.phone = phone;
    this.icon = petType.split(" ")[0];
  }
}

const scooby = new Pet(
  "Scooby", 50, "male", "🐶 Dog", "Dane", "💯 Full Service", "Shaggy", "555-555-5555");
const scrappy = new Pet(
  "Scrappy", 20, "male", "🐶 Dog", "Dane", "✂️ Nails Cut", "Shaggy", "555-555-5555");
const pets = [scooby, scrappy];

const petNameInput = document.getElementById('petName');
const petAgeInput = document.getElementById('petAge');
const petGenderInput = document.getElementById('petGender');
const petTypeInput = document.getElementById('petType');
const petBreedInput = document.getElementById('petBreed');
const petServiceInput = document.getElementById('petService');
const ownerNameInput = document.getElementById('ownerName');
const ownerPhoneInput = document.getElementById('ownerPhone');
const addPetBtn = document.getElementById('addPetBtn');

function getNewPet() {
  return new Pet(
    petNameInput.value,
    petAgeInput.value, 
    petGenderInput.value, 
    petTypeInput.value, 
    petBreedInput.value, 
    petServiceInput.value, 
    ownerNameInput.value, 
    ownerPhoneInput.value
  );
}

function validatePet(pet) {
  if (
    pet.name == "" ||
    pet.age == "" ||
    pet.gender == "" ||
    pet.age == "" ||
    pet.breed == "" ||
    pet.service == "" ||
    pet.owner == "" ||
    pet.phone == ""
  ) {
    alert("Invalid Pet Input")
    return false;
  };
  return true;
}

function register() {
  const new_pet = getNewPet();
  if (!validatePet(new_pet)) return;
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