var temp=localStorage["name"];
console.log(temp)
document.getElementById("name1").innerHTML=temp;

var imgArray = new Array();

imgArray[0] = new Image();
imgArray[0].src = './images/logo.jfif';

imgArray[1] = new Image();
imgArray[1].src = './images/home.jpg';
imgArray[2] = new Image();
imgArray[2].src = './images/logo.jfif';
var i=0
function nextImage()
{

var img = document.getElementById("element");
if(i == 2){
       i=-1;
}
    document.getElementById("element").src = imgArray[i+1].src;
    i=i+1;  
}
function prevImage()
{

var img = document.getElementById("element");
if(i == 0){  
    i=3;
}
    document.getElementById("element").src = imgArray[i-1].src;
    i=i-1;  
}