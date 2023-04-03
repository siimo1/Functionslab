// Write a function called logMyName that will log your name.
const logMyName = (name) => {
console.log(name)
}
logMyName('Simo')
// 2. Write a function called logThisName that will log the name parameter.
const  logThisName = (name) => {
    console.log(name)
  }
  logThisName("James")
  // 3. Write a function called checkName that will check if the name parameter is "Joyce"
  const checkName = (name) => {
    if (name == "Joyce")
    console.log("Welcome back Joyce") 
    else 
    console.log("Incorrect Name")
  }
  checkName("Mary")
  checkName("Joyce")
// 4. Write a function that called doWhileLoop will do a while loop that will count from 0-10.
const doWhileLoop = () => {
    let i=0;
    while (i <= 10) {
    console.log(i)
          i++
    }
 }
doWhileLoop ()
// 5. Write a function called doWhileLoopWithThisNumber that will do a while loop from 0 until the given number parameter
const doWhileLoopWithThisNumber = (thisNumber) => {
    let i=0 
    while (i <= thisNumber) {
        console.log(i)
        i++

    }   
}
doWhileLoopWithThisNumber(13)
doWhileLoopWithThisNumber(7)
// 7. Write a function (you make the name) that will check if the number parameter is even or odd.
const checkIfEvenOrOdd = (number) => {
if ( number % 2 === 0) {
        console.log("is even")
} else {
         console.log("is Odd")
        }
}
checkIfEvenOrOdd(9)
checkIfEvenOrOdd(100)
// 8. Write a function (you make the name) that will check if the names parameter (an array) has a length of at least 4.
const checkLength = (names) => {
    if (names.length >= 3) {
      return true
    } else {
      return false 
    }
  }
  console.log(checkLength(["Eve", "Mike", "Steve" ]))
  console.log(checkLength(["Eve", "Mike"]))
  
  // 9. Write a function (you make the name) that will take the names parameter (an array) and log all the names inside the array (you should loop through the array)
  const logNames = (names) => {
    for (let i = 0; i < names.length; i++) {
      console.log(names[i])
    }
  }
  logNames(["Eve", "Mike", "Steve"])
  
  
  
  // 10. Write a function (you make the name) that will log the typeof the data parameter.
  const logTypeOfData = (data) => {
    console.log(typeof data)
  }
  logTypeOfData("Dog")
  logTypeOfData(25)
  logTypeOfData(true)
  
  
  // 11. Write a function (you make the name) that will do a loop 0-100 but only log 10, 20, 30, 40, 50, 60, 70, 80, 90, 100
  
  const doDecimalLoop = () => {
    for (let i = 0; i <= 100; i++) {
      if (i % 10 === 0) {
        console.log(i)
      }
    }
  };
  doDecimalLoop()