const assert = require('assert');

const addOne = (parametro) => {
    const array = []
    for (let index = 0; index < parametro.length; index +=1){    
        array.push(parametro[index]+1)
    }
    return array;
}

const myArray = [31, 57, 12, 5];
const unchanged = [31, 57, 12, 5];
const expected = [32, 58, 13, 6];
const output = addOne(myArray);

assert.strictEqual(typeof addOne, 'function');
assert.deepStrictEqual(output, expected);
assert.deepStrictEqual(myArray, unchanged);

