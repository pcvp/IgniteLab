import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.hygraph.com/v2/cl5pq6d152dr101um8xw828zi/master',
    cache: new InMemoryCache()
})