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
