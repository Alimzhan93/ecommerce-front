import styled, { css } from "styled-components";


export const ButtonStyle = css`
  border: 0;
  padding: 5px 15px;
  cursor: pointer;
  border-radius: 5px;
  align-items: center;
  display: inline-flex;
  text-decoration: none;
  svg{
    height: 16px;
    margin-right: 5px;
  }
  cursor: pointer;
  ${props => props.white && !props.outline && css`
  background-color: #fff;
  color: #000;
  `}
  ${props => props.white && props.outline && css`
  background-color: transparent;
  color: #fff;
  border: 1px solid #fff;
  `}
  ${props => props.primary && css`
  background-color: #5542f6;
  border: 1px solid #5542f6;
  color: #fff;
  `}
  ${(props) => props.size === "l" && css`
  font-size:1.2rem;
  padding: 10px 20px;
  svg{
    height: 20px;
  }
  `}
`

 const StyledButton = styled.button`
  ${ButtonStyle}
`;

export default function Button({ children, ...rest }) {
  return <StyledButton {...rest}>{children}</StyledButton>;
}