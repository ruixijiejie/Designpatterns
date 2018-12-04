// Array each方法

/*
var arr = [1,2,3,4,5];
arr.forEach(function (item,index,array) {
    console.log(item);
})
*/


// 遍历多维数组
var arr = [1,2,3,[4,[5,[6]]]];

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
arr.each(function (item) {
    console.log(item);
})