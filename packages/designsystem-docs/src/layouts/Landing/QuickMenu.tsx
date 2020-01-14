import React, {useState} from 'react';
import styled from 'styled-components';
import Lottie from 'react-lottie';
import {Link} from 'gatsby';
import {animated, useSpring} from 'react-spring';

import {Grid, Row, Col} from '@shared/CustomizedGrid';
import {StyledDefaultProps} from '@shared/constants';
import springProps from '@shared/spring-animations';
import {palette} from '@styles/styled-constants';
import {getLottieSource} from '@utils/lottie/getLottieSource';

/**
 * CARD ICON
 */

type ImagePath = string;

interface CardIconProps extends StyledDefaultProps {
  toggleHover?: boolean;
  lottieData: string;
}

function StyledCardIcon(props: CardIconProps) {
  const {className, toggleHover = false, lottieData} = props;
  const lottieOptions = {
    loop: true,
    autoplay: false,
    animationData: getLottieSource(lottieData),
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  return (
    <div className={className}>
      <Lottie width="128px" height="128px" isStopped={!toggleHover} options={lottieOptions} />
    </div>
  );
}

const CardIcon = styled(StyledCardIcon)`
  margin: 2rem;
`;

CardIcon.displayName = 'CardIcon';

/**
 * CARD TITLE
 */

const CardTitle = styled('h1')`
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
  font-weight: 600;
`;

/**
 * CARD DESCRIPTION
 */

const CardDescription = styled('p')`
  padding: 1rem;
  padding-top: 0;
  margin: 0;
  text-align: left;
`;

/**
 * CARD
 */

interface CardProps extends StyledDefaultProps {
  springProp?: any;
  to: string;
}

function StyledCard(props: CardProps) {
  const {children, className, springProp, to} = props;
  const animatedProps = useSpring(springProp);
  const [isHovered, setIsHovered] = useState(false);
  return (
    <animated.div
      className={className}
      style={isHovered ? {...animatedProps, transform: 'translateY(-0.5rem)'} : animatedProps}
      onMouseEnter={() => setIsHovered(!isHovered)}
      onMouseLeave={() => setIsHovered(!isHovered)}>
      <CardLink to={to}>
        {React.Children.map(children, (child: any) => {
          if (child.type.displayName === 'CardIcon') {
            return React.cloneElement(child, {toggleHover: isHovered});
          }
          return child;
        })}
      </CardLink>
    </animated.div>
  );
}

const CardLink = styled(Link)`
  text-decoration: none;
  display: block;
  cursor: pointer;
  padding: 1rem;
`;

const Card = styled(StyledCard)`
  text-decoration: none;
  border-radius: 8px;
  position: relative;
  margin: 0 0.5rem;
  border: 3px solid ${palette('bandAid200')};
  background-color: white;
  transition: all 250ms;
  &:hover {
    border: 3px solid ${palette('urine200')};
  }
`;

/**
 * QUICK MENU
 */

interface QuickMenuProps extends StyledDefaultProps {}

function QuickMenu(props: QuickMenuProps) {
  const {className} = props;
  return (
    <Row className={className}>
      <Grid padding={4}>
        <Row style={{padding: '2rem 0 1rem 0'}} around="xs" center="xs">
          <Col xs={12} sm={6} md={4}>
            <Card to="/introduction" springProp={springProps.card(100)}>
              <CardIcon lottieData="documentation" />
              <CardTitle>Documentation</CardTitle>
              <CardDescription>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut orci quam.
              </CardDescription>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={4}>
            <Card to="/principles/design" springProp={springProps.card(200)}>
              <CardIcon lottieData="design-principles" />
              <CardTitle>Design principles</CardTitle>
              <CardDescription>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut orci quam.
              </CardDescription>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={4}>
            <Card to="/pattern-library/components/confirmation-button" springProp={springProps.card(300)}>
              <CardIcon lottieData="components" />
              <CardTitle>Components</CardTitle>
              <CardDescription>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut orci quam.
              </CardDescription>
            </Card>
          </Col>
        </Row>
        <Row style={{padding: '1rem 0 2rem 0'}} around="xs" center="xs">
          <Col xs={12} sm={6} md={4}>
            <Card to="/perceptual-patterns/palette" springProp={springProps.card(400)}>
              <CardIcon lottieData="palette" />
              <CardTitle>Palette</CardTitle>
              <CardDescription>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut orci quam.
              </CardDescription>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={4}>
            <Card to="/roadmap" springProp={springProps.card(500)}>
              <CardIcon lottieData="roadmap" />
              <CardTitle>Roadmap</CardTitle>
              <CardDescription>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut orci quam.
              </CardDescription>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={4}>
            <Card to="/guidelines/editorial" springProp={springProps.card(600)}>
              <CardIcon lottieData="editorial" />
              <CardTitle>Editorial guidelines</CardTitle>
              <CardDescription>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut orci quam.
              </CardDescription>
            </Card>
          </Col>
        </Row>
      </Grid>
    </Row>
  );
}

const StyledQuickMenu = styled(QuickMenu)`
  background-color: ${palette('bandAid100')};
`;

export {StyledQuickMenu as QuickMenu};
