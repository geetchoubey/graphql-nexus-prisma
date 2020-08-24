const Commons = (db: any) => ({
    userFindOne(id: String) {
        return db.user.findOne({
            where: {
                id
            }
        })
    },
    userFindMany(query: any) {
        return db.user.findMany()
    },
    postFindOne(id: String) {
        return db.post.findOne({
            where: {
                id
            }
        })
    },
    postFindMany(query: any) {
        return db.post.findMany()
    },
    getPostsByUser(authorId: String) {
        return db.post.findMany({
            where: {
                authorId
            }
        })
    },
    getCommentsForPost(postId: String) {
        return db.comment.findMany({
            where: {
                postId
            }
        })
    }
})

export default Commons