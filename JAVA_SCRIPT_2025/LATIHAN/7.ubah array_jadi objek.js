let tes = [
  ["id", 1],
  ["name", "Alice"],
  ["role", "Developer"],
  ["agama", ["islam", "katolik", "budha"]],
];
let tes2 = tes.reduce((acc, [key, value]) => {
  acc[key] = value;
  return acc;
},{});

console.log(tes2);


// ini pake map
const apiData = [["id", 1], ["name", "Alice"], ["role", "Developer"]];
const hasil = apiData.map(([key, value]) => {
  return {[key] : [value]}
})

console.log(hasil)

console.log("+++++++++++")

// kalo pake for each ga bisa karena ga ada returnnya, jadi hasilnya undefined





const hasil2 = apiData.forEach(([key, value]) => {
  return {[key] : [value]}
})


// oke ini yg benar, karena kalo forEach itu ga bisa dimasukan ke dalam variabel

function Nih(apiData){ // jadi disini kita langsung desctruction di dala parameternya
  return apiData.forEach(([key, value]) => {
    return {[key] : [value]}
  })
}
console.log(Nih(apiData)) // undefined


