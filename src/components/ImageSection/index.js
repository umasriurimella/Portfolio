import React from 'react'
import ImageBgAnimation from '../ImageBgAnimation'
import { ImageContainer, ImageBg, ImageLeftContainer, Img, ImageRightContainer, ImageInnerContainer, TextLoop, Title, Span, SubTitle, ResumeButton } from './ImageStyle'
import HeroImg from '../../images/HeroImage.jpg'
import Typewriter from 'typewriter-effect';
import { Bio } from '../../data/constants';

const ImageSection = () => {
    return (
        <div id="about">
            <ImageContainer>
                <ImageBg>
                    <ImageBgAnimation />
                </ImageBg>
                <ImageInnerContainer >
                    <ImageLeftContainer id="Left">
                        <Title>Hi, I am <br /> {Bio.name}</Title>
                        <TextLoop>
                            I am a
                            <Span>
                                <Typewriter
                                    options={{
                                        strings: Bio.roles,
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </Span>
                        </TextLoop>
                        <SubTitle>{Bio.description}</SubTitle>
                        <ResumeButton href={Bio.resume} target='display'>Check Resume</ResumeButton>
                    </ImageLeftContainer>

                    <ImageRightContainer id="Right">

                        <Img src={HeroImg} alt="hero-image" />
                    </ImageRightContainer>
                </ImageInnerContainer>

            </ImageContainer>
        </div>
    )
}

export default ImageSection