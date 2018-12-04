// 构造函数  原型   实例的关系
// 构造函数.prototype = 原型对象
// 构造函数.constructor = 构造函数(模板)
// 原型对象.isPrototypeOf(实例对象)   判断实例对象的原型 是不是当前对象
// 构造函数  实例对象 (类和实例)、

function Sup(name) {
    this.name = name;
}

Sup.prototype = {
    constructor: Sup,
    sayName: function () {
        console.log(this.name);
    }
}

function Sub(age) {
    this.age = age;
}

// 子类的原型对象等于父类的实例   实现了js的继承
// 1.此时的原型对象将包含一个指向另一个对象的指针
// sup的实例对象 和 sup的原型对象有一个关系
// 2.另一个原型中也包含另一个指向另一个构造函数的指针
// 子类的原型对象的构造器变成了父类的构造器

Sub.prototype = new Sup('张三');
var sub1 = new Sub();
console.log(sub1.name);
console.log(sub1.sayName());
console.log(Sub.prototype.constructor);
