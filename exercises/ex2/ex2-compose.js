function sum(arg1, arg2) {
    return arg1 + arg2;
}

function add(arg) {
    return arg+5;
}

function div(arg) {
    return arg/2;
}

function compose(fn3, fn2, fn1) {
    return function (arg1, arg2) {
        return fn3(fn2(fn1(arg1, arg2)));
    }
}

var comp = compose(div, add, sum);

console.log(comp(1,2));
compose.bind