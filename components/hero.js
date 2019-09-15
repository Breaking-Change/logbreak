import React from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

import illustration from '../static/images/illustration.svg';

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 2em;
    justify-content: space-around;
    user-select: none;

    ${breakpoint('desktop')`
        width: 55vw;
        font-size: 1.1em;
        padding-top: 10em !important;
        padding-bottom: 20em !important;
    `}

    ${breakpoint('mobile')`
        width: 80vw;
        padding-top: 5em !important;
        padding-bottom: 10em !important;
    `}
`;

const Image = styled.img`
    width: 20em;
    padding: 2em;
`;

const Description = styled.div`
    display: flex;
    flex-direction: column;
    width: 30em;
    padding-top: 80px;
`;

const Navbar = () => {
	return (
		<Wrapper>
			<Image src={illustration} alt="Illustration" decoding="async" loading="lazy" importance="low" draggable={false}/>
			<Description>
				<h2 style={{color: '#bdbaf4'}}>All breaking changes in 1 place</h2>
				<p style={{fontWeight: 800}}>To make it easier for users and contributors to see precisely what notable changes have been made between each release (or version) of the project.</p>
			</Description>
		</Wrapper>
	);
};

export default Navbar;
