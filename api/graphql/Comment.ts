import { objectType } from '@nexus/schema'

export const User = objectType({
    name: 'Comment',
    definition(t) {
        t.model.id()
        t.model.text()
        t.model.author()
        t.model.post()
        t.model.createdAt()
        t.model.updatedAt()
    },
})