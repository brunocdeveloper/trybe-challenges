const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  const myObject ={
    method: 'GET',
    headers: {'Accept': 'application/json'}
  }
  fetch(API_URL, myObject)
  .then(response => response.json())
  .then(data => 
    document.getElementById('jokeContainer').innerText = data.joke)
  
};

window.onload = () => fetchJoke();

/*const fetchPromise = () => {
  const myPromise = new Promise((resolve, reject) => {
    const myArray = Array.from({length: 10}, () => Math.floor(Math.random() * 50) +1 );
    const sum = myArray.map(number => number * number).reduce((acumulator, number) => acumulator + number, 0);
    (sum < 8000) ? resolve() : reject();
  });

  myPromise
    .then(sum => [2, 3, 5, 10].map(number => sum / number))
    .then(array => array.reduce((acumulator, acc) => acumulator + acc, 0))
    .catch(() => console.log('É mais de oito mil!'));
}

fetchPromise()*/

// Função refatorada utilizando async e await.

const sumRandomNumbers = () => {
  const myArray = Array.from({ length: 10},
    () => Math.floor(Math.random()* 50) + 1);
  const sum = myArray.map(number => number * number)
  .reduce((acumulator, number) => acumulator + number, 0);

  if(sum > 8000) throw new Error ();
  return sum;
}


const generateArrayfromSum = sum => [2, 3, 5, 10].map(number => sum / number);

const fetchPromise = async () => {
  try {
    const sum = await sumRandomNumbers();
    const array = await generateArrayfromSum(sum);
    console.log(array);
  } catch(e) {
    console.log('É mais de oito mil! Essa promise deve estar quebrada!')
  }
}

fetchPromise();