import React, { useState } from 'react';
import styled from 'styled-components';
import * as colors from '../util/colors';
import Toggle from './Toggle';
import { projects } from '../util/data.js';

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 5px;
`

// https://miro.medium.com/v2/resize:fit:720/format:webp/1*RYMDPwcVjiZDbOJy4hfYmw.png
const Container = styled.div`
    border: ${colors.gainsboro};
    background-color: ${colors.greyLight};
    padding: 20px 30px;
    max-width: 740px;
    width: 100vw;

    display: flex;
    flex-direction: column;

    @media screen and (min-width: 600px) {
        flex-direction: row;
    }
`;

const ImageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;
`

const ImageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    img {
        width: fit-content;
        margin: auto;
    }
`

const DescriptionWrapper = styled.div`
    flex: 1;
    @media screen and (min-width: 600px) {
        padding-left: 30px;
    }
`

const ProjectName = styled.h2`
    margin-bottom: 8px;
`
const ProjectDescription = styled.div`
    text-wrap: balance;
    padding: 0 0 30px 0;
    max-height: 100px;
    overflow: hidden;
    margin-bottom: 30px;
`
const ProjectLabelContainer = styled.div`
    display: flex;
    gap: 5px;
    flex-wrap: wrap;
`
const ProjectLabel = styled.a`
    padding: 3px 8px;
    border: solid 1px #6b89d463;
    border-radius: 5px;
    background-color: #6b89d426;
    color: #3159bd;
    font-size: 13px;
    text-decoration: none;
    /* color: #0ff; */
    /* text-shadow:
      0 0 5px #0ff,
      0 0 10px #0ff,
      0 0 20px #0ff,
      0 0 40px #0ff,
      0 0 80px #0ff; */

      /* &.pink {
        border-color: #d46ba763; //39%
        background-color: #d46baa26; //15%
        color: #bf4080;
      }

      &.yellow {
        border-color: #d4b06b63; //39%
        background-color: #cfd46b26; //15%
        color: #a28800;
      }

      &.orange {
        border-color: #d4856b63; //39%
        background-color: #d4906b26; //15%
        color: #cb5c17;
      } */
`


const ProjectCard = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleToggleChange = (i) => {
        setActiveIndex(activeIndex === i ? null : i);
    };

    return (
        <Wrapper>
            {projects.map((project, i) => (
                <Container key={i}>
                    <ImageContainer>
                        <ImageWrapper>
                            {activeIndex === i ? (
                                <img height="200px" width="auto" src="final-phone.webp" alt="Phone Device" />
                            ) : (
                                <img height="200px" width="auto" src="final-monitor.png" alt="Monitor" />
                            )}
                        </ImageWrapper>
                        {project.toggleOff ? null : <Toggle onChange={() => handleToggleChange(i)} />}
                    </ImageContainer>
                    <DescriptionWrapper>
                        <ProjectName>{project.name}</ProjectName>
                        <ProjectDescription>{project.description}</ProjectDescription>
                        <ProjectLabelContainer>
                            {project.techs.map((tech, index) => (
                                <ProjectLabel key={index} href={tech.url}>{tech.name}</ProjectLabel>
                            ))}
                        </ProjectLabelContainer>
                    </DescriptionWrapper>
                </Container>
            ))}
        </Wrapper>
    );
};

export default ProjectCard;
