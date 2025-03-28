{
    let arr1 = [];
    Array.prototype.aaaa = function () {
        console.log('aaaa');
    };

    let arr2 = [];
    console.log('1', arr1.aaaa());
    console.log('2', arr2.aaaa());
}

{
    let arr3 = [];
    console.log('3', arr3.aaaa());
}
