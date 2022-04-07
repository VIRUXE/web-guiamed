var breadcrumbs = [];

// Create Sidebar Menu Entry
function CreateMenuEntry(text, id)
{
	var listItem = document.createElement('li');
	var anchor = document.createElement('a');

	anchor.href = '#' + id;
	anchor.innerHTML = text;
	listItem.append(anchor);

	return listItem;
}

// Create Information Card
function CreateCard(cardId, cardTitle, cardImages)
{
	if(cardImages == undefined) return;
	
	var card = document.createElement('section');

	var imagePath = '';
	
	// Create Title H1
	var heading = document.createElement('H1');
	heading.innerText = cardTitle;
	card.append(heading);
	
	// List Breadcrumbs if we're in a nested level
	if(breadcrumbs.length > 0)
	{
		var breadcrumbWrapper = document.createElement('div');

		// imagePath += '/';
		for (var index = 0; index < breadcrumbs.length; index++)
		{
			imagePath += breadcrumbs[index].id + '/';

			// Generate background color for breadcrumb according to text
			var hash = 0;
			var colour = '#';
			var text = breadcrumbs[index].title;

			for (var i = 0; i < text.length; i++)
			hash = text.charCodeAt(i) + ((hash << 5) - hash);
			
			for (var i = 0; i < 3; i++) {
				var value = (hash >> (i * 8)) & 0xFF;
				colour += ('00' + value.toString(16)).substr(-2);
			}

			var crumb = document.createElement('span');
			
			crumb.className = 'crumb';
			crumb.innerText = text;
			crumb.style.background = colour;

			breadcrumbWrapper.append(crumb);

			if(index != breadcrumbs.length-1) breadcrumbWrapper.appendChild(document.createTextNode('→'));
		}
		card.append(breadcrumbWrapper);
	}
	imagePath += cardId;

	// Create Images
	if(cardImages?.length) {

		var imagesWrapper = document.createElement('div');
		imagesWrapper.className = 'images';

		for (let index = 0; index < cardImages.length; index++) {
			const image = cardImages[index];

			var img = document.createElement('img');
			var src = basePath + imagePath + '/' + image.name;
			// console.log(src);
			img.src = src;
			img.loading = "lazy";
			if(image?.title) img.title = image.title;

			imagesWrapper.append(img);
		}	
		card.append(imagesWrapper);
	}
	
	document.getElementsByTagName('body')[0].appendChild(card)
}

// Generate Sidebar Menu
/* for (i = 0; i < data.length; i++) {
	document.querySelector('aside ul').appendChild(CreateMenuEntry(data[i], 'id' + i));

} */

// Sidebar Menu Collapse functionality
/* var items = document.getElementsByTagName("li");

for (var i = 0; i < items.length; i++) {
	var item = items[i];

	item.addEventListener("click", function() {
		var subList = this.getElementsByTagName("ul");

		console.log(subList.length)

		if (subList.length > 0) 
			subList[0].style.display = subList[0].style.display === "block" ? "none" : "block";
	});
} */



/* function SetFullscreen(image)
{
	console.log('Image Source: ', image)
}

var img_all = document.getElementsByTagName("img");			

for (i=0; i< img_all.length; i++){
	var img = img_all[i];

	img.addEventListener("click", SetFullscreen(i))
} */

// Generate Cards from given array
function ScanLevel(cards) {
	cards.forEach(card => {
		CreateCard(card.id, card.title, card.images);
		
		// Check for more cards
		if(card?.folders) {
			// Add breadcrumb
			breadcrumbs.push({id: card.id, title: card.title});
			ScanLevel(card.folders);
		}
	});
}

/* 
	Initialize card scanning.

	Delete breadcrumbs when iterating first level cards
*/
cardData.forEach(card => {
	breadcrumbs = [];

	CreateCard(card.id, card.title, card.images);

	if(card?.folders) {
		breadcrumbs.push({id: card.id, title: card.title});
		ScanLevel(card.folders, card.title);
	}
});

// Setup click functionality for the images to show up as full screen when clicked
var images = document.getElementsByTagName('img');

for (let index = 0; index < images.length; index++) {
	images[index].addEventListener('click', function(){
		var fullscreen = document.getElementById('fullscreen');

		// Set the background image to the image that was clicked on and show the full screen div
		fullscreen.style.backgroundImage = 'url(' + this.src + ')';
		fullscreen.firstElementChild.textContent = this.title; // Set the caption
		fullscreen.firstChild.textContent = this.title;
		fullscreen.style.display = "block";
	});
}

// Close full screen div when clicked on
document.getElementById('fullscreen').addEventListener('click', function() {
	// Hide the Full screen div
	this.style.display = 'none';
});