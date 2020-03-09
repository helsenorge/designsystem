// import React, {useState} from 'react';
// import {
//   StyledExpander,
//   StyledExpanderContent,
//   StyledExpanderHeader,
//   StyledExpanderTitle,
//   StyledExpanderHeaderContent,
// } from './Expander.styled';
// import Icon from '../Icons';
// import {PaletteNames} from '../../theme/palette';

// export type ExpanderVariants = 'box' | 'hollow';

// export interface ExpanderCompounds
//   extends React.ForwardRefExoticComponent<ExpanderProps & React.RefAttributes<HTMLDivElement>> {
//   Title: any;
// }

// interface ExpanderHeaderProps {
//   children?: React.ReactNode;
//   isExpanded?: boolean;
//   chevron?: boolean;
// }

// function ExpanderHeader(props: ExpanderHeaderProps) {
//   const {children, isExpanded = falimport React from 'react';
// import {StyledLinkList, StyledLinkListLink, StyledLinkListLinkContent} from './LinkList.styled';
// import {PaletteNames} from '../../theme/palette';
// import {HTMLAnchorProps} from '../../constants';
// import Icon from '../Icons';

// export type LinkListColors = PaletteNames;

// export interface CompoundComponent
//   extends React.ForwardRefExoticComponent<LinkListProps & React.RefAttributes<HTMLUListElement>> {
//   Link: any;
// }

// interface LinkListProps {
//   children: React.ReactNode;
//   color: LinkListColors;
//   chevron?: boolean;
//   bottomBorder?: boolean;
//   topBorder?: boolean;
//   large?: boolean;
// }

// interface LinkProps extends React.HTMLAttributes<HTMLAnchorElement> {
//   children: React.ReactNode;
//   icon?: React.ReactElement;
//   color: LinkListColors;
//   large: boolean;
//   chevron: boolean;
// }

// const Link = React.forwardRef((props: LinkProps, ref: any) => {
//   const {children, color, icon, large, chevron, ...restProps} = props;
//   return (
//     <li ref={ref}>
//       <StyledLinkListLink hasIcon={!!(chevron || icon)} large={large} color={color} {...restProps}>
//         <StyledLinkListLinkContent>
//           {icon && React.cloneElement(icon, {size: 48})}
//           {children}
//         </StyledLinkListLinkContent>
//         {chevron ? <Icon type="chevronRight" /> : null}
//       </StyledLinkListLink>
//     </li>
//   );
// });

// const LinkList = React.forwardRef((props: LinkListProps, ref: any) => {
//   const {children, chevron = false, large, color, topBorder = true, bottomBorder = true} = props;
//   return (
//     <StyledLinkList topBorder={topBorder} bottomBorder={bottomBorder} ref={ref}>
//       {React.Children.map(children, (child: any) => {
//         if (child.type.displayName === 'LinkList.Link') {
//           return React.cloneElement(child, {color, large, chevron});
//         }
//       })}
//     </StyledLinkList>
//   );
// }) as CompoundComponent;

// LinkList.Link = Link;
// Link.displayName = 'LinkList.Link';

// export default LinkList;
// se} = props;
//   return (
//     <StyledExpanderHeader>
//       <StyledExpanderHeaderContent>{children}</StyledExpanderHeaderContent>
//       <Icon type={isExpanded ? 'chevronUp' : 'chevronDown'} />
//     </StyledExpanderHeader>
//   );
// }

// export type ExpanderColors = PaletteNames;

// interface ExpanderProps {
//   children?: React.ReactNode;
//   className?: string;
//   icon?: React.ReactElement;
//   title: React.ReactElement;
//   color?: ExpanderColors;
//   bottomBorder?: boolean;
//   topBorder?: boolean;
// }

// const Expander = React.forwardRef((props: ExpanderProps, ref: any) => {
//   const {children, className, icon, title, topBorder = true, bottomBorder = true} = props;
//   const [isExpanded, setIsExpanded] = useState(false);
//   return (
//     <StyledExpander
//       topBorder={topBorder}
//       bottomBorder={bottomBorder}
//       className={className}
//       ref={ref}
//       onClick={() => setIsExpanded(!isExpanded)}>
//       <ExpanderHeader>
//         {icon && React.cloneElement(icon, {size: 48})}
//         {title}
//       </ExpanderHeader>
//     </StyledExpander>
//   );
// }) as ExpanderCompounds;

// export type TitleTags = 'h1' | 'h2' | 'h3' | 'h4' | 'h5';
// export type TitleAppearances = 'titleFeature' | 'title1' | 'title2' | 'title3' | 'title4' | 'title5';

// interface TitleProps {
//   children: React.ReactNode;
//   className?: string;
//   is?: TitleTags;
//   appearance?: TitleAppearances;
// }

// const Title = React.forwardRef((props: TitleProps, ref: any) => {
//   const {children, className, htmlMarkup = 'h1', appearance = 'title1', margin = 0} = props;
//   return (
//     <StyledTitle className={className} as={htmlMarkup} margin={margin} appearance={appearance} ref={ref}>
//       {children}
//     </StyledTitle>
//   );
// });

// Expander.Title = StyledExpanderTitle;
// Expander.displayName = 'Expander';

// export default Expander;
