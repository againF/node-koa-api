const Koa = require('koa');
const { nextTick } = require('process');

const app = new Koa();

function test(ctx,next) {
    console.log('hello Alan');
    next();
}

app.use(test)
app.use((ctx, next) => {
    console.log('hello wu');
    next();
})
app.listen(3000)
console.log('listen 3000');
