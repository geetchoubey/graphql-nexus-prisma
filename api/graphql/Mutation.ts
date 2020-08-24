import { mutationType } from '@nexus/schema'

export const Mutation = mutationType({
    definition(t) {
        t.crud.createOneUser()
        t.crud.createOnePost()
        t.crud.updateOneUser()
        t.crud.updateOnePost()
        t.crud.deleteOneUser()
        t.crud.deleteOnePost()
        t.crud.createOneComment()
        t.crud.updateOnePost()
    },
})