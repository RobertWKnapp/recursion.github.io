// Solve all of the following prompts using recursion.

// 1. Calculate the factorial of a number.  The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example:  5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5);  // 120
var factorial = function(n) {
      // Base case: if n is 0, return 1 (0! is defined as 1)
      if (n < 0) {
        return null;
      }
      if (n === 0) {
        return 1;
    }
    // Recursive case: n! = n * (n - 1)!
    return n * factorial(n - 1);
};

// 2. Compute the sum of an array of integers.
// Example:  sum([1, 2, 3, 4, 5, 6]);  // 21
var sum = function(array) {
    // Base case: if the array is empty, return 0
    if (array.length === 0) {
      return 0;
  }
  // Recursive case: take the first element and add it to the sum of the rest of the array
  return array[0] + sum(array.slice(1));
};

// don't do 3.
// 3. Sum all numbers in an array containing nested arrays.
// Example: arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {
};

// 4. Check if a number is even.
var isEven = function(x) {
  // convert x to a positive number to handle negatives
  x = Math.abs(x);
    // base case
    if (x === 0) {
      return true;
    }
    else if (x === 1) {
      return false;
    }
    return isEven(x - 2);
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n) {
    // Base case: if n is 0, return 0
    if (n === 0) {
      return 0;
  }
  // If n is negative, we compute the sum for positive integers and negate the result
  if (n < 0) {
      return (n + 1) + sumBelow(n + 1);
  }
  // Recursive case for positive integers
  return (n - 1) + sumBelow(n - 1);

};

// 6. Get the integers in range (x, y).
// Example:  range(2, 9);  // [3, 4, 5, 6, 7, 8]
var range = function(x, y, output = []) {
    // Determine if we need to count up or down
    if (x < y) {
      // Base case for counting up
      if (x >= y - 1) {
          return output;
      }
      output.push(x + 1);
      return range(x + 1, y, output);
  } else {
      // Base case for counting down
      if (x <= y + 1) {
          return output;
      }
      output.push(x - 1);
      return range(x - 1, y, output);
  }
};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64.  Here, 8 is the base and 2 is the exponent.
// Example:  exponent(4,3);  // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {
      // Base case: any number to the power of 0 is 1
      if (exp === 0) {
        return 1;
    }
    // Handle negative exponent case
    if (exp < 0) {
        return 1 / exponent(base, -exp);
    }
    // Recursive case: multiply the base by the result of exponent for (exp - 1)
    return base * exponent(base, exp - 1);
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {
    // Base case: if n is 1, it is a power of two
    if (n === 1) {
      return true;
  }
  // Base case: if n is less than 1, it is not a power of two
  if (n < 1) {
      return false;
  }
  // Recursive case: divide n by 2 and check
  return powerOfTwo(n / 2);
};

// 9. Write a function that accepts a string a reverses it.
var reverse = function(string) {
  if (string.length <= 1) {
    return string;
}
// Recursive case: take the last character and concatenate it with the reverse of the rest of the string
return string[string.length - 1] + reverse(string.slice(0, -1));
};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {
      // Normalize the string: remove non-alphanumeric characters and convert to lowercase
      string = string.replace(/[^a-z0-9]/gi, '').toLowerCase();

      // Base case: if the string is empty or has one character, it is a palindrome
      if (string.length <= 1) {
          return true;
      }
  
      // Check if the first and last characters are the same
      if (string[0] !== string[string.length - 1]) {
          return false;
      }
  
      // Recursive case: check the substring excluding the first and last characters
      return palindrome(string.slice(1, -1));
};

// don't do 11
// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {
};

// 12. Write a function that multiplies two numbers without using the * operator  or
// JavaScript's Math object.
// ATTENTION DO NOT LEAVE COMMENTS IN THIS FUNCTION. The test is looking for any ('/').
var multiply = function(x, y) {
  if (y === 0) {
    return 0;
}
if (y > 0) {
    return x + multiply(x, y - 1);
}
return -multiply(x, -y);
};

// don't do 13
// 13. Write a function that divides two numbers without using the / operator  or
// JavaScript's Math object.
var divide = function(x, y) {
};

