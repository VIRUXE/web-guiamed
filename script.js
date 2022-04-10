var currFolder = imgData;
var imagePath = '';

function StringToColor(str)
{
	var hash = 0;
	var colour = '#';

	for (var i = 0; i < str.length; i++)
	hash = str.charCodeAt(i) + ((hash << 5) - hash);
	
	for (var i = 0; i < 3; i++) {
		var value = (hash >> (i * 8)) & 0xFF;
		colour += ('00' + value.toString(16)).substr(-2);
	}

	return colour;
}

function CreateMenuItem(id, title)
{
	var listItem = document.createElement('li');
	var anchor = document.createElement('a');

	anchor.id = id;
	anchor.href = '#' + id;
	anchor.innerHTML = title;
	anchor.style.borderColor = StringToColor(title);
	listItem.append(anchor);

	return listItem;
}

function GenerateMenu(folders)
{
	document.querySelector('nav ul').replaceChildren();

	folders.forEach(item => {
		var menu = document.querySelector('nav ul');
		var menuItem = CreateMenuItem(item.id.toLowerCase(), item.title);

		menuItem.addEventListener('click', function() {
			document.getElementsByTagName('main')[0].replaceChildren(); // Devare current images

			Navigate(this.firstChild.id);
		})
		
		menu.appendChild(menuItem);
	});
}

function Navigate(toFolder) {
	var current = document.getElementById('current');
	var previous = document.getElementById('previous');

	for (var index = 0; index < currFolder.length; index++) {
		const item 		= currFolder[index];
		const itemId 	= item.id.toLowerCase();

		if(itemId === toFolder) {
			imagePath += item.id + '/';

			// Add nav crumb
			var breadcrumbs = document.getElementById('breadcrumbs');
			var crumb = document.createElement('span');
			crumb.title = item.title;
			crumb.classList.add('crumb');
			crumb.textContent = item.title;
			crumb.style.color = StringToColor(item.title);

			breadcrumbs.append(crumb);
			breadcrumbs.style.display = 'block';

			// Regenerate the menu for the folders inside the current folder
			if(item?.folders)
				GenerateMenu(item.folders);
			else // Or delete the menu if no folders to go to
				document.querySelector('nav ul').replaceChildren();

			// Now Show the images in the folders if there are any
			if(item?.images) {
				item.images.forEach(image => {
					var img = document.createElement('img');
					const src = basePath + '/' + imagePath + image.name;
					// const src = 'https://via.placeholder.com/150?text=' + image.title;
					console.log('Image:', src);
	
					img.src = src;
					img.loading = "lazy";
					
					if(image?.title) img.title = image.title;

					// Fullscreen functionality
					img.addEventListener('click', function(){
						var fullscreen = document.getElementById('fullscreen');
				
						// Set the background image to the image that was clicked on and show the full screen div
						fullscreen.style.backgroundImage = 'url(' + this.src + ')';
						fullscreen.firstElementChild.textContent = this.title; // Set the caption
						fullscreen.firstChild.textContent = this.title;
						fullscreen.style.display = "block";
					});
		
					document.getElementsByTagName('main')[0].append(img);
				})
			}

			previous.textContent = current.textContent;
			current.textContent = item.title;

			currFolder = item.folders;

			break;
		}
	}
}

GenerateMenu(imgData);

// Close full screen div when clicked on
document.getElementById('fullscreen').addEventListener('click', function() {
	// Hide the Full screen div
	this.style.display = 'none';
});