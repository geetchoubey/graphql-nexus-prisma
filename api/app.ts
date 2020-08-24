import {GraphQLServer} from 'graphql-yoga'
import {schema} from './graphql'
import {createContext} from './context';


const server = new GraphQLServer({
    schema: schema,
    context: createContext(),
})

server.start({
    port: 443,
    endpoint: '/graphql',
    playground: '/playground',
    subscriptions: '/subscriptions'
}, () => console.log(`🚀 Server ready at http://localhost:4000`))
