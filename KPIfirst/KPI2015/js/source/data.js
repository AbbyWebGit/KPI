define(function (require, exports, module) {
    //
    var $ = require('jquery');
    var domain = $CONFIG.domain || '';
    var db = {

        networkError: function (XMLHttpRequest, textStatus, errorThrown) {
            var errorMessage = '';

            if (XMLHttpRequest.status == 404) {
                errorMessage = '接口地址不正确。';

            } else if (XMLHttpRequest.status == 200) {
                errorMessage = {
                    timeout: '服务器响应太慢了',
                    error: '未知错误1',
                    notmodified: '未知错误2',
                    parsererror: '接口返回的数据格式不正确，应该为JSON格式。',
                    undefined: '未知错误'
                }[textStatus];
            }

            console.log('网络错误[url:' + this.url + '] ' + errorMessage);

            return XMLHttpRequest;
        },

        /**
         * 处理通用错误，包括服务器错误、接口错误
         * @param  {Object} data       [接口返回内容]
         * @param  {String} textStatus [状态]
         * @param  {jQuery.Deferred} jqXHR      [XMLHttpRequest with jQuery]
         * @return {jQuery.Deferred}
         */
        systemError: function (data, textStatus, jqXHR) {
            var systemErrors = {
                500: '服务器报错',
                501: '未登录',
                502: '登录已过期',
                503: '没有访问权限',
                504: '服务维护中'
            };

            if (systemErrors.hasOwnProperty(data ? data.code : 0)) {
                console.log('通用错误[url:' + this.url + '] ' + systemErrors[data.code]);

                if (data.code === 501 || data.code === 502) {
                    location.href = domain + "login";

                } else if (data.code === 500) {
                    alert('很抱歉，服务器开了个小差，请刷新页面后重试操作！');

                } else if (data.code === 503) {
                    alert('很抱歉，您没有该访问权限！');
                }
            }

            return jqXHR;
        },

        addtimestamp2url: function (url) {
            if (url.indexOf('?') === -1) {
                url += '?';
            } else {
                url += '&';
            }
            url += (+new Date());

            return url;
        },

        get: function (url, data) {
            data = data || {};
            url += '?' + $.param(data);

            var option = {
                url: domain + this.addtimestamp2url(url),
                type: "GET",
                dataType: 'json'
            };

            var deferred = null;

            try {
                deferred = $.ajax(option).fail(this.networkError).then(this.systemError);
            } catch (e) {
                deferred = $.Deferred();
            }

            return deferred;
        },

        post: function (url, data) {
            data = data || {};

            var option = {
                url: domain + this.addtimestamp2url(url),
                data: typeof data === 'string' ? data : $.param(data),
                type: "POST",
                dataType: 'json'
            };

            var deferred = null;

            try {
                deferred = $.ajax(option).fail(this.networkError).then(this.systemError);
            } catch (e) {
                deferred = $.Deferred();
            }

            return deferred;
        }
    }


    module.exports = db;
})