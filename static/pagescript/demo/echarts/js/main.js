require(['jquery','echarts','pagescript/demo/base/js/menu','common/lib/wAjax'],function($,echarts,menu,wAjax){

	var m = new menu();

    var ajaxUrl = {
       chartsdata:'/getchartsData'
    }

    var myChart1 = echarts.init(document.getElementById('charts1'));
    var myChart2 = echarts.init(document.getElementById('charts2'));
    var myChart3 = echarts.init(document.getElementById('charts3'));
    var myChart4 = echarts.init(document.getElementById('charts4'));

    var option = {
            title: {
                text: '实时产量'
            },
            tooltip: {},
            legend: {
                data:['产量']
            },
            xAxis: {
                data: []
            },
            yAxis: {},
            series: [{
                name: '产量',
                type: '',
                data: []
            }]
        };
        //init
        (function(){
            drawCharts('line',myChart1);
            drawCharts('bar',myChart2);
            drawCharts('pie',myChart3);
            drawCharts('scatter',myChart4);
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
                        option.xAxis.data = dataX;
                        option.series[0].data = dataY;
                        option.series[0].type = type;
                        box.setOption(option);
                    },
                    complete:function(){
                        isReq = false;
                    }
                });
            }
        }

        if(tid1){
            clearInterval(tid1);
        }
        var tid1 = setInterval(function(){
            drawCharts('line',myChart1);
        },3000);

        if(tid2){
            clearInterval(tid2);
        }
        var tid2 = setInterval(function(){
            drawCharts('bar',myChart2);
        },3000);

        if(tid3){
            clearInterval(tid3);
        }
        var tid3 = setInterval(function(){
            drawCharts('pie',myChart3);
        },3000);

        if(tid4){
            clearInterval(tid4);
        }
        var tid4 = setInterval(function(){
            drawCharts('scatter',myChart4);
        },3000);

});