require(['jquery','common/lib/wAjax','common/core/jquery-plugins/fastclick','pagescript/demo/base/js/menu'],function($,wAjax,fastclick,menu){
	var ajaxUrl = {
		productlist:'/getProductList'
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
			var classname = data[i].status == 1 ? 'glyphicon glyphicon-ok-sign':'glyphicon glyphicon-remove-sign';
			arr.push('<div class="item"><a href="/productdetail?id='+data[i].productId+'"><h4><span>产品编号：</span>'+data[i].productId+'</h4><span class="status"><i class="'+classname+'"></i></span><span class="progress"><i class="progress-bar" style="width:'+percent+'">'+percent+'</i></span></a></div>');
		}
		html = arr.join('');
		return html;
	}
	wAjax({
		url:ajaxUrl.productlist,
		type:'get',
		data:{},
		success:function(rs){
			console.log(rs);
			var html = setlist(rs.data);
			$('.list').html(html);
		}
	});
});