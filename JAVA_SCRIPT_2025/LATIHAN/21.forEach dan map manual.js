function myForEach(array, callback) {
    // Loop melalui setiap elemen array
    for (let i = 0; i < array.length; i++) {
      // Panggil callback dengan tiga parameter:
      // 1. Elemen saat ini
      // 2. Index elemen
      // 3. Array asli
      callback(array[i], i, array);
    }
  }
  
  // Contoh penggunaan
  const numbers = [1, 2, 3, 4];
  
  myForEach(numbers, function(number, index) {
    console.log(`Elemen ke-${index} adalah ${number}`);
  });
  
  
  
  //  ini yang map
  
  function myMap(array, callback){
    let result = []
    for(let i=0; i < array.length; i++){
        result.push(callback(array[i], i, array))

        // PENTING
        // oohh jadi gini yang kita return di callbacknya maka nanti bakalan masuk ke dalam method push lalu kemudan bakal di masukan ke array result.
    }
    return result
}
const numbers2 = [1, 2, 3, 4];

let hasil = myMap(numbers2, function(number, index) {
  return number * 2;
  // disini pas kita return, maka otomatis si arrray resultnya ini akna di isi dengan hasil fungsi callbacknya
});
console.log(hasil)