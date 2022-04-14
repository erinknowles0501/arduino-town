import * as faker from "./fakers/people.js";
import { getOne } from "./fakers/index.js";

const STARTING_PEOPLE_NUMBER = 10;

class Person {
    needs = [];
    actions = [];
    name = [];

    immutables = {
        gender: "",
        sexualOrientation: "",
        hairColor: "",
        skinColor: "",
        eyeColor: "",
    };

    height = null;
    weight = null;
    age = 0;

    position = [];

    constructor() {
        this.immutables.gender = getOne(faker.genders);
        this.immutables.sexualOrientation = getOne(faker.sexualOrientations);
        this.immutables.hairColor = getOne(faker.hairColors);
        this.immutables.skinColor = getOne(faker.skinColors);
        this.immutables.eyeColor = getOne(faker.eyeColors);
        this.height = _.random(5.0, 6.1); // in decimal feet
        this.weight = _.random(95, 300); // in lbs
        this.age = _.random(18, 100); // TODO: Children and elderly tend to need help - aka should be generated with a caretaker.

        // TODO: Set some attributes based on those attributes
        if (this.age > 50) {
            this.immutables.hairColor = faker.hairColors[4]; // 'grey'
        }

        this.position.push(_.random(0, 100));
        this.position.push(_.random(0, 100));
    }

    display() {
        return "P";
    }
}

function generateStartingPeople(peopleList) {
    for (let i = 0; i < STARTING_PEOPLE_NUMBER; i++) {
        peopleList.push(new Person());
    }
}

const peopleList = [];
generateStartingPeople(peopleList);

export default peopleList;
