var array=[3,4,5,6,8];
var salary=50;
var sum=0;
for(var i=0;i<array.length;i++){
     sum+=array[i];
}
console.log(sum);
if(salary<sum){
    console.log("Debt");
}
else if(salary==sum){
    console.log("Neutral");
}
else{
    console.log("save");
}