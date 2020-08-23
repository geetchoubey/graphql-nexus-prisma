import {schema} from 'nexus'
import {arg} from '@nexus/schema';
import User from './User';
import Post from './Post';
import Comment from './Comment';
import {CreateCommentInput, CreatePostInput, CreateUserInput} from './Input';

export default schema.extendType({
    type: "Mutation",
    definition(t) {
        t.field("createUser", {
            type: User,
            args: {
                data: arg({
                    type: CreateUserInput,
                    required: true
                }),
            },
            async resolve(parent, args, ctx, info) {
                return ctx.db.user.create({
                    ...args
                })
            }
        })
        t.field("createPost", {
            type: Post,
            args: {
                authorId: schema.stringArg({ required: true }),
                data: arg({
                    type: CreatePostInput,
                    required: true
                }),
            },
            async resolve(parent, {authorId, data}, {db}, info) {
                const user = await db.user.findOne({
                    where: {
                        id: authorId
                    }
                });
                if (!user) throw new Error('User not found')
                console.log(user);
                return db.post.create({
                    data: {
                        ...data,
                        author: {
                            connect: {
                                id: user.id
                            }
                        }
                    }
                })
            }
        })
        t.field("createComment", {
            type: Comment,
            args: {
                data: arg({
                    type: CreateCommentInput,
                    required: true
                }),
            },
            async resolve(parent, args, ctx, info) {
                return ctx.db.comment.create({
                    ...args
                })
            }
        })
    }
})