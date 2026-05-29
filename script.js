const apiKey="a7e70ade3846e5fa8c37e853cc81b602";

const searchBtn = document.getElementById("searchBtn");

searchBtn.addEventListener("click", async ()=>{

    const city = document.getElementById("city").value;

    const url =
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    const response = await fetch(url);

    const data = await response.json();

    const weatherResult = document.getElementById("weatherResult");

    weatherResult.innerHTML = `
      <h2>${data.name}</h2>
      <p>Temp: ${data.main.temp}°C</p>
      <p>Weather: ${data.weather[0].main}</p>
    `;

});