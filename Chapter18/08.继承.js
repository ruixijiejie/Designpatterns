// ⑴原型继承
/*function Person(name,age) {
    this.name = name;
    this.age = age;
}


Person.prototype.id = 10;  // 父类的原型属性

function Boy(sex) {
    this.sex = sex;
}

// 继承已经实现了
Boy.prototype = new Person();

var b = new Boy();
console.log(b.name);
console.log(b.id);*/

// 原型继承的特点： 即继承了父类的模板，又继承了 父类的原型对象

console.log('--------------------');


// 类继承(只继承模板) 不继承原型对象(借用构造函数的方式继承)
/*function Person(name,age) {
    this.name = name;
    this.age = age;
}


Person.prototype.id = 10;

function Boy(name,age,sex) {
    // call apply
    Person.call(this,name,age)
    this.sex = sex;
}

var b = new Boy('张三',20,'男');
console.log(b.name);
console.log(b.sex);
console.log(b.age);
console.log(b.id);    // undefined*/

console.log('----------------------');


// 通过原型继承 + 构造函数继承 = 混合继承
function Person(name, age) {
    this.name = name;
    this.age = age;
}


Person.prototype.id = 10;
Person.prototype.sayName = function () {
    console.log(this.name);
}

function Boy(name, age, sex) {
    // call apply
    Person.call(this, name, age)  // 1.借用构造函数继承
    this.sex = sex;
}

// 2. 原型继承
// 只剩下 父类的实例  和 父类原型对象的关系了
Boy.prototype = new Person();

var b = new Boy('fjd', 20, '男')
console.log(b.name);
console.log(b.sex);
console.log(b.age);
b.sayName();





