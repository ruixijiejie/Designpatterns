// 命名空间
var BXP = {}


// 接口的方法
BXP.Interface = function (name, methods) {
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

// 接口的静态方法
// 三、检验接口里的方法
// 如果检验通过，不做任何操作，不通过，浏览器抛出error

BXP.Interface.ensureImplements = function (object) {
    // 如果检测方法接收参数小于2， 参数传递失败
    if (arguments.length < 2) {
        throw new Error('Interface.ensureImplements methods constructor arguments must be >= 2');
    }

    // 获得接口实例对象
    for (var i = 1; i < arguments.length; i++) {
        var instanceInterface = arguments[i];
        // 判断参数是否是接口类的类型
        if (instanceInterface.constructor !== BXP.Interface) {
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

// 继承的方法
BXP.extend = function (sub, sup) {
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
//
BXP.EventUtil = {
    addHandler: function (element, type, handler) {
        if (element.addEventListener) {
            element.addEventListener(type, handler, false);
        } else if (element.attachEvent) {
            element.attachEvent('on' + type, handler);
        } else {
            element['on' + type] = handler
        }
    },
    removeHandler: function (element, type, handler) {
        if (element.removeEventListener) {
            element.removeEventListener(type, handler, false);
        } else if (element.detachEvent) {
            element.detachEvent('on' + type, handler);
        } else {
            element['on' + type] = null;
        }
    }
}

Array.prototype.each = function (fn) {
    try {
        // 1.遍历数组的每一项
        this.i || (this.i = 0);
        // 2.判断
        if (this.length > 0 && fn.constructor == Function) {
            while (this.i < this.length) {
                // 获取数组每一项
                var e = this[this.i];
                if (e && e.constructor == Array) {
                    // 递归操作
                    e.each(fn)
                } else {
                    // 为了把数组的当前元素传递给fn函数，并让函数执行
                    fn.apply(e,[e]);
                }
                this.i ++;
            }
            this.i = null;  // 释放内存
        }

    } catch (e) {

    }
    return this;
}

