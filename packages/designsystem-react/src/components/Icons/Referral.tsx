import React from 'react';
import {SvgPathProps} from './Icon';

const Referral: React.FC<SvgPathProps> = ({isExtraSmall, isHovered}: SvgPathProps): JSX.Element => {
  const normal = (
    <path d="M36.262 15.876h-1.838l4.68 4.68H21.864v1.3h17.242l-4.681 4.683h1.838l5.33-5.331-5.33-5.332zm-20.398 14.95h14.17v-1.3h-14.17v1.3zm18.684 8.4H10.626V8.525h23.922v3.648h1.3V7.225H9.325v33.3h26.523V30.242h-1.3v8.985zM15.864 26.342h14.17v-1.3h-14.17v1.3z" />
  );

  const normalHover = (
    <path d="M35.61 7.225v4.948h-1.3V8.525H10.388v30.7H34.31v-8.984h1.3v10.285H9.087V7.225H35.61zm-5.813 22.301v1.3H15.626v-1.3h14.171zm8.478-13.65l5.331 5.33-5.331 5.332h-1.839l4.681-4.681H23.875v-1.3h17.242l-4.681-4.681h1.839zm-8.478 9.166v1.3H15.626v-1.3h14.171z" />
  );

  const simplified = (
    <path d="M35.797 7.21v4.93h-1.263V8.474h-23.96V39.21h23.96V30.21h1.263v10.265H9.31V7.21h26.486zm-5.794 22.301v1.263H15.83v-1.263h14.172zm6.2-13.669l5.331 5.332-5.332 5.332h-1.786l4.7-4.7H21.83v-1.263h17.287l-4.7-4.7h1.786zm-6.2 9.184v1.264H15.83v-1.264h14.172z" />
  );

  const simplifiedHover = (
    <path d="M35.559 7.21v4.93h-1.263V8.474h-23.96V39.21h23.96V30.21h1.263v10.265H9.073V7.21H35.56zm-5.795 22.301v1.265H15.592V29.51h14.172zm8.452-13.669l5.331 5.332-5.331 5.332h-1.788l4.7-4.7H23.843v-1.263H41.13l-4.7-4.7h1.787zm-8.452 9.185v1.263H15.592v-1.263h14.172z" />
  );

  return isExtraSmall ? (isHovered ? simplifiedHover : simplified) : isHovered ? normalHover : normal;
};

export default Referral;
