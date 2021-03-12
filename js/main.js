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
  pets: [
    {
      name: "Scooby",
      age: 50,
      gender: "Male",
      breed: "Dane",
      service: "Shower",
      owner: "Shaggy",
      phone: "555-555-5555"
    },
    {
      name: "Scrapy",
      age: 40,
      gender: "Male",
      breed: "Dane",
      service: "Nails Cut",
      owner: "Shaggy",
      phone: "555-555-5555"
    },
    {
      name: "Speedy",
      age: 10,
      gender: "Male",
      breed: "Mixed",
      service: "Full Service",
      owner: "Bugs Bunny",
      phone: "888-888-8888"
    },
    {
      name: "Snoopy",
      age: 35,
      gender: "Male",
      breed: "Beagle",
      service: "Full Service",
      owner: "Charlie Brown",
      phone: "444-555-6666"
    }
  ]
}

const display = document.getElementById('display');
const { pets } = salon;
const names = [];

for (let pet of pets) {
  names.push(`<p>${pet.name}</p>`);
}

display.innerHTML = `
  <p>Number of Pets: ${pets.length}</p>
  ${names.join('\n')}
`;

// class Pet {
//   constructor(name, age, gender, breed, service, owner, phone) {
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
//     this.breed = breed;
//     this.service= service;
//     this.owner = owner;
//     this.phone = phone;
//   }
// }

// const scooby = new Pet("Scooby", 50, "male", "Dane", "Full Service", "Shaggy", "555-555-5555");
// const scrappy = new Pet("Scrappy", 20, "male", "Dane", "Nails Cut", "Shaggy", "555-555-5555");
// const pets = [scooby, scrappy];