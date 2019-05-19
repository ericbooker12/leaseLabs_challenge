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


	document.getElementById('image-container').innerHTML += `
		<div class = 'image-column' onmouseover='showText(this)'>
			<img src = ${images.man.path} class = 'image' style = 'width:100%'

			>

			<div class='image-text' >
				<h3>${images.man.heading}<h3>
				<p>${images.man.description}<p>
			<div>
		</div>
	`

	document.getElementById('image-container').innerHTML += `
		<div class = 'image-column'>
			<img src = ${images.wizard.path} class = 'image' style = 'width:100%'>

			<div class='image-text'>
				<h3>${images.wizard.heading}<h3>
				<p>${images.wizard.description}<p>
			<div>


		</div>

	`

	document.getElementById('image-container').innerHTML += `
		<div class = 'image-column' >
			<img
				src = ${images.beast.path}
				class = 'image'
				style = 'width:100%'


			>

			<div class='image-text'>
				<h3>${images.beast.heading}<h3>
				<p>${images.beast.description}<p>
			<div>
		</div>
	`

}




	 let showText = (elem) => {
		var div = elem.querySelector('.image-text')
		div.style.visibility = 'visible';
	}







