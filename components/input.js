import styled from 'styled-components';

const Input = styled.input`
    cursor: pointer;
    background-color: #3e3e3e;
    color: #aeaaff;
    font-weight: 800;
    margin-top: 10px;
    margin-bottom: 20px;
    width: 20em;
    padding: 20px;
    margin: 15px;
    margin-bottom: 30px !important;
    border: none;
    border-radius: 15px;
    outline: none;
    appearance: none;
    transition: background 0.8s;
    box-shadow: 0 3px 6px 0 #292929, 0 5px 10px 0 #292929;
    text-align: center;
    &:hover {
        background: #363636;
    }
    &:focus {
        box-shadow: 0 0 0 2px #0096bfab;
        transition: all 0.2s ease;
    }
`;

export default Input;
