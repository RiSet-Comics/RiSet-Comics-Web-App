import './style.css';
import { fetchRandomComic } from './fetch-functions';
import { renderComicInfo } from './render-functions';

const main = () => {
  const comicArea = document.querySelector('#Comics-section');

  // Fetch and render a random comic initially
  fetchRandomComic(comicArea, renderComicInfo);

  const switchComic = document.querySelector('#next-comic-btn');
  switchComic.addEventListener('click', () => {
    fetchRandomComic(comicArea, renderComicInfo);
  });
};

main();
