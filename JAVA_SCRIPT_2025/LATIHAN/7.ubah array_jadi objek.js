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
