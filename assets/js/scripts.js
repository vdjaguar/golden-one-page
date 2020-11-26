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
	
	/*Modal window*/
		/*Variables*/
			let speed    = 300;
			let btnClick = '#btn-click';
			let btnClose = '.modal-wnd__close';
			let wndModal = '.modal-wnd';
		/*Variables/ */
	
		/*Show modal*/
			$(btnClick).on('click', function () {
				$(wndModal).fadeIn(speed);
			});
		/*Show modal/ */
	
		/*Close modal*/
			$(btnClose).on('click', function () {
				$(wndModal).fadeOut(speed);
			});
		/*Close modal/ */
	/*Modal window/ */
	
	/*Placeholder*/
		$('input,textarea').focus(function(){
			$(this).data('placeholder',$(this).attr('placeholder'));
			$(this).attr('placeholder','');
		});
		$('input,textarea').blur(function(){
			$(this).attr('placeholder',$(this).data('placeholder'));
		});
	/*Placeholder/ */
	
	/*Send from*/
		/*Variables*/
			let formName = '.form-modal';
			let thanksMsg = '.thanks_msg';
		/*Variables/ */
	
		$(formName).validate({
			rules: {
				email: {
					required : true,
					minlength: 3
				}
			},
			messages: {
				email: {
					required: "Введите свой Email",
					minlength: "Введите минимум 3 символов"
				}
			},
			submitHandler: function(form){
				var email = $(formName).find('input[type="email"]').val();
				
				$.post(
					"/contact.php", {
						email: email
					}
				),
				$(thanksMsg).animate({opacity: 'show'}, 400);
				
				setTimeout(function(){
					$(wndModal).animate({opacity: 'hide'}, 400);
				},5000);
				
				$('input[type="email"]').val('');
			}
		});
	/*Send from/ */
});