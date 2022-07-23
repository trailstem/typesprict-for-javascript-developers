export {};

class Animal {
  constructor(public name: string) {}
  run(): string {
    return "I can run";
  }
}

//継承
class Lion extends Animal {
  public speed: number;
  constructor(name: string, speed: number) {
    super(name);

    this.speed = speed;
  }
  run(): string {
    // const parent = super.run();
    // console.log({parent});
    return `${super.run()} 80km`;
  }
}

// let animal = new Animal();
// console.log(animal.run());
// let lion = new Lion();
// console.log(lion.run());

console.log(new Animal("micky").run);
console.log(new Lion("COco", 80).run);
