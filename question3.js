//Write a “person” class to hold all the details.

class person {
  constructor(name, age, company, phone, email, place) {
    this.name = name;
    this.age = age;
    this.company = company;
    this.phone = phone;
    this.email = email;
    this.place = place;
  }
}

let nikhil = new person(
  "Nikhil",
  30,
  "Guvi",
  9488688008,
  "nikhilprasadinbox@gmail.com",
  "Hosur"
);

console.log(nikhil);
