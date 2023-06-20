(function (window) {
    class Promise {
        constructor(executor) {
            // 初始化状态
            this.Promisestatus = 'pending';
            this.Promisevalue = undefined;
            this.callbackFn = [];
            // 初始化成功回调函数
            const resolve = (value) => {
                if (this.Promisestatus !== 'pending') return;
                this.Promisestatus = 'fulfilled';
                this.Promisevalue = value;
            }
            // 初始化失败回调函数
            const reject = (reason) => {
                if (this.Promisestatus !== 'pending') return;
                this.Promisestatus = 'rejected';
                this.Promisevalue = reason;
            }
            // 立即同步执行executor
            try {
                executor(resolve, reject)
            } catch (e) {
                reject(e)
            }

        }
        //原型上的then方法
        then(onfulfilled, onrejected) {
            if (!(onfulfilled instanceof Function)) {
                onfulfilled = value => value;
            }
            if (!(onrejected instanceof Function)) {
                onrejected = reason => {
                    throw reason;
                }
            }
            return new Promise((resolve, reject) => {
                // 封装函数
                const common = (callback) => {
                    //异步函数
                    setTimeout(() => {
                        try {
                            let result = callback(this.Promisevalue);
                            if (result instanceof Promise) {
                                result.then(v => {
                                    resolve(v)
                                }, r => {
                                    reject(r)
                                })
                            } else {
                                resolve(result)
                            }
                        } catch (e) {
                            reject(e)
                        }
                    });
                }

                // 判断状态
                if (this.Promisestatus === 'fulfilled') {
                    // 状态为fulfilled，调用成功回调函数
                    common.bind(this, onfulfilled)()

                } else if (this.Promisestatus === 'rejected') {
                    // 状态为rejected，调用失败回调函数
                    common.bind(this, onrejected)()

                } else {
                    // 状态为pending，将成功回调函数和失败回调函数存储起来
                    this.callbackFn.push({
                        onfulfilled: common.bind(this, onfulfilled),
                        onrejected: common.bind(this, onrejected)
                    })
                }

            })
        }
    }
})(window)