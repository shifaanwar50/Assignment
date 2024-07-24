let arr=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
let evenSum=0,oddSum=0;
let arr1=[];
for(let i=0;i<arr.length;i++)
{
if(i%2==0)
    {
     evenSum+=arr[i];   
    }    
    else
    {
      oddSum+=arr[i];  
    }
}
console.log("Sum of Even number "+evenSum);
console.log("Sum of odd numbers "+oddSum);
arr1.push(evenSum);
arr1.push(oddSum);
console.log(arr1);
arr.splice(1,0,19);//add new item using splice
console.log(arr);