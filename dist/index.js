"use strict";
// const yo = () => {
//   let num: number = 10;
//   console.log(num);
// };
// const array : number[] = [1,2,3]
//ANY
// let  array  = [] // type would be any 
// let array : number[] = []
//  array[0] = 1
//  array [1] = "2" X  //will get an error
// const array : number [] = []
// array.forEach((i)=>i.toFixed // can get the methods and all )
//TUPLE IN TYPESCRIPT
// let user : [number,string,boolean] = [10,"m",23]
// user[0]
// user[1] 
//ENUM (can use const in front to get simpler js)
// enum size {
//   small=1, //will explicitly set to 1
//   medium, //will implicitly set to 2
//   large} //will implicitly set to 3
// const mySize : size = size.medium
// console.log(mySize) // will be 2
//FUNCTIONS
// function calculateTax(income:number , taxYear = 2020 ) : number {
//   if(taxYear < 2022) return income * 1.2
//   return income * 1.3
// }
// console.log(calculateTax(20_000,2025))
//OBJECTS
const employee = {
    id: 10,
    name: 'Navaf',
    retire: (date) => {
        console.log(date);
    },
};
