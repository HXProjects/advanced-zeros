module.exports = function getZerosCount(number, base) {
  // your implementation
  //function to calculate base
  console.log(`base${base}`);
  function getMaxPrime(base){        
   // let maxPrime=2;
    let baseArray=[];//create array to store all prime in a base
    for(n=2;n<=base;n+=1){
        while(base%n==0){
        
            base=base/n;
            maxPrime=n;
            
        } 
        baseArray.push(maxPrime);       
    }
   // console.log(`basearray length${baseArray.length}`);
   // console.log(`maxprime${maxPrime}`);
   // console.log(`last in basearray${baseArray[baseArray.length-1]}`);
   
  //maxPrime=baseArray[length-2];
 // return baseArray[length-2];
    return maxPrime;
   
  }
  function zeroBase(number, base){
    //reset count
    let count=0; 
    //вычислить сколько кратных n может быть n*n n*n*n
    //get base number to start to count
    let startNumber=base;    
    let n=startNumber;
    //while n-base number
    while(n<=number){ 
     //how much n exists in number
    let numberN=number/n;
     //add this n ammount to counter withot decimal part
    count+=Math.trunc(numberN); 
    //get number n-times bigger than previous
    n*=base;
    }
    return count;
  }
  let primeBase=getMaxPrime(base);
  let count=zeroBase(number, primeBase);
 
  return count;
}