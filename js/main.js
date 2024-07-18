
const colorPalette = document.querySelector(".color-palette");
const output = document.querySelector(".output");
const body = document.querySelector('body');
const input = document.querySelector('.input')

//generate markup 
function addMarkup (){
	const items = [];
	for (let i = 0; i <= 60; i+=1){
		const color = getRandomHexColor();
		const item = document.createElement('button');
		item.type = 'button';
		item.classList.add('item');
		item.style.backgroundColor = color;
		item.dataset.color = color;
		items.push(item);
	}
	colorPalette.append(...items)
}

//generate random color
function getRandomHexColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  return color;
}

addMarkup ()

//my event
colorPalette.addEventListener('click', oneClick);

function oneClick (event){
	//checking
if(event.target.nodeName !== 'BUTTON'){
return;
}
	//result
const selectedColor = event.target.dataset.color;
output.textContent = `Selected color: - ${selectedColor}`;
output.style.color = selectedColor;
body.style.backgroundColor = selectedColor;
}