import React, { useState } from 'react';
import styled from 'styled-components';
import * as colors from '../util/colors';

// https://miro.medium.com/v2/resize:fit:720/format:webp/1*RYMDPwcVjiZDbOJy4hfYmw.png
const Container = styled.div`
    position: relative;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    width: 200px;
    margin: 20px;
    border: 1px solid ${colors.silver};
    border-radius: 8px;

    background-color: ${colors.white};
`;

const Option = styled.div`
    z-index: 1;
    display: flex;
    justify-content: center;
    flex: 1;

    padding: 6px 16px;

    cursor: pointer;
`;

const Slider = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;

    width: 50%;
    border-top-left-radius: ${({ activeOption }) => activeOption === 'option-A' ? '7px' : ''};
    border-bottom-left-radius: ${({ activeOption }) => activeOption === 'option-A' ? '7px' : ''};
    border-bottom-right-radius: ${({ activeOption }) => activeOption === 'option-B' ? '7px' : ''};
    border-top-right-radius: ${({ activeOption }) => activeOption === 'option-B' ? '7px' : ''};


    background-color: ${colors.gainsboro};

    transition: transform 0.4s ease;
    transform: ${({ activeOption }) => activeOption === 'option-A' ? 'translateX(0)' : 'translateX(100%)'};`;


const Toggle = ({ props, onChange }) => {
    const [activeOption, setActiveOption] = useState('option-A');

    const handleClick = (option) => {
        setActiveOption(option);
        onChange(option);
    };

    return (
        <Container>
            <Slider activeOption={activeOption} />
            <Option 
                className="option-A" 
                onClick={() => activeOption !== 'option-A' && handleClick('option-A')}
            >
                Desktop
            </Option>
            <Option 
                className="option-B" 
                onClick={() => activeOption !== 'option-B' && handleClick('option-B')}
            >
                Mobile
            </Option>
        </Container>
    );
};

export default Toggle;
