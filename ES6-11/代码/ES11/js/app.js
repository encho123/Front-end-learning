import * as m1 from "./hello.js";      //引入hello.js
//获取元素
const btn = document.getElementById('btn');
// 引入hello.js
import { hello } from './hello.js';
btn.onclick = function () {
    import('./hello.js').then(module => {
        module.hello();
    });
}

m1.hello();