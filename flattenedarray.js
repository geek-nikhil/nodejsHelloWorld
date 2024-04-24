function flattenArray(arr) {
    const string  =  arr.toString();
        let ar = []
        let  k=0;
        for(let i = 0 ; i <string.length;i++){
            if((/\d/).test(string[i])){
                 console.log(string[i]);
                 ar[k++] = +string[i];
            }
        }
   return ar ;
}

const arrayToFlatten = [1, [2, [3, 4], 5], 6];
const fla = flattenArray(arrayToFlatten);
console.log(fla);