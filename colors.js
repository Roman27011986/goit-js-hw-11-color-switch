const stertRef = document.querySelector('button[data-action="start"]');
const stopRef = document.querySelector('button[data-action="stop"]');
let timeoutId = null;
let isActive = false;
const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const addbodyColor = () => {
  if (isActive) {
    return;
  }
  isActive = true;
  timeoutId = setInterval(() => {
    let randomColor = randomIntegerFromInterval(0, colors.length);
    document.body.style.background = colors[randomColor];
  }, 1000);
};
stertRef.addEventListener('click', addbodyColor);
stopRef.addEventListener('click', () => {
  clearTimeout(timeoutId);
  isActive = false;
});
