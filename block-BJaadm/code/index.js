let persons = [
  { name: 'John', grade: 8, sex: 'M' },
  { name: 'Sarah', grade: 12, sex: 'F' },
  { name: 'Bob', grade: 16, sex: 'M' },
  { name: 'Johnny', grade: 2, sex: 'M' },
  { name: 'Ethan', grade: 4, sex: 'M' },
  { name: 'Paula', grade: 18, sex: 'F' },
  { name: 'Donald', grade: 5, sex: 'M' },
  { name: 'Jennifer', grade: 13, sex: 'F' },
  { name: 'Courtney', grade: 15, sex: 'F' },
  { name: 'Jane', grade: 9, sex: 'F' },
  { name: 'John', grade: 17, sex: 'M' },
  { name: 'Arya', grade: 14, sex: 'F' },
];

// Create an array peopleName and store value of sex key from persons array
let peopelName = persons.map((persons)=>persons.sex);
  

// Create an array peopleGrade and store the value of grade key from persons array
let peopleGrade = persons.map((persons)=> persons.grade)
// Create an array peopleSex and store the value of sex key from persons array
let peopleSex = persons.map((persons)=>persons.sex);
// Log the filtered named of people in peopleName that starts with 'J' or 'P'
let peoplename =  persons.filter((e) => (e.name.startsWith("J") || e.name.startsWith("P")));
// Log the length of filtered named of people in peopleName that starts with 'A' and 'C'
let peoplenameAC =  persons.filter((e) => (e.name.startsWith("A") || e.name.startsWith("C")));

// Log all the filtered male ('M') in persons array
let male = [];
persons.filter((e) => {
  if (e.sex == "M")
  {
    male.push(e);
  }
})
// Log all the filtered female ('F') in persons array
let female = [];
persons.filter((e) => {
  if (e.sex == "F")
  {
    female.push(e);
  }
})
// Log all the filtered female ('F') whose name starts with 'C' or 'J' in persons array
let femaleCJ =[];
persons.filter((e) => {
  if (e.sex == "F")
  {
    if( e.name.startsWith("C") || e.name.startsWith("J"))
    {
      femaleCJ.push(e);
    }
  }
})
// Log all the even numbers from peopleGrade array
let even = persons.filter((num) => num.grade % 2 == 0)
// Find the first name that starts with 'J' in persons array and log the object
let nameJ = persons.filter((e) => e.name.startsWith("J") );
// Find the first name that starts with 'P' in persons array and log the object
let nameP = persons.filter((e) => e.name.startsWith("P") );
// Find the first name that starts with 'J', grade is greater than 10 and is a female
let nameJ10F = [];
persons.filter((e) =>{
 if (e.name.startsWith("J") && e.grade > 10 && e.sex == "F"){
   nameJ10F.push(e); 
 }
} );
// Filter all the female from persons array and store in femalePersons array
let femalePersons = persons.filter((e) => e.sex == "F");
// Filter all the male from persons array and store in malePersons array
let malePersons = persons.filter((e) => e.sex == "M");
// Find the sum of all grades and store in gradeTotal
let sumgrade = persons.reduce((acc,cv) =>{
  acc = acc + cv.grade;
  return acc;
},0 ) / persons.length;
// Find the average grade

// Find the average grade of male
let count = 0;
let sumgradef = persons.reduce((acc,cv) =>{
  if (cv.sex == "F" )
  acc = acc + cv.grade;
  count++;
  return acc;

},0 ) / count;
// Find the average grade of female
let c = 0;
let sumgradem = persons.reduce((acc,cv) =>{
  if (cv.sex == "F" )
  acc = acc + cv.grade;
  c++;
  return acc;

},0 ) / c;
// Find the highest grade
let highest = 0;
persons.map((g) => {
  if (highest< g.grade)
  {
    return highest = g.grade;
  }
  
});
// Find the highest grade in male
let high = 0;
persons.map((g) => {
  if(g.sex == "M"){
    if (high< g.grade)
    {
      return high = g.grade;
    }
  } 
});
// Find the highest grade in female
let highf = 0;
persons.map((g) => {
  if(g.sex == "F"){
    if (highf< g.grade)
    {
      return highf = g.grade;
    }
  } 
});
// Find the highest grade for people whose name starts with 'J' or 'P'
let highfm = 0;
persons.map((g) => {
  if(g.name.startsWith("J") ||g.name.startsWith("P") ){
    if (highfm< g.grade)
    {
      return highfm = g.grade;
    }
  } 
});
// Sort the peopleGrade in ascending order and log the value of peopleGrade. Notice did the elements of peopleGrade got changed?
let peopleGrade = [...persons].grade.Sort((a,b) => a-b);
// Sort the peopleGrade in descending order
let peopleGradedes = [...persons].grade.Sort((a,b) => b-a);
// Sort the peopleGrade in descending order this time you have to make sure you don't mutate the original array

// Sort the array peopelName in ascending `ABCD..Za....z`
let ascending = [...persons].name.Sort();
// Sort the array peopelName in ascending `ABCD..Za....z`. Make sure not to mutate the array
let ascending = [...persons].name.Sort();