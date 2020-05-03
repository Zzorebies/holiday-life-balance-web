import styled from 'styled-components';

const Button = styled.button`
  background: ${(props) => props.theme.color.arctic};
  max-height: 4rem;
  font-size: 1.8rem;
  font-weight: 500;
  padding: 0.8rem;
  border: none;
  border-radius: 0.5rem;
  color: ${(props) => props.theme.color.white};
  cursor: pointer;
`;

export default Button;
