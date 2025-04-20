function sayHello() {
    const name = "Rafa Khadafi"
    console.log(`halo ${name}`);
}

const alamat = "jakarta"

class Person {
    energi = 10;
    constructor(nama, kelas, agama){
        this.nama = nama
        this.kelas = kelas
        this.agama = agama
    }
    makan(jumlah){
        return this.energi + jumlah
    }
    main(jam){
        return this.energi - jam
    }
}

export {
    sayHello,
    alamat,
    Person
}