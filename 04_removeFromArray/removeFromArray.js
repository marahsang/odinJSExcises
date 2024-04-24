function removeFromArray(arr) {
    let args = [];
    
    for(let j = 1; j < arguments.length; j++){
        args.push(arguments[j]);
    }
    arr = arr.filter(function(val){
        if (args.indexOf(val) == -1){
        return true;
    } else {
        return false;
    }

    });
        return arr;
    }
    console.log(removeFromArray([1, 2, 2, 3], 2));

// Do not edit below this line
module.exports = removeFromArray;
