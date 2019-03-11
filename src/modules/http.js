/* http 请求
=================================================== */

var ApiConfig = {
  server: 'api.qianxiaoer88.com'
}

var $ = require('jquery')

function Http () {}

var http = new Http()

http.getCashList = function (success) {
  $.ajax({
    url: 'http://' + ApiConfig.server + '/app/invite/getcashlist?callback=jq',
    type: 'GET',
    dataType: 'jsonp'
  }).done(function (data) {
    success(data)
  })
}

module.exports = http
