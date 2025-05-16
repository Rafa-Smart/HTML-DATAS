import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// ini cara async biasa
// rl.question("masukan nama anda : ", nama => {
//     console.log("hallo ", nama)
//     rl.close()
// })

// ini promises
function ambilData(tanya) {
  return new Promise((resolve) => {
      rl.question(tanya, (data) => {
          resolve(data);
        });
    })
}


async function ambilDataRata(ulang){
    let dataArray = [];
    for(let i = 0; i < ulang; i++){
        const hasil = await ambilData(`masukan harga belanja ${i+1} : `)
        dataArray.push(Number(hasil)); // disini kita pare dulu, agar jadi number dan bisa di operasikan
    }
    return dataArray
}

// nanti juga ini bisa di bungkus dulu dengan fungis async, lalu dibungkus dnegna try catch, finaly, dan nanti si rl.close() nya, di taruh di finaly

// const nama = await ambilData("masukan nama anda : ");
// const umur = await ambilData("masukan umur anda : ");
// console.log(`halo ${nama}, umur kamu adalah ${umur}`);

// rl.close();
// console.log("progrm selesai");

// // coba lagi
// (async function jumlahRata() {
//   try {
//     let jumlah = await ambilData("masukan jumlah data : ");
//     let hasil = await ambilDataRata(jumlah);

//     const hasil2 = hasil.reduce((acc, nilai) => {
//         return acc + nilai
//     }, 0)
//     console.log(`kamu berbelanja sebanyak ${jumlah}\nrata rata nilai belaja kamu adalah : ${hasil2/jumlah}`)
//   } finally {
//     rl.close()
//     console.log("program selesai")
//   }
// })()


// kalo mau digunain, yan gdulu kamu komen dulu
// coba lagi
let total = 0;

console.log('Ketik angka (atau "selesai" untuk berhenti): ');

rl.on('line', (input) => {
  if (input.toLowerCase() === 'selesai') {
    console.log(`Total: ${total}`);
    rl.close();
  } else {
    const num = parseFloat(input);
    if (!isNaN(num)) {
      total += num;
      console.log(`Ditambahkan: ${num}, Total sekarang: ${total}`);
    } else {
      console.log('Masukkan angka yang valid.');
    }
  }
});
// Event "line" pada modul readline di Node.js digunakan untuk mendeteksi ketika pengguna menekan tombol Enter (atau newline).

// 1. Apa Itu Event "line"?
// Event ini dipicu setiap kali ada baris baru yang masuk ke dalam antarmuka readline.

// Biasanya digunakan saat kita ingin menerima banyak baris input dari pengguna tanpa menghentikan antarmuka.

// Event "line" dapat digunakan untuk input berkelanjutan atau stream data.




// tadi ini cara kamu sebelumny
function ambilDataSalah(tanya, ulang = null) {
  let dataArray = [];
  return (
    new Promise((resolve) => {
      if (ulang) {
        for (let i = 0; i <= ulang; i++) {
          rl.question(tanya, (data) => {
            resolve(dataArray.push(data))
          });
        }
      } else {
        rl.question(tanya, (data) => {
          resolve(data);
        });
      }
    }),
    dataArray
  );
}

async function jumlahRataSalah() {
  try {
    let jumlah = await ambilDataSalah("masukan jumlah data : ");
    let hasil = await ambilDataSalah("masukan harga :", jumlah)[1];

    const hasil2 = hasil.reduce((acc, nilai) => {
        return acc + nilai
    }, 0)
    console.log(`kamu berbelanja sebanyak ${jumlah}\nrata rata nilai belaja kamu adalah : ${hasil2}`)
  } finally {
    rl.close()
    console.log("program selesai")
  }
}