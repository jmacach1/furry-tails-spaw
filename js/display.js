const blue = `rgba(0, 123, 255, .4)`;
const yellow = `rgba(255, 193, 7, .4)`;
const green = `rgba(40, 167, 69, .4)`;
const purple = `rgba(110, 66, 193, .4)`;
const red = `rgba(220, 53, 70, .4)`;
const servicePriceColor = {
  "Full Service": {
    service: "Full Service",
    price: 100,
    color: purple
  },
  "Shower": {
    service: "Shower",
    price: 60,
    color: blue
  },
  "Hair Cut": {
    service: "Hair Cut",
    price: 40,
    color: yellow
  },
  "Nails Cut": {
    service: "Nails Cut",
    price: 30,
    color: green
  }
};

function getPriceColorByService(serviceInput) {

  service = serviceInput.slice(3);
  if (service in servicePriceColor) {
    return servicePriceColor[service];
  }
  return { service: serviceInput, price: 0, color: red }
}
 
function createCard(pet) {
  const spc = getPriceColorByService(pet.service);
  pet.price = spc.price;
  return `
    <div id="${pet.id}" class="card pet-card" style="width: 15rem; background-color: ${spc.color};">
      
      <div class="card-header">
        <h5 class="card-title">${pet.name} ${pet.icon}</h5>
        <h6 class="card-subtitle mb-2">Owned by: ${pet.owner}</h6>
        <h6 class="card-subtitle mb-2">Phone: ${pet.phone}</h6>
        <button class="delete-pet-btn" onclick="deletePet(${pet.id})">❌</button>
      </div>
      <div class="card-body">
        <p class="card-text">Age: ${pet.age}</p>
        <p class="card-text">Gender: ${pet.gender}</p>
        <p class="card-text">Type: ${pet.petType}</p>
        <p class="card-text">Breed: ${pet.breed}</p>
        <p class="card-text">Service: ${pet.service}</p>
        <p class="card-text">Price: $${pet.price}</p>
      </div>
    </div>
  `;
}

function countPets() {
  for (const pet of salon.pets.values()) {
    if (!(pet.petType in salon.petCounts)) continue;
    salon.petCounts[pet.petType] += 1;
  }
}

function createCountCard(key, value) {
  return `
  <div class="card">
    <div class="card-body">
      <p class="card-text">${key}: ${value}</p>
    </div>
  </div>
`;
}


const displayDiv = document.getElementById('petDisplay');
function display() {
  const cards = [];
  for (const pet of salon.pets.values()) {
    cards.push(createCard(pet));
  }
  displayDiv.innerHTML = cards.join(' ');

  countPets();
  const petCountsDisplay = document.getElementById('petCounts');
  const counts = []
  for (const [key, value] of Object.entries(salon.petCounts)) {
    counts.push(createCountCard(key,value));
  }
  petCountsDisplay.innerHTML = counts.join('');
}

display();
console.log(salon);

// Search
const searchPetInput = document.getElementById('searchPet');
searchPetInput.addEventListener('submit', function(event) {
  event.preventDefault();
  console.log(event.target);
  const searchText = event.target.searchInput.value.toLowerCase();
  console.log(searchText);
  if (searchText === "") {
    console.log("searchText", searchText)
    display();
    return
  }
  const pets = [...salon.pets.values()];
  
  const filteredPets = pets.filter((pet) => {
    const nameMatches = pet.name.toLowerCase().includes(searchText);
    const serviceMatches = pet.service.toLowerCase().includes(searchText);
    return nameMatches || serviceMatches;
  });

  const cards = []
  for (const pet of filteredPets) {
    cards.push(createCard(pet));
  }
  displayDiv.innerHTML = cards.join(' ');
});