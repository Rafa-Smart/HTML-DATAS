// template dari if statement
/* 
// kondisi = expresi

// jadi kita akan menalukan aksi yang berada didalam kurung kurawal ini ketika kondisinya bernilai true,dan jika kondisinya bernilai false maka aksi yang berada didalam kurung kurawal ini tidak akan dijalankan dan akan keluar dari blok if


if (kondisi) {
        aksi
    }
*/

// contoh 
let angka = 2;
if (angka % 2 === 0) {
    console.log("genap");
} else {
    console.log("ganjil")
}

// study kasus
let noAngkot = 1;
let jumlahAngkot = 10;
let angkotBeroprasi = 6;


// ini pake for 
for (noAngkot; noAngkot <= jumlahAngkot; noAngkot++){
    if (noAngkot <= jumlahAngkot) {
        console.log(`angkot beroprasi ${noAngkot}.`)
    } else{
        console.log(`angkot tidak beroprasi ${noAngkot}.`)
    }
}

console.log("===============")


// ini pake while
while(noAngkot<jumlahAngkot+1){
    if (noAngkot <= jumlahAngkot) {
        console.log(`angkot beroprasi ${noAngkot}.`)
    } 
    else {
        console.log(`angkot tidak beroprasi ${noAngkot}.`)
    }
noAngkot++
}