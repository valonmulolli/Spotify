import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { PropsWithChildren } from 'react';

const client = new ApolloClient({
	uri: 'https://xinhui.stepzen.net/api/quelling-emu/__graphql',
	headers: {
		Authorization:
			'apikey xinhui::stepzen.net+1000::35b49d840c6595a33f86c84e85aaa0ce4dcb12f9134ea6dfece4c1292ac72559',
	},
	cache: new InMemoryCache(),
});

const ApolloClientProvider = ({ children }: PropsWithChildren) => {
	return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default ApolloClientProvider;