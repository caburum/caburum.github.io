const owner = 'caburum';
const page = 1;

// fetch(`https://api.github.com/users/${owner}/repos?type=all&sort=updated&direction=desc&per_page=100&page=${page}`);

// Demo
for (let i = 0; i < 25; i++) {
	document.getElementsByClassName('projects')[0].appendChild(document.getElementsByClassName('project')[0].cloneNode(true));
}
