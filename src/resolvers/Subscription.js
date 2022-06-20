const Subscription = {
    user: {
        subscribe(parent, args, ctx, info) {
            return ctx.pubsub.asyncIterator('user')
        }
    },
    message: {
        subscribe(parent, args, ctx, info) {
            return ctx.pubsub.asyncIterator('message')
        }
    }
}

module.exports = Subscription;
global.Subscription = Subscription;