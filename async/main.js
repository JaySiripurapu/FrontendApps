console.log(1);
console.log(2);
setTimeout(()=>{
    console.log(3);
},2000)
console.log(4);

setTimeout(()=>{
    console.log(5);
},1999)
setTimeout(()=>{
    console.log(5.5);
},1000)
 console.log(6);
