// 1，创建一个普通的睡眠函数
function sleep() { // 2，使用 promise 封装基于定时器的异步
    function yanshi() { // 3，返回一个promise对象
        return new Promise((resolve, reject) => {
            setTimeout(() => { // 4，如果成功了, 调用 resolve()
                resolve()
            }, 2000)
        })
    }
    const p = yanshi(2000) // 5，调用promise对象的then函数
    p.then(value => { console.log('你好,世界'); })
}
// 0，创建自我输出函数
function myConsole() { sleep() } // -1，调用自动输出函数
myConsole()