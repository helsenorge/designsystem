import React from 'react';
import { SvgPathProps } from './Icon';

const Teenagers: React.FC<SvgPathProps> = ({ isExtraSmall, isHovered }: SvgPathProps): JSX.Element => {
  const normal = (
    <path
      fillRule={'evenodd'}
      d="M19.443 28.364c.194 1.005.634 3.82.634 8.73h-1c0-4.781-.433-7.567-.615-8.527a.649.649 0 01-.254-.507.66.66 0 011.319 0 .64.64 0 01-.084.304zm-4.617-.304a.648.648 0 01-.253.507c-.182.96-.615 3.746-.615 8.528h-1c0-4.91.44-7.726.634-8.731a.64.64 0 01-.084-.304.659.659 0 111.318 0zm3.752-12.23a.503.503 0 111.005-.001.503.503 0 01-1.005 0zm-4.288 0a.503.503 0 11-1.005-.001.503.503 0 011.005 0zm15.435 0a.503.503 0 111.005 0 .503.503 0 01-1.005 0zm5.293 0a.503.503 0 111.005 0 .503.503 0 01-1.005 0zm8.492 25.993h-3.224V34.91h-.9v6.913H28.335v-8.435c0-2.52-.901-4.908-2.542-6.751a8.302 8.302 0 00-.046-.276c.947-.802 1.8-1.144 2.599-1.39 2.798 1.395 6.257 1.395 9.053.002 3.61 1.163 6.11 4.577 6.11 8.389v8.46zm-16.475 0H23.83V34.91h-1v6.913H10.379V34.91h-1v6.913H5.762v-8.435c0-2.234.873-4.446 2.395-6.07l.162-.173.013-.236c.026-.465.282-1.894 1.096-2.352.518-.292 1.26-.186 2.203.317l.305-.574-.305.574a10.179 10.179 0 004.768 1.188c1.79 0 3.445-.415 4.786-1.2.897-.515 1.614-.64 2.13-.37.859.45 1.164 1.944 1.209 2.48l.019.227.152.164c1.509 1.622 2.34 3.762 2.34 6.025v8.435zM13.704 22.465a7.353 7.353 0 002.496.443h.397c.877 0 1.715-.162 2.496-.443v1.88c-1.638.51-3.593.525-5.39-.031v-1.85zm-3.587-6.94v-1.868H22.68v1.869a6.09 6.09 0 01-6.083 6.082H16.2a6.09 6.09 0 01-6.083-6.082zm-4.094-3.168a.641.641 0 010-1.281h4.18l.133-.477a6.097 6.097 0 015.864-4.46h.249c.559.885 1.502 2.862 1.613 6.218H6.022zm16.657-.135v.135h-3.618c-.093-2.966-.792-4.946-1.4-6.118 2.847.506 5.018 2.993 5.018 5.983zM20.86 24.3l-.328-.561c-.137.08-.292.143-.44.214v-1.927c.375-.203.727-.44 1.059-.702.09.574.293 1.229.7 1.853a5.463 5.463 0 00-1.314.56l.324.563zm11.815-1.392h.398c.877 0 1.715-.162 2.496-.443v1.828a9.089 9.089 0 01-5.39 0v-1.828a7.353 7.353 0 002.496.443zm-6.082-9.493h3.22a4.084 4.084 0 003.573-2.108 4.034 4.034 0 003.542 2.108h2.227v2.11a6.088 6.088 0 01-6.082 6.083h-.398a6.088 6.088 0 01-6.082-6.082v-2.111zM27.8 4.873c2.595-1.164 5.286.009 5.312.02l.213.096.223-.061c.037-.01 3.63-.948 5.854 1.045 2.452 2.199 2.04 5.055 2.022 5.173l-.07.436.379.227c.024.014 2.465 1.504 2.465 4.02 0 2.698-2.234 4.02-2.326 4.076l-.484.276.198.52c.048.128 1.1 2.998-.93 4.507a9.986 9.986 0 00-3.138-1.558l-.254-.073-.233.124c-.15.079-.308.139-.462.208v-1.883a7.39 7.39 0 003.886-6.5v-3.112h-3.527a3.033 3.033 0 01-3.031-3.03v-.266h-1v.213c0 1.7-1.383 3.084-3.084 3.084h-3.22v-.001h-1.3v3.112a7.39 7.39 0 003.886 6.5v1.883c-.153-.07-.312-.13-.462-.208l-.232-.124-.254.073c-.851.247-1.82.583-2.883 1.372-.281-.651-.725-1.311-1.425-1.68-.083-.043-.17-.076-.257-.11-1.362-1.026-1.318-2.668-1.271-3.151a7.342 7.342 0 001.585-4.555v-3.304c0-.698-.104-1.372-.287-2.013.893-2.713 2.272-4.512 4.107-5.336zm13.876 21.186c1.762-1.507 1.69-3.871 1.287-5.327.835-.626 2.535-2.23 2.535-4.902 0-2.62-1.935-4.307-2.75-4.901.058-1.04-.057-3.752-2.478-5.923-2.417-2.167-5.92-1.586-6.84-1.386-.77-.295-3.445-1.146-6.147.06-1.862.83-3.308 2.454-4.325 4.813-1.285-2.182-3.651-3.653-6.361-3.653H16.2a7.404 7.404 0 00-6.968 4.936h-3.21c-1.07 0-1.94.87-1.94 1.94 0 1.07.87 1.94 1.94 1.94h2.795v1.87a7.39 7.39 0 003.887 6.5v1.907c-.154-.07-.313-.128-.462-.207-1.36-.725-2.521-.827-3.452-.301-1.321.744-1.654 2.516-1.733 3.169a10.14 10.14 0 00-2.595 6.794v9.735H44.81v-9.761c0-2.812-1.186-5.434-3.134-7.303z"
    />
  );

  const normalHover = (
    <path
      fillRule={'evenodd'}
      d="M16.357 20.456a1.85 1.85 0 01-1.849-1.85h3.698a1.85 1.85 0 01-1.849 1.85zm2.221-4.626a.502.502 0 111.004-.003.502.502 0 01-1.004.003zm-4.289 0a.502.502 0 11-1.005-.001.502.502 0 011.005 0zm14.436 0a.503.503 0 111.005-.001.503.503 0 01-1.005 0zm5.293 0a.503.503 0 111.005-.001.503.503 0 01-1.005 0zM19.442 28.365c.194 1.005.635 3.82.635 8.73h-1c0-4.782-.434-7.568-.616-8.528a.65.65 0 01-.253-.507.659.659 0 111.318 0 .648.648 0 01-.084.305zm-4.616-.305a.649.649 0 01-.254.507c-.182.96-.615 3.746-.615 8.529h-1c0-4.911.441-7.727.634-8.731a.648.648 0 01-.084-.305.66.66 0 011.32 0zM43.51 41.824h-3.224V34.91h-.9v6.914H28.333v-8.436c0-2.52-.9-4.91-2.542-6.75a6.088 6.088 0 00-.046-.277c.948-.802 1.801-1.144 2.6-1.39 2.797 1.395 6.256 1.396 9.053.003 3.611 1.162 6.111 4.576 6.111 8.388v8.462zm-16.476-.001H23.83V34.91h-1v6.913H10.38V34.91h-1v6.913H5.76v-8.435c0-2.234.874-4.446 2.396-6.07l.161-.173.014-.235c.03-.5.285-1.898 1.098-2.354.518-.29 1.26-.184 2.2.318l.306-.574-.306.574a10.179 10.179 0 004.768 1.188c1.791 0 3.446-.415 4.787-1.2.897-.515 1.613-.64 2.13-.37.858.45 1.163 1.944 1.208 2.482l.02.225.152.165c1.51 1.62 2.34 3.76 2.34 6.024v8.435zm-13.33-19.358a7.33 7.33 0 002.495.443h.398a7.33 7.33 0 002.496-.443v1.882c-1.638.508-3.593.524-5.39-.033v-1.85zm-3.587-6.94v-1.868H22.68v1.869a6.088 6.088 0 01-6.082 6.082H16.2a6.088 6.088 0 01-6.082-6.082zm-4.094-3.168a.64.64 0 110-1.281h4.181l.132-.476A6.097 6.097 0 0116.2 6.14h.25c.56.884 1.501 2.86 1.613 6.217H6.023zm16.656-.134v.134h-3.617c-.093-2.966-.792-4.946-1.4-6.118 2.847.506 5.017 2.993 5.017 5.984zM20.86 24.3l-.328-.561c-.137.08-.293.143-.439.214v-1.927c.374-.202.726-.44 1.058-.701.091.573.292 1.229.7 1.852a5.463 5.463 0 00-1.315.56l.324.563zm11.815-1.392h.397a7.33 7.33 0 002.496-.443v1.828a9.086 9.086 0 01-5.389 0v-1.828a7.33 7.33 0 002.496.443zm-6.083-9.493h3.221a4.086 4.086 0 003.573-2.107 4.034 4.034 0 003.541 2.107h2.228v2.11a6.09 6.09 0 01-6.083 6.083h-.397a6.09 6.09 0 01-6.083-6.082v-2.111zM27.8 4.873c2.594-1.164 5.285.009 5.312.02l.212.096.223-.06c.037-.01 3.631-.95 5.854 1.045 2.452 2.198 2.042 5.055 2.023 5.173l-.07.435.378.227c.025.015 2.466 1.504 2.466 4.02 0 2.698-2.234 4.022-2.327 4.076l-.483.277.198.52c.048.128 1.1 2.997-.929 4.506a10.002 10.002 0 00-3.14-1.558l-.254-.073-.233.124c-.149.079-.308.139-.462.209v-1.884a7.39 7.39 0 003.887-6.5v-3.112H36.927a3.033 3.033 0 01-3.03-3.03v-.266h-1v.213a3.088 3.088 0 01-3.084 3.084h-3.22v-.001h-1.3v3.112a7.389 7.389 0 003.886 6.5v1.884c-.154-.07-.313-.13-.462-.21l-.233-.123-.254.073c-.85.247-1.819.583-2.882 1.373-.282-.651-.726-1.312-1.425-1.68-.084-.044-.17-.076-.257-.111-1.363-1.026-1.319-2.668-1.27-3.151a7.345 7.345 0 001.583-4.555v-3.303c0-.7-.104-1.372-.286-2.014.893-2.713 2.272-4.512 4.107-5.336zm13.876 21.186c1.762-1.506 1.691-3.871 1.286-5.327.835-.626 2.536-2.23 2.536-4.902 0-2.62-1.935-4.307-2.749-4.901.057-1.038-.059-3.752-2.479-5.923-2.417-2.167-5.92-1.586-6.839-1.385-.77-.296-3.447-1.146-6.149.06-1.862.83-3.308 2.453-4.325 4.813-1.284-2.183-3.65-3.654-6.36-3.654H16.2a7.404 7.404 0 00-6.967 4.936H6.023c-1.07 0-1.94.87-1.94 1.94 0 1.07.87 1.94 1.94 1.94h2.794v1.87a7.39 7.39 0 003.886 6.5v1.907c-.154-.07-.313-.127-.462-.206-1.358-.726-2.52-.828-3.452-.302-1.32.744-1.653 2.516-1.732 3.169a10.137 10.137 0 00-2.596 6.794v9.735H44.81v-9.761c0-2.812-1.186-5.433-3.134-7.303z"
    />
  );

  return isHovered ? normalHover : normal;
};

export default Teenagers;