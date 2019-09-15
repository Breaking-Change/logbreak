import React from 'react';
import {useRouter} from 'next/router';
import {useFormState} from 'react-use-form-state';
import Container from '../components/container';
import Navbar from '../components/navbar';
import Hero from '../components/hero';
import Header from '../components/header';
import Input from '../components/input';
import Button from '../components/button';

const Home = () => {
	const [formState, {text}] = useFormState();
	const router = useRouter();

	const handleSubmit = e => {
		e.preventDefault();
		const {values} = formState;
		router.push(`/${values.repo}`);
	};

	return (
		<Container>
			<Navbar/>
			<Hero/>
			<Header>Try it out!</Header>
			<form style={{textAlign: 'center', paddingBottom: '10em'}} onSubmit={handleSubmit}>
				<Input {...text('repo')} type="text" required name="repo" placeholder="facebook/react"/>
				<br/>
				<Button type="submit">Check</Button>
			</form>
			<footer>Created with &lt;3 at Hack The North 2019</footer>
		</Container>
	);
};

export default Home;
