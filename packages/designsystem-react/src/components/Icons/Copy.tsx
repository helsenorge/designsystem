import React from 'react';
import {SvgPathProps} from './Icon';

const Copy: React.FC<SvgPathProps> = ({isExtraSmall, isHovered}: SvgPathProps): JSX.Element => {
  const normal = (
    <g>
      <path d="M37.563 37.601h-4.532V36.3h3.232V9.237H15.656v2.843h-1.3V7.936h23.207z" />
      <path d="M12.838 37.936H32.38V18.487l-5.698-5.757H12.838v25.206zm20.842 1.301H11.538V11.43h15.686l6.456 6.523v21.285z" />
      <path d="M33.031 18.87h-6.728v-6.79h1.3v5.489h5.428zM18.653 26.792h7.782V25.8h-7.782z" />
      <path d="M22.049 30.188h.992v-7.783h-.992z" />
    </g>
  );

  const normalHover = (
    <g>
      <path d="M37.408 37.601h-4.532V36.3h3.232V9.237H15.501v2.843h-1.3V7.936h23.207z" />
      <path d="M12.683 37.936h19.542V18.487l-5.698-5.757H12.683v25.206zm20.842 1.301H11.383V11.43H27.07l6.456 6.523v21.285z" />
      <path d="M41.489 34.13h-5.406v-1.302h4.106V5.764H19.582v2.845h-1.3V4.464h23.207z" />
      <path d="M32.875 18.87h-6.726v-6.79h1.299v5.489h5.427zM18.499 26.792h7.782V25.8h-7.782z" />
      <path d="M21.893 30.188h.993v-7.783h-.993z" />
    </g>
  );

  const simplified = (
    <path d="M13.65 8.195v3.495h-2.818v28.115h22.455v-1.634h3.88V8.195H13.65zm1.61 1.61h20.297V36.56h-2.27V18.301L26.74 11.69H15.26V9.805zM12.443 13.3h13.154v6.138h6.077v18.757H12.443V13.3zm14.765 1.152l3.34 3.376h-3.34v-3.376zm-5.84 8.369v3.264h-3.266v1.253h3.266v3.264h1.253v-3.264h3.266v-1.253H22.62V22.82h-1.253z" />
  );

  const simplifiedHover = (
    <path d="M17.73 4.724v3.47h-4.08v3.495h-2.818v28.116h22.454v-1.634h3.882v-3.473h4.08V4.724H17.73zm1.61 1.61h20.297v26.754h-2.47V8.195H19.342v-1.86zm-4.08 3.471h20.296V36.56h-2.27V18.301l-6.548-6.612H15.26V9.805zM12.445 13.3h13.153v6.138h6.077v18.757h-19.23V13.3zm14.764 1.152l3.34 3.374h-3.34v-3.374zm-5.841 8.368v3.265h-3.264v1.253h3.264v3.264h1.253v-3.264h3.267v-1.253H22.62V22.82h-1.253z" />
  );

  return isExtraSmall ? (isHovered ? simplifiedHover : simplified) : isHovered ? normalHover : normal;
};

export default Copy;
