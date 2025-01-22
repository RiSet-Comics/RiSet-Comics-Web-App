import "./style.css";
import { fetchRandomComic, getWeatherData } from "./fetch-functions";
import { renderComicInfo, renderWeatherData } from "./render-functions";

const main = async () => {
  const comicAreaDiv = document.querySelector("#Comics-section");
  const weatherDiv = document.querySelector("#weather-Data");

  // Fetch and render a random comic initially
  fetchRandomComic(comicAreaDiv, renderComicInfo);

  // Fetch and render weather data
  const weatherData = await getWeatherData();
  renderWeatherData(weatherDiv, weatherData);
};

main();
