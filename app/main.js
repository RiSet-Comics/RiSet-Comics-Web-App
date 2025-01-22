import './style.css';
import { fetchRandomComic, fetchSunriseSunset } from './fetch-functions';
import { renderComicInfo, renderSunriseSunset } from './render-functions';

const main = () => {
  const comicArea = document.querySelector('#Comics-section');
  const sunriseSunsetArea = document.querySelector('#SunriseSunset-section');

  // Fetch and render a random comic initially
  fetchRandomComic(comicArea, renderComicInfo);

  // Fetch and render sunrise and sunset data
  renderSunriseSunset(sunriseSunsetArea);
};

main();
