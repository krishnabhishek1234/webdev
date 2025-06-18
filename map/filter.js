//even number from array
const arr=[1,2,3,4,5];
const arr2=["Abhishek","Harkirat","Rahul"];

// const ans =arr2.filter(function (n){
    const ans =arr2.filter((n)=>{
if(n.startsWith("A"))    
    // if(n%2==0) //for arr
        {
        return true;
    }else return false;
});
console.log(ans);