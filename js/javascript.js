function MyFirstMemory	() {
var body = document.body;
var card = document.createElement('div')
card.setAttribute("class", "flip-container");
card.setAttribute("ontouchstart", "this.classList.toggle('hover');");
card.innerHTML='<div class="flipper">'+
'		<div class="front">'+
'		</div>'+
'		<div class="back">'+
'		</div>'+
'	</div>'+
'</div>';

body.appendChild(card);
}
MyFirstMemory();
