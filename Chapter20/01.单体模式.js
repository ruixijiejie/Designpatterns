// 单体模式(singleton)

// 简单单体模式  对象字面量
/*
var Singleton = {
    attr1: true,
    attr2: 10,
    method1: function () {
        console.log("我是方法1");
    },
    method2: function () {
        console.log("我是方法2");
    }

}
*/

// 补充  划分命名空间(区分代码)
/*var BXP = {}
BXP.Singleton = {
    attr1: true,
    attr2: 10,
    method1: function () {
        console.log("我是方法1");
    },
    method2: function () {
        console.log("我是方法2");
    }
}

BXP.Singleton.method1();*/


// 2. 借助闭包创建单体  保护数据


var BXP = {}

BXP.Singleton = (function () {

    // 添加自己的私有成员
    var a1 = true;
    var a2 = 10;
    var f1 = function () {
        console.log('f1');
    }
    var f2 = function () {
        console.log('f2');
    }


    // 把块级作用域中的执行结果赋值类的单体对象
    return {
        attr1: a1,
        attr2: a2,
        method1: function () {
            return f1()
        },
        method2: function () {
            return f2()
        }
    }
})()

console.log(BXP.Singleton.attr1);
BXP.Singleton.method1()