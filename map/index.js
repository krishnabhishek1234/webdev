// map,filter,arrow function

//map
const input=[1,2,3,4,5];
// const newArray=[];
// for(let i=0;i<input.length;i++){
//     newArray.push(input[i]*2);
// }
// console.log(newArray);


// function transform(i){
//     return i*2;
// }
const ans=input.map(function (i){
    return i*2;
});
console.log(ans);