import React from 'react';
import Container from '@material-ui/core/Container';
import styled from 'styled-components';

const Footer = ({ className }) => {
  return (
    <div className={className}>
      <Container maxWidth="sm">
        <h6>
          Icons made by{' '}
          <a href="https://www.flaticon.com/authors/freepik" title="Freepik">
            Freepik
          </a>{' '}
          from{' '}
          <a href="https://www.flaticon.com/" title="Flaticon">
            www.flaticon.com
          </a>
        </h6>
      </Container>
    </div>
  );
};

const StyledFooter = styled(Footer)`
  background: ${(props) => props.theme.color.majorBrown};
  color: ${(props) => props.theme.color.white};
  position: fixed;
  bottom: 0;
  width: 100%;
  text-align: center;

  a {
    color: ${(props) => props.theme.color.white};
    text-decoration: none;
    font-weight: bold;
  }
`;

export default StyledFooter;
