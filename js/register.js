const petNameInput = document.getElementById('petName');
const petAgeInput = document.getElementById('petAge');
const petGenderInput = document.getElementById('petGender');
const petTypeInput = document.getElementById('petType');
const petBreedInput = document.getElementById('petBreed');
const petServiceInput = document.getElementById('petService');
const ownerNameInput = document.getElementById('ownerName');
const ownerPhoneInput = document.getElementById('ownerPhone');

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
  salon.pets.push(new_pet);
  console.log(pets);
  display();
}

const addPetBtn = document.getElementById('addPetBtn');
addPetBtn.addEventListener('click', function(e) {
  e.preventDefault();
  register();
});

