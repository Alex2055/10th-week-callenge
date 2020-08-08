const a = function () {
    let sum = 2 + 3;
    b(sum);
}

const b = function (data) {
    let sum2 =  data + 5;
    c(sum2)
}

 const c = function (data) {
     let sum3 = data +10;
console.log(sum3)
 }

a();
 


