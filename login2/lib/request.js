class Request {

    get(url, params = {}, successCallback, failCallback) {
        var query = ''
    
        var i = 0
        for (var k in params) {
            if (i == 0) {
                query = '?' + k + '=' + params[k]
            } else {
                query += '&' + k + '=' + params[k]
            }
            i++
        }
    
        url = url + query
        var xhr = new XMLHttpRequest()
    
        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4) {
                successCallback(xhr.responseText)
            } else {
                failCallback()
            }
        }
    
        xhr.open('GET', url, true)
        xhr.send()
    }
    
    post(url, params = {}, successCallback, failCallback) {
        var xhr = new XMLHttpRequest()
    
        xhr.open('POST', url, true)
        xhr.setRequestHeader('Content-Type', 'application/json')
        var json = JSON.stringify(params)
    
        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4) {
                successCallback(xhr.responseText)
            } else {
                failCallback()
            }
        }
    
        xhr.send(json)
    }
}
