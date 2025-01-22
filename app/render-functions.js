import { fetchRandomComic } from "./fetch-functions";

//RENDER COMIC
export const renderComicInfo = async (comicAreaDiv, comic) => {
  comicAreaDiv.innerHTML = "";
  // RiSet Comics H1
  const h1 = document.createElement("h1");
  h1.textContent = "Riset Comics";

  //Comic Title H2
  const h2 = document.createElement("h2");
  h2.id = "comic-title";
  h2.className = "comic-title";
  h2.textContent = comic.title;

  //Comic Image
  const comicImg = document.createElement("img");
  comicImg.className = "comic-img";
  comicImg.src = comic.img;
  comicImg.alt = comic.transcript;

  //Transcript P
  const p = document.createElement("p");
  p.id = "text";
  p.textContent = "Some Random text, idk where to put it";

  //ChangeComic
  const button = document.createElement("button");
  button.id = "next-comic-btn";
  button.className = "next-comic-btn";
  button.textContent = "Next Comic";

  //push to DOM
  comicAreaDiv.append(h1, comicImg, h2, p, button);

  button.addEventListener("click", () => {
    fetchRandomComic(comicAreaDiv, renderComicInfo);
  });
};

//RENDER SUNRISE DATA && WEATHER DATA
export const renderWeatherData = (forecastDiv, data) => {
  // Sunrise and Sunset Section
  const sunriseDiv = document.querySelector("#sunrise-data");
  sunriseDiv.innerHTML = `
    <h2>Sunrise & Sunset</h2>
    <p><strong>Sunrise:</strong> ${data.sunrise}</p>
    <p><strong>Sunset:</strong> ${data.sunset}</p>
  `;

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
  };

  updateTime(); // Run immediately
  setInterval(updateTime, 1000); // Update time every second
};
