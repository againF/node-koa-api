const requireDirectory = require('require-directory')
const Router = require('koa-router')
class InitManager {
    static initCore(app) {
        // 入口方法
        InitManager.app = app;
        InitManager.initLoadRouters();
    }
    static initLoadRouters() {
        function whenLoadModule(obj) {
            if (obj instanceof Router) {
                InitManager.app.use(obj.routes())
            }
        }
        const apiDirectory = `${process.cwd()}/app/api` // 拼接绝对路径
        requireDirectory(module, apiDirectory, {
            visit: whenLoadModule
        })
    }
}

module.exports = InitManager;