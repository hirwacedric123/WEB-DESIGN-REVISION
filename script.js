const sumDiv = document.getElementById('sum');
const numbersArray = [1,2,3,4,45,5,4,5,5,5,5,5];
const largeDiv = document.getElementById('largest');
const sortarr = document.getElementById('array');

function summation(numbersArray){
    var sum =0;
    for (var i=0; i<=11; i++){
        sum+= numbersArray[i];
    }
    sumDiv.innerHTML=("the sum is "+ sum)
}

summation(numbersArray);

function theLargest(){
    var large = numbersArray[0];
    for (var i=1; i<=11; i++){
        if (numbersArray[i]>large){
            large = numbersArray[i];
        }
    }
    largeDiv.innerHTML=("largest numbers is "+ large)
}

theLargest();


function sortArray(arr) {
    let n = arr.length;
    for (let i = 0; i < n-1 ; i++) {
        for (let j = 0; j < n -i-1 ; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap arr[j] and arr[j + 1]
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

// Example usage
let numbers = [1,2,3,4,45,5,4,5,5,5,5,5];
let sortedNumbers = sortArray(numbers);
console.log(sortedNumbers); // Output: [2, 3, 4, 5, 8]


function reversei(numbersArray){
    reversed = []; 
    for (var i=11; i>=0; i--){
        reversed.push(numbersArray[i]);
       
    }
    console.log(`reversed array  ${reversed} `)
}
reversei(numbersArray);
const revDiv = document.getElementById('reverse').innerHTML=`reversed array ${reversed}`;




function even(numbersArray){
    evenArr = []; 
    for (var i=0; i<=11; i++){
        if (numbersArray[i]%2 ==0){
            evenArr.push(numbersArray[i]);
        }     
       
    }
    console.log("even array "+ evenArr)
}
even(numbersArray);

function odd(numbersArray){
    oddArr = []; 
    for (var i=0; i<=11; i++){
        if (numbersArray[i]!=0){
            oddArr.push(numbersArray[i]);
        }     
       
    }
    console.log("odd array "+ oddArr)
}
odd(numbersArray);

const uniqueNumbers = [];
function rduplicates(){
    for (let i = 0; i < numbersArray.length; i++) {
        // Add to uniqueNumbers only if not already included
        if (!uniqueNumbers.includes(numbersArray[i])) {
            uniqueNumbers.push(numbersArray[i]);
        }
    }

    const arrayDiv = document.getElementById('array').innerHTML=`unique array ${uniqueNumbers}`;
}

rduplicates();

const names = [
    "Steve",
    "Alice",
    "Rachel",
    "Bob",
    "Quinn",
    "Charlie",
    "Tina",
    "Diana",
    "Nathan",
    "Eve",
    "Leo",
    "Grace",
    "Isaac",
    "Olivia",
    "Mia",
    "Hannah",
    "Paul",
    "Jack",
    "Karen",
    "Frank"
];



function printNames(){
    for (var i=0; i<names.length; i++){
        console.log(names[i]);
    }
}
printNames();
console.log(names);
console.log("the sorted array is "+ names.toSorted());


function findNamesStartingWith(names, letter) {
    // Filter names using startsWith and convert the letter to lowercase
    return names.filter(name => name.toLowerCase().startsWith(letter.toLowerCase()));
}


console.log("Names starting with 'A':", findNamesStartingWith(names, "A"));
console.log("Names starting with 'B':", findNamesStartingWith(names, "B"));

// Create an Object
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
  };

person.country = "Rwanda"
delete person.age;

console.log(person.firstName);
console.log(person)

const obj = { name: "Alice", age: 25 };

console.log("name" in obj); // true
console.log("city" in obj); // false

const str = "Hello";
const reversedString = str.split('').reverse().join('');
console.log(reversedString); // Output: "olleH"


function countVowels(strs) {
    const vowels = 'aeiouAEIOU';  // String containing all vowels
    let count = 0;

    // Use a normal for loop to iterate through the string
    for (let i = 0; i < strs.length; i++) {
        if (vowels.includes(strs[i])) {
            count++;
        }
    }

    return count;
}

// Example usage:
const strs = "Hello World";
console.log(countVowels(strs));  // Output: 3


// Function to create a new paragraph element and append it to the body
function createParagraph() {
    // Create a new <p> element
    const p = document.createElement("p");

    // Add some text content to the paragraph
    p.textContent = "This is a new paragraph.";

    // Append the new paragraph to the body
    document.body.appendChild(p);
}