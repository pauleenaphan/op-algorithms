function fibs(value){
    let arr = [];
    let currVal = 0;
    let oldSum = 1;
    for(let i = 0; i < value; i++){
        let newSum = currVal + oldSum;
        arr.push(newSum);
        currVal = oldSum;
        oldSum = newSum;
        
    }

    for(let i = 0; i < arr.length; i++){
        console.log(arr[i]);
    }
    return arr;
}

function fibsRec(value){
    if(value == 0){
        return 0;
    }
    if(value == 1){
        return 1;
    }
    //uses the fib formula fn = f(n-1) + f(n-2)
    return(fibsRec(value - 1) + fibsRec(value - 2));
}

console.log("without recursion");
fibs(8);

console.log("with recursion " + fibsRec(8));
