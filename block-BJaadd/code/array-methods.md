Watch this video to understand what to do in this exercise block [link](https://www.youtube.com/watch?v=zGpplZj4zY0&feature=youtu.be)

## Getting To Know Array Methods

Go to this [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) and look for the name of method to learn about it.

**Write in your own way of understanding (don't copy paste)**

Only if you are done with step 1 you should go ahead.

1. Practice it by yourself in console (2-3 times to understand)
2. Data types of parameters
3. Return value type
4. Write three examples
5. In your words what this method does.
6. Does it mutate the original value or not (check https://doesitmutate.xyz)

Example:

1. `concat`

   - Parameter: n (any) number of values (number, string, boolean, array, null, undefined, object and function etc)
   - Return: a single Array consisting of by all the values passed as parameters in the same order.
   - Example:
     ```js
     let numbers = [1, 2, 3];
     numbers.concat(4); //[1,2,3,4]
     let sentanceArray = 'A quick brown fox jumped over a lazy'.split(' ');
     sentanceArray.concat('dog').join(' '); //"A quick brown fox jumped over a lazy dog"
     let colors = ['red', 'green', 'blue'];
     colors.concat('black', 'red', 21, true); // ['red','green','blue','black', 'red', 21, true]
     ```
   - `concat` accepts n number of values and returns one array with all the values in same order. It does not change the original array.
   - No it does not mutate the original array

2. `join`
it joins the strings in a n array to single string which is separated by space , "".
3. `flat` it put the elements in an array into single line if there arenested object or array
4. `push` it add an element to the array at the end of the array
5. `indexOf` it provides the first index of the character or string searching for 
6. `lastIndexOf` it provides the last index of the character or string
7. `includes` it checks for the string or character whether it exist or not
8. `reverse` it reverse the array from last to first
9. `every` it returns true only if all the element in the array satsfy the condition
10. `shift` it shift the array index depending on the condition required
11. `splice` it add or removes element from the index you wish to do it 
12. `find` it looks for the character or string 
13. `unshift` it adds the element at the start of the array 
14. `findIndex` it looks for the index position of the character 
15. `filter` it filter the elemnt depending on the condition
16. `flat`
17. `forEach` it calls every element in a array but it cannot return anything
18. `map` it calls every element in a array but you can return a value in this 
19. `pop` it deletes an element from the end of the array
20. `reduce` reduce accept two parameter one is call back function and the ther is initial value it adds all the elemnt in an array
21. `slice` it chops or cut of the elemnt menetioned from the start to end
22. `some` it lloks for the first true value and returns true for all the elemnt in an array.
