// 属性检测
/*
* interface Composite {
*       function add(obj);
*       function remove(obj);
*       function update(obj);
*   }
*
*   interface FormItem {
*       function select(obj);
*   }
*/

var CompositeImpl = function () {
    // 在内部定义一个变量，名字要固定
    this.implementsInterfaces = ['Composite', 'FormItem'];
}
CompositeImpl.prototype = {
    add: function (obj) {
        console.log('add方法');
    },
    remove: function (obj) {

    },
    update: function (obj) {

    },
    select: function (obj) {

    }
}

function CheckCompositeImpl(instance) {
    // 判断当前对象是否实现了所有接口
    if (!IsImplements(instance, 'Composite', 'FormItem')) {
        throw new Error('Object does not implement a required interface!');
    }
}


function IsImplements(object) {
    // arguments 获取函数的实际参数
    for (var i = 1; i < arguments.length; i++) {
        // 接收实现接口的名字
        var interfaceName = arguments[i];
        // 判断此方法到底成功 还是失败
        var interfaceFound = false;
        for (var j = 0; j < object.implementsInterfaces.length; j++) {
            if (object.implementsInterfaces[j] == interfaceName) {
                interfaceFound = true;
                break;
            }
        }
        if (!interfaceFound) {
            return false;
        }
    }
    return true;
}

var c1 = new CompositeImpl();
CheckCompositeImpl(c1);
c1.add();