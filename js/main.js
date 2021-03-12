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