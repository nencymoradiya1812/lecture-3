var str ="red and white";
console.log(str.length);
var count=0;
for (let i=0;i<str.length;i++){
                if(str[i]=="a"||str[i]=="e"||str[i]=="i"||str[i]=="o"||str[i]=="u"){
                                console.log("true")
                                count=count+1
                }
}
console.log(count);