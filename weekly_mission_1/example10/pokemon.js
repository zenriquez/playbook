export default class Pokemon {
    constructor(name) {
      this.name = name;
    }
  
    sayHello = () => {
      //actions
      console.log(`Mi pokemon ${this.name} te saluda!!!`);
    };
  }