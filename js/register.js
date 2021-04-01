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
  return !(
    pet.name == "" ||
    pet.age == "" ||
    pet.gender == "" ||
    pet.age == "" ||
    pet.breed == "" ||
    pet.service == "" ||
    pet.owner == "" ||
    pet.phone == ""
  );
}

function register() {
  const pet = getNewPet();
  const invalid = !validatePet(pet);
  if (invalid) {
    alert("Invalid Pet Input");
    return;
  }
  salon.pets.set(pet.id, pet);
  alertAdd()
  display();
}

const addPetBtn = document.getElementById('addPetBtn');
addPetBtn.addEventListener('click', function(e) {
  e.preventDefault();
  register();
});

function deletePet(petId) {
  salon.pets.delete(petId);
  alertDelete()
  display();
}

const alertDiv = document.getElementById('alertDiv');
function alertAdd() {
  alertDiv.innerHTML = `
    <div class="alert alert-success" role="alert">
      Congratulations, a Pet was added.
    </div>
  `;
}


function alertDelete() {
  alertDiv.innerHTML = `
    <div class="alert alert-danger" role="alert">
      A Pet was deleted.
    </div>
  `;
}