// Call Plyr.
plyr.setup();

let video = document.querySelector( 'video' ); // Get video element.
let spans = document.querySelectorAll( 'p span' ); // Get spans collection.

// Add the .highlight class to the span element depending on the current time of the video.
video.addEventListener('timeupdate', () => {
	for ( let i = 0; i < spans.length; i++ ) {

		if ( video.currentTime > spans[i].getAttribute( 'data-start' ) && video.currentTime < spans[i].getAttribute( 'data-end' ) ) {

			spans[i].classList.add( 'highlight' );
		} else {
			spans[i].classList.remove( 'highlight' );
		}
	}
})

// Forward or rewind video playback depending on the span element that has been clicked.
for ( let i = 0; i < spans.length; i++ ) {

	spans[i].addEventListener('click', ( event ) => {
		video.currentTime = event.target.getAttribute( 'data-start' );
	})
}
