// 3! = 1 * 2 * 3 ==> 6

// 3! = 3 * 2 * 1 ==> 6

// 4! = 4 * 3 * 2 * 1 ==> 24

// 5! = 5 * 4 * 3 * 2 * 1 ==> 120 

 

function factorial(num){

    let factNum = 1; // 60 

    for (let index = num; index >=1; index--) {

        factNum = factNum * index;

    }

    console.log(`Factorial of ${num} is ${factNum} `);

}

factorial(5);
factorial(7);
factorial(10);
factorial(23);
console.log(`=================== Check whether the given Number is Prime or Not===================`);
const isPrime = num=> {
  const boundary = Math. floor(Math.sqrt(num));
  for (let index = 2; index <= boundary; index++) 
  if (num % index===0) 
  return false; 
  return num >= 2;
    
  };
  console.log(`The Number 11 is ${isPrime(11)}`);
  console.log(`The Number 23 is ${isPrime(23)}`);
  console.log(`The Number 31 is ${isPrime(31)}`);
  console.log(`The Number 44 is ${isPrime(44)}`);
  console.log(`The Number 56 is ${isPrime(56)}`);
  


  const num = 7;
  function isPrimeNumber(num){
      for (let index = 2; index < num; index++) {
          if (num%index==0) {
              return false;
          }
      }
      return true;
  }
  const result = isPrimeNumber(11);
  console.log(`Is Number Prime: ${result}`);