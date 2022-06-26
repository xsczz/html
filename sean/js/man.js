class CreateMan {

    // 关注点分离
    // 构造函数：在类被实例化的时候立即执行的函数
    constructor(name, age) {
        // 被实例化出来的对象
        // 成员属性
        this.name = name
        this.age = age
    }

    setName(name) {
        this.name = name
    }

    setAge(age) {
        this.age = age
    }

    // 方法函数：成员方法
    getName() {
        return this.name
    }

    getAge() {
        if (this.name == 'cool') {
            this.age = this.age + 1
        } else {
            this.age = this.age - 1
        }

        return this.age
    }
}
