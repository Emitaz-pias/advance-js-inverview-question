// double equal checks only the value not the type
// it checks the value by converting like 0 == false ,1==true
// === checks the value and the type too doesn't converts anything
let num1 = 1;
let num2 = true;
if(num1===num2){
    console.log("the condition is true");
}
else{
    console.log("the condition is false");
}