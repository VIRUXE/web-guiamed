var currFolder = imgData;
var prevFolder = null;

// Create Sidebar Menu Entry
function CreateMenuItem(id, title)
{
	var listItem = document.createElement('li');
	var anchor = document.createElement('a');

	anchor.id = id;
	anchor.href = '#' + id;
	anchor.innerHTML = title;
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

	// previous.style.display = currFolder !== imgData ? 'inline-block' : 'none';

	for (var index = 0; index < currFolder.length; index++) {
		const item 		= currFolder[index];
		const itemId 	= item.id.toLowerCase();

		if(itemId === toFolder) {
			// Regenerate the menu for the folders inside the current folder
			if(item?.folders)
				GenerateMenu(item.folders);
			else
				document.querySelector('nav ul').replaceChildren();

			// Now Show the images in the folders if there is any
			if(item?.images) {
				item.images.forEach(image => {
					var img = document.createElement('img');
					// const src = basePath + '/' + image.name;
					const src = 'https://via.placeholder.com/150?text=' + image.title;
					// console.log('Image:', src);
	
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

			prevFolder = currFolder;
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