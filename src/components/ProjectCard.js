import React, { useState } from 'react';
import styled from 'styled-components';
import * as colors from '../util/colors';
import Toggle from './Toggle';

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


const ProjectCard = props => {

    const [isDesktop, setIsDesktop] = useState(true);

    const handleToggleChange = () => {
        setIsDesktop(!isDesktop);
    };

    return (
        <Container>
            <ImageContainer>
                <ImageWrapper>
                    {isDesktop ? (
                        <img height="200px" width="auto" src="final-monitor.png" alt="Monitor" />
                    ) : (
                        <img height="200px" width="auto" src="final-phone.webp" alt="Phone Device" />
                    )}
                </ImageWrapper>
                <Toggle onChange={handleToggleChange} />
            </ImageContainer>
            <DescriptionWrapper>
                <ProjectName>Lorem Ipsum</ProjectName>
                <ProjectDescription>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ullamcorper, neque ultrices eleifend congue, enim magna condimentum tortor, at imperdiet nisi massa at mauris. Etiam elit dolor, feugiat aliquam imperdiet et, rutrum eget sem. Proin fringilla tempor odio, in varius mauris porttitor id.
                </ProjectDescription>
                <ProjectLabelContainer>
                    <ProjectLabel href="#" className='orange'>Handlebars</ProjectLabel>
                    <ProjectLabel href="/" className='yellow'>VanillaJS</ProjectLabel>
                    <ProjectLabel href="#" className='pink'>SCSS</ProjectLabel>
                    <ProjectLabel href="#">Redux</ProjectLabel>
                    <ProjectLabel href="#">BEM</ProjectLabel>
                    <ProjectLabel href="#">Figma</ProjectLabel>
                </ProjectLabelContainer>
            </DescriptionWrapper>
        </Container>
    );
};

export default ProjectCard;
