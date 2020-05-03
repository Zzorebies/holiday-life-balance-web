import React from 'react';
import styled from 'styled-components';

const Header = ({ className }) => {
  return (
    <div className={className}>
      <div className="header-center">
        <h1>Holiday Life Balance</h1>
        <h3>최소한의 연차로 최대한의 휴가를 즐기고 싶은 당신을 위해</h3>
      </div>
    </div>
  );
};

const StyledHeader = styled(Header)`
  background: ${(props) => props.theme.color.serenity};
  color: ${(props) => props.theme.color.white};
  margin: 0 0 3rem;
  padding: 2rem 0;

  .header-center {
    width: 80%;
    margin: 0 auto;

    ${(props) => props.theme.media.desktop} {
      width: 60%;
    }
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
