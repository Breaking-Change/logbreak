import App from 'next/app';
import Head from 'next/head';
import React from 'react';
import {createGlobalStyle} from 'styled-components';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from '@apollo/react-hooks';
import fetch from 'node-fetch';

import '../node_modules/modern-normalize/modern-normalize.css';

// Fonts
import OpenSansWoff from '../static/fonts/open-sans-v17-latin-regular.woff';
import OpenSansWoff2 from '../static/fonts/open-sans-v17-latin-regular.woff2';

if (!process.browser) {
	global.fetch = fetch;
}

const client = new ApolloClient({
	uri: 'https://api.github.com/graphql',
	headers: {
		Authorization: 'bearer GITHUB_TOKEN'
	}
});

const GlobalStyle = createGlobalStyle`
	@font-face {
		font-family: 'Open Sans';
		font-style: normal;
		font-weight: 400;
		font-display: fallback;
		src: local('Open Sans Regular'), local('OpenSans-Regular'),
			url(${OpenSansWoff2}) format('woff2'),
			url(${OpenSansWoff}) format('woff');
	}
 
	body {
		background-color: #343434;
		font-family: 'Open Sans', Arial, monospace;
		margin: auto;
		width: 100%;
		font-size: 16px;
		padding-top: 50px;
		padding-bottom: 50px;
		color: #fff;
		-webkit-font-smoothing: antialiased;
		text-rendering: optimizeSpeed;
	}

	a {
		color: yellow;
	}
`;

class MyApp extends App {
	render() {
		const {Component, pageProps} = this.props;
		return (
			<>
				<ApolloProvider client={client}>
					<GlobalStyle/>
					<Head>
						<title>LogBreak</title>
					</Head>
					<Component {...pageProps}/>
				</ApolloProvider>
			</>
		);
	}
}

export default MyApp;
