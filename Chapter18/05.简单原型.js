function Person() {

}

Person.prototype = {
    // constructor: Person,
    name: '张三',
    age: 20,
    job: '程序员',
    say: function () {
        console.log("我是原型函数");
    }
}

// 给原型对象重新设置构造器的方法 Object.defineProperty()
// 参数1： 重设构造器的对象  参数2：设置什么属性  参数3：option配置项

Object.defineProperty(Person.prototype, 'constructor', {
    enumerable: false,
    value: Person
})

var p1 = new Person();
/*console.log(p1.name);
console.log(p1.say());*/

console.log(Person.prototype.constructor);


// 枚举对象的keys
for (attr in p1) {  // 枚举
    console.log(attr);
}

// 原型的动态特性
function Person() {

}

Person.prototype = {
    constructor: Person,
    name: 'zs',
    age: 20,
    job: '程序员',
    say: function () {
        console.log("我是原型函数");
    }
}
var p1 = new Person();
Person.prototype.say = function () {
    console.log("我是方法");
}
p1.say();
