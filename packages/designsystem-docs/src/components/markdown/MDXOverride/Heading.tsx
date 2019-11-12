import React, { useState } from 'react';
import styled from "styled-components";
import {useSpring, animated} from 'react-spring'

import anchorIcon from '../../../images/link.svg';
import { Link } from 'react-scroll';

interface AnchorLinkProps {
    children?: string;
    className?: string;
}

const AnchorIcon = styled(animated.img)`
    width: 1.25rem;
    height: 1.25rem;
    margin-left: 0.75rem;
`

function AnchorLink(props: AnchorLinkProps) {
    const [isHovered, setIsHovered] = useState(false);
    const idUrlified = props.children.replace(/\s+/g, '-').toLowerCase();
    const id = idUrlified.replace(/#|\?|_/g,'');
    const anim = useSpring({opacity: isHovered ? 1 : 0, duration: 250})
    return (
        <Link id={id} containerId="mdx-content" offset={-80} smooth={true} duration={600} onMouseEnter={() => setIsHovered(!isHovered)} onMouseLeave={() => setIsHovered(!isHovered)} className={props.className} to={`${id}`}>
            <>
                {props.children}
                {isHovered ? <AnchorIcon style={anim} src={anchorIcon} /> : null} 
            </>
        </Link>
    )
}

const H1 = styled('h1')`
    font-size: 4rem;
    margin-bottom: 0.5rem;
    font-weight: 600;
`

const H2 = styled(AnchorLink)`
    display: block;
    text-decoration: none;
    width: fit-content;
    cursor: pointer;
    margin: 1.6rem 0;
    font-size: 2.2rem;
`

const H3 = styled(AnchorLink)`
    display: block;
    text-decoration: none;
    width: fit-content;
    cursor: pointer;
    font-size: 1.5rem;
    font-weight: 500;
    transition: all 150ms;
`
const H4 = styled('h4')`
    font-size: 1.2rem;
    text-transform: uppercase;
    padding: .5rem 1rem;
    background-color: #000;
    color: #fff;
    margin: 3rem 0 2rem;
`

export { H1, H2, H3, H4, AnchorLink };