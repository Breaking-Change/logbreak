import styled from 'styled-components';

const Button = styled.button`
    border: none;
    border-radius: 15px;
    width: 180px;
    padding: 15px 22px;
    font-size: 16px;
    font-weight: 800;
    cursor: pointer;
    background-color: #766fd9;
    color: #fff;
    outline: none;
    user-select: none;
    background-position: center;
    transition: background 0.8s;
    &:hover {
        background: #5c54d2 radial-gradient(circle, transparent 1%, #5c54d2 1%) center/15000%;
    }
    &:active {
        background-color: #4339cb;
        background-size: 100%;
        transition: background 0s;
    }
`;

export default Button;
