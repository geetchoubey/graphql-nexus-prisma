import {schema} from 'nexus'
import {stringArg, arg} from '@nexus/schema';
import User from './User';
import Post from './Post';
import Comment from './Comment';
import {CreateCommentInput, CreatePostInput, CreateUserInput} from './Input';

import Commons from '../common';

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
                authorId: stringArg({ required: true }),
                data: arg({
                    type: CreatePostInput,
                    required: true
                }),
            },
            async resolve(parent, {authorId, data}, {db}, info) {
                const user = await Commons(db).userFindOne(authorId);
                if (!user) throw new Error('User not found')

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
            nullable: true,
            args: {
                authorId: stringArg({ required: true }),
                postId: stringArg({ required: true }),
                data: arg({
                    type: CreateCommentInput,
                    required: true
                }),
            },
            async resolve(parent, {authorId, postId, data}, {db}, info) {
                const user = await Commons(db).userFindOne(authorId);
                if (!user) throw new Error('User not found')
                const post = await Commons(db).postFindOne(postId);
                if (!post) throw new Error('Post not found')

                return db.comment.create({
                    data: {
                        text: data.text,
                        author: {
                            connect: {
                                id: user.id
                            }
                        },
                        post: {
                            connect: {
                                id: post.id
                            }
                        }
                    }
                })
            }
        })
    }
})