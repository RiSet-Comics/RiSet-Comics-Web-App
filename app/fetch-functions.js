// FETCH RESPONSE
export const getResponse = async () => {
  return fetch("https://xkcd.vercel.app/").then((response) => {
    console.log(response);
    return {
      status: response.status,
      ok: response.ok,
      url: response.url,
    };
  });
};

//FETCH RESPONSE OBJECT
export const getResponseData = async () => {
  const response = await fetch("https://xkcd.vercel.app/?comic=303");
  const responseData = await response.json();

  console.log("ComicResponsedata:", responseData);
  return responseData;
};
