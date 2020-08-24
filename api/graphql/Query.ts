import { queryType } from '@nexus/schema'

export const Query = queryType({
    definition(t) {
        t.crud.users({ filtering: true})
        t.crud.posts({ ordering: true, filtering: true })

        //
        // Examples showing custom resolvers
        //

        // t.field('blog', {
        //     type: 'Blog',
        //     args: {
        //         id: intArg({ required: true }),
        //     },
        //     resolve(_root, args, ctx) {
        //         return ctx.prisma.blog
        //             .findOne({
        //                 where: {
        //                     id: args.id,
        //                 },
        //             })
        //             .then((result) => {
        //                 if (result === null) {
        //                     throw new Error(`No blog with id of "${args.id}"`)
        //                 }
        //                 return result
        //             })
        //     },
        // })

        // t.field('blogsLike', {
        //     type: 'Blog',
        //     list: true,
        //     args: {
        //         name: stringArg(),
        //         viewCount: intArg(),
        //     },
        //     resolve(_root, args, ctx) {
        //         return ctx.prisma.blog.findMany({
        //             where: {
        //                 name: args.name ?? undefined,
        //                 viewCount: args.viewCount ?? undefined,
        //             },
        //         })
        //     },
        // })
    },
})