// don't do 14
// 14. Find the greatest common divisor (gcd) of two positive numbers.  The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// Example:  gcd(4,36);  // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('', '') // true
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {
    // Base case: if both strings are empty, they are identical
    if (str1 === '' && str2 === '') {
      return true;
  }
  // If one string is empty and the other is not, they are not identical
  if (str1 === '' || str2 === '') {
      return false;
  }
  // Check the first characters and call recursively for the rest of the strings
  if (str1[0] === str2[0]) {
      return compareStr(str1.slice(1), str2.slice(1));
  } else {
      return false;
  }
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str){
      // Base case: if the string is empty, return an empty array
      if (str === '') {
        return [];
    }
    // Recursive case: get the first character and concatenate with the recursive call
    return [str[0]].concat(createArray(str.slice(1)));
};

// 17. Reverse the order of an array
var reverseArr = function (array) {
    // Base case: if the array is empty or has one element, return it
    if (array.length <= 1) {
      return array;
  }
  // Recursive case: get the last element and concatenate with the reversed rest
  return [array[array.length - 1]].concat(reverseArr(array.slice(0, array.length - 1)));
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length) {
      // Base case: if the length is zero, return an empty array
      if (length <= 0) {
        return [];
    }
    // Recursive case: return the value and concatenate with the result of the recursive call
    return [value].concat(buildList(value, length - 1));
};

// 19. Count the occurence of a value inside a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value) {
      // Base case: if the array is empty, return 0
      if (array.length === 0) {
        return 0;
    }
    // Recursive case: check the first element
    if (array[0] === value) {
        return 1 + countOccurrence(array.slice(1), value);
    } else {
        return countOccurrence(array.slice(1), value);
    }
};

// 20. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback) {
      // Base case: if the array is empty, return an empty array
      if (array.length === 0) {
        return [];
    }
    // Recursive case: apply the callback to the first element and concatenate with the recursive call
    return [callback(array[0])].concat(rMap(array.slice(1), callback));
};

// Example callback function
const timesTwo = function(num) {
    return num * 2;
};

// don't do 21
// 21. Write a function that counts the number of times a key occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countKeysInObj(testobj, 'r') // 1
// countKeysInObj(testobj, 'e') // 2
var countKeysInObj = function(obj, key) {
};

// don't do 22
// 22. Write a function that counts the number of times a value occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countValuesInObj(testobj, 'r') // 2
// countValuesInObj(testobj, 'e') // 1
var countValuesInObj = function(obj, value) {
};

// don't do 23.
// 23. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, key, newKey) {
};

// don't do 24
// 24. Get the first n Fibonacci numbers.  In the Fibonacci Sequence, each subsequent
// number is the sum of the previous two.
// Example:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5);  // [0, 1, 1, 2, 3, 5]
// Note:  The 0 is not counted.
var fibonacci = function(n) {
};

// 25. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n, fib=[0, 1]) {
    // Return null for negative integers
    if (n < 0) {
      return null;
  }
  // Base cases
  if (n === 0) {
      return 0;
  }
  if (n === 1) {
      return 1;
  }
  // Recursive case
  return nthFibo(n - 1) + nthFibo(n - 2);
};

// 26. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(input) {
      // Base case: if the array is empty, return an empty array
      if (input.length === 0) {
        return [];
    }
    
    // Capitalize the first word and recursively call for the rest of the array
    const firstWord = input[0].toUpperCase();
    const restOfWords = capitalizeWords(input.slice(1));
    
    // Return a new array with the capitalized first word and the rest
    return [firstWord, ...restOfWords];

};

// 27. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car', 'poop', 'banana']); // ['Car', 'Poop', 'Banana']
var capitalizeFirst = function(array) {
      // Base case: if the array is empty, return an empty array
      if (array.length === 0) {
        return [];
    }
    
    // Capitalize the first letter of the first word
    const firstWord = array[0];
    const capitalizedWord = firstWord.charAt(0).toUpperCase() + firstWord.slice(1);
    
    // Recursively call for the rest of the array
    const restOfWords = capitalizeFirst(array.slice(1));
    
    // Return a new array with the capitalized first word and the rest
    return [capitalizedWord, ...restOfWords];
};

