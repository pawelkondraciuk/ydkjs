function foo(x, y) {
    var sum;
    return function() {
        if(sum === undefined) sum = x + y;
        return sum;
    }
}