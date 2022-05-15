// 基础语法 ECMASript => ECMA这个组织来制订基本的规范
// DOM 文档对象模型 操作 => html 和 CSS
// BOM 浏览器对象模型 读取浏览器的属性和值 浏览版本
// 控制台输出
/*
 这是我第一次写js
*/
console.log("控制台输出");
// a, b, c

// user_name 蛇形命名 不推荐
// userName 小驼峰 => 推荐
// UserName 大驼峰
var userName = "sean";

console.log(userName);

// 类型推断
var x = 5;
var y = 6;
var z;
z = x + y;
console.log(z);

var n;
console.log(typeof n);

n = 5;
console.log(typeof n);

n = "string";
console.log(typeof n);

n = false;
console.log(typeof n);

n = 3.1415
console.log(typeof n);

n = [1, 2, 3, 4, 5, "user", false];
console.log(typeof n);
// 通过下标来访问数组的值
console.log(n[4]);

n = {name: "cool", age: 30};
console.log(typeof n);
// 通过key访问对象的值
console.log(n.name);
console.log(n["name"]);

// 定义一个函数
function test() {
    var age = 18;
    console.log("function age => " + age);
}

test();

var one = "20";
var two = 20;

// if ... else
if (one === two) {
    console.log("等于");
} else {
    console.log("不等于");
}

// switch
var s = 1;
switch (s) {
    case 1:
        console.log("ok");
        break;
    case 2:
        console.log("no");
        break;
    default:
        console.log("default"); 
        break;
}

// for 循环
for (i = 0; i < 10; i++) {
    console.log(i);
}

// 利用html DOM 和 for 循环生成了10个div
// 编程式
var container = document.querySelector(".container");
for (i = 0; i < 10; i++) {
    var div = document.createElement("div");
    div.innerText = i
    div.style.width = '100px';
    div.style.height = '100px';
    if (i % 2 == 0) {
        div.style.backgroundColor = '#f00';
    } else {
        div.style.backgroundColor = '#999';
    }
    container.appendChild(div);
}
