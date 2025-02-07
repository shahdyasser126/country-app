let searchBtn= document.getElementById("btn");
let inpSearch= document.getElementById("inp_search");

searchBtn.addEventListener("click" ,() => {
let countryName = inpSearch.value;
let final=`https://restcountries.com/v3.1/name/${countryName}?fullText=true`
fetch(final)
.then((response) => response.json())
.then((data) => {
   
        // console.log(data[0]);
        // console.log(data[0].capital[0]);
        // console.log(data[0].flags.svg);
        // console.log(data[0].name.common);
        // console.log(data[0].continents[0]);
        // console.log(Object.keys(data[0].currencies)[0]);
        // console.log(data[0].currencies[Object.keys(data[0].currencies)].name);
        // console.log(
        //   Object.values(data[0].languages).toString().split(",").join(", ")
        // );
  
result.innerHTML=`
<img src="${data[0].flags.svg}" class="img">
<h2>${data[0].name.common}</h2>
<div class="details">
<p> Capital : <span>${data[0].capital[0]}</span></p>
<p> Area : <span>${data[0].area}Km^2</span></p>
<p> Border : <span>${data[0].borders}</span></p>
<p> Continent : <span>${data[0].continents[0]}</span></p>
<p> Population : <span>${data[0].population}</span></p>
<p> Currency : <span>${data[0].currencies[Object.keys(data[0].currencies)].name}</span></p>
<p> Common Languages : <span>${ Object.values(data[0].languages).toString().split(",").join(", ")}</span></p>
<p> Map : <span><a href="${data[0].maps.googleMaps}" target="_blank">View Map</a></span></p>


</div>
`;
} ) 
.catch (() =>{
if(countryName.length ==0){
    result.innerHTML = `<h3 >The input field cannot be empty</h3>`;
} else{
    result.innerHTML = `<h3>Please enter a valid country name.</h3>`;
}
});
});