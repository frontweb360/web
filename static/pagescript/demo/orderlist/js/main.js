require(['jquery','common/lib/wAjax','common/core/jquery-plugins/fastclick','pagescript/demo/base/js/menu'],function($,wAjax,fastclick,menu){
	var ajaxUrl = {
		orderlist:'/getOrderList'
	};
	//init
    (function(){
    	fastclick.attach(document.body);
    })();

    var m = new menu();

	function setlist(data){
		var html = '',
			arr = [];
		for(var i=0;i<data.length;i++){
			var percent = Math.round(100 * data[i].num / data[i].total) + '%';
			arr.push('<div class="item"><a href="/orderdetail?id='+data[i].orderId+'"><h4><span>订单编号：</span>'+data[i].orderId+'</h4><span class="time">交付日期：'+data[i].ordertime+'</span><div class="summary">'+data[i].summary+'</div><span class="progress"><i class="progress-bar" style="width:'+percent+'"></i></span></a></div>');
		}
		html = arr.join('');
		return html;
	}

	wAjax({
		url:ajaxUrl.orderlist,
		type:'get',
		data:{},
		success:function(rs){
			//console.log(rs);
			var html = setlist(rs.data);
			$('.list').html(html);
		}
	});

});