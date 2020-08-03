import React from 'react';
import Container from '@material-ui/core/Container';
import { ReactComponent as HlbLogo } from '../assets/hlb_logo.svg';
import styled from 'styled-components';

const Header = ({ className }) => {
  return (
    <div className={className}>
      <Container maxWidth="sm">
        <div className="heading">
          <HlbLogo fill="white" width="3.125rem" aria-hidden="true" />
          <h1>Holiday Life Balance</h1>
        </div>
        <h4>홀.라.밸 최소한의 연차로 최대한의 휴가를 즐기자!</h4>
      </Container>
    </div>
  );
};

const StyledHeader = styled(Header)`
  background: ${(props) => props.theme.color.serenity};
  color: ${(props) => props.theme.color.white};
  margin: 0 0 2rem;
  padding: 2rem 0;
  text-align: center;

  .heading {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  h1 {
    margin-left: 1rem;
    max-width: 11.25rem;

    ${(props) => props.theme.media.tablet} {
      max-width: fit-content;
    }
  }

  h4 {
    margin: 0;
  }
`;

export default StyledHeader;
