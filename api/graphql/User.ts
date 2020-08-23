import {schema} from 'nexus'
import Post from './Post';

export default schema.objectType({
    name: "User",
    definition(t) {
        t.id("id")
        t.string("name")
        t.string("email")
        t.string("password")
        t.list.field("posts", {
            type: Post,
            async resolve(user, args, ctx, info) {
                return ctx.db.post.findMany({
                    where: {
                        authorId: user.id
                    }
                })
            }
        })
        t.date("createdAt")
        t.date("updatedAt")
    }
})