import {schema} from 'nexus';
import {stringArg} from '@nexus/schema'
import User from './User'
import Post from './Post';
import Comment from './Comment';

import Commons from '../common';

export default schema.extendType({
    type: "Query",
    definition(t) {
        t.field("user", {
            type: User,
            args: {
                where: stringArg({required: true}),
            },
        })
        t.list.field("users", {
            type: User,
            args: {
                where: stringArg(),
            },
            async resolve(parent, {where}, {db}, info) {
                return Commons(db).userFindMany(where);
            }
        })
        t.field("post", {
            type: Post,
            args: {
                where: stringArg({required: true}),
            },
            async resolve(parent, args, {db}, info) {
                return Commons(db).postFindOne(args.where)
            }
        })
        t.list.field("posts", {
            type: Post,
            args: {
                where: stringArg(),
            },
            async resolve(parent, args, {db}, info) {
                return Commons(db).postFindMany(args.where)
            }
        })
        t.list.field("comments", {
            type: Comment,
            args: {
                postId: stringArg({ required: true }),
            },
            async resolve(parent, {postId}, {db}) {
                return Commons(db).getCommentsForPost(postId)
            }
        })
    }
})