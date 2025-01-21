import "./style.css";
import { fetchComic } from "./fetch-functions";
import { renderComicInfo } from "./render-functions";

const main = () => {
  let num = 1;
  const comicArea = document.querySelector("#Comics-section");

  fetchComic(num, comicArea, renderComicInfo);
  const switchComic = document.querySelector("#next-comic-btn");
  switchComic.addEventListener("click", () => num++);
};

main();
