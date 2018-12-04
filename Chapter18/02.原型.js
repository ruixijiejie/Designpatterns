// prototype
// 构造函数式
function Person(name, age) {
    this.name = name;
    this.age = age;
    /* this.sayName = function () {
         alert(this.name)
     }*/
    this.sayName = sayName;
}

function sayName() {
    console.log(this.name);
}

var p1 = new Person('张三', 20);
var p2 = new Person('李四', 18);
console.log(p1.sayName == p2.sayName);   // true
console.log(p1.name == p2.name);         // false

// prototype 创建每一个函数都有一个prototype属性，这个属性其实是一个指针，这个指针总指向一个对象
// 所有实例所共享


console.log('-------------------');

function Person1(name, age) {
    this.name = name;
    this.age = age;
}

Person1.prototype = {
    sayName: function () {
        return this.name;
    },
    sayAge: function () {
        return this.age;
    }
}

var person1 = new Person1('王五', '22');
console.log(person1.sayAge());;

// 构造函数  原型对象  实例对象
// 构造函数.prototype = 原型对象
// 原型对象.constructor = 构造函数
// 实例对象.prototype = 原型对象