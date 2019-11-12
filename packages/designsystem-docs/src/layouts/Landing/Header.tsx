import React from 'react';
import {animated, useSpring} from 'react-spring';
import styled from 'styled-components';
import Lottie from 'react-lottie';

import useViewportSize from '@hooks/UseViewportSize';
import {getLottieLogoSource} from '@utils/lottie/getLottieSource';
import {StyledDefaultProps} from '@shared/constants';
import springProps from '@shared/spring-animations';
import {Grid, Row, Col} from '@shared/CustomizedGrid';

/**
 * LOGO
 */

function StyledLogo({className}: {className?: string}) {
  const width = useViewportSize();
  const animatedProps = useSpring(springProps.logo);
  const lottieOptions = {
    autoplay: true,
    loop: false,
    animationData: getLottieLogoSource(width),
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  return (
    <animated.div className={className} style={animatedProps}>
      <Lottie width="95%" height="95%" options={lottieOptions} />
    </animated.div>
  );
}

const Logo = styled(StyledLogo)`
  margin: 2rem;
`;

/**
 * SLOGAN
 */

interface SloganProps extends StyledDefaultProps {}

function StyledSlogan(props: SloganProps) {
  const {children, className} = props;
  const animatedProps = useSpring(springProps.slogan);
  return (
    <animated.h2 className={className} style={animatedProps}>
      {children}
    </animated.h2>
  );
}

const Slogan = styled(StyledSlogan)`
  margin: 0 0 1rem 0;
  font-size: 3rem;
`;

/**
 * INTRODUCTION
 */

interface IntroductionProps extends StyledDefaultProps {}

function StyledIntroduction(props: IntroductionProps) {
  const {children, className} = props;
  const animatedProps = useSpring(springProps.introduction);
  return (
    <animated.p className={className} style={animatedProps}>
      {children}
    </animated.p>
  );
}

const Introduction = styled(StyledIntroduction)`
  font-size: 1.5rem;
  font-weight: 300;
`;

/**
 * HEADER
 */

interface HeaderProps extends StyledDefaultProps {
  sloganText?: string;
  introductionText?: string;
}

function Header(props: HeaderProps) {
  const {className, sloganText, introductionText} = props;
  return (
    <Row className={className}>
      <Grid padding={1}>
        <Row start="sm" center="md">
          <Logo />
        </Row>
        <Row start="sm" center="md">
          <Slogan>{sloganText}</Slogan>
        </Row>
        <Row start="sm" center="md">
          <Introduction>{introductionText}</Introduction>
        </Row>
      </Grid>
    </Row>
  );
}

const StyledHeader = styled(Header)`
  margin-top: 6rem;
  margin-bottom: 2rem;
`;

export {StyledHeader as Header};
