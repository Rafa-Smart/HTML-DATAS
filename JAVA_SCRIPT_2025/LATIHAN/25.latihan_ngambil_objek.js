const array = {
    "data":{
        "link":"tesss",
        kode:222222,
        foto:{
            self:"eeeeeee",
            nama:"rafa khadafi"
        },
        sekolah:["sd", "smp", "sma"]
    }
}

// const {data:{link, kode, foto:{self, nama}}} = array
// kalo ini gabisa karena kita hanya mengekstrak si link, kode, self dn nama saja, karena data:, dan foto: itu digunakan untuk mengekstrak, bukan di buat sebagia variable baru, aka caranya adalah

const {data, data:{link, kode, foto, foto:{self, nama}, sekolah, sekolah:[data1, data2, data3]}} = array;

console.log(data)
console.log(link)
console.log(kode)
console.log(foto)
console.log(self)
console.log(nama)
console.log(sekolah)
console.log(data1)
console.log(data2)
console.log(data3)