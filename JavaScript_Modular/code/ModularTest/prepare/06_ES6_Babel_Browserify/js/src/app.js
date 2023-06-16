import { DATA_ARR, bar, foo } from './module1'
import { fun1, fun2, } from './module2'
import person from './module3'

//分别导入,这是不行的
// import { name, setName } from './module3'
// 不同的模块不能有相同的名字

import $ from 'jquery'

$('body').css('background', 'red')

foo()
bar()
console.log(DATA_ARR);
fun1()
fun2()
console.log(samename);
// console.log(name);  //undefined
// console.log(setName);   // undefined
person.setName('JACK')
console.log(person.name);

//默认暴露是一个对象，可以直接接收，