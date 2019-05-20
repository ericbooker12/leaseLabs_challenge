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

let imageArray = [images.man, images.wizard, images.beast];

// console.log(typeof items);


window.onload = () => {

	for (let image of imageArray) {
		document.getElementById('image-container').innerHTML += `
			<div class = 'image-column' onmouseover='showText(this)' onmouseout='removeText(this)'>
				<img src = ${image.path} class = 'image' style = 'width:100%' >

				<div class='image-text' >
					<h3>${image.heading}<h3>
					<p>${image.description}<p>
				<div>
			</div>
		`
	}
}

let showText = (elem) => {
	let div = elem.querySelector('.image-text')
	div.style.visibility = 'visible';
}

let removeText = (elem) => {
	let div = elem.querySelector('.image-text')
	div.style.visibility = 'hidden';
}







