export class User {
  constructor(firtsName, secondName) {
    this.firtsName = firtsName;
    this.secondName = secondName;
  }
  sayWelcome() {
    console.log(`Welcome, ${this.firtsName} ${this.secondName}!`);
  }
}