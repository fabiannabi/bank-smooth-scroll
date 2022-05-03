import React from "react";
import { Button } from "../Btn.styled";

import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  InfoColumn,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  ButtonWrapper,
  InfoImgColumn,
  ImageWrapper,
  Img,
} from "./InfoSection.styled";

const InfoSection = ({
  id,
  lightText,
  topLine,
  headline,
  description,
  buttonLabel,
  imgStart,
  image,
  alt,
  primary,
  dark,
  darkText,
}) => {
  return (
    <>
      <InfoContainer id={id}>
        <InfoWrapper>
          <InfoRow img={imgStart}>
            <InfoColumn>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
              </TextWrapper>
              <ButtonWrapper>
                <Button to="home" primary={primary} dark={dark}>{buttonLabel}</Button>
              </ButtonWrapper>
            </InfoColumn>
            <InfoImgColumn>
              <ImageWrapper>
                <Img src={image} alt={alt}></Img>
              </ImageWrapper>
            </InfoImgColumn>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
