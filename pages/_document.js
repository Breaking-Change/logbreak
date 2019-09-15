import React from 'react';
import Document, {Head, Main, NextScript} from 'next/document';
import {ServerStyleSheet} from 'styled-components';

export default class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const sheet = new ServerStyleSheet();
		const originalRenderPage = ctx.renderPage;
		try {
			ctx.renderPage = () =>
				originalRenderPage({
					enhanceApp: App => props => sheet.collectStyles(<App {...props}/>)
				});
			const initialProps = await Document.getInitialProps(ctx);
			return {
				...initialProps,
				styles: (
					<>
						{initialProps.styles}
						{sheet.getStyleElement()}
					</>
				)
			};
		} finally {
			sheet.seal();
		}
	}

	render() {
		return (
			<html lang="en">
				<Head>
					<meta charSet="utf-8"/>
					<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
					<meta name="description" content="Detect breaking changes using project's changelog"/>
					<meta name="theme-color" content="#343434"/>
					<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent"/>
					<link rel="manifest" href="static/manifest.json"/>
					<link rel="icon" href="static/favicon.png"/>
				</Head>
				<body>
					<Main/>
					<NextScript/>
				</body>
			</html>
		);
	}
}
