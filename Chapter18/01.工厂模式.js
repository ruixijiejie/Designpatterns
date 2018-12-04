// 简单工厂模式
/*
function createPerson(name, sex, age) {
    var obj = new Object();
    obj.name = name;
    obj.age = age;
    obj.sex = sex;
    obj.sayName = function () {
        console.log(this.name);
    }
    return obj;
}
*/

/*
var createPerson = function (name, sex, age) {
    var obj = new Object();
    obj.name = name;
    obj.sex = sex;
    obj.age = age;
    obj.sayName = function () {
        console.log(this.name);
    }
    return obj;
}
var p1 = createPerson('张三', '男', 18)
var p2 = createPerson('张四', '女', 24)
*/


// 2. 构造函数式
function Person(name, sex, age) {
    this.name = name;
    this.sex = sex;
    this.age = age;
    this.sayName = function () {
        console.log(this.name);
    }
}

// 构造一个对象，new 关键字
var p1 = new Person('小李', '女', 24);
var p2 = new Person('小张', '男', 4);
console.log(p1 == p2);  // false
console.log(p1.name);   // 小李
p1.sayName();           // 小李
console.log(p1.constructor == Person);    // true
console.log(p2.constructor == Person);    // true
console.log(p1 instanceof Object);        // true
console.log(p1 instanceof Object);        // true

// 3.通过原型添加方法


// 创建对象的方式
// 1.当做构造函数去使用
var p1 = new Person('小李', '女', 24);
// 2. 作为普通函数去使用 当做普通的方式
Person('张三', '呵呵', 21)
// 3. 在另一个对象的作用域中的调用
var o = new Object();
Person.call(o, '小六', '女', 19);
