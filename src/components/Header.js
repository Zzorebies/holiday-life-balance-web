import React from 'react';
import Container from '@material-ui/core/Container';
import { ReactComponent as HlbLogo } from '../assets/hlb_logo.svg';
import styled from 'styled-components';

const Header = ({ className }) => {
  return (
    <div className={className}>
      <Container maxWidth="sm">
        <div className="header-center">
          <h1>
            <HlbLogo fill="white" width="50px" aria-hidden="true" />
            Holiday Life Balance
          </h1>
          <h3>최소한의 연차로 최대한의 휴가를 즐기고 싶은 당신을 위해</h3>
        </div>
      </Container>
    </div>
  );
};

const StyledHeader = styled(Header)`
  background: ${(props) => props.theme.color.serenity};
  color: ${(props) => props.theme.color.white};
  margin: 0 0 2rem;
  padding: 2rem 0;

  .header-center {
    text-align: center;
    margin: 0 auto;
  }

  h1 {
    margin: 0 0 1rem;
  }

  h3 {
    margin: 0;
    font-style: italic;
  }
`;

export default StyledHeader;
