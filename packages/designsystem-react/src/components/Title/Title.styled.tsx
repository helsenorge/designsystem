import styled from 'styled-components';
import {TitleAppearances} from './Title';
import {typography} from '../../theme/typography';

interface StyledTitleProps {
  appearance: TitleAppearances;
  margin: number;
}

const StyledTitle = styled('h1')<StyledTitleProps>`
  margin: ${props => `${props.margin}rem`} 0;
  ${props => typography[props.appearance]};
`;

export default StyledTitle;