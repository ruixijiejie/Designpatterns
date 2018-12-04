// 1.简单的函数链式调用
function Dog() {
    this.run = function () {
        console.log('dog is run...');
        return this;
    };
    this.eat = function () {
        console.log('dog is eat...');
        return this;
    }
    this.sleep = function () {
        console.log('dog is sleep...');
        return this;
    }
}

var d1 = new Dog();
/*d1.run();
d1.eat();
d1.sleep();*/
d1.run().eat().sleep();

