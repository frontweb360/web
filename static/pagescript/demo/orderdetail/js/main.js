require(['jquery','echarts','pagescript/demo/base/js/menu'],function($,echarts,menu){

	var m = new menu();
	
	var myChart = echarts.init(document.getElementById('charts'));

	var labelTop = {
	    normal : {
	    	color:'#3aa978',
	        label : {
	            show : true,
	            position : 'center',
	            formatter : '{b}',
	            textStyle: {
	                baseline : 'bottom',
	                fontSize:14,
	                fontWeight:'normal',
	                color:'#B7B7B7'
	            }
	        },
	        labelLine : {
	            show : false
	        }
	    }
	};
	var labelFromatter = {
	    normal : {
	        label : {
	            formatter : function (params){
	                return '3125/70%';
	            },
	            textStyle: {
	                baseline : 'top',
	                fontFamily : '微软雅黑',
	           		fontSize : 18,
	            	fontWeight : 'bolder',
	            	color:'#6B6B6B'
	            }
	        }
	    },
	}
	var labelBottom = {
	    normal : {
	        color: '#eee',
	        label : {
	            show : true,
	            position : 'center'
	        },
	        labelLine : {
	            show : false
	        }
	    },
	    emphasis: {
	        color: 'rgba(0,0,0,0)'
	    }
	};
	var radius = ['55%', '66%'];
	option = {
	    // title : {
	    //     text: '订单进度',
	    //     x: 'center'
	    // },
	    legend: {
	        orient : 'vertical',
	        x : '70%',
	        y:'60%',
	        data:['未完成数量','已完成数量']
	    },
	    series : [
	        {
	            type : 'pie',
	            center : ['50%', '40%'],
	            radius : radius,
	            itemStyle : labelFromatter,
	            

	            data : [
	                {name:'未完成数量', value:30, itemStyle : labelBottom},
	                {name:'已完成数量', value:70,itemStyle : labelTop}
	            ]
	        }
	        
	       
	        
	    ]
	};
	myChart.setOption(option);
});