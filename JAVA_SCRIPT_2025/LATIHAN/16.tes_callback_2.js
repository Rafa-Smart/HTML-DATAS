

// ini asynchronous

const getData = (id, callback) => {
    const time = id === 1 ? 3000 : 2000;
    setTimeout(()=> {
        const name = id === 1 ? "rafa" : "jamal";
        callback({name: name, id: id});
    }, time)
}

// jadi disini kita bisa langusng kasih fungsinya tanpa nama atau pake yang dibawah
const data1 = getData(1, (hasil) => {
    console.log(hasil)
})


const data2 = getData(2, tes)


console.log("selesai")

// bisa jga pake ini 
function tes(hasil){ // jadi sebenarnya hasil ini adalah sebuah objek yang diasih di callbacknya pas di getData, terus karena di callbacknya itu ngasihnya objek tanpa nama, maka hasil ini akan merepresentasikan objek yang kita kasih di callbacknya
    console.log(hasil)
    // console.log(hasil.id) // idnya
    // console.log(hasil.name) // namanya
    return hasil
}