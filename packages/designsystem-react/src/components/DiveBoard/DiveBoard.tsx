// import React, {useEffect} from 'react';
// import styled, {css} from 'styled-components';
// import {theme, device} from '../../theme';
// import {Icon} from '../Icons';

// /**
//  * DIVEBOARD ICON
//  */

// const IconContainer = ({children}: any) => {
//   return children ? <StyledIconContainer>{React.cloneElement(children, {size: 64})}</StyledIconContainer> : null;
// };

// const StyledIconContainer = styled('div')`
//   margin: 0.5rem 1.5rem 0 0;
// `;

// /**
//  * DIVEBOARD
//  */

// const StyledDiveBoard = styled('a')<DiveBoardProps>`
//   padding: 2rem;
//   cursor: pointer;
//   display: flex;
//   margin: 2rem 0;
//   background-color: ${props => props.theme.palette.ash};
//   border: 1px solid ${props => props.theme.palette.scalpel};
//   transition: all ${props => props.theme.animation.duration};
//   &:hover,
//   :focus {
//     background-color: ${props => props.theme.palette.scalpel};
//   }
//   ${props =>
//     props.icon &&
//     css`
//       padding: 0 1rem 2rem 1rem;
//       ${StyledDiveBoardTitle} {
//         margin-top: 2rem;
//       }
//       ${StyledArrowContainer} {
//         margin-top: 2rem;
//       }
//     `}
//   ${props =>
//     props.variant === 'surgical' &&
//     css`
//       background-color: ${props => props.theme.palette.surgical100};
//       border: 1px solid ${props => props.theme.palette.surgical200};
//       &:hover,
//       :focus {
//         background-color: ${props => props.theme.palette.surgical200};
//       }
//     `}
//   ${props =>
//     props.variant === 'strangulation' &&
//     css`
//       background-color: ${props => props.theme.palette.strangulation100};
//       border: 1px solid ${props => props.theme.palette.strangulation200};
//       &:hover,
//       :focus {
//         background-color: ${props => props.theme.palette.strangulation200};
//       }
//     `}
//   @media ${device.tablet} {
//     padding: 2rem 1rem 2rem 1.5rem;
//   }
// `;

// type DiveBoardVariant = 'strangulation' | 'surgical';

// interface DiveBoardProps {
//   children: React.ReactNode;
//   variant?: DiveBoardVariant;
//   icon?: React.ReactNode;
// }

// const DiveBoard = React.forwardRef<HTMLAnchorElement, DiveBoardProps>((props, ref) => {
//   const {children, variant, icon, ...rest} = props;
//   console.log('props', props);
//   useEffect(() => console.log('icon', icon), [icon]);
//   return (
//     <StyledDiveBoard icon={icon} variant={variant} theme={theme} ref={ref} {...rest}>
//       <IconContainer>{icon}</IconContainer>
//       <span>{children}</span>
//       <StyledArrowContainer>
//         <Icon>arrowRight</Icon>
//       </StyledArrowContainer>
//     </StyledDiveBoard>
//   );
// });

// const StyledArrowContainer = styled('div')`
//   display: flex;
//   justify-content: flex-end;
//   min-width: 4rem;
// `;

// const DiveBoardTitle = ({children}: any) => (
//   <StyledDiveBoardTitle>
//     {children}
//     {/* <span>
//       <Icon>arrowRight</Icon>
//     </span> */}
//   </StyledDiveBoardTitle>
// );

// const StyledDiveBoardTitle = styled('h3')`
//   margin: 0 0 1rem 0;
//   display: flex;
//   justify-content: space-between;
// `;

// const DiveBoardPreamable = styled('p')`
//   margin: 0;
// `;

// // TODO: Need to find a way to make this work. Right now the forwardRef thingie doesn't return the correct type
// // DiveBoard.Title = DiveBoardTitle;

// export {DiveBoard, DiveBoardTitle, DiveBoardPreamable};
