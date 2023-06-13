(function () {
    interface Animal {
        color: string;
        name: string;
        age: number;
    }
    //下面写法也是正确的
    interface Dog {
        (name: string, color: string): void

    }
    type cat = Animal & {
        run(): void
    }
    const cat1: cat = {
        color: 'Black',
        name: 'cat',
        age: 3,
        run() { console.log('run') }
    }
    const dogcall: Dog = function (name: string, color: string) { console.log(name, color) };
    const dog3: Animal = {
        color: 'red',
        name: 'dog',
        age: 18
    }
    console.log(dog3);
    dogcall('dog', 'red');

    interface myInter {
        name: string;

        sayHello(): void;
    }
    /*
    * 定义类时，可以使类去实现一个接口,
    *   实现接口就是使类满足接口的要求
    * */

    const myinterface: myInter = {
        name: 'sss',
        sayHello() { console.log('hello') }
    };
    console.log(myinterface);
})()