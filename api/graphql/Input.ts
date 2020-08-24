import {inputObjectType} from '@nexus/schema';

export const CreateUserInput = inputObjectType({
    name: "CreateUserInput",
    definition(t) {
        t.string("name", { required: true })
        t.string("email", { required: true })
        t.string("password", { required: true })
    }
})

export const CreatePostInput = inputObjectType({
    name: "CreatePostInput",
    definition(t) {
        t.string("title", { required: true })
        t.string("body", { required: true })
        t.boolean("published", { required: true })
    }
})

export const CreateCommentInput = inputObjectType({
    name: "CreateCommentInput",
    definition(t) {
        t.string("text", { required: true })
    }
})