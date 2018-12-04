// object.getPrototypeOf()  根据实例对象获取原型方法
function Person() {

}
Person.prototype.name = '张三';
Person.prototype.age = 20;
Person.prototype.sayName = function () {
    console.log("我是原型对象的方法");
}
var p1 = new Person();
console.log(p1.name);  // 张三

var prototypeObj = Object.getPrototypeOf(p1);
console.log(prototypeObj == Person.prototype);  // true

// 每次代码读取一个对象属性的时候，首先会进行一次搜索，搜索实例对象里name的属性，看看有没有，如果没有，再去p2实例所对应的name属性里寻找，如果有就返回，没有就返回undefined.

//
var p2 = new Person();
p2.name = '王五';
// delete p2.name;
console.log(p2.name);   // 就像获取原型对象的name属性


// 判断一个对象属性，是属于原型属性 还是实例属性
var p3 = new Person();
console.log(p3.name);
console.log(p3.hasOwnProperty('name'));

// in 操作符  判断属性是否存在于 实例对象与原型对象中
var p1 = new Person();
console.log('name' in p1);    // true
var p2 = new Person();
p2.name = 'ws';
console.log('name' in p2)


// 判断一个属性是否存在于原型中
// 在原型对象中，是否存在这个属性，第一个参数：当前对象  第二个参数：要判断的属性

function hasPrototypeProperty(object,name) {
    return !object.hasOwnProperty(name) && name in object
}
var p3 = new Person();
p3.name = 'xiao'
console.log(hasPrototypeProperty(p3, 'name'));


// es5新特性 object.keys()
var p1 = new Person();
p1.name = 'z5';
p1.age = 20;
var attributes = Object.keys(p1);
console.log(attributes);
var attributes2 = Object.keys(Person.prototype)
console.log(attributes2);


// constructor属性，是不能被枚举的

// object.getOwnPropertyName 枚举对象所有属性，不管该内部属性能否被枚举
var attributes3 = Object.getOwnPropertyNames(Person.prototype)
console.log(attributes3);