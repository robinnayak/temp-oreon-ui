import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import  { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const apolloClient = new ApolloClient({
  uri: `${import.meta.env.VITE_API_URI}/graphql`,
  cache: new InMemoryCache(),
});

export const ApolloClientProvider = ({ children }: Props) => {
  return <ApolloProvider client={apolloClient}>{children}</ApolloProvider>;
};
