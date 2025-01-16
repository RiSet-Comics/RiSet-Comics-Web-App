import "./style.css";
import { getResponse, getResponseData } from "./fetch-functions";
import { renderComicInfo, getNextComic } from "./render-functions";

const comicArea = document.querySelector("#Comics-section");
const main = () => {};

getResponseData().then((data) => {
  renderComicInfo(comicArea, data);
});
