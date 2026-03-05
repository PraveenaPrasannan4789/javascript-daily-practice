function recursive(){
    recursive();
}

recursive();
//RangeError: Maximum call stack size exceeded

// If too many functions are added without finishing, the stack becomes full.