
import React, { useState } from 'react'

import { FaSearch } from 'react-icons/fa';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Search = () => {
    const [input, setInput] = useState("");
    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        navigate('/searched/' + input);
    }

    return (
        <FormStyle onSubmit={ submitHandler }>
            <div>
                <input 
                    onChange={ (e) => setInput(e.target.value) } 
                    type="text" 
                    value={ input }
                />
            </div>
        </FormStyle>
  )
}

const FormStyle = styled.form`
    margin: 0rem 20rem;


    div {
        position: relative;
        width: 100%;
        justify-content: center;
        align-items: center;
    }

    input {
        width: 100%;
        border: none;
        background: linear-gradient(35deg, #494949, #313131);
        font-size: 1.5rem;
        color: white;
        padding: 1rem 3rem;
        border: none;
        border-radius: 1rem;
        outline: none;
    }

    svg {
        position: absolute;
        top: 50%
        left: 0%;
        transform: translate(100%, -50%);
        color: white;
    }
`;

export default Search;