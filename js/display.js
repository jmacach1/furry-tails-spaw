function display() {
  const display = document.getElementById('petDisplay');
  const cards = [];
  for (const pet of pets) {
    cards.push(`
      <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${pet.name}</h5>
          <h6 class="card-subtitle mb-2 text-muted">Owner: ${pet.owner}</h6>
          <p class="card-text">Age: ${pet.owner}</p>
        </div>
      </div>
    `)
  }
  display.innerHTML = cards.join(' ');
}
