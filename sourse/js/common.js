"use strict";

// const $ = jQuery;

function eventHandler() {
	let animateBlocks = document.querySelectorAll('[data-json]');
	if (animateBlocks) {
		for (const animateBlock of animateBlocks) {
			lottie.loadAnimation({
				container: animateBlock, // the dom element that will contain the animation
				renderer: 'canvas',
				loop: true,
				autoplay: true,
				path: animateBlock.dataset.json, // the path to the animation json
			});
		}
	}

};
if (document.readyState !== 'loading') {
	eventHandler();
} else {
	document.addEventListener('DOMContentLoaded', eventHandler);
}

// window.onload = function () {
// 	document.body.classList.add('loaded_hiding');
// 	window.setTimeout(function () {
// 		document.body.classList.add('loaded');
// 		document.body.classList.remove('loaded_hiding');
// 	}, 500);
// }