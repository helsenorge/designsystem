// import React, {useState} from 'react';
// import Expander, {ExpanderColors} from './Expander';
// import styled, {css} from 'styled-components';
// import {getColor} from '../../theme/currys';

// interface ExpanderListProps {
//   children?: React.ReactNode;
//   color: ExpanderColors;
//   topBorder?: boolean;
//   bottomBorder?: boolean;
//   accordion?: boolean;
// }

// interface StyledExpanderListProps {
//   topBorder?: boolean;
//   bottomBorder?: boolean;
// }

// const topBorder = (props: StyledExpanderListProps) =>
//   props.topBorder &&
//   css`
//     & > :first-child {
//       border-top: 1px solid ${getColor('neutral', 200)};
//     }
//   `;

// const bottomBorder = (props: StyledExpanderListProps) =>
//   !props.bottomBorder &&
//   css`
//     & > :last-child {
//       border-bottom: 0;
//     }
//   `;

// const StyledExpanderList = styled('ul')<StyledExpanderListProps>`
//   list-style: none;
//   padding: 0;
//   width: inherit;
//   margin: 0;
//   & > :nth-child(n) {
//     border-bottom: 1px solid ${getColor('neutral', 200)};
//   }
//   ${topBorder}
//   ${bottomBorder}
// `;

// const ExpanderList = React.forwardRef((props: ExpanderListProps, ref: any) => {
//   const {children, color, accordion = false, topBorder = true} = props;
//   return (
//     <StyledExpanderList topBorder={topBorder} ref={ref}>
//       {React.Children.map(children, (child: any) => {
//         if (child.type.displayName === 'Expander') {
//           return React.cloneElement(child, {color});
//         }
//       })}
//     </StyledExpanderList>
//   );
// });

// export default ExpanderList;
