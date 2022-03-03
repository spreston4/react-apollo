import { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql
} from "@apollo/client";

const client = new ApolloClient({
  uri: "https://71hds9.sse.codesandbox.io/",
  cache: new InMemoryCache()
});

client
  .query({
    query: gql`
      query getAllLinks {
        url
        slug
        if
      }
    `
  })
  .then((result) => console.log(result));

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </StrictMode>,
  rootElement
);
