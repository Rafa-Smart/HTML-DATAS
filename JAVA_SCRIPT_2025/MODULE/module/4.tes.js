export const alamat = "damaskus"
class Person {
    constructor(nama, kelas){
        this.nama = nama;
        this.kelas = kelas;
    }
}

class Math {
    static myForEach(array, callback){
        for(let i = 0; i < array.length; i++ ){
            callback(array[i], i, array)
        }
    }

    static tambah(a, b){
        return a + b
    }
}


export {Person, Math}
// disini juga bisa langsung pake alias, tapi yang lebih direkomendasikan adalah emnggunakna alias ketiak di importnya saja