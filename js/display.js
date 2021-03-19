const blue = `rgba(0, 123, 255, .5)`;
const yellow = `rgba(255, 193, 7, .5)`;
const green = `rgba(40, 167, 69, .5)`;
const purple = `rgba(110, 66, 193, .5)`;
const red = `rgba(220, 53, 70, .4)`;
const servicePriceColor = [
  {
    service: "Full Service",
    price: 100,
    color: purple
  },
  {
    service: "Shower",
    price: 60,
    color: blue
  },
  {
    service: "Hair Cut",
    price: 40,
    color: yellow
  },
  {
    service: "Nails Cut",
    price: 30,
    color: blue
  }
];

function getPriceColorByService(serviceInput) {
  service = serviceInput.slice(3);
  for (let spc of servicePriceColor) {
    if (service === spc.service) return spc;
  }
  return { service: serviceInput, price: 0, color: red }
}

function createCard(pet) {
  const spc = getPriceColorByService(pet.service);
  pet.price = spc.price;
  return `
    <div class="card" style="width: 15rem; background-color: ${spc.color};">
      <div class="card-header">
        <h5 class="card-title">${pet.name} ${pet.icon}</h5>
        <h6 class="card-subtitle mb-2">Owned by: ${pet.owner}</h6>
        <h6 class="card-subtitle mb-2">Phone: ${pet.phone}</h6>
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


function display() {
  const displayDiv = document.getElementById('petDisplay');
  const cards = [];
  for (const pet of pets) {
    cards.push(createCard(pet));
  }
  displayDiv.innerHTML = cards.join(' ');
}


