import styled from "styled-components";
import theme from "./theme";

interface Props {
  primary: boolean;
  scale?: number;
}

export const Button = styled.button<Props>`
  background: ${({ primary = false }) =>
    primary ? theme.colors.purple : theme.colors.white};
  color: ${({ primary = false }) =>
    primary ? theme.colors.white : theme.colors.purple};

  width: 10rem;
  justify-content: "center",
  align-items: "center";

  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
  padding: 1rem;

  border-radius: 10px;
  border: ${({ primary = false }) => (primary ? "1px solid" : "3px solid")};

  border-color: ${({ primary = false }) =>
    primary ? theme.colors.brown : theme.colors.purple};

  
  transform: scale(${({ scale }) => scale && scale});

  &:hover {
    opacity: 0.9;
    transform: scale(0.98);
  }
`;
