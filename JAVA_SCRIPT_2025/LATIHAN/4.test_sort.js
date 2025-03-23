const array = new Array(253,5,67,32,11,23,98,54,5,3,2,4,334,4,1,5,6,7,8)

function mesin(arr){
    for(let j = 0; j < arr.length - 1;j++){
        if(arr[j] < arr[j+1]){
            let temp = arr[j]
            arr[j] = arr[j+1]
            arr[j+1] = temp 
        }
    }
    return arr
}
console.log(mesin(array))







// function sortnih(array){
//     for (let i = 0; i < array.length; i++){
//         for (let j = 0; j < array.length - 1; j++){
//             if(array[j] > array[j+1]){
//                 let dummy = array[j]
//                 array[j] = array[j+1]
//                 array[j+1] = dummy
//             }
//         }
//     }
//     return array // [1, 2, 3, 4, 4, 5, 5, 5, 6, 7, 8, 11, 23, 32, 54, 67, 98, 253, 334]
// }
// console.log(sortnih(array))