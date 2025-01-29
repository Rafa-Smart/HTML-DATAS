// jadi else if ini maksudnya adalah elif

// let noAngkot = 1;
// let jumlahAngkot = 10;
// let angkotBeroprasi = 6;
// for (noAngkot; noAngkot <= jumlahAngkot; noAngkot++){
//     if (noAngkot <= angkotBeroprasi){
//         console.log(`angkot ${noAngkot} beroprasi`)
//     }
//     else if (noAngkot === 7){
//         console.log(`angkot ${noAngkot} lembur`)
//     }
//     else {
//         console.log(`angkot ${noAngkot} tidak beroprasi`)
//     }
// }

let no = 1;
let jumlahAngkot = 10;
let angkotBeroprasi = 6
for(no; no <= jumlahAngkot; no++){
    if(no <= angkotBeroprasi){
        console.log(`" angkot no ${no} beroprasi"`)
    }else if (no === 7){
        console.log(`" angkot no ${no} lembur"`)
    }else {
        console.log(`angkot ${no} tidak beroprasi `)
    }
}

