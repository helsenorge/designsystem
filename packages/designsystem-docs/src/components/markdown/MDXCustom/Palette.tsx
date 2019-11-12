import React, { useState } from 'react';
import styled from 'styled-components';
import {useSpring, animated} from 'react-spring';

import copy from '../../../images/copy.svg';

const Palette = styled('div')`
    margin: 3rem 0;
    display: grid;
    text-align: center;
    grid-template-columns: 1fr 1fr 1fr;
`

function StyledColorCard({className, hex, name, border = false}: {className?: string, hex: string, name: string, border?: boolean}) {
    const [isHover, setIsHover] = useState(false);
    function handleClick() {
        navigator.clipboard.writeText(`#${hex}`);
    }
    return (
        <div className={className}>
            <ColorName>{name}</ColorName>
            <ColorCircle onClick={handleClick} onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)} border={border} hex={hex}>
                {isHover ? <CopyCircle /> : null}
            </ColorCircle>
            <ColorHex>#{hex}</ColorHex>
        </div>
    );
}

const ColorName = styled('span')`
    padding: 1rem 0;
    font-size: 1.2rem;
    text-transform: uppercase;
`

function CopyCircle() {
    const props = useSpring({
        config: { duration: 250 },
        to: {width: '2rem', height: '2rem'},
        from: { width: '0rem', height: '0rem'},
      })
    return <animated.img style={props} src={copy} />
}

const ColorHex = styled('span')`
    padding: 1rem 0;
    font-size: 1.2rem;
    text-transform: lowercase;
`

const ColorCircle = styled('button')`
    width: 10rem;
    height: 10rem;
    display: flex;
    cursor: pointer;
    justify-content: center;
    align-items: center;
    outline: none;
    border-radius: 50%;
    background-color: ${(props: {hex: string, border: boolean}) => `#${props.hex}`};
    border: ${(props: {hex: string, border: boolean}) => props.border ? '1px solid #999999' : 'none'};
`

const ColorCard = styled(StyledColorCard)`
    display: flex;
    padding: 1.5rem;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
`

export { Palette, ColorCard};