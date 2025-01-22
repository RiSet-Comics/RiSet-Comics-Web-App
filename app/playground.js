const now = new Date();

const logTime = (date) => {
  const currentTime = now.toLocaleTimeString([]);
  console.log(currentTime);
};

console.log(now);
setInterval(logTime, 10000);
