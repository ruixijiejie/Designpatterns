// 混合继承  原型继承和借用构造函数继承

function extend(sub, sup) {
    // 目的： 实现只继承父类的原型对象
    // 1. 用一个空函数进行中转
    var F = new Function();
    F.prototype = sup.prototype;  // 空函数的原型对象和超类的原型对象转换
    sub.prototype = new F();  // 原型继承
    sub.prototype.constructor = sub;  // 还原子类的构造器
    // 保存一下父类原型对象 一方面方便解耦  另一方面获取父类的原型对象
    sub.superClass = sup.prototype;    // 自定义一个子类的静态属性，接收父类的原型对象
    // 判断父类的原型对象的构造器
    if (sup.prototype.constructor == Object.prototype.constructor) {
        sup.prototype.constructor = sup;
    }
}


function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype = {
    constructor: Person,
    sayHello: function () {
        console.log('Hello World');
    }
}

function Boy(name, age, sex) {
    Boy.superClass.constructor.call(this, name, age)
    this.sex = sex;
}

// Boy.prototype = new Person();
// 只继承一遍父类的原型对象
extend(Boy, Person)

Boy.prototype.sayHello = function () {
    console.log('hello,javascript');
}

var b = new Boy('张三', 20, '男')
console.log(b.name);
console.log(b.age);
console.log(b.sex);
b.sayHello()
Boy.superClass.sayHello.call(b);