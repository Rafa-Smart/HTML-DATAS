// jadi else if ini maksudnya adalah elif

let noAngkot = 1;
let jumlahAngkot = 10;
let angkotBeroprasi = 6;
for (noAngkot; noAngkot <= jumlahAngkot; noAngkot++){
    if (noAngkot <= angkotBeroprasi){
        console.log(`angkot ${noAngkot} beroprasi`)
    }
    else if (noAngkot === 7){
        console.log(`angkot ${noAngkot} lembur`)
    }
    else {
        console.log(`angkot ${noAngkot} tidak beroprasi`)
    }
}