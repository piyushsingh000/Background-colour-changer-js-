const colors = ['red', 'green', 'blue','yellow','pink'];

function changecolor() {
  const colorIndex = parseInt(Math.random()*colors.length)
  document.body.style.background = colors[colorIndex];
}