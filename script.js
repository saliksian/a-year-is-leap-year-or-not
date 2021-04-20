let year = parseInt(prompt('Enter Year'));
if(year == 0){
    console.log("This is not a year!!");
}
else if((year%4 == 0)||(year%100 == 0)||(year%400 == 0)){
    console.log(year+" is a leap year");
}

else{
    console.log(year+" is a not leap year");
}