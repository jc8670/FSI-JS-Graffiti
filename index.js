
// Select some elements...

let header = document.querySelector('#page-header');

let dogImages = document.querySelectorAll('.dog-image')
for(let i = 0; i < dogImages.length; i++){
	dogImages[i].style.borderRadius = '50%'
}


header.style.textAlign = "left";
