/* id generator */
const idGenerator = {
  currentId: 0,
  generateId: function() {
    this.currentId += 1
    return this.currentId;
  }
}

class Pet {
  constructor(name, age, gender, petType, breed, service, owner, phone) {
    this.id = idGenerator.generateId();
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.petType = petType;
    this.breed = breed;
    this.service = service;
    this.owner = owner;
    this.phone = phone;
    this.icon = petType.split(" ")[0];
  }
}

const starterPets = [
    new Pet("Scooby", 50, "male", "🐶 Dog", "Dane", "💯 Full Service", "Shaggy","555-555-5555"),
    new Pet("Scrappy", 10, "male", "🐶 Dog", "Dane", "✂️ Nails Cut", "Shaggy", "555-555-5555"),
    new Pet("Snoopy", 70, "male", "🐶 Dog", "Beagle", "🛁 Shower", "Charlie Brown", "111-222-3333"),
    new Pet("Garfield", 60, "male", "🐱 Cat", "Tabby", "💯 Full Service", "Jon", "222-333-4444"),
    new Pet("Tweety", 15, "female", "🐦 Bird", "Canary", "🛁 Shower", "Warner", "222-21-1111"),
    new Pet("Rajah", 24, "female", "🐱 Cat", "Tiger", "🐾 Nails Cut", "Jasmine", "756-221-3535"),
    new Pet("Daisy", 24, "female", "🐦 Bird", "White Duck", "🛁 Shower", "Walt", "751-221-3535"),
];

// instantiate salon
const salon = {
  name: "Furry Tails Spaw",
  address: {
    city: "Irvine",
    street: "235 Alton Parkway Suite 200"
  },
  hours: {
    open: '10:00 am',
    close: '5:00 pm'
  },
  petTypes: ["🐦 Bird", "🐱 Cat", "🐶 Dog"], 
  pets: new Map(),
  petCounts: {}
}

for (const pet of starterPets) {
  salon.pets.set(pet.id, pet);
}

for (const petType of salon.petTypes) {
  salon.petCounts[petType] = 0;
}

console.log(salon);