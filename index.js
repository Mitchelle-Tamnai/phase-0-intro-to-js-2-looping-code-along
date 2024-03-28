// Code your solutions in this file

for (let age =30; age < 40; age ++){
   // console.log(`I'm ${age } years old. Happy birthday to me!`)

}

const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
      console.log(`Wrapped ${gifts[i]} and added a bow!`);
      //debugger;
    }
  
    return gifts;
  }
  
  console.log(wrapGifts(gifts));

  function writeCards(arr, name) {
    let newarr = []

    for (let i = 0; i < arr.length; i++) {
        newarr.push(`Thank you, ${arr[i]}, for the wonderful ${name} gift!`);
    
    }
    return newarr

  }
  //const arr  = ['Charlie', 'Samip', 'Ali']
  console.log(writeCards(['Charlie', 'Samip', 'Ali'], 'birthday'))

  function countDown(integ){
    let i = integ
    while (i >=0) {
        console.log(i--)
        
    }
    return i

  }
  console.log(countDown(13))

