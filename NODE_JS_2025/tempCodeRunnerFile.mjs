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
        let hasil = await ambilData(`masukan harga belanja ${i+1} : `)
        // nah jadi disini ini nanti setiap perulagnan kan user aakn mnasih jawaban misal 78, maka nanti disetiap perluangan ini
        // maka si let hasilnya ini akan di akan ditimpa degngan jawaban user selanjutnya
        console.log(hasil)
        dataArray.push(Number(hasil)); // disini kita parse dulu, agar jadi number dan bisa di operasikan
    }
    return dataArray
}