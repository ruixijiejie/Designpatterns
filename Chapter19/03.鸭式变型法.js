// 鸭式变型法
// 注解描述法
// 属性检测法  无法检测接口中具体的方法


// 1.接口类 Class Interface
// 接口类需要两个参数
// 1. 接口的名字
// 2. 接收方法名称的集合
var Interface = function (name, methods) {
    // 判断接口的参数个数
    if (arguments.length != 2) {
        throw new Error('this instance interface constructor arguments must be 2 length!')
    }
    this.name = name;
    this.methods = [];  // 定义一个内置的空对象 
    for (var i = 0; i < methods.length; i++) {
        if (typeof methods[i] !== "string") {
            throw new Error('the Interface method name is error!');
        }
        this.methods.push(methods[i]);
    }
}
// 二.准备工作，具体的实现类

// 1.实例化接口对象
var CompositeInterface = new Interface('CompositeInterface', ['add', 'remove']);
var FormItemInterface = new Interface('FormItemInterface', ['update', 'select']);

// 2.具体的实现类
var CompositeImpl = function () {
    
}

// 3. 实现接口的方法
CompositeImpl.prototype = {
    add: function (obj) {
        console.log('add方法');
    },
    remove: function (obj) {
        console.log('remove方法');
    },
    update: function (obj) {
        console.log('update方法');
    },
    select: function (obj) {
        console.log('select方法');
    }
}

// 三、检验接口里的方法
// 如果检验通过，不做任何操作，不通过，浏览器抛出error

Interface.ensureImplements = function (object) {
    // 如果检测方法接收参数小于2， 参数传递失败
    if (arguments.length < 2) {
        throw new Error('Interface.ensureImplements methods constructor arguments must be >= 2');
    }

    // 获得接口实例对象
    for (var i = 1; i < arguments.length; i++) {
        var instanceInterface = arguments[i];
        // 判断参数是否是接口类的类型
        if (instanceInterface.constructor !== Interface) {
            throw new Error('the arguments constructor not be Interface Class');
        }
        // 循环接口实例中的每个方法
        for (var j = 0; j < instanceInterface.methods.length; j++) {
            // 用临时变量接收每一个方法的名字  string
            var methodName = instanceInterface.methods[j];
            if (!object[methodName] || typeof object[methodName] !== 'function') {
                throw new Error('the method name is not found');
            }
        }
    }
}

var c1 = new CompositeImpl();

Interface.ensureImplements(c1,CompositeInterface,FormItemInterface);
c1.add()
c1.remove()

