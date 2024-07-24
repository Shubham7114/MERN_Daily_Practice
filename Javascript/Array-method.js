/*********************************************** Arrays Stat,ement in js*/

// Array :- is a contigous memory location holding some data .datatype of the datamay be diffrrnt in each of the memory location.

var array1 = []; // empty array

    //array in js are zero based index

    let array3 = [ 'A','B','C','D'];
                  // 0   1   2   3

    array3[0] ; // firest element of array

  //// length

                   array3.length; // gives the lenght of the array,4
                   array3[array3.length - 1]; //last element of array//

//// PUSH

 array3.push(1); // add item in the end of an array,["A","B","C","D",1]


///// POP

array3.pop(); // remove an item from the end of an array, ["A","B","C","D"]


//// unshift

array3.unshift(0) // add item 

// filter

var array4 = [1,2,3,4,5,6,7,8,9,10];

function filterEven(item){
      console.log(item);
      return item % 2 == 0;
}

var evenNumber = array4.filter(filterEven);
var array5 =[1,23,true,"abc"];

function filterNumber(item){
    console.log(item)
    return typeof item == "number" || typeof item == 'string'
}
var numbersOnly = array5.filter(filterNumber)
console.log(array5);
console.log(numbersOnly);

// Map 

var array6 =[1,2,3,4,5,6,7,8,9,10];

function MultiplyNumber(item){
    return item * 10;
}

var resultArry6 = array6.map(MultiplyNumber);

console.log(array6);
console.log(resultArry6);

// ------------Map-----------------
var array =[1,2,3,4,5,6,7];

function mapper(num){
return num * 2;
}
var result = array.map(mapper);
console.log(result) 

var result1 = array.map((num)=>{
     return num * 2;
})
console.log(result1)

// ------------ find --------------

var array10 = ["a", "b", "Shubham",1,4,true,null,undefined,{},[]];

function search(item){
   return item = 'Shubham';
}

var findResult = array10.find(search);

console.log(array10);
console.log(findResult);

// ------------------ concat -------------

var array7 = ['a','b','c'];

var array8 = [1,2,3];

var array9 = [true,false,true];

array7 = array7.concat(array8,array9)

console.log(array7)

// ------------------ Sort -------------

var array12 = [3,6,8,4,6,10,,34,34,87,54,89,14,98]

function sortArray(a,b){
   return a - b
}

var sortResult1 = array12.sort(sortArray)
console.log(sortResult1);