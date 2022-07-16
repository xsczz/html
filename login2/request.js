class Request {

    get(url, data = {}, successCallback, failCallback) {
        var xhr = new XMLHttpRequest()
        xhr.open('GET', url, true)

        xhr.onreadystatechange = function() {
            if (xhr.readyState === xhr.DONE) {
                if (xhr.status === 200) {
                    successCallback(xhr.responseText)
                } else if (xhr.status === 404) {
                    failCallback(404)
                } else if (xhr.status === 500) {
                    failCallback(500)
                } else {
                    failCallback(500)
                }
            }
        }

        xhr.send()
    }

    post(url, data = {}, successCallback, failCallback) {
        var xhr = new XMLHttpRequest()
        xhr.open('POST', url, true)
        xhr.setRequestHeader('Content-Type', 'application/json')

        xhr.onreadystatechange = function() {
            if (xhr.readyState === xhr.DONE) {
                if (xhr.status === 200) {
                    successCallback(xhr.responseText)
                } else if (xhr.status === 404) {
                    failCallback(404)
                } else if (xhr.status === 500) {
                    failCallback(500)
                } else {
                    failCallback(500)
                }
            }
        }

        var json = JSON.stringify(data)
        xhr.send(json)
    }

    put(url, data = {}) {
        var xhr = new XMLHttpRequest()
        xhr.open('POST', url, true)

        // todo...
    }

    delete(url, data = {}) {
        var xhr = new XMLHttpRequest()
        xhr.open('POST', url, true)

        // todo...
    }

}