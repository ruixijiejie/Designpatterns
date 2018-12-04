// 定义接口有三种方式
// 1. 注解描述
// 优点： 程序员可以有一个参考
// 缺点： 属于文档的范畴，这种方法太松散了，检测性查

/*
* interface Composite {
*       function add(obj);
*       function remove(obj);
*       function update(obj);
*   }
*   
*/

var CompositeImpl = function () {
  /*  this.add = function (obj) {

    };
    this.remove = function (obj) {

    }*/
}

CompositeImpl.prototype = {
    add: function (obj) {
        
    },
    remove: function (obj) {
        
    },
    update: function (obj) {

    }
}

var c1 = new CompositeImpl();
var c2 = new CompositeImpl();
console.log(c1.add == c2.add);

// 2. 属性检测方式


// 3. 鸭式变型