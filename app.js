'use strict';
const memo = new Map();
memo.set(0,0);
memo.set(1,1);

function fib(n) {
    if(n>=2){
        memo.set(n,memo.get(n-1)+memo.get(n-2));
    }
    return memo.get(n);
  }

  const length = 40;
  for (let i = 0; i<=length;i++){
      console.log(fib(i));
  }