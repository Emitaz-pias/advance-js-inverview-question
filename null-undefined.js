// the way we can get undefined 
// by declaring a variable only and not assigning a vlue in it
let age ;
console.log(age);
// by not returning the result
// function add(num1 ,num2){
// console.log(num1+num2);
// }
// const result = add(4,6);
// console.log(result);
// by not returning properly
function add(num1 ,num2){
    console.log(num1+num2);
    return
    }
    const result = add(4,6);
    console.log(result);

// by accessing an not existing property or value
const premik ={name:"mr.khaja",phone:454564}
console.log(premik.gfName);   
const ages = [3,6787,7878,54] 
console.log(ages[12]);
//by setting up undefined 
let name = undefined;
console.log(name);