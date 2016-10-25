/* start: msg-box */
define(['jquery'],function($) {
	showMsgBox = function(settings) {
		var timeOutFlag;
		if ( $('#msg-box').length == 0 ) {
			$(window.document.body).append('<div class="msg-box" id="msg-box"><div class="msg-card"></div></div>');
			$('#msg-box').on('click',function() {
				clearTimeout(timeOutFlag);
				$(this).fadeOut();
			});
		} 
		var self = $('#msg-box');
		$('#msg-box>.msg-card').html(settings['msg']);
		self.fadeIn();
		timeOutFlag = setTimeout(function(){
			self.fadeOut();
			settings['callback']&&settings['callback']();
		},3000);
	}
	return showMsgBox;
});
/* end: msg-box */
