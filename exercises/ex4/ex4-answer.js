function foo(n) {
    return 1;
}

function bar(n) {
    return 4;
}

function add(a, b) {
    return a + b;
}

console.log(add(foo(), bar()));

function add2(fn1, fn2) {
    return add(fn1(), fn2());
}

console.log(add2(foo, bar));

function foon(n) {
    return function() {
        return n;
    }
}

function addnRecursion(fn, fn2, ...args) {
    if (args.length == 0) return fn() + fn2() 
    return fn() + addnRecursion(fn2, ...args);
}

console.log(addnRecursion(foon(1), foon(4)));

function addn(fns) {
    var sum = 0;
    for(var i = 0; i < fns.length; i++) {
        sum += fns[i]();
    }
    return sum;
}

console.log(addnLoop(foon(1), foon(4)));

console.log([foon(1), foon(4)].reduce(((a,b) => a + b), 0));

// 6

var numbers = [1,6,3,4,3,2,5,9,3];

console.log(numbers.reduce((a, b) => {
    if (a.indexOf(b) == -1) a.push(b);
    return a;
}, []));

// 7

console.log(numbers.filter((a) => a % 2));

// 8

console.log(addn(numbers.map(foon)))