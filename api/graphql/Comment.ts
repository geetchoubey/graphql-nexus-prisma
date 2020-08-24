import {objectType} from '@nexus/schema';
import Post from './Post';
import User from './User';

import Commons from '../common';

export default objectType({
    name: "Comment",
    definition(t) {
        t.id("id")
        t.string("text")
        t.date("createdAt")
        t.date("updatedAt")
        t.field("post", {
            type: Post,
            resolve(parent, args, {db}, info) {
                return Commons(db).postFindOne(parent.postId)
            }
        })
        t.id("postId")
        t.field("author", {
            type: User,
            resolve(parent, args, {db}, info) {
                return Commons(db).userFindOne(parent.authorId)
            }
        })
        t.id("authorId")
    }
})