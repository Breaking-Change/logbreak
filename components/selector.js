import React, {useState} from 'react';
import {useRouter} from 'next/router';
import {useFormState} from 'react-use-form-state';
import {useQuery} from '@apollo/react-hooks';
import {gql} from 'apollo-boost';
import ReactMarkdown from 'react-markdown';
import versionCompare from 'tiny-version-compare';
import Spinner from './spinner';
import SelectGroup from './select-group';
import Select from './select';
import Button from './button';

const GET_VERSIONS = gql`
	query Repository($owner: String!, $name: String!) {
		repository(owner: $owner, name: $name) {
		releases(last: 100) {
			edges {
			node {
				tagName
				id
			}
			}
		}
		}
	}  
`;

const Selector = () => {
	const [formState, {select}] = useFormState();
	const [result, setResult] = useState(null);
	const router = useRouter();
	const {error, loading, data} = useQuery(GET_VERSIONS, {variables: {owner: router.query.owner, name: router.query.name}});

	const handleSubmit = async e => {
		e.preventDefault();
		const {values} = formState;

		if (versionCompare(values.current, values.new) === 1) {
			setResult(<p>Current version can&apos;t be lower, than the new one!</p>);
		} else if (versionCompare(values.current, values.new) === 0) {
			setResult(<p>No breaking changes found!</p>);
		} else {
			const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    		const targetUrl = `https://us-central1-htn-breaking-changes.cloudfunctions.net/releases/${router.query.owner}/${router.query.name}`;
			await fetch(proxyUrl + targetUrl)
				.then(blob => blob.json())
				.then(data => {
					const info = data.filter(e => (
						versionCompare(e.tagName, values.current) === 1
					));
					setResult(
						<div style={{padding: '2vw', textAlign: 'default'}}>
							{info.map(el => <ReactMarkdown key={el.id} source={el.description}/>)}
						</div>
					);
				});
		}
	};

	return (
		<>
			{loading ? <Spinner/> :
				error ? <p>Something went wrong: {error}</p> :
				<form onSubmit={handleSubmit}>
						<>
						<SelectGroup>
								<label style={{textAlign: 'center'}}>
                    Current version
									<br/>
									<Select required {...select('current')}>
										<option value="">Select</option>
										{data.repository.releases.edges.map(release => {
											return <option key={release.node.id} value={release.node.tagName}>{release.node.tagName}</option>;
										})}
									</Select>
								</label>
								<label style={{textAlign: 'center'}}>
                        New version
									<br/>
									<Select required {...select('new')}>
										<option value="">Select</option>
										{data.repository.releases.edges.map(release => {
											return <option key={release.node.id} value={release.node.tagName}>{release.node.tagName}</option>;
										})}
									</Select>
								</label>
							</SelectGroup>
						<br/>
						<br/>
						<div style={{textAlign: 'center'}}>
								<Button type="submit">Upgrade</Button>
								<p style={{paddingTop: '5em', textAlign: 'left'}}>{result}</p>
							</div>
     </>
					</form>}
		</>
	);
};

export default Selector;
