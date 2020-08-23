import {schema} from 'nexus';
import User from './User'
import Post from './Post';

export default schema.extendType({
    type: "Query",
    definition(t) {
        t.field("user", {
            type: User,
            args: {
                where: schema.stringArg({ required: true }),
            },
        })
        t.list.field("users", {
            type: User,
            args: {
                where: schema.stringArg({ list: [false] }),
            },
            async resolve(parent, args, {db}, info) {
                return db.user.findMany();
            }
        })
        t.field("post", {
            type: Post,
            args: {
                where: schema.stringArg({ required: true }),
            },
            async resolve(parent, args, ctx, info) {
                return ctx.db.post.findOne({
                    where: {
                        id: args.where
                    }
                })
            }
        })
        t.list.field("posts", {
            type: Post,
            args: {
                where: schema.stringArg(),
            },
            async resolve(parent, args, ctx, info) {
                return ctx.db.post.findMany()
            }
        })
    }
})