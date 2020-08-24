import { objectType } from '@nexus/schema'

export const User = objectType({
    name: 'Post',
    definition(t) {
        t.model.id()
        t.model.title()
        t.model.body()
        t.model.comments()
        t.model.createdAt()
        t.model.updatedAt()
        t.model.author()
    },
})