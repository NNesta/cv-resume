const title = document.querySelector('#main-title');
const getRandomColor = ()  => {
  const letters = '0123456789ABCDEF';
  const color = '000000'
    .split('')
    .map(() => letters[Math.floor(Math.random() * 16)])
    .join('') ;
  return '#' + color;
}

title.addEventListener('click', () => {
  title.style.color = getRandomColor();
});