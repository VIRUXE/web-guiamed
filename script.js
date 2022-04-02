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

// Create Card Tag
function CreateTag(text)
{
	// Generate background color according to text
	var hash = 0;
	var colour = '#';

	for (var i = 0; i < text.length; i++)
		hash = text.charCodeAt(i) + ((hash << 5) - hash);
		
	for (var i = 0; i < 3; i++) {
		var value = (hash >> (i * 8)) & 0xFF;
		colour += ('00' + value.toString(16)).substr(-2);
	}

	var tag = document.createElement('span');
		
	tag.className = 'tag';
	tag.innerText = text;
	tag.style.background = colour;

	return tag
}

// Create Information Card
function CreateCard(title, images, tags)
{
	var card = document.createElement('section');

	// Create Tags
	for (var index = 0; index < tags.length; index++)
		card.append(CreateTag(tags[index]));

	// Create Title H1
	var heading = document.createElement('H1');
	heading.innerText = title;
	// heading.appendChild(document.createTextNode(title))
	card.append(heading);

	// Create Images

	document.getElementsByTagName('body')[0].appendChild(card)
}

// Generate Sidebar Menu
for (i = 0; i < data.length; i++) {
	document.querySelector('aside ul').appendChild(CreateMenuEntry(data[i], 'id' + i));

	CreateCard(data[i], null, ['tagdfsdffs', 'tagsdasgrgrsg'])
}

// Apply color to tags according to their string
/* const tags = document.getElementsByClassName("tag");

for (let index = 0; index < tags.length; index++) {
	const tag = tags[index];

	tag.style.background = stringToColour(tag.textContent);
} */

// Sidebar Menu Collapse functionality
var items = document.getElementsByTagName("li");

for (var i = 0; i < items.length; i++) {
	var item = items[i];

	item.addEventListener("click", function() {
		var subList = this.getElementsByTagName("ul");

		console.log(subList.length)

		if (subList.length > 0) 
			subList[0].style.display = subList[0].style.display === "block" ? "none" : "block";
	});
}



/* function SetFullscreen(image)
{
	console.log('Image Source: ', image)
}

var img_all = document.getElementsByTagName("img");			

for (i=0; i< img_all.length; i++){
	var img = img_all[i];

	img.addEventListener("click", SetFullscreen(i))
} */