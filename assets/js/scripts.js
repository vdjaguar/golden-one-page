$(function() {
	/*Fancybox*/
		$('[data-fancybox="gallery"]').fancybox({
			thumbs : {
				autoStart : false
			}
		});
		
		// Animation
		$.fancybox.defaults.animationEffect = "zoom-in-out";
	/*Fancybox/ */
	
	/*Scroll status*/
		// Function
		function statusBarOnScroll (selector) {
			let doc = document;
			let windowScrollTop = doc.body.scrollTop || doc.documentElement.scrollTop;
			let heightPage = doc.documentElement.scrollHeight - doc.documentElement.clientHeight;
			let scrolled = (windowScrollTop / heightPage) * 100;
			
			doc.querySelector(selector).style.width = `${scrolled}%`;
		}
		
		//Init
		window.addEventListener('scroll', function () {
			statusBarOnScroll('.progress-scroll__inner');
		});
	/*Scroll status/ */
});