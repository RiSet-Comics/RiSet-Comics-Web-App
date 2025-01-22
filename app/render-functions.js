import { fetchRandomComic } from './fetch-functions';
import { fetchSunriseSunset } from './fetch-functions';

export const renderComicInfo = async (comicAreaDiv, comic) => {
  comicAreaDiv.innerHTML = '';
  // RiSet Comics H1
  const h1 = document.createElement('h1');
  h1.textContent = 'Riset Comics';

  //Comic Title H2
  const h2 = document.createElement('h2');
  h2.id = 'comic-title';
  h2.className = 'comic-title';
  h2.textContent = comic.title;

  // Comic Image
  const comicImg = document.createElement('img');
  comicImg.id = 'comic-img';
  comicImg.src = comic.img;
  comicImg.style.width = '1700px';
  comicImg.style.height = 'auto';
  comicImg.style.maxHeight = '485px';

  //Transcript P
  const p = document.createElement('p');
  p.id = 'transcript-text';
  p.textContent = ' ';

  //ChangeComic
  const button = document.createElement('button');
  button.id = 'next-comic-btn';
  button.textContent = 'Next Comic';

  //push to DOM
  comicAreaDiv.append(h1, h2, comicImg, p, button);

  button.addEventListener('click', () => {
    console.log('click has occurred');
    fetchRandomComic(comicAreaDiv, renderComicInfo);
  });
};
// Render a forecast of the current day and the next 6 days
// 1 combine 2 cards into one
// use Date() to figure out the current date in YYYY-MM-DD format
// use getDay() to figure out the day name
// loop 6 times to get the next 6 days
// for each day, perform a fetch and render a card

const getFormattedDate = (date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

const getDayName = (date) => {
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  return days[date.getDay()];
};

export const renderSunriseSunset = async (sunriseSunsetDiv) => {
  sunriseSunsetDiv.innerHTML = '';

  for (let i = 0; i < 7; i++) {
    const date = new Date();
    date.setDate(date.getDate() + i);
    const formattedDate = getFormattedDate(date);
    const dayName = getDayName(date);

    const data = await fetchSunriseSunset(formattedDate);
    if (data) {
      // Create a single card for both Sunrise and Sunset
      const sunCard = document.createElement('div');
      sunCard.className = 'card sun-card';

      // Date and Day Name
      const dateTitle = document.createElement('h2');
      dateTitle.textContent = `${dayName}, ${formattedDate}`;
      sunCard.appendChild(dateTitle);

      // Sunrise Title and Time
      const sunriseTitle = document.createElement('h3');
      sunriseTitle.textContent = 'Sunrise';
      sunCard.appendChild(sunriseTitle);

      const sunriseTime = document.createElement('p');
      sunriseTime.id = 'sunrise-time';
      sunriseTime.className = 'sunrise-time';
      sunriseTime.textContent = `Time: ${data.sunrise}`;
      sunCard.appendChild(sunriseTime);

      // Sunset Title and Time
      const sunsetTitle = document.createElement('h3');
      sunsetTitle.textContent = 'Sunset';
      sunCard.appendChild(sunsetTitle);

      const sunsetTime = document.createElement('p');
      sunsetTime.id = 'sunset-time';
      sunsetTime.className = 'sunset-time';
      sunsetTime.textContent = `Time: ${data.sunset}`;
      sunCard.appendChild(sunsetTime);

      // Append the card to the div
      sunriseSunsetDiv.appendChild(sunCard);
    } else {
      const errorMessage = document.createElement('p');
      errorMessage.textContent = `Error fetching data for ${dayName}, ${formattedDate}`;
      sunriseSunsetDiv.appendChild(errorMessage);
    }
  }
};
