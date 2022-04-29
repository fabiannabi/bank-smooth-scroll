import styled from "styled-components";
import { FlexContainer } from "../../themes/Containers.style";
import { MdArrowForward, MdArrowRight } from "react-icons/md";

export const HeroContainer = styled(FlexContainer)`
  background-color: var(--bg-primary);
  padding: 0 30px;
  height: 800px;
  position: relative;
  z-index: 1;
  width: 100%;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgb(6 14 7 / 50%);
    z-index: 2;
  }
`;

export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background-color: var(--bg-secondary);
`;

export const HeroContent = styled(FlexContainer)`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  flex-direction: column;
`;

export const HeroH1 = styled.h1`
  color: var(--primary-clr);
  font-size: 48px;
  text-align: center;

  @media screen and (max-width: ${({ theme }) => theme.mobile.medium}) {
    font-size: 40px;
  }

  @media screen and (max-width: ${({ theme }) => theme.mobile.small}) {
    font-size: 32px;
  }
`;

export const HeroP = styled.p`
  color: var(--primary-clr);
  font-size: 24px;
  text-align: center;
  max-width: 600px;
  margin-top: 24px;

  @media screen and (max-width: ${({ theme }) => theme.mobile.medium}) {
    font-size: 24px;
  }

  @media screen and (max-width: ${({ theme }) => theme.mobile.small}) {
    font-size: 18px;
  }
`;

export const HeroBtnWrapper = styled(FlexContainer)`
  margin-top: 32px;
  flex-direction: column;
`;

export const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 20px;
`;

export const ArrowRight = styled(MdArrowRight)`
  margin-left: 8px;
  font-size: 20px;
`;
