// // let s = 0
// // for (let i = 0; i < 10; i++) {
// //     s += i
// // }
// // console.log(s)
// // penjelasan
// /* Awalnya, nilai s adalah 0.
// Pada iterasi pertama (i = 0), nilai s tidak berubah karena s += 0 sama dengan s = s + 0, sehingga s tetap 0.
// Pada iterasi kedua (i = 1), nilai s menjadi 1 karena s += 1 sama dengan s = s + 1, sehingga s menjadi 1.
// Pada iterasi ketiga (i = 2), nilai s menjadi 3 karena s += 2 sama dengan s = s + 2, sehingga s menjadi 3.
// Pada iterasi keempat (i = 3), nilai s menjadi 6 karena s += 3 sama dengan s = s + 3, sehingga s menjadi 6.
// Pada iterasi kelima (i = 4), nilai s menjadi 10 karena s += 4 sama dengan s = s + 4, sehingga s menjadi 10.
// Pada iterasi keenam (i = 5), nilai s menjadi 15 karena s += 5 sama dengan s = s + 5, sehingga s menjadi 15.
// Pada iterasi ketujuh (i = 6), nilai s menjadi 21 karena s += 6 sama dengan s = s + 6, sehingga s menjadi 21.
// Pada iterasi kedelapan (i = 7), nilai s menjadi 28 karena s += 7 sama dengan s = s + 7, sehingga s menjadi 28.
// Pada iterasi kesembilan (i = 8), nilai s menjadi 36 karena s += 8 sama dengan s = s + 8, sehingga s menjadi 36.
// Pada iterasi kesepuluh (i = 9), nilai s menjadi 45 karena s += 9 sama dengan s = s + 9, sehingga s menjadi 45. */


// // let s = 0;
// // while (s<10) {
// //     s+=s
// //     s++;
// // }
// // console.log(s)
// /* Awalnya, nilai s adalah 0.
// Pada iterasi pertama, kondisi s < 10 terpenuhi karena s adalah 0. Kemudian, nilai s menjadi 0 karena s += s sama dengan s = s + s, sehingga s tetap 0. Setelah itu, nilai s menjadi 1 karena s++.
// Pada iterasi kedua, kondisi s < 10 terpenuhi karena s adalah 1. Kemudian, nilai s menjadi 2 karena s += s sama dengan s = s + s, sehingga s menjadi 2. Setelah itu, nilai s menjadi 3 karena s++.
// Pada iterasi ketiga, kondisi s < 10 terpenuhi karena s adalah 3. Kemudian, nilai s menjadi 6 karena s += s sama dengan s = s + s, sehingga s menjadi 6. Setelah itu, nilai s menjadi 7 karena s++.
// Pada iterasi keempat, kondisi s < 10 terpenuhi karena s adalah 7. Kemudian, nilai s menjadi 14 karena s += s sama dengan s = s + s, sehingga s menjadi 14. Setelah itu, nilai s menjadi 15 karena s++.
// Pada iterasi kelima, kondisi s < 10 tidak terpenuhi karena s adalah 15. Oleh karena itu, loop while berhenti. */
// // let s = ""
// // for (let i = 0; i < 10; i++) {
// //     s += "*"
// // }

// // // while
// // let i = 0;
// // let s = "";
// // while (i<10){
// //     s += "*"
// //     i++
// // }
// // console.log(s)


// // segitiga biasa for
// // let s = ""
// // for (let i = 0; i < 10; i++) {
// //     for (let j = 0; j < i ; j++)
// //         s += "*"
// // s+="\n"
// // }
// // console.log(s)

// // PENJELASAN YANG SANGAT PENTING
// /* Pada penjelasan sebelumnya, saya bilang bahwa setiap looping variable i dan j selalu direset kembali menjadi 0. Namun, pada contoh yang saya berikan sebelumnya, hanya variable j yang direset kembali menjadi 0 pada setiap looping.

// Hal ini karena variable i dan j memiliki scope yang berbeda. Variable i memiliki scope yang lebih luas, yaitu pada blok for yang pertama, sedangkan variable j memiliki scope yang lebih kecil, yaitu pada blok for yang kedua.

// Pada blok for yang pertama, variable i diinisialisasi dengan nilai 0 dan kemudian diincrement pada setiap looping. Namun, pada blok for yang kedua, variable j diinisialisasi dengan nilai 0 pada setiap looping, sehingga nilai j selalu direset kembali menjadi 0.

// Jadi, pada setiap looping, hanya variable j yang direset kembali menjadi 0, sedangkan variable i tidak direset kembali menjadi 0. Hal ini karena variable i memiliki scope yang lebih luas dan tidak direset pada setiap looping. */






// // disini ketika kita pake while, maka kit ahaurs reset ulang nilai j karena agar bisa selalu 0 ketika dibandingkan bersama i, tapi kalo pake for, maka tidak perlu mereset nilai j nya lagi karena disetiap perulangan j nya akan selalau direset coba aja liat

// // let i = 0;
// // let j = 0;
// // let s = "";
// // while (i<10){
// //     i++
// //     j = 0
// //     while(j<i){
// //         j++
// //         s+="*"
// //     }
// // s+="\n"
// // }
// // console.log(s)

// // segitiga terbalik for
// // let s = ""
// // for (let i = 10; i > 0; i--) {
// //     for (let j = 0; j < i; j++) {
// //         s += "*"
// //     }
// // s += "\n"
// // } 
// // console.log(s)

