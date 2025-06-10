let b = "";
let tinggi = 0;
for(let i = 10;i>tinggi;i--){
    for (let j = 0;j < i;j++){
        b += " ";
    }
    for (let k = 0;k<i*2+1;k++){
        b += "*"
    }
    b+= "\n"
}
console.log(b)