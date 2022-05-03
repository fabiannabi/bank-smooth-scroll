import styled from "styled-components";
import { GridContainer, FlexContainer } from "../../themes/Containers.style";

export const InfoContainer = styled.div`
  color: var(--primary-clr);
  background: ${({ bgColor }) =>
    bgColor === 'light' ? "var(--bg-light)" : "var(--bg-dark)"};

  @media screen and (max-width: ${({ theme }) => theme.mobile.medium}) {
    padding: 100px 0px;
  }
`;

export const InfoWrapper = styled(GridContainer)`
  z-index: 1;
  height: 860px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
`;

export const InfoRow = styled(GridContainer)`
  grid-auto-columns: minmax(auto, 1fr);
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col2 col1'` : `'col1 col2'`};

  @media screen and (max-width: ${({ theme }) => theme.mobile.medium}) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
  }
`;

export const InfoColumn = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`;
export const InfoColumnSecond = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0px;
  padding-bottom: 16px;
`;

export const TopLine = styled.p`
  color: var(--brand-clr);
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ lightText }) =>
    lightText ? "var(--text-light)" : "var(--text-dark)"};

  @media screen and (max-width: ${({ theme }) => theme.mobile.small}) {
    font-size: 32px;
  }
`;

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: ${({ darkText }) =>
    darkText ? "var(--text-dark)" : "var(--text-light)"};
`;

export const ButtonWrapper = styled(FlexContainer)`
  justify-content: flex-start;
`;

export const ImageWrapper = styled.div`
  max-width: 555px;
  height: 100%;
`;

export const Img = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
`;


export const InfoImgColumn = styled.div``
