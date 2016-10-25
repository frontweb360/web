//用r.js 合并js文件时用
require.config({
    baseUrl: './static',
    paths: {
            common: 'common',
            pagescript: 'pagescript',
            jquery: 'common/core/jquery/jquery-2.1.4.min',
            "jquery/browser": 'common/core/jquery-plugins/jquery.browser.min',
            zepto:'common/core/zepto-build/zepto.min',
            wxapi: 'common/core/jweixin-1.0.0',
            'wxapi.default.config': 'common/core/wx.default.config',
            hammerjs: 'common/core/hammer-2.0.6/hammer.min',
            'jquery-hammer': 'common/core/hammer-2.0.6/jquery.hammer'
        }
});