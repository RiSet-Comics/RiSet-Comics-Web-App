import "./style.css";
import { fetchRandomComic, getWeatherData } from "./fetch-functions";
import { renderComicInfo, renderWeatherData } from "./render-functions";

const main = async () => {
  // const comicSection = document.querySelector("#Comics-section"); //red
  const comicContentDiv = document.querySelector("#comic-content");
  const weatherDiv = document.querySelector("#weather-Data");

  // Fetch and render weather data
  const weatherData = await getWeatherData();
  renderWeatherData(weatherDiv, weatherData);

  // Fetch and render a random comic initially
  fetchRandomComic(comicContentDiv, renderComicInfo);
};

main();
