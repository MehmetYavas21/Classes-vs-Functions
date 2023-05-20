class Animal {
	constructor(species, legs, name) {
		this.species = species;
		this.legs = legs;
		this.name = name; // added later
	}

	identify() {
		console.log(`This animal is a ${this.species}, and has ${this.legs} legs.`);
	}
  // adding fetch()
	fetch() {
		console.log("I don't want to fetch.");
	}
}

class Dog extends Animal {
	constructor(name) {
		super('dog', 4, name); // a dog has 4 legs
	}

	bark() {
		console.log('Woof!');
	}
  // why do we use item as prop in fetch ?????
	fetch(item) {
		console.log(`${this.species} is fetching a ${item}`);
	}
  // creating call function
	call(name) {
		name === this.name
			? console.log(`Yes, this is ${name}`)
			: console.log(`No, this is not ${name}`);
	}
}

// a new class of Cat
class Cat extends Animal {
	constructor(name) {
		super('cat', 4);
		this.name = name;
	}

	meow() {
		console.log('Meow!');
	}

	scratch(item) {
		console.log(`${this.species} ${this.name} is scratching a ${item}`);
	}

	call(name) {
		console.log(`${this.name} is ignoring you.`);
	}
}

const human = new Animal('human', 2, 'Siva');
human.identify();
// human.bark();    // gives error
