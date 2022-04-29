import styled from "styled-components";
import { Link } from "react-scroll";
import { flexCenter } from "../themes/Global.style";

export const Button = styled(Link)`
  border-radius: 50px;
  background: ${({ primary }) => (primary ? "var(--brand-clr)" : "#010606")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
  color: ${({ dark }) => (dark ? "#010606" : "var(--primary-clr)")};
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  border: none;
  outline: none;
  cursor: pointer;
  ${flexCenter};
  transition: all 0.2 ease-in-out;

  &:hover {
    transition: all 0.2 ease-in-out;
    background: ${({ primary }) => (primary ? "#fff" : "var(--brand-clr)")};
  }
`;
