function tes(array){
    for(let i = 0; i < array.length; i++){
        for(let j = 0; j < array.length - 1; j++){
            if(array[j] > array[j+1]){
                let tes = array[j];
                array[j] = array[j+1];
                array[j+1] = tes;
            }
        }
    }
    const tes = (array.length - 1)
    const besar = array[tes]
    const kecil = array[0]
    return `huruf terbesar : ${besar}\nhuruf terkecil : ${kecil}`
}

console.log(tes([2,4,545,76,23,1,32,4,5,65,7,87,54]))

// hasilnya
// huruf terbesar : 545
// huruf terkecil : 1