var express = require('express');
var path = require('path');
var app = express();

global.staticurl = 'http://192.168.92.155/static/';


var baseUrl = __dirname;
var url = {
	login: baseUrl + '/ejs/demo/login.ejs',
	orderlist:baseUrl + '/ejs/demo/orderlist.ejs',
	orderdetail:baseUrl + '/ejs/demo/orderdetail.ejs',
	productlist:baseUrl + '/ejs/demo/productlist.ejs',
	productdetail:baseUrl + '/ejs/demo/productdetail.ejs',
	workerlist:baseUrl + '/ejs/demo/workerlist.ejs',
	workerdetail:baseUrl + '/ejs/demo/workerdetail.ejs',
	h404:baseUrl + '/ejs/demo/404.ejs',
	order:baseUrl + '/ejs/demo/order.ejs',
	echarts:baseUrl + '/ejs/demo/echarts.ejs',
	highcharts:baseUrl + '/ejs/demo/highcharts.ejs',
	header:baseUrl + '/ejs/demo/template/header.ejs'
};

app.set('views', path.join(__dirname, 'ejs'));
app.set('view engine','ejs');
//app.set('port', process.env.PORT || 80);


//login
app.get('/login', function (req, res) {
  res.render(url.login);
});

//orderlist
app.get('/orderlist',function(req,res){
	//res.sendFile(url.orderlist);
	res.render(url.orderlist);
});

//orderdetail
app.get('/orderdetail',function(req,res){
	res.render(url.orderdetail);
});

//productlist
app.get('/productlist',function(req,res){
	res.render(url.productlist);
});

//productdetail
app.get('/productdetail',function(req,res){
	res.render(url.productdetail);
});

//workerlist
app.get('/workerlist',function(req,res){
	res.render(url.workerlist,extend(data_workerlist,data_header));
});

//workerdetail
app.get('/workerdetail',function(req,res){
	res.render(url.workerdetail);
});

//404
app.get('/404',function(req,res){
	res.render(url.h404);
});

//order
app.get('/order',function(req,res){
	res.render(url.order);
});

//echarts
app.get('/echarts',function(req,res){
	res.render(url.echarts);
});

//echarts
app.get('/highcharts',function(req,res){
	res.render(url.highcharts);
});

//concat json 
function extend(dest,src){
	for(var p in src){
		if(Object.prototype.toString.call(p).slice(8,-1) == 'Object' || Object.prototype.toString.call(p).slice(8,-1) == 'Array'){
			extend(src[p],dest[p]);
		}
		dest[p] = src[p];
	}
	return dest;
}

//header data
var data_header = {
	uname:'username111'
}

var data_orderlist = {
	data:[
		{
			'orderId':'WE1232224232',
			'num':100,
			'total':1000,
			'ordertime':'2016-12-10',
			'summary':'订单介绍订单介绍订单介绍订单介绍,订单介绍订单介绍订单介绍订单介绍'
		},{
			'orderId':'DE2827327842',
			'num':500,
			'total':1000,
			'ordertime':'2016-12-10',
			'summary':'订单介绍订单介绍订单介绍订单介绍,订单介绍订单介绍订单介绍订单介绍'
		},{
			'orderId':'DE2827327842',
			'num':800,
			'total':1000,
			'ordertime':'2016-12-10',
			'summary':'订单介绍订单介绍订单介绍订单介绍,订单介绍订单介绍订单介绍订单介绍'
		}
	],
	msg:'ok',
	code:0
};
var data_productlist = {
	data:[
		{
			'productId':'WE1232224232',
			'num':1,
			'total':8,
			'status':'1'
		},{
			'productId':'DE2827327842',
			'num':5,
			'total':8,
			'status':'0'
		},{
			'productId':'DE2827327842',
			'num':2,
			'total':8,
			'status':'1'
		}
	],
	msg:'ok',
	code:0
};
var data_workerlist = {
	workerdata:[
		{
			uid:'23554',
			mid:'LM0123S',
			t:'00:20:00',
			status:1
		},{
			uid:'23555',
			mid:'LM0123S',
			t:'00:20:00',
			status:1
		},{
			uid:'23556',
			mid:'LM0123S',
			t:'00:20:00',
			status:0
		},{
			uid:'23557',
			mid:'LM0123S',
			t:'00:20:00',
			status:1
		},{
			uid:'23558',
			mid:'LM0123S',
			t:'00:20:00',
			status:1
		}
	]
}
//生产线和产量
function getData(k){
    var data = [];
    for(var i=0;i<k;i++){
        data.push({name:'第'+(i+1)+'生产线',val:Math.round(Math.random()*1000)});
    }
    return {data:data,msg:'ok',code:0};
}

//json
app.get('/getOrderList',function(req,res){
	res.send(data_orderlist);
});

app.get('/getProductList',function(req,res){
	res.send(data_productlist);
});

app.get('/getchartsData',function(req,res){
	var data_charts = getData(8);
	res.send(data_charts);
});


var server = app.listen(80, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

  app.use('/static',express.static('static'));
  //app.use(express.static('html'));
});