var images = {
	man: {
		heading: 'Man Image',
		description: 'Image of a man.',
		path: 'images/man.jpg'
	},
	wizard: {
		heading: 'Wizard Image',
		description: 'Image of a wizard.',
		path: 'images/wizard.jpg'
	},
	beast: {
		heading: 'Beast Image',
		description: 'Image of a beast.',
		path: 'images/beast.jpg'
	}
};


let pic1 = document.getElementById('pic1');
let pic2 = document.getElementById('pic2');
let pic3 = document.getElementById('pic3');

window.onload = () => {
	// pic1.innerHTML = `<img src= ${images.man.path} '>`;
	// pic2.innerHTML = `<img src= ${images.wizard.path} '>`;
	// pic3.innerHTML = `<img src= ${images.beast.path} '>`;

	document.getElementById('images').innerHTML += `<img src= ${images.man.path} class = "image">`
	document.getElementById('images').innerHTML += `<img src= ${images.wizard.path} class = "image">`
	document.getElementById('images').innerHTML += `<img src= ${images.beast.path} class = "image">`

}