import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://clindarserver-env.eba-tfqieqnf.ap-northeast-2.elasticbeanstalk.com/",
  cache: new InMemoryCache(),
});

export default client;
