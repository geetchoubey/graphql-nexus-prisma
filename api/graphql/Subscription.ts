import {stringArg, subscriptionType} from '@nexus/schema'
import Comment from './Comment';

export default subscriptionType({
    definition(t) {
        t.field('subscribeToComments', {
            type: Comment,
            args: {
                postId: stringArg({required: true})
            },
            subscribe(root, args, ctx) {
                return ctx.pubSub.asyncIterator(args.postId)
            },
            resolve(payload) {
                return payload
            }
        })
    }
})