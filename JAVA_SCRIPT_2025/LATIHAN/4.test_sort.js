const array = new Array(253,5,67,32,11,23,98,54,5,3,2,4,334,4,1,5,6,7,8)
function sortnih(array){
    for (let i = 0; i < array.length; i++){
        for (let j = 0; j < array.length - 1; j++){
            if(array[j] > array[j+1]){
                let dummy = array[j]
                array[j] = array[j+1]
                array[j+1] = dummy
            }
        }
    }
    return array
}
console.log(sortnih(array))