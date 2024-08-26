var arr = [];
var val = document.getElementById("validation");
var sortedArr = [];

function getArray(){
   var num = document.getElementById("inputField").value;
   if (num.length > 0){
      val.innerHTML = '';
      arr.push(num);
      console.log(arr);
      
   }else {
      val.innerHTML = 'Please input an integer! :((';
   }
   
}

function sortedArray(){
   var squaringArr = arr;
   arr = [];
   console.log(squaringArr);
   squaringArr.forEach(num =>{
     squaredNum = num ** 2;
     arr.push(squaredNum);
   });
   for (let index = 0; index < arr.length; index++) {
      arr.forEach((num, key) => { 
         temp = num[index];
         console.log(temp);
         if (temp < num) {
            sortedArr.push(num);
         }
         
      });
   }
   
   console.log(sortedArr);
}