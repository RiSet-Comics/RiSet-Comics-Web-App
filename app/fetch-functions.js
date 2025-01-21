//FETCH COMIC
export const fetchComic = async (comicNumber, comicAreaDiv, callback) => {
  const url = `https://xkcd.vercel.app/?comic=${comicNumber}`;

  await fetch(url)
    .then((response) => response.json())
    .then((data) => {
      callback(comicAreaDiv, data);
    })
    .catch((error) => console.error('Error fetching comic:', error));
};
export const getRandomComic = async () => {
  const randomComicNumber = Math.floor(Math.random() * 3038) + 1;
  const url = `https://xkcd.vercel.app/?comic=${randomComicNumber}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Failed to get comic book');
    }
    const data = await response.json();
    const comic = {
      title: data.title,
      img: data.img,
      transcript: data.transcript,
    };
    return comic;
  } catch (error) {
    console.warn(error.message);
    return null;
  }
};

export const fetchRandomComic = async (comicAreaDiv, callback) => {
  const comic = await getRandomComic();
  if (comic) {
    callback(comicAreaDiv, comic);
  }
};
