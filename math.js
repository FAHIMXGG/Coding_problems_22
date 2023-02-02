const result = Math.pow(3, 4);
console.log(result);

const numb1 = 24;
const numb2 = 34;
// abs not - res
const gap = Math.abs(numb1 - numb2);
if (gap < 5) {
    console.log('allow');
}
else{
    console.log('not allowed');
}
//round
const number = 2.5545 
const fullNumber  = Math.round(number);
console.log(fullNumber);
// ceil always top/floor down
const result2 = Math.ceil(2.0001);
console.log(result2);
// random num 0-1
console.log(Math.random());
// random control
const random = Math.round(Math.random()*300);
console.log(random);
///
for (let i = 0; i < 20; i++) {
    const random2= Math.round(Math.random()*6);
    console.log(random2);
    
}