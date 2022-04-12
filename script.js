var navHistory = [];
var imagePath = "";

/* function StringToColor(str) {
	var hash = 0;
	var colour = "#";

	for (var i = 0; i < str.length; i++)
	hash = str.charCodeAt(i) + ((hash << 5) - hash);

	for (var i = 0; i < 3; i++) {
	var value = (hash >> (i * 8)) & 0xff;
	colour += ("00" + value.toString(16)).substr(-2);
	}

	return colour;
} */

function GetLevelData() {
	var dataObj = [];

	if(navHistory.length) {
		for (var index = 0; index < navHistory.length; index++) {
			var objIdx = navHistory[index];
	
			if(index === 0)
				dataObj = imgData[objIdx]?.folders ? imgData[objIdx].folders : imgData[objIdx];
			else
				dataObj = dataObj[objIdx].folders;
		}
	}
	else {
		dataObj = imgData;
	}

	return dataObj;
}

function CreateMenuItem(id, title, color) {
	var listItem = document.createElement("li");
	var anchor = document.createElement("a");

	anchor.id = id;
	anchor.href = "#" + id;
	anchor.innerHTML = title;
	anchor.style.borderColor = color ? color : '#000';
	listItem.append(anchor);

	return listItem;
}

function RenderMenu(menuItems) {
	var menu = document.querySelector("nav ul");

	menu.replaceChildren(); // Delete the current menu

	menuItems.forEach((item) => {
		var menuItem = CreateMenuItem(item.id.toLowerCase(), item.title);

		// Click functionality
		menuItem.addEventListener("click", function () {
			// Delete current images
			document.getElementsByTagName("main")[0].replaceChildren();

			RenderLevel(this.firstChild.id);
		});

		menu.appendChild(menuItem);
	});
}

function AddBreadcrumb(name)
{
	var breadcrumbs = document.getElementById('breadcrumbs');
	var crumb = document.createElement("span");

	crumb.title = name;
	crumb.classList.add("crumb");
	crumb.textContent = name;
	// crumb.style.color = StringToColor(name);

	breadcrumbs.append(crumb);
	document.getElementById('topbar').style.display = "block";
}

function RenderLevel(levelName) {
	var dataObj = GetLevelData();

	console.log('Rendering Level:', levelName, '\nData:', dataObj);

	// Run through all the objects inside dataObj to find the one object we want
	for (var idx = 0; idx < dataObj.length; idx++) {
		const obj = dataObj[idx];
		const objName = obj.id.toLowerCase();

		// console.log('RenderLevel', objName, levelName);

		if (objName === levelName) {
			// Add to navigation history
			navHistory.push(idx);

			AddBreadcrumb(obj.title);

			// Complete the image path in case of any images
			imagePath += obj.id + "/"; 
			
			// Show images if there are any
			if (obj?.images) {
				obj.images.forEach((image) => {
					var img = document.createElement("img");
					const src = basePath + "/" + imagePath + image.name;
					// const src = 'https://via.placeholder.com/150?text=' + image.title;
					// console.log('Image:', src);
					
					img.src = src;
					img.loading = "lazy"; // Useless in this case but wtv
					
					if (image?.title) img.title = image.title;
					
					// Fullscreen functionality
					img.addEventListener("click", function () {
						var fullscreen = document.getElementById("fullscreen");
						
						// Set the background image to the image that was clicked on and show the full screen div
						fullscreen.style.backgroundImage = "url(" + this.src + ")";
						fullscreen.firstElementChild.textContent = this.title; // Set the caption
						fullscreen.firstChild.textContent = this.title;
						fullscreen.style.display = "block";
					});
					
					document.getElementsByTagName("main")[0].append(img);
				});
			}

			// Regenerate the menu for the folders inside the current folder, if any
			if (obj?.folders)
				RenderMenu(obj.folders);
			else
				document.querySelector("nav ul").replaceChildren();
		
			document.getElementById("current").textContent = obj.title;

			break;
		}
	}
}

RenderMenu(imgData);

// Close full screen div when clicked on
document.getElementById("fullscreen").addEventListener("click", function () {
	// Hide the Full screen div
	this.style.display = "none";
});
