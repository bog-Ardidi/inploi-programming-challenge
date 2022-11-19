import styled from "styled-components";
import theme from "./theme";

interface Props {
  primary: boolean;
}

export const Button = styled.button<Props>`
  background: ${(props: any) =>
    props.primary ? theme.colors.purple : theme.colors.white};
  color: ${(props: any) =>
    props.primary ? theme.colors.white : theme.colors.purple};

  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
  padding: 15px 60px;

  border-radius: 10px;
  border: 3px solid;
  border-color: ${({ theme }) => theme.colors.purple};

  &:hover {
    opacity: 0.9;
    transform: scale(0.98);
  }
`;
