Watch this video to understand what to do in this exercise block [link](https://www.youtube.com/watch?v=zGpplZj4zY0&feature=youtu.be)

#### Getting To Know String Methods

Go to this [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) and look for the name of method to learn about it.

**Write in your own way of understanding (don't copy paste)**

Only if you are done with step 1 you should go ahead.

1. Practice it by yourself in console (4-5 times to understand)
2. Data types of parameters
3. Return value type
4. Write three examples
5. In your own words and one sentence explain what this method does.

Example:

1. `charAt`

   - Parameter: (index) defaults to 0 - (number data type)
   - Return: character at specific index in the string (string data type)
   - Example:
     ```js
     let name = 'Arya Stark';
     name.charAt(2); //"y"
     let sentance = 'A quick brown fox jumped over a lazy dog';
     sentance(4); // "i"
     let houseName = 'Starks';
     houseName.charAt(0); // "S"
     ```
   - `charAt` accepts a index (number data type) and return the character on that index in the string.

2. `toUpperCase`
 - Parameter: (index) defaults to 0 - (string data type)
   - Return: convert the string into uppercase (string data type)
   - Example:
     ```js
     let name = 'Arya Stark';
     name.toUppercase(); //"ARYA STARK"
     let sentance = 'A quick brown fox jumped over a lazy dog';
     sentance.toUpperCase(); // "A QUICK BROWN FOX JUMPED OVER A LAZY DOG"
     let houseName = 'Starks';
     houseName.toUppercase(); // "STARKS"
     ```
   - `toUpperCase` accepts a string and return it by conerting into Uppercase string.
3. `toLowerCase`
 `toLowerCase`
 - Parameter: (index) defaults to 0 - (string data type)
   - Return: convert the string into uppercase (string data type)
   - Example:
     ```js
     let name = 'Arya Stark';
     name.toLowercase(); //"arya stark"
     let sentance = 'A quick brown fox jumped over a lazy dog';
     sentance.toLowerCase(); // "a quick brown fox jumped over a lazy dog"
     let houseName = 'Starks';
     houseName.toLowercase(); // "starks"
     ```
   - `toLowerCase` accepts a string and return it by conerting into lowercase string.
4. `trim`
it trims or remove extra spaces 
5. `trimEnd` removes extra spaces from end 
6. `trimStart` removes extra spaces from starting of string
7. `concat` it add two strings
8. `endsWith` it reult trues or false if the umber is ending with that character
9. `includes` it checks whether the mentioned string or characted exists in the line
10. `indexOf` it enables us to know the start position or index of that character or string 
11. `lastIndexOf` it let us know the index of last  character or string mentioned
12. `padEnd` provide space or anything you wish multiple times at the end
13. `padStart` provides space or anything you mentioned at first
14. `repeat` repeat te sting as many times you have mentione
15. `replace` replace the character or string 
16. `slice`  it provides the strings or character from 0 to mentioned index
17. `split` it divides the string into indiviual string in an array
18. `substring` it can take input in reverse direction and will perform same as slice
