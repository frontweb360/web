require(['jquery','common/lib/wAjax','common/core/jquery-plugins/fastclick'],function($,wAjax,fastclick){
	var ajaxUrl = {
		submit:'/submit'
	};
	//init
    (function(){
    	fastclick.attach(document.body);
    })();

	$('.login-btn').on('click',function(){
		/*
		var uid = $.trim($('.uid').val()),
			pas = $.trim($('.pas').val());
		wAjax({
			url:ajaxUrl.submit,
			type:'post',
			data:{uid:uid,pas:pas},
			success:function(rs){
				console.log(rs);
				window.location.href = rs.url;
			}
		});
		*/
		window.location.href = '/order';
	});
});