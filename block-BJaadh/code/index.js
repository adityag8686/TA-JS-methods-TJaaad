// Use the below two arrays and practice array methods
var numbers = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6, 9];
var strings = ['This', 'is', 'a', 'collection', 'of', 'words'];

/*
NOTE:
While using methods like push, pop, sort etc it mutates the original array.

Clone the array before using sort method: [...arr]

*/

// - Find the index of `101` in numbers
console.log(numbers.indexOf(101));
// - Find the last index of `9` in numbers
console.log(numbers.lastIndexOf(9));
// - Convert value of strings array into a sentance like "This is a collection of words"
console.log(strings.join(" "));
// - Add two new words in the strings array "called" and "sentance"
strings.push("called", "sentance")
// - Again convert the updated array (strings) into sentance like "This is a collection of words called sentance"
console.log(strings.join(" "));
// - Remove the first word in the array (strings)
console.log(strings.shift());
// - Find all the words that contain 'is' use string method 'includes'
console.log(strings.includes("is"));

// - Find all the words that contain 'is' use string method 'indexOf'
console.log(strings.indexOf("is"));
// - Check if all the numbers in numbers array are divisible by three use array method (every)
numbers.forEach((num) => {
  console.log(num % 3 === 0);
})
// -  Sort Array from smallest to largest
let sortarr = [...numbers];
sortarr.sort(function(a, b) {
  return a - b;
});
console.log(sortarr);
// - Remove the last word in strings
console.log(strings.pop());
// - Find largest number in numbers
console.log(sortarr[sortarr.length-1]);
// - Find longest string in strings
let longeststring = 0;
for(let i = 0; i<strings.length; i++){
  if (strings[i].length > longeststring){
    longeststring = strings[i].length;
  }
}
console.log(longeststring);
// - Find all the even numbers
let even = [];
for (let i = 0; i<numbers.length; i++){
  if (numbers[i] % 2 === 0){
    even.push(numbers[i]);
  }
}
console.log(even);
// - Find all the odd numbers
let odd = [];
for (let i = 0; i<numbers.length; i++){
  if (numbers[i] % 2 !== 0){
    odd.push(numbers[i]);
  }
}
console.log(odd);
// - Place a new word at the start of the array use (unshift)
strings.unshift("new");
console.log(strings);
// - Make a subset of numbers array [18,9,7,11]
numbers.slice(3,7)
// - Make a subset of strings array ['a','collection']
strings.slice(3,5)
// - Replace 12 & 18 with 1221 and 1881
numbers.splice(numbers.indexOf(12),1,1221);
numbers.splice(numbers.indexOf(18),1,1881);
// - Replace words in strings array with the length of the word
strings.splice(strings.indexOf("words"),1,(strings.length));
console.log(strings);
// - Find the sum of the length of words using above question

// - Customers Array
var customers = [
  { firstname: 'Joe', lastname: 'Blogs' },
  { firstname: 'John', lastname: 'Smith' },
  { firstname: 'Dave', lastname: 'Jones' },
  { firstname: 'Jack', lastname: 'White' },
];
// - Find all customers whose firstname starts with 'J'
let FirstName = customers.filter((customer) => customer.firstname.startsWith("J"));
console.log(FirstName);
// - Create new array with only first name
let name = customers.map((customer)=>customer.firstname);
console.log(name);
// - Create new array with all the full names (ex: "Joe Blogs")
let fullname = customers.map((customer)=>`${customer.firstname} ${customer.lastname}`);
console.log(fullname);

// - Sort the array created above alphabetically
fullname.sort();
// - Create a new array that contains only user who has at least one vowel in the firstname.