// don't do 28
// 28. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
};

// don't do 29
// 29. Flatten an array containing nested arrays.
// Example: flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(arrays) {
};

// 30. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {'p':1, 'o':2, 't':2, 'a':1}
var letterTally = function(str, obj = {} ) {
      // Base case: if the string is empty, return the tally object
      if (str.length === 0) {
        return obj;
    }

    // Get the first letter of the string
    const firstLetter = str[0];

    // Update the tally for the first letter
    obj[firstLetter] = (obj[firstLetter] || 0) + 1;

    // Recursively call the function with the rest of the string
    return letterTally(str.slice(1), obj);
};

// 31. Eliminate consecutive duplicates in a list.  If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// Example: compress([1, 2, 2, 3, 4, 4, 5, 5, 5]) // [1, 2, 3, 4, 5]
// Example: compress([1, 2, 2, 3, 4, 4, 2, 5, 5, 5, 4, 4]) // [1, 2, 3, 4, 2, 5, 4]
var compress = function(list) {
    // Base case: if the list is empty or has one element, return it as is.
    if (list.length === 0) return [];
    if (list.length === 1) return list;

    // Recursive case: check the first element and the next one.
    if (list[0] === list[1]) {
        // If they are the same, skip the first element and call compress on the rest.
        return compress(list.slice(1));
    } else {
        // If they are different, include the first element and recurse on the rest.
        return [list[0]].concat(compress(list.slice(1)));
    }
};

// don't do 32
// 32. Augment every element in a list with a new value where each element is an array
// itself.
// Example: augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
};

// 33. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {
      // Base case: if the array is empty, return an empty array.
      if (array.length === 0) return [];
    
      // Recursive case
      if (array[0] === 0) {
          // If the first element is 0, check the next one.
          if (array[1] === 0) {
              // If the next element is also 0, skip it and recurse.
              return minimizeZeroes(array.slice(1));
          } else {
              // If the next element is not 0, include the first 0 and recurse.
              return [0].concat(minimizeZeroes(array.slice(1)));
          }
      } else {
          // If the first element is not 0, include it and recurse.
          return [array[0]].concat(minimizeZeroes(array.slice(1)));
      }
};

// 34. Alternate the numbers in an array between positive and negative regardless of
// their original sign.  The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array, index = 0) {
    // Base case: if the index is equal to the length of the array, return an empty array
    if (index === array.length) {
      return [];
  }
  
  // Determine the sign based on the index (positive for even indices, negative for odd)
  const sign = index % 2 === 0 ? 1 : -1;
  
  // Get the absolute value of the current element
  const currentValue = Math.abs(array[index]);
  
  // Recursively call for the next index and combine with the current value
  return [sign * currentValue].concat(alternateSign(array, index + 1));
};

// 35. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {
      // Base case: if the string is empty, return an empty string.
      if (str.length === 0) return '';

      // Create a mapping from digits to their word equivalents.
      const digitToWord = {
          '0': 'zero',
          '1': 'one',
          '2': 'two',
          '3': 'three',
          '4': 'four',
          '5': 'five',
          '6': 'six',
          '7': 'seven',
          '8': 'eight',
          '9': 'nine'
      };
  
      // Check the first character.
      const firstChar = str[0];
      
      // If the first character is a digit, replace it with its word equivalent.
      if (digitToWord[firstChar]) {
          return digitToWord[firstChar] + numToText(str.slice(1));
      } else {
          // If it's not a digit, keep the character and recurse on the rest of the string.
          return firstChar + numToText(str.slice(1));
      }
};

// *** EXTRA CREDIT ***

// 36. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
};

// 37. Write a function for binary search.
// Sample array:  [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// console.log(binarySearch(5)) will return '5'

var binarySearch = function(array, target, min, max) {
};

// 38. Write a merge sort function.
// Sample array:  [34,7,23,32,5,62]
// Sample output: [5,7,23,32,34,62]
var mergeSort = function(array) {
};



