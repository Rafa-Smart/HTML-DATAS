// function res(){
//     for(i of Object.values(arguments)){
//         console.log(i)
//     }
// }

// res(2,3,4,5,6,6,"rafa","putri","jamal")

let objekcoba = {
    nama:"rafa",
    kelas:"10pplg2"
}


function res(objek){
    for(i of Object.keys(objek)){
        console.log(i)
    }
}

res(objekcoba)
function res2(objek){
    for(i of Object.value(objek)){
        console.log(i)
    }
}

res2(objekcoba)