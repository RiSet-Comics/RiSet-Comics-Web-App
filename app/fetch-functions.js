//FETCH COMIC
export const getRandomComic = async () => {
  const randomComicNumber = Math.floor(Math.random() * 3038) + 1;
  const url = `https://xkcd.vercel.app/?comic=${randomComicNumber}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Failed to get comic book");
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

export const fetchSunriseSunset = async (date) => {
  const url = `https://api.sunrise-sunset.org/json?lat=40.645532&lng=-74.012385&date=${date}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    if (data.status === "OK") {
      const sunriseSunset = {
        sunrise: data.results.sunrise,
        sunset: data.results.sunset,
      };
      return sunriseSunset;
    } else {
      console.warn("Error fetching sunrise and sunset data");
      return null;
    }
  } catch (error) {
    console.warn(error.message);
    return null;
  }
};
