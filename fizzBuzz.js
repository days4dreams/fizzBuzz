for (var num = 1; num <= 100; num++)
//for loop takes the number one and adds a 1 until reaching 100. For each num, the loop will run
{
  if (num % 3 === 0 && num % 5 === 0){
    console.log("fizzbuzz");
  }
  else if (num % 3 === 0){
    console.log("fizz");
  }
  else if (num % 5 === 0) {
    console.log("buzz");
  }
  else {
    console.log(num);
  }
  //if else statements determine the divisability of the number.
  //ensure the statements are ordered to look for && condition first
}
//prints fizz, buzz, fizzbuzz or number to console for each number.