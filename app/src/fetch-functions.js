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
    // console.log(comic);
    return comic;
  } catch (error) {
    console.warn(error.message);
    return null;
  }
};

export const fetchRandomComic = async (comicAreaDiv, callback) => {
  const comic = await getRandomComic();
  if (comic) {
    callback(comicAreaDiv, comic); //cb
  }
};

//FETCH WEATHER DATA
export const getWeatherData = () => {
  const url1 =
    "https://api.open-meteo.com/v1/forecast?latitude=40.6501&longitude=-73.9496&current=temperature_2m,relative_humidity_2m,precipitation,wind_speed_10m&daily=sunrise,sunset&temperature_unit=fahrenheit&wind_speed_unit=mph&timezone=America%2FNew_York";
  return fetch(url1)
    .then((data) => data.json())
    .then((parsedData) => {
      console.log(parsedData);
      const obj = {
        time: parsedData.current.time.slice(11),
        timezone: parsedData.timezone,
        temperature: parsedData.current.temperature_2m,
        temperature_measurement: parsedData.current_units.temperature_2m,
        windspeed: parsedData.current.wind_speed_10m,
        windspeed_measurement: parsedData.current_units.wind_speed_10m,
        sunrise: parsedData.daily.sunrise[0].slice(11),
        sunset: parsedData.daily.sunset[0].slice(11),
      };
      console.log(obj);
      return obj;
    });
};
