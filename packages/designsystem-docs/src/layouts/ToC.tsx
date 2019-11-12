import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { Link, animateScroll as scroll } from 'react-scroll'

import bookIcon from '../images/book-open.svg';
import arrowUpIcon from '../images/arrow-up.svg';
import { animated, useSpring } from 'react-spring';

interface ToCProps {
  children?: React.ReactNode;
  className?: string;
  tableOfContents: any;
}

function ToC(props: ToCProps): JSX.Element {
    const {className, tableOfContents} = props;
  function createToC(items, level) {
      if (items) {
        return items.map(item => {
            if (item.items) {
                return [createToC(item.items, level+1), <LinkBox key={item.url} offset={-80} smooth={true} duration={600} containerId="mdx-content" to={item.url.replace('#', '')} level={level}>{item.title}</LinkBox>];
            }
            return <LinkBox key={item.url} level={level} offset={-80} smooth={true} duration={600} containerId="mdx-content" to={item.url.replace('#', '')}>{item.title}</LinkBox>
        })
      }
  }
  return (
    <div className={className}>
        {tableOfContents ?
        <Box>
            <BoxHeader />
            {createToC(tableOfContents, 1)}
        </Box>
        : null}
    </div>
  )
}

interface LinkBox {
    active?: boolean;
    level: number;
}

const LinkBox = styled(Link)<LinkBox>`
    cursor: pointer;
    text-decoration: none;
    border-left: 2px solid lightgray;
    display: block;
    font-size: 0.9rem;
    padding: 0.5rem ${props => props.level > 1 ? `${props.level/2 + 0.25}rem` : '0.5rem'};
    width: 100%;
    transition: all 250ms;
    &:hover {
        border-left: 2px solid black;
        box-shadow: -6px 0 0 -2px lightgray; 
        font-weight: 600;
    }
    ${props => props.active && css`
        border-left: 2px solid black;
        font-weight: 600;
    `}
`

interface BoxProps {
    children?: React.ReactNode;
    className?: string;
}

function StyledBox(props: BoxProps) {
    const {children, className} = props;
    return (
        <div className={className}>
            {children}
        </div>
    )
}

function StyledBoxHeader({className}: {className?: string}) {
    const [isHovered, setIsHovered] = useState(false);
    const animPropsArrow = useSpring({opacity: isHovered ? 1 : 0});
    const animPropsBook = useSpring({opacity: !isHovered ? 1 : 0});
    function scrollToTop() {
        scroll.scrollToTop({containerId: 'mdx-content', duration: 250});
    }
    return (
        <button onMouseEnter={() => setIsHovered(!isHovered)} onMouseLeave={() => setIsHovered(!isHovered)} onClick={scrollToTop} className={className}>
            {!isHovered ? <BoxIcon style={animPropsBook} src={bookIcon} /> : <BoxIcon style={animPropsArrow} src={arrowUpIcon} />}
            <BoxTitle hovered={isHovered}>Table of contents</BoxTitle>
        </button>
    )
}

const BoxIcon = styled(animated.img)`
    width: 1.25rem;
    height: 1.25rem;
    margin-right: 0.5rem;
`

interface BoxTitleProps {
    hovered?: boolean;
}

const BoxTitle = styled('h2')<BoxTitleProps>`
    color: #9b978c;
    margin: 0;
    font-size: 1rem;
    font-weight: 300;
    text-transform: uppercase;
    transition: all 250ms;
    ${props => props.hovered && css`
        color: black;
    `}
`

const BoxHeader = styled(StyledBoxHeader)`
    background: none;
    cursor: pointer;
    outline: none;
    border: none;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
`


const Box = styled(StyledBox)`
    padding: 0.5rem;
    margin: 2rem 1rem;
    position: fixed;
    flex-direction: column;
    display: flex;
`

const StyledToC = styled(ToC)`
  display: block;
  flex: 0 0 auto;
  width: 260px;
`

export {StyledToC as ToC}