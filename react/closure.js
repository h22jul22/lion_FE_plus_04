let f3;
let x = 100;
let f1 = function () {
    let x = 40;
    // x = 40; // window.x
    console.log('f1', x);
    f3 = function () {
        console.log('f3', x);
    };
};

console.log('global', x);

f1();
f3();
f3();
