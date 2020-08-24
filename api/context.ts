import { PrismaClient } from '@prisma/client'
import {PubSub} from 'graphql-yoga'

const db = new PrismaClient()
const pubSub = new PubSub()

export type Context = {
    db: PrismaClient
    pubSub: PubSub
}

export const createContext = (): Context => ({
    db,
    pubSub
})