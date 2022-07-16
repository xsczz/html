class Toast {

    show(message) {
        var button = document.querySelector('.button')

        button.addEventListener('click', () => {
            var ele = document.createElement('div')
            ele.className = 'toast animate'
            ele.innerHTML = '<div>' + message + '</div>'
            document.body.appendChild(ele)

            setTimeout(() => {
                document.body.removeChild(ele)
            }, 3000)
        })
    }
}
