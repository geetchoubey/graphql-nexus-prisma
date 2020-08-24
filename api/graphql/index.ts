import { nexusSchemaPrisma } from 'nexus-plugin-prisma/schema'
import path from 'path';

import {makeSchema} from '@nexus/schema';
import Post from './Post';
import User from './User';
import Comment from './Comment'
import Mutation from './Mutation'
import Query from './Query'
import Subscription from './Subscription';

export const schema = makeSchema({
    types: [Query, Mutation, User, Post, Comment, Subscription],
    plugins: [
        nexusSchemaPrisma()
    ],
    outputs: {
        typegen: path.join(
            __dirname,
            '../../node_modules/@types/nexus-typegen/index.d.ts',
        ),
    },
    typegenAutoConfig: {
        contextType: 'Context.Context',
        sources: [
            {
                source: '.prisma/client',
                alias: 'prisma',
            },
            {
                source: require.resolve('../context'),
                alias: 'Context',
            },
        ],
    },

})
