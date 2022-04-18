const circle = ["\r|   ", "\r/   ", "\r-   ", "\r\\   "];
let circleDelay = 250;

const circle2 = setInterval(() => {
  for (let i = 0; i < circle.length; i++) {
    setTimeout(() => {
      process.stdout.write(circle[i]);
    }, circleDelay * i);
  }
}, 300);
