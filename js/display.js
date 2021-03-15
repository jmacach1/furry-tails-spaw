function randomBGcolor(transparency = 80) {
  const t = transparency / 100;
  const colors = [
    `rgba(0, 123, 255, ${t})`, // blue
    `rgba(255, 193, 7, ${t})`, // yellow
    `rgba(253, 126, 20, ${t})`, // orange
    `rgba(40, 167, 69, ${t})`, // green
    `rgba(110, 66, 193, ${t})`, // purple
    `rgba(220, 53, 70, ${t})` // red
  ];
  const index = Math.trunc(Math.random() * colors.length);
  return colors[index];
}

function createCard(pet) {
  const bgCardColor = randomBGcolor();
  return `
  <div class="card" style="width: 15rem; background-color: ${bgCardColor};">
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


