// //RENDER COMIC
// export const renderComicInfo = (comicAreaDiv, responseDataObj) => {
//   comicAreaDiv.innerHTML = " ";
//   const { day, img, num, title, transcript, year } = responseDataObj;

//   //RiSet Comics H1
//   const h1 = document.createElement("h1");
//   h1.textContent = "Riset Comics";

//   //Comic Title H2
//   const h2 = document.createElement("h2");
//   h2.id = "comic-title";
//   h2.className = "comic-title";
//   h2.textContent = title;

//   //Comic Image
//   const comicImg = document.createElement("img");
//   comicImg.id = "comic-img";
//   comicImg.src = img;

//   //Transcript P
//   const p = document.createElement("p");
//   p.id = "transcript-text";
//   p.textContent = transcript;

//   //ChangeComic
//   const nextComicBtn = document.createElement("button");
//   nextComicBtn.id = "next-comic-btn";
//   nextComicBtn.className = "next-comic-btn";
//   nextComicBtn.textContent = "Next Comic";
//   comicAreaDiv.appendChild(nextComicBtn);

//   //push to DOM
//   comicAreaDiv.append(h1, h2, comicImg, p, nextComicBtn);
// };

export const renderComicInfo = (comicAreaDiv, comic) => {
  comicAreaDiv.innerHTML = `
    <h2>${comic.title}</h2>
    <img src="${comic.img}" alt="${comic.title}">
    <p>${comic.transcript}</p>
  `;
};
