// 原型概念 原型对象里的所有属性和方法，  被所有构造函数实例化出来的对象所共享
/*function Person() {
    
}
Person.prototype = {
    constructor: Person,
    name: '张三',
    age: 20,
    job: '程序员',
    friends: ['李四','王五'],
    sayName: function () {
        console.log("我的名字");
    }
}
var p1 = new Person();
var p2 = new Person();

p1.friends.push('赵六');
console.log(p1.friends);
console.log(p2.friends);*/
// 原型里的属性和方法被所有实例所共享

// 组合使用原型和构造函数，定义一个类，开发时常用的方式
function Person(name, age, friends, job) {
    this.name = name;
    this.age = age;
    this.friends = friends;
    this.job = job;
}

Person.prototype = {
    constructor: Person,
    sayName: function () {
        console.log(this.name);
    }
}
var p1 = new Person('z3', 20, ['王五', '张柳'], '技术总监');
var p2 = new Person('李四', 20, ['王五', '张柳', '赵琦'], 'boss');

console.log(p1.friends);
p1.sayName()
console.log(p2.friends);
p2.sayName()

// 动态原型模式
function Person(name, age, friends, job) {
    this.name = name;
    this.age = age;
    this.friends = friends;
    this.job = job;

    // 动态原型方法
    if (typeof this.sayName != 'function') {
        Person.prototype.sayName = function () {
            console.log(this.name);
        }
    }
}

// 稳妥构造函数 durable object (稳妥对象)  非常安全的环境中
// 1.没有公共属性   2. 不能使用this对象
function Person(name, age, job) {
    var obj = new Object();
    // 可以定义私有的变量和函数
    var name = name;
    var sex = '男';
    var saySex = function () {

    }
    // 添加一个方法
    obj.sayName = function () {
        console.log(name);
    }
    return obj;
}

var p1 = new Person('zs');
p1.sayName()
