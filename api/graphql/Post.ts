import {schema} from 'nexus'
import User from './User'
import Comment from './Comment'

export default schema.objectType({
    name: "Post",
    definition(t) {
        t.id("id")
        t.string("title")
        t.string("body")
        t.boolean("published")
        t.field("author", {
            type: User,
            async resolve(post, args, ctx, info) {
                return ctx.db.user.findOne({
                    where: {
                        id: post.authorId
                    }
                })
            }
        })
        t.id("authorId")
        t.list.field("comments", {
            type: Comment,
            async resolve(post, args, ctx, info) {
                return ctx.db.comment.findMany({
                    where: {
                        postId: post.id
                    }
                })
            }
        })
        t.date("createdAt")
        t.date("updatedAt")
    }
})