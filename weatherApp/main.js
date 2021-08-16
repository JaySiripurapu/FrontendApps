//for dom manipulation
const cityForm=document.querySelector("form");
const card=document.querySelector(".card");
const details=document.querySelector(".details");
const img=document.querySelector("img.time");
const icon=document.querySelector(".icon img");

const updateUi=async(data)=>{
    //data destructuring
    const {cityDets,weather}=data;
    details.innerHTML=`
    <h5 class="my-3">${cityDets.EnglishName}</h5>  
    <div class="my-3">${weather.WeatherText}</div>
    <div class="display-4 my-4">
        <span>${weather.Temperature.Metric.Value}</span>
        <span>&deg;C</span>
    </div>
    `;
    //icon
    const iconSrc=`./img/icons/${weather.WeatherIcon}.svg`;
    icon.setAttribute("src",iconSrc);
    //updating imgs
    let timesrc="null"
     if(weather.IsDayTime){
         timesrc="./img/day.svg"
     }
     else{
         timesrc="./img/night.svg";
     }
     img.setAttribute("src",timesrc);
    //removing d cklass
    if(card.classList.contains("d-none")){
        card.classList.remove("d-none");
    }
}

const updateCity=async(city)=>{
    const cityDets=await getCity(city);
    const weather=await getWeather(cityDets.Key);
    return{cityDets,weather};
};

cityForm.addEventListener("submit",e=>{
    e.preventDefault();
    const city=cityForm.city.value.trim();
    cityForm.reset();
    updateCity(city)
    .then(data=>{updateUi(data);})
    .catch(error=>{console.log(error)})
})