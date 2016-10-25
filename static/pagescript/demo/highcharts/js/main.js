require(['jquery','pagescript/demo/base/js/menu','common/lib/wAjax','highcharts'],function($,menu,wAjax,highcharts){

	var m = new menu();

    var ajaxUrl = {
       chartsdata:'/getchartsData'
    }

    var option = {                  
        chart: {
            type: ''                           
        },
        title: {
            text: '实时产量'                 
        },
        xAxis: {
            categories: []   //指定x轴分组
        },
        yAxis: {
            title: {
                text: '产量'                 //指定y轴的标题
            }
        },
        series: [{                                 //指定数据列
            name: '产量',                          //数据列名
            data: []                        //数据
        }]
    };

    //init
    (function(){
        drawCharts('line',$('#charts1'));
        drawCharts('bar',$('#charts2'));
        drawCharts('pie',$('#charts3'));
        drawCharts('scatter',$('#charts4'));
    })();

    function drawCharts(type,box){
        var isReq = false;
        if(!isReq){
            isReq = true;
            wAjax({
                url:ajaxUrl.chartsdata,
                type:'get',
                data:{},
                success:function(rs){
                    //console.log(rs);
                    var data = rs.data;
                    var dataX = [],
                        dataY = [];
                    for(var i=0;i<data.length;i++){
                        dataX.push(data[i].name);
                        dataY.push(data[i].val);
                    }
                    option.xAxis.categories = dataX;
                    option.series[0].data = dataY;
                    option.chart.type = type;
                    box.highcharts(option);
                },
                complete:function(){
                    isReq = false;
                }
            });
        }
    }

        var tid1 = setInterval(function(){
            drawCharts('line',$('#charts1'));
        },3000);

        var tid2 = setInterval(function(){
            drawCharts('bar',$('#charts2'));
        },3000);

        var tid3 = setInterval(function(){
            drawCharts('pie',$('#charts3'));
        },3000);

        var tid4 = setInterval(function(){
            drawCharts('scatter',$('#charts4'));
        },3000);

});