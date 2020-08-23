import {objectType} from '@nexus/schema';
import Post from './Post';
import User from './User';

export default objectType({
    name: "Comment",
    definition(t) {
        t.id("id")
        t.string("text")
        t.date("createdAt")
        t.date("updatedAt")
        t.field("post", { type: Post })
        t.id("postId")
        t.field("author", { type: User })
        t.id("authorId")
    }
})