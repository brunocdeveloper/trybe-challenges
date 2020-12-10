const assert = require('assert');

const greetPeople = (people) => {
    let greeting = [];
    for (const index in people) {
      greeting.push(`Hello ${people[index]}`)
    }
    return greeting;
};


const parameter = ['Irina', 'Ashleigh', 'Elsa'];
const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];

const output = greetPeople(parameter);
assert.deepStrictEqual(output, result)


//const output = greetPeople(parameter);
//assert.deepStrictEqual(output, result);


