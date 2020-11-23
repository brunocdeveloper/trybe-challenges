const oddsAndEvens = [13, 3, 4, 10, 7, 2];
const ordered = (a, b) => {
    return a - b;
};

oddsAndEvens.sort(ordered);
console.log(`os números ${oddsAndEvens} se encontram ordenados de forma crescente!`);
