var MyFirstMemory = function() {
var returnedCards = [];
var rows = 4;
var cols = 3;


var generateColors = function() {
	var result = [];
	var s =  39.18;
	var h = 13.46;
	for (var n = 0; n < 6; n++) {
	  var color = new KolorWheel([230,s,h]);
	  result[n] = color.getHex();
	  s +=  16;
	  h += 12;
	}
	return result;
};


var colors = generateColors();
var picked = [];
for (var r = 0; r < rows; r++) {
	var row = document.createElement('span');
	row.setAttribute("class", "row");
	for (var c = 0; c < cols; c++) {
        var randomColorIndex = Math.floor(Math.random()*colors.length);
        var randomColor = colors[randomColorIndex];
        if(picked[randomColorIndex]) {
        	colors.splice(randomColorIndex, 1);
        } else {
        	picked[randomColorIndex] = true;
        }
		var card = document.createElement('div')
		card.setAttribute("class", "flip-container");
		card.setAttribute("onClick", "MyFirstMemory.flip(this)");
		card.innerHTML='<div class="flipper">'+
		'		<div class="front">'+
		'		</div>'+
		'		<div class="back" style="background-color:'+randomColor+'">'+
		'		</div>'+
		'	</div>'+
		'</div>';
		row.appendChild(card);
	}
	document.body.appendChild(row);
}

var flipNode = function(node) {
		node.classList.toggle("flip");
};

var flip = function(node) {
	if(returnedCards.length < 2 ) {
		flipNode(node);
		returnedCards.push(node);
		if(returnedCards.length == 2) {
			if(colorMatches()) {
				console.log("It's a match !");
				returnedCards = [];
			} else {
				returnAllCards();
			}
		}
	}
	
};

var returnAllCards = function() {
	setTimeout(function(){
					returnedCards.forEach(flipNode);
					returnedCards = [];
				}, 2000);
}

var colorMatches = function() {
	return returnedCards[0].firstElementChild.children[1].style.backgroundColor==returnedCards[1].firstElementChild.children[1].style.backgroundColor;
}

var oPublic =
    {
      flip: flip,
    };
return oPublic;

}();

