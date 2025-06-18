// console.log("Hello");
// const a=1;
// console.log(a);
// let isMarried=false;
// if(isMarried==true){
//     console.log("true");
// }
// else{
//     console.log("False");
// }
// let n=0;
// for(let i=0;i<10;i++){
//     n=n+1;
//     console.log(n);
// }
// 

// class Animal{
//     constructor(name,legcount,speaks){
//         this.name=name;
//         this.legcount= legcount;
//         this.speaks=speaks;
//     }
//     speak(){
//         console.log(this.speaks);
//     }
// }

// let dog=new Animal("dog",4,"bark");
// dog.speak();


// class Student{
//     constructor(name,age,gender){
//         this.name=name;
//         this.age=age;
//         this.gender=gender;
//     }
//     names(){
//         console.log(this.name);
//     }
//     ages(){
//         console.log(this.age);
//     }
// }

// let list=new Student("Abhishek",20,"male");
// list.names();
// list.ages();

// function square(n){
//     return n*n;
// }

// function sumOfSquare(a,b){
//     let var1=square(a);
//     let var2=square(b);
//     return var1+var2;
// }
// let squr=sumOfSquare(5,4);
// console.log(squr);

// function square(n){
//     return n*n;
// }
// function cube(n){
//     return n*n*n;
// }
// function sumOfSomethings(a,b,fun){
//     console.log(fun);
//     let vari1=fun(a);
//     let vari2=fun(b);
//     return vari1+vari2;
// }
// let sum=sumOfSomethings(5,8,square);
// console.log(sum);


// const fs =require("fs");
// fs.readFile("a.txt","utf-8",
// function(err,data){
//     console.log(err);
//     console.log(data);
// });
// setTimeout(function(){
//     console.log("hii1")
// },10000);
// console.log("Hi there");
// setTimeout(function(){
//     console.log("hii")
// },5000);
// let a=0;
// for(let i=0;i<10;i++){
//     console.log(a=a+1);
// }
// console.log("hello");


// const fs=require("fs");
// function addCopyRight(cb){
//     fs.readFile("a.txt","utf-8",function(err,data){
//         data=data+"Abhishek 2024";
//         fs.writeFile("a.txt",data,function(){
//             cb();
//         })
//     });
// }

// addCopyRight(function(){
//     console.log("copyright has been put");
// })


setTimeout(function(){
    console.log("Hii there1");
    setTimeout(function(){
        console.log("Hii there2");
    },4000);
    setTimeout(function(){
        console.log("Hii there3");
    },5000);
},3000)