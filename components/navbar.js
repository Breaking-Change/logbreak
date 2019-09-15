import React from 'react';
import styled from 'styled-components';

import logo from '../static/images/logo.png';

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    justify-content: flex-start;
    align-items: flex-start;
    user-select: none;
`;

const Navbar = () => {
	return (
		<Wrapper>
			<img style={{width: '17em', paddingLeft: '2em'}} src={logo} alt="Logo" decoding="async" loading="lazy" importance="low" draggable={false}/>
		</Wrapper>
	);
};

export default Navbar;
