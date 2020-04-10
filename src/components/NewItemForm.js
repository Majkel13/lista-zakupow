import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
    background: #232632;
    color: #00a7fa;
    width:80px;
    /* height: 32px; */
    font-size: 1.7em;
    border: 0px;
    display: flex;
    justify-content:center;
    align-items:center;
    border-radius: 18px;
`
const TextInput = styled.input`
    padding: 5px;
    font-size: 0.7em;
    background: #232323;
    color: #d3d4d6;
    width: 100%;
    margin-right: 7px;
    border:0px;
    -webkit-appearance: none;
    border-radius: 18px;
`
const Container = styled.div`
    display:flex;
    justify-content: space-between;
    border:2px solid #00a7fa;
    border-radius: 18px;
    padding: 5px;
    background: #232323;
`

const NewItemForm = ({onSubmit, onChange, draft, onKeyPress}) =>(
    <Container>
        <TextInput type='text' maxLength="30" value={draft} onChange={onChange} onKeyPress={onKeyPress} />
        <Button onClick={onSubmit}>+</Button>
    </Container>
)
export default NewItemForm