//-------------------------Task 1 -------------------------
        
// let number=25;

// let deyer=(IsArray=Array.isArray(number));
// console.log(deyer);

//-------------------------Task 2 -------------------------

// const originalArray = [1, 2, 3];
// const clonedArray = originalArray.slice();
// console.log(clonedArray);


//-------------------------Task 3-------------------------


//Advanced Alqoritm 
// const originalArray =[1,2,3,4,5];
// const dashededArray=[];
// let k=1;
// let numbers=" ";

// for(let i=1;i<10;i++)
// {
    
//     dashededArray.push=originalArray[i];

//    if(i%2==0)            
//    {
//     dashededArray[i]='-';
//    }
   
//    if(i%2!=0)            
//    {
    
//     dashededArray[i]=originalArray[i-k];
    
//     k++;
//    }
//   numbers=numbers+ dashededArray[i];
  
// }
// console.log(numbers);


//-------------------------Task 4-------------------------


// let FirstArray=[1,2,3];
// let SecondArray=[100,2,1,10];
// let BothOfThem=[];
// let NoRpeat=[];


// BothOfThem=FirstArray.concat(SecondArray)
// NoRpeat=FirstArray.concat(SecondArray)
// console.log(BothOfThem);

// for(let i=0;i<BothOfThem.length-1;i++)
// { 

// for(let k=i+1;k<BothOfThem.length-1;k++){

//    if( BothOfThem[i]==BothOfThem[k]){

   
  
//      NoRpeat.splice(k,1);
    
    
//    }
// }

// }


// NoRpeat.forEach(element => {
//     console.log(element);
// });




//-------------------------Task 5-------------------------


// let Numbers=[1,2,3,43,45,6,765,65,7,89,8,8];

// Numbers.splice(1,3);

//-------------------------Task 7-------------------------


// function arrays (arr){


//     let uniqeArray=[];

//     arr.forEach(element => {
    
//         if(!uniqeArray.includes(element))
//         {
//             uniqeArray.push(element);
//         }
       
//     });
//     return uniqeArray; 
// }
// console.log(arrays([1,2,3,2,4,3,4,5,4]));


//-------------------------Task 8-------------------------

// let newNumber=parseInt(prompt("Add ney number of Array,Please."));

// let uniqeArray=[1,2,3,2,4,3,4,5,4];


//     if(!uniqeArray.includes(newNumber))
//     {
//         uniqeArray.push(newNumber);

        
//     }
//     console.log(!uniqeArray.includes(newNumber))


//-------------------------Task 9-------------------------






let FirstArray=[1,2,3];
let SecondArray=[100,2,1,10];
let BothOfThem=[];
let NoRpeat=[];


BothOfThem=FirstArray.concat(SecondArray);

console.log(BothOfThem);

for(let i=0;i<BothOfThem.length-1;i++)
{ 

for(let k=i+1;k<BothOfThem.length-1;k++){

   if( BothOfThem[i]==BothOfThem[k]){

   
  
     NoRpeat.push(BothOfThem[k])
    
    
   }
}

}
console.log(NoRpeat);
   



 
        


        
    

