define(['jquery','common/core/jquery-plugins/fastclick'],function($,fastclick){
	//init
    (function(){
    	fastclick.attach(document.body);
    })();
	var menu = function(){
		this.$box = $('.menu');
		this.data = [
			['订单','/order'],
			['生产进度echarts','/echarts'],
			['生产进度highcharts','/highcharts'],
			['员工','/workerlist'],
			['库存','/404']
		];
		this.init();
		this.event();
	}
	menu.prototype = {
		constructor:menu,
		init:function(){
			var _self = this;
			var arr = ['<ul>'];
			for(var i=0;i<_self.data.length;i++){
				arr.push('<li><a href="'+_self.data[i][1]+'">'+_self.data[i][0]+'</a></li>');
			}
			arr.push('</ul>');
			this.$box.append(arr.join(''));
		},
		event:function(){
			var _self = this;
			$(document).on('click',function(e){
				console.log(e.target.className);
				if(e.target.className == 'menu' || e.target.className == 'glyphicon glyphicon-align-justify'){
					if(_self.$box.find('ul').is(':hidden')){
						_self.$box.find('ul').show(200);
					}else{
						_self.$box.find('ul').hide();
					}
					return false;
				}
				_self.$box.find('ul').hide();
			});
		}
	}
	return menu;
});
