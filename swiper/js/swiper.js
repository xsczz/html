class Swiper {

    constructor() {
        let swiper = document.querySelector('.swiper')
        let item = document.querySelectorAll('.swiper > .item')
        let length = item.length

        this.length = length
        this.item = item

        let action = document.createElement('ul')
        action.className = 'action'

        for (var i = 0; i < length; i++) {
            let actionItem = document.createElement('li')
            actionItem.dataset.index = i
            actionItem.className = 'item'
            action.appendChild(actionItem)
            item[i].style.left = i * 800 + 'px'

            if (i == 0) {
                actionItem.className = 'item active'
                item[i].style.opacity = 1
            } else {
                actionItem.className = 'item'
                item[i].style.opacity = 0
            }
        }

        swiper.appendChild(action)

        let items = document.querySelectorAll('.swiper > .action > li')

        for (var i = 0; i < length; i++) {
            console.log(items[i])
            items[i].addEventListener('click', (e) => {
                let index = parseInt(e.target.dataset.index)
                this.move(index)
            })
        }
    }

    move(index) {
        let actionItems = document.querySelectorAll('.action > .item')

        for (var n = 0; n < this.length; n++) {
            if (n == index) {
                this.item[n].style.left = '0px'
                actionItems[n].className = 'item active'
                this.item[n].style.opacity = 1
            } else {
                console.log('n', n, 'left', (n - index) * 800)
                this.item[n].style.left = (n - index) * 800 + 'px'
                actionItems[n].className = 'item'
                this.item[n].style.opacity = 0
            }
        }
    }
}
