function getWeather(){
    const city=document.getElementById("city").value;
    if (!city){
        alert("Please enter the City's Name!");
        return;
    }

    fetch("/get_weather",{
        method : "POST",
        headers:{ "Content-Type":"application/json"},
        body : JSON.stringify({city})
    })

    .then(response => response.json())
    .then(data =>
    {
        if(data.error){
            document.getElementById("weather-result").innerHTML=`<p style="color:red;"${ data.error } </p>`;
        }
        else{
            document.getElementById("weather-result").innerHTML=`
            <h3 style="color:cadetblue;">Weather Forecast:</h3>
            <p><strong>City :</strong>${ data.city }</p>
            <p><strong>Temperature :</strong>${ data.temperature }°C</p>
            <p><strong>Humidity :</strong>${ data.humidity }%</p>
            <p><strong>Description :</strong>${ data.description }</p>
            `;
        }
    })

    .catch(error => console.error("Error in fetching the data",error))

}
