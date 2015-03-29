var MyFirstMemory = function() {
var body = document.body;
var rows = 4;
var cols = 3;
for (var r = 0; r < rows; r++) {
	var row = document.createElement('span');
	row.setAttribute("class", "row");
	for (var c = 0; c < cols; c++) {
        
		var card = document.createElement('div')
		card.setAttribute("class", "flip-container");
		card.setAttribute("onClick", "MyFirstMemory.flip(this)");
		card.innerHTML='<div class="flipper">'+
		'		<div class="front">'+
		'		</div>'+
		'		<div class="back">'+
		'		</div>'+
		'	</div>'+
		'</div>';
		row.appendChild(card);
	}
	body.appendChild(row);
}

var flip = function(node) {
	console.log(node.classList);
	node.classList.toggle("flip");
	
}

var oPublic =
    {
      flip: flip,
    };
return oPublic;

}();

