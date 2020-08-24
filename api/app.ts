import {GraphQLServer} from 'graphql-yoga'
import {schema} from './graphql'
import {createContext} from './context';


const server = new GraphQLServer({
    schema: schema,
    context: createContext(),
})

server.start(() => console.log(`🚀 Server ready at http://localhost:4000`))
