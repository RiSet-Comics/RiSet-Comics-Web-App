import { fetchRandomComic } from "./fetch-functions";

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
  comicImg.id = "comic-img";
  comicImg.src = comic.img;

  //Transcript P
  const p = document.createElement("p");
  p.id = "transcript-text";
  p.textContent = comic.transcript;

  //ChangeComic
  const button = document.createElement("button");
  button.id = "next-comic-btn";
  button.textContent = "Next Comic";

  //push to DOM
  comicAreaDiv.append(h1, h2, comicImg, p, button);

  button.addEventListener("click", () => {
    console.log("click has occured");
    fetchRandomComic(comicAreaDiv, renderComicInfo);
  });
};
