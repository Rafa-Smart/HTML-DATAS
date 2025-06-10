
// import fs from "fs";

// // ini cara biasanya
// // fs.readFile("./TES-File-System/2.data-contoh-2.txt", "utf-8", (err, data) => {
// //     if(err){
// //         console.error("Error reading file:", err);
// //         return false
// //     }
// //     console.log("File content:", data);
// // })

// const readFileTes = util.promisify(fs.readFile);
// const data = await readFileTes("./TES-File-System/2.data-contoh-2.txt", "utf-8")
// console.log("File content:", data);
// // jadi util.promisify itu akan mengubah fungsi yang menggunakan callback menjadi promise, sehingga kita bisa menggunakan async/await

