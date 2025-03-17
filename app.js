function ISBN(isbn){
  if(isbn.length!==10||isNaN(isbn)){
    return "Invalid Isbn"
  }
  let sum = 0;
  for(let i =0; i<10; i++){
    sum += parseInt(isbn[i]*(i+1))
  }

  return sum % 11 === 0? "valid Isbn": " Invalid Isbn";
}


function gcd(a,b){
  while(b!==0){
    let temp = b;
    b = a%b;
    a = temp;
  }
  return temp;
}

function harshad(n){
  let sum = 0;
  let temp = n;
  while (n>0){
    ld = n%10

    sum = sum + ld;

    n = math.floor(temp/10)
    }

    return n%sum ==0 ?" harshad number": "not harshad number";
}


function squre(n){
  if(n<0) return false;

  let sqrt = Math.sqrt(n);
  return sqrt === Math.floor(sqrt)
}


function abondon(n){
  let sum  = 0;
  for( let i =1; i<n/2; i++){
    if(n%i ==0) sum = sum + i;
  }

  if(sum > n) return " abondon Number "
}

function fibb(n){
  let fib =[0,1];
  for( let i = 2; i<=n; i++){
    fib[i] = fib[i-1]+fib[i-2];
  }
  return fib[n]
}