// // pake while
// // segitiga terbalik
// // let i = 10;
// // let j = 0;
// // let s = "";
// // while (i > 0){
// //     i--
// //     j = 0
// //     while(j<i){
// //         j++
// //         s += "*"
// //     }
// // s += "\n"
// // }
// // console.log(s)


// // segitiga sempurna pake for
// let tinggi = 10;
// let b = "";
// for (let i = 0; i < tinggi; i++){
//     for (let j=0; j < tinggi - i - 1;j++ ){
//         b+=" "
//         // nah nanti bakal terus diulang disini sampe false
//     }
//     for (let y = 0; y <= i; y ++){
//         b+="* "
//     }
//     b+="\n"

// }
// console.log(b)

// // let tinggi = 10;
// // let b = "";
// // for (let i = 0; i < tinggi; i++){
// //     for (let j = 0; j < tinggi - i - 1; j++){
// //         b += " ";
// //     }
// //     for (let k = 0; k <= i; k++){
// //         b += "* ";
// //     }
// //     b += "\n";
// // }
// // console.log(b);
//     // let tinggi = 10;
//     // let b = "";
//     // for (let i = 0; i < tinggi; i++){
//     //     for (let j = 0; j < tinggi - i - 1; j++){
//     //         b += " ";
//     //     }
//     //     for (let k = 0; k < 2 * i + 1; k++){
//     //         b += "* ";
//     //     }
//     //     b += "\n";
//     // }
//     // console.log(b);

//     // ini artinya incrementnya akan ditambhakan ketika sudah melakukan statement, maksudnya berati disini i kan 0 dan di cek apakah i == 0 maka jawabannya adalah true maka lanjut, dan akan lanjut s akan ditambah 1 kemudian baru i nya akan ditambahkan
//     // s = 0
//     // for (i = 0; i == 0; i++) {
//     //     s+= 1
//     // }
//     // console.log(s)

// for (let i = 0; i<10;i++){
//     s = " "
//     for (let j = 0; j <=5;j++){
//         if (i%2===0){
//             s+=" #"
//         }
//         else{
//             s += "# "
//         }
//     }
//     console.log(s)
// }    

// // nanti kit atanya kechat gpt materi in lagi yang perulangan 


// // keren nih

// // let i = 1;
// // let hasil = 0;
// // for(i = 1; i<=10; i++){
// //     for(j = 1; j <=i;j++){
// //         hasil += j
// //     }
// // hasil +="\n"
// // }
// // console.log(hasil)



// let s = 1;
// let hasil2 = "";
// for(i = 1; i<=10; i++){
//     for(j = 1; j <=i;j++){
//         hasil2 += "*"
//     }
// hasil2 +="\n"
// }
// console.log(hasil2)


// // let i = 1;
// // let hasil = "";
// // for(i = 10; i>=1;i--){
// //     for(j=1;j<i;j++){
// //         hasil += "*"
// //     }
// // hasil += "\n"
// // }
// // console.log(hasil)


// // let i = 1;
// // let hasil = "";
// // for(i= 1;i<=10;i++){
// //     for(j=0; j<=10-i-1;j--)
// // }

// let hasil = ""
// for(i = 0; i<10; i++){
//     for(j=0;j<=i;j++){
//         hasil += "*"
//     }
//     hasil += "\n"
// }
// console.log(hasil)


// console.log("============")

// let hasil1 = ""
// for(i=10;i>=0;i--){
//     for(j=0;j<=i;j++){
//         hasil1 += "*"
//     }
//     hasil1 += "\n"
// }
// // console.log(hasil1)
// let hasil = ""
// for(i=0;i<10;i++){
//     for(j=0;j<i;j++){
//         hasil += "*"
//     }
//     hasil += "\n"
// }
// console.log(hasil)
// console.log("==========")

// let hasil2 = "";
// for(i=10;i>0;i--){
//     for (j=0;j<i;j++){
//         hasil2 += "*"
//     }
//     hasil2 += "\n"
// }
// console.log(hasil2)

    // let tinggi = 10;
    // let b = "";
    // for (let i = 0; i < tinggi; i++){
    //     for (let j = 0; j < tinggi - i - 1; j++){
    //         b += " ";
    //     }
    //     for (let k = 0; k < 2 * i + 1; k++){
    //         b += "*";
    //     }
    //     b += "\n";
    // }
    // console.log(b);

// let b = 0;
// let tinggi = 10;
// for(let i = 0;i<tinggi;i++){
//     for(let j = 0;j<tinggi -i -1;j++){
//         b += " ";
//     }
//     for(let k = 0; k < i +2;k++){
//         b += "* ";
//     }
//     b += "\n"
// }
// console.log(b)

// let b = "";
// let tinggi = 0;
// for(let i = 10;i>tinggi;i--){
//     for (let j = 0;j < i;j++){
//         b += " ";
//     }
//     for (let k = 0;k<i*2+1;k++){
//         b += "*"
//     }
//     b+= "\n"
// }
// console.log(b)

// oke ini nyoba lagi



// let t = 10
// let s = ""
// for(let i = 0; i <10; i++){
//     for(j=0;j<t-i;j++){
//         s += " "
//     }
//     for(k=0;k<i*2-1;k++){
//         s += "*"
//     }
//     s += "\n"
// }


// nahh ini yng bener bre, segitiga sempurna terbalik
console.log("=============")
t = 0
let s =""
for(i=10;i>t;i--){
    for(j=10;j>i;j--){
        s += " "
    }
    for(k=0;k<i*2-1;k++){
        s += "*"
    }
    s += "\n"
}
console.log(s)
