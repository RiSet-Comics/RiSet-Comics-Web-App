//RENDER COMIC
export const renderComicInfo = async (comicAreaDiv, comic) => {
  //Comic Title H2
  const h2 = document.querySelector("#comic-title");
  h2.textContent = comic.title;

  //Comic Image
  const comicImg = document.querySelector("#comic-img");
  comicImg.src = comic.img;
  comicImg.alt = comic.transcript;
};

//RENDER SUNRISE DATA && WEATHER DATA
export const renderWeatherData = (forecastDiv, data) => {
  // Get the real-time clock using (toLocaleTimeString())
  const updateTime = () => {
    const now = new Date(); //This will give us  2025-01-22T18:52:54.393Z
    const currentTime = now.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

    forecastDiv.innerHTML = `
        <h2>Current Weather</h2>
        <p><strong>Time:</strong> ${currentTime} (${data.timezone})</p>
        <p><strong>Temperature:</strong> ${data.temperature} ${data.temperature_measurement}</p>
        <p><strong>Wind Speed:</strong> ${data.windspeed} ${data.windspeed_measurement}</p>
      `;
    // Sunrise and Sunset Section
    const sunriseDiv = document.querySelector("#sunrise-data");
    sunriseDiv.innerHTML = `
    <h2>Sunrise & Sunset</h2>
    <p><strong>Sunrise:</strong> ${data.sunrise} AM</p>
    <p><strong>Sunset:</strong> ${data.sunset} PM</p>
  `;
  };

  updateTime(); // Run immediately
  setInterval(updateTime, 1000); // Update time every second
};
