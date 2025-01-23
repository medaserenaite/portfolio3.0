import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 5px;

    width: 100vw;
`;

const Section = (props) => {
    return (
        <Container>
            {props.children}
        </Container>
    );
};

export default Section;