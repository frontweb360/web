({
    baseUrl: 'static',
    paths: {
            common: 'common',
            pagescript: 'pagescript',
            jquery: 'common/core/jquery/jquery-2.1.4.min',
            "jquery/browser": 'common/core/jquery-plugins/jquery.browser.min',
            zepto:'common/core/zepto-build/zepto.min',
            wxapi: 'common/core/jweixin-1.0.0',
            'wxapi.default.config': 'common/core/wx.default.config',
            hammerjs: 'common/core/hammer-2.0.6/hammer.min',
            'jquery-hammer': 'common/core/hammer-2.0.6/jquery.hammer',
            echarts:'common/core/echarts'
        },
    //dir:'',
    // name: 'pagescript/projectName/page/js/main',
    // out:'./static/pagescript/projectName/page/js/main-build.js'
    dir: './static-built',
    exclude: ['jquery','zepto','wxapi','echarts','jquery/browser','wxapi','hammerjs'],
    modules: [
        {
            name: 'pagescript/demo/workerdetail/js/main'
        },
        {
            name: 'pagescript/demo/workerlist/js/main'
        },
        {
            name: 'pagescript/demo/orderlist/js/main'
        },
        {
            name: 'pagescript/demo/orderdetail/js/main'
        },
        {
            name: 'pagescript/demo/productlist/js/main'
        },
        {
            name: 'pagescript/demo/productdetail/js/main'
        },
        {
            name: 'pagescript/demo/order/js/main'
        },
        {
            name: 'pagescript/demo/login/js/main'
        }
    ]
})