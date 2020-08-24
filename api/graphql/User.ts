import {schema} from 'nexus'
import Post from './Post';
import Commons from '../common';

export default schema.objectType({
    name: "User",
    definition(t) {
        t.id("id")
        t.string("name")
        t.string("email")
        t.string("password")
        t.list.field("posts", {
            type: Post,
            resolve(user, args, {db}, info) {
                return Commons(db).getPostsByUser(user.id)
            }
        })
        t.date("createdAt")
        t.date("updatedAt")
    }
})