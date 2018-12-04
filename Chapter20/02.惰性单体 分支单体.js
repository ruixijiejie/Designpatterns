// 惰性单体
var Ext ={};
Ext.Base = (function () {

    var uniqInstance;  // undefined

    // 需要一个构造器init初始化单体对象得知方法
    function init() {
        var a1 = 10;
        var a2 = true;
        var fn1 = function () {
            console.log('fn1');
        }
        var fn2 = function () {
            console.log('fn2');
        }
        return {
            attr1: a1,
            attr2: a2,
            method1: function () {
                return fn1()
            },
            method2: function () {
                return fn2()
            }
        }
    }

    return {
        getInstance: function () {
            if (!uniqInstance) {  // 不存在，创建单体实例
                uniqInstance = init();
            }
            return uniqInstance;
        }
    }
})()

console.log(Ext.Base.getInstance().attr1);
Ext.Base.getInstance().method1();


// 分支单体  判断程序的分支
var Ext = {}
var def = true;
Ext.More = (function () {
    var objA = {  // 火狐属性
        attr1: '火狐属性'
    };
    var objB = {   // IE属性

    }
    return (def) ? objA : objB;
})()

console.log(Ext.More.attr1);