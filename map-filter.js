const numbers = [3, 4, 5, 6, 7, 8, 9];

// map it will loop through the whole array and find single element map can have 3 paramitters element,index,the whole array...it means it will run the array to the index of the array each time
// it will filter the element from the main array accoring to the condition and will return an array
// find will  take one element each time return only an element
const resultSquare = numbers.map((x) => x * x);
console.log(resultSquare);

const checkBig = numbers.filter((x) => x > 50);
console.log(checkBig);

const isThere = numbers.find((x =>x > 3));
console.log(isThere);
