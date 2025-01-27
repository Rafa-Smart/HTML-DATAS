let no = 1;
let jumlah = 10;
let operasi = 6;
for (no; no <= jumlah; no++){
    // jadi disini kita membuat kondisi pertamanya ketika sudah mencapai 5 akan di flase kan agar masuk ke kondisi kedua, ini bisa juga pake !==
    if (no <= operasi && no !== 5) {
        console.log(`angkot ${no} sedang beroprasi.`)
    }
    else if (no === 8 || no === 10 || no === 5) {
        console.log(`angkot ${no} sedang lembur`)
    }
    else {
        console.log(`angkot ${no} sedang tidak beroprasi.`)
    }
} 

// bisa juga seperti ini

// nah kalo pake cara yang ini kita berati awalnya kita set dulu yang bagian yang lebih spesifiknya lalu kemudian yang bagian bagian yang kurang spesifik
for (no; no <= jumlah; no++){
    if (no === 8 || no === 10 || no === 5) {
        console.log(`angkot ${no} sedang lembur`)
    }
    else if (no <= operasi) {
        console.log(`angkot ${no} sedang beroprasi.`)
    }
    else {
        console.log(`angkot ${no} sedang tidak beroprasi.`)
    }
} 