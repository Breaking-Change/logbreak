import React from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import logo from '../../static/images/logo.png';
import Container from '../../components/container';
import Spinner from '../../components/spinner';

const Selector = dynamic(
	() => import('../../components/selector'),
	{loading: () => <Spinner/>}
);

const Home = () => {
	return (
		<Container>
			<Link href="/">
				<a>
					<img style={{width: '17em', paddingBottom: '4em'}} src={logo} alt="Logo" decoding="async" loading="lazy" importance="low" draggable={false}/>
				</a>
			</Link>
			<Selector/>
		</Container>
	);
};

export default Home;
