//FETCH COMIC
export const fetchComic = async (comicNumber, comicAreaDiv, callback) => {
  const url = `https://xkcd.vercel.app/?comic=${comicNumber}`;

  await fetch(url)
    .then((response) => response.json())
    .then((data) => {
      callback(comicAreaDiv, data);
    })
    .catch((error) => console.error("Error fetching comic:", error));
};
