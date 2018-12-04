// 模拟jQuery链式编程

// 块级作用域
/*
(function () {
    // 特点1：程序启动的时候，后面的代码直接执行了
    console.log('我执行了');
    // 特点2：内部的成员变量 外部无法访问，除了不加var声明的变量
    a = 10;
})()
console.log(a);*/

(function (window, undefined) {
    // $ 返回给外界
    function _$(arguments) {
        // 正则表达式匹配ID
        var idselector = /#\w+/;
        this.dom;
        if (idselector.test(arguments[0])) {
            // 匹配成功，接收dom元素
            this.dom = document.getElementById(arguments[0].substring(1));
        } else {
            throw new Error('arguments is error')
        }
    }

    Function.prototype.method = function (methodName, fn) {
        this.prototype[methodName] = fn;
        return this;
    }
    // 在原型对象加公共的方法
    _$.prototype = {
        constructor: _$,
        addEvent: function (type, fn) {
            if (window.addEventListener) {
                this.dom.addEventListener(type, fn)
            } else if (window.attchEvent) {
                this.dom.attachEvent('on' + type, fn)
            }
            console.log('addEvent');
            return this;
        },
        setStyle: function (prop,val) {
            this.dom.style[prop] = val;
            console.log('setStyle');
            return this;
        }
    };

    window.$ = _$;

    _$.onReady = function (fn) {
        // 1.实例化出来_$对象，真正的注册到window上
        window.$ = function () {
            return new _$(arguments);
        }
        // 2. 执行传入进来的代码
        fn()
        // 3. 实现链式编程
        _$.method('addEvent', function () {

        }).method('setStyle', function () {

        });
    }
})(window);  // 程序的入口 window传入作用域中
