import { ApolloClient, InMemoryCache, createHttpLink, from } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { onError } from "@apollo/client/link/error";
import { FORBIDDEN } from '../constant';

const httpLink = createHttpLink({
    uri: process.env.API_URL,
});

const authLink = setContext((_p: any, { headers }) => {
    const token = localStorage.getItem('token');
    return {
        headers: {
            ...headers,
            authorization: token ? token : "",
        }
    }
});

const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors) {
        graphQLErrors.forEach(({ extensions }) => {
            if (extensions?.code === FORBIDDEN) {
                window.localStorage.clear();
                window.location.href = "/";
            }
        });
        console.log(`[Graphql error]: ${graphQLErrors}`);
    }
    if (networkError) {
        console.log(`[Network error]: ${networkError}`);
    }
});

const client = new ApolloClient({
    link: from([authLink, errorLink, httpLink]),
    cache: new InMemoryCache(),
});

export default client;