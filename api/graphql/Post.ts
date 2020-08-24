import {schema} from 'nexus'
import User from './User'
import Comment from './Comment'
import Commons from '../common';

export default schema.objectType({
    name: "Post",
    definition(t) {
        t.id("id")
        t.string("title")
        t.string("body")
        t.boolean("published")
        t.field("author", {
            type: User,
            resolve(post, args, {db}, info) {
                return Commons(db).userFindOne(post.authorId)
            }
        })
        t.id("authorId")
        t.list.field("comments", {
            type: Comment,
            resolve(post, args, {db}, info) {
                return Commons(db).getCommentsForPost(post.id)
            }
        })
        t.date("createdAt")
        t.date("updatedAt")
    }
})