
// ini contoh sychronous

const getDataSy = (id) => {
    const name = id === 1 ? "rafa" : "jamal";
    return {name: name, id: id};
}

const data1 = getDataSy(1);
console.log(data1);


const data2 = getDataSy(2);
console.log(data2);

console.log("selesai");

