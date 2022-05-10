import React, { useState } from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';
import copy from '../../../../images/copy.svg';

import { theme as hndsTheme } from '@helsenorge/designsystem-react';

function StyledColorCard({
  className,
  hex,
  name,
  border = false,
}: {
  className?: string;
  hex: string;
  name: string;
  border?: boolean;
}): JSX.Element {
  const [isHover, setIsHover] = useState(false);

  function handleClick() {
    navigator.clipboard.writeText(`$${name}`);
  }

  return (
    <div className={className}>
      <ColorName>{`${name}`}</ColorName>
      <ColorCircle
        onClick={handleClick}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        border={border}
        hex={hex}
      >
        <span>{isHover ? <CopyCircle /> : null}</span>
      </ColorCircle>
      <ColorHex>{hex}</ColorHex>
    </div>
  );
}

function CopyCircle() {
  const props = useSpring({
    config: { duration: 250 },
    to: { width: '2rem', height: '2rem' },
    from: { width: '0rem', height: '0rem' },
  });
  return <animated.img style={props} src={copy} />;
}

const ColorName = styled('span')`
  padding: 1rem 0;
  font-size: 1.2rem;
  font-weight: 600;
`;

const ColorHex = styled('span')`
  padding: 1rem 0;
  font-size: 1.2rem;
  text-transform: uppercase;
`;

const ColorCircle = styled('button')`
  margin: 1rem 0;
  width: 80%;
  padding-top: 80%;
  position: relative;
  vertical-align: middle;
  cursor: pointer;
  outline: none;
  border: 0;
  background: transparent;
  span {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    padding-top: 35%;
    background-color: ${(props: { hex: string; border: boolean }) => `${props.hex}`};
    border: ${(props: { hex: string; border: boolean }) => (props.border ? '1px solid #999999' : 'none')};
    border-radius: 50%;
    vertical-align: middle;
  }
`;

const ColorCard = styled(StyledColorCard)`
  display: block;
  text-align: center;
`;

const ColorWall = () => {
  return (
    <StyledColorWall>
      {Object.keys(hndsTheme.palette).map((color: string, index) => (
        <ColorCard key={index} name={color} hex={hndsTheme.palette[color]} />
      ))}
    </StyledColorWall>
  );
};

const StyledColorWall = styled('div')`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 3rem;
  grid-column-gap: 1rem;
  margin: 3rem 0;
  text-align: center;
  @media ${hndsTheme.screen.sm} {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

export default ColorWall;
