import { ApolloServer } from 'apollo-server';
import typeDefs from './graphql/typeDefs.js';
import resolvers from './graphql/resolvers.js';

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`Server is up and running on PORT ${PORT}`);
});
