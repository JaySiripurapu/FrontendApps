const array=document.querySelectorAll("p");

console.log(array);

array.forEach(item=>{
   if( item.innerText.indexOf("success")!=-1)
   {
       console.log(item.innerText.indexOf("success"))
       item.classList.add("success");
       item.innerText=item.innerText.toUpperCase();
   }
   else if(item.innerText.indexOf("error")!=-1)
   {
       item.classList.add("error")
   }
})