//-----------------------------------
// DON'T REMOVE THIS CODE -----------
//-----------------------------------

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {

  /**
   * Due to some node-related issues with spying on recursive functions,
   * it isn't possible to test them with sinon spies like so:
   *
   *   var originalSum = sum;
   *   sum = sinon.spy(sum);
   *
   *   sum([1, 2, 3, 4, 5, 6]);
   *
   *   // callCount will always 1 causing, this test to always fail in node :(
   *   expect(sum.callCount).to.be.above(1);
   *
   *   sum = originalSum;
   *
   * However, we can work around this by using proxies!
   * If you reassign the function to a proxy and use the `apply` trap,
   * you can make a `proxyCallCount` property on the function,
   * increment it each time it's called, and then test that instead.
   *
   *   sum.proxyCallCount = 0;
   *   sum([1, 2, 3, 4, 5, 6]);
   *   expect(sum.proxyCallCount).to.be.above(1);
   *
   * MDN Proxies: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy
   * MDN Proxy Apply Trap: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/apply
   */
  const createSpyProxy = (func) => {
    func.toString = func.toString.bind(func);

    const recursiveFunctionCallCounterHandler = {
      apply(target, thisArg, args) {
        target.proxyCallCount = target.proxyCallCount ? target.proxyCallCount + 1 : 1;
        return target.apply(thisArg, args);
      },
    };

    return new Proxy(func, recursiveFunctionCallCounterHandler);
  };

  factorial = createSpyProxy(factorial);
  sum = createSpyProxy(sum);
  arraySum = createSpyProxy(arraySum);
  isEven = createSpyProxy(isEven);
  sumBelow = createSpyProxy(sumBelow);
  range = createSpyProxy(range);
  exponent = createSpyProxy(exponent);
  powerOfTwo = createSpyProxy(powerOfTwo);
  reverse = createSpyProxy(reverse);
  palindrome = createSpyProxy(palindrome);
  modulo = createSpyProxy(modulo);
  multiply = createSpyProxy(multiply);
  divide = createSpyProxy(divide);
  gcd = createSpyProxy(gcd);
  compareStr = createSpyProxy(compareStr);
  createArray = createSpyProxy(createArray);
  reverseArr = createSpyProxy(reverseArr);
  buildList = createSpyProxy(buildList);
  countOccurrence = createSpyProxy(countOccurrence);
  rMap = createSpyProxy(rMap);
  countKeysInObj = createSpyProxy(countKeysInObj);
  countValuesInObj = createSpyProxy(countValuesInObj);
  replaceKeysInObj = createSpyProxy(replaceKeysInObj);
  fibonacci = createSpyProxy(fibonacci);
  nthFibo = createSpyProxy(nthFibo);
  capitalizeWords = createSpyProxy(capitalizeWords);
  capitalizeFirst = createSpyProxy(capitalizeFirst);
  nestedEvenSum = createSpyProxy(nestedEvenSum);
  flatten = createSpyProxy(flatten);
  letterTally = createSpyProxy(letterTally);
  compress = createSpyProxy(compress);
  augmentElements = createSpyProxy(augmentElements);
  minimizeZeroes = createSpyProxy(minimizeZeroes);
  alternateSign = createSpyProxy(alternateSign);
  numToText = createSpyProxy(numToText);
  tagCount = createSpyProxy(tagCount);
  binarySearch = createSpyProxy(binarySearch);
  mergeSort = createSpyProxy(mergeSort);

  module.exports = {
    factorial,
    sum,
    arraySum,
    isEven,
    sumBelow,
    range,
    exponent,
    powerOfTwo,
    reverse,
    palindrome,
    modulo,
    multiply,
    divide,
    gcd,
    compareStr,
    createArray,
    reverseArr,
    buildList,
    countOccurrence,
    rMap,
    countKeysInObj,
    countValuesInObj,
    replaceKeysInObj,
    fibonacci,
    nthFibo,
    capitalizeWords,
    capitalizeFirst,
    nestedEvenSum,
    flatten,
    letterTally,
    compress,
    augmentElements,
    minimizeZeroes,
    alternateSign,
    numToText,
    tagCount,
    binarySearch,
    mergeSort,
  };
}

//-----------------------------------
