class movie {
  //answer for sub question A
  constructor(title, studio, rating) {
    this.title = title;
    this.studio = studio;
    this.rating = rating ? rating : "PG"; // answer for sub question B
  }

  getPG() {
    // answer for sub question C
    return "the rating is  " + this.rating;
  }
}

var CasinoRoyale = new movie("Casino Royal", "Eon Productions", "PG13"); //answer for sub question D

console.log(CasinoRoyale);
console.log(CasinoRoyale.getPG());
