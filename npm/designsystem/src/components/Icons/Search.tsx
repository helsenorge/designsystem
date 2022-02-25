import React from 'react';
import { getIcon, SvgPathProps } from './Icon';

const Search: React.FC<SvgPathProps> = ({ size, isHovered }: SvgPathProps): JSX.Element => {
  const normal = (
    <path d="M21.277 7.738c7.27 0 13.165 5.895 13.165 13.166 0 2.222-.55 4.316-1.523 6.153l6.268 6.268a3.929 3.929 0 01-5.41 5.695l-.146-.139-6.289-6.289a13.11 13.11 0 01-6.065 1.478c-7.272 0-13.166-5.895-13.166-13.166 0-7.271 5.894-13.166 13.166-13.166zM32 28.542a13.24 13.24 0 01-3.164 3.142l5.996 5.995a2.229 2.229 0 003.26-3.036l-.108-.116zM21.277 9.438c-6.333 0-11.466 5.133-11.466 11.466 0 6.332 5.133 11.466 11.466 11.466 2.258 0 4.365-.654 6.14-1.781l.163-.163.034.035a11.529 11.529 0 003.165-3.14l-.047-.048.228-.226a11.412 11.412 0 001.782-6.143c0-6.333-5.133-11.466-11.465-11.466z" />
  );

  const normalHover = (
    <path d="M21.527 6.932c7.932 0 14.363 6.43 14.363 14.362 0 2.556-.668 4.956-1.838 7.035l5.386 5.386a3.929 3.929 0 01-5.41 5.696l-.146-.14-5.406-5.404a14.298 14.298 0 01-6.949 1.79c-7.932 0-14.362-6.43-14.362-14.363 0-7.932 6.43-14.362 14.362-14.362zM33.11 29.79a14.445 14.445 0 01-3.162 3.141l5.137 5.138a2.229 2.229 0 003.26-3.035l-.108-.117zM21.527 8.632c-6.993 0-12.662 5.669-12.662 12.662 0 6.993 5.669 12.663 12.662 12.663 6.993 0 12.663-5.67 12.663-12.663S28.52 8.632 21.527 8.632z" />
  );

  const xSmall = (
    <path d="M34.476 34.206c-.486.487-1.333.487-1.82 0l-4.402-4.403a10.426 10.426 0 001.78-1.857l4.442 4.44c.243.243.376.567.376.91 0 .345-.133.668-.376.91M21.742 30.07c-4.592 0-8.327-3.737-8.327-8.327 0-4.592 3.735-8.327 8.327-8.327 4.591 0 8.327 3.735 8.327 8.327 0 4.59-3.736 8.327-8.327 8.327m14.181.871l-4.8-4.8c.63-1.338.991-2.825.991-4.398 0-5.72-4.653-10.374-10.372-10.374-5.72 0-10.374 4.653-10.374 10.374 0 5.72 4.653 10.372 10.374 10.372 1.717 0 3.333-.426 4.76-1.168l4.708 4.708a3.312 3.312 0 002.357.976c.89 0 1.727-.348 2.356-.976a3.339 3.339 0 000-4.714" />
  );

  const xSmallHover = (
    <path d="M34.7 34.43c-.486.485-1.338.487-1.823 0l-3.388-3.39c.663-.55 1.255-1.18 1.785-1.859l3.426 3.424c.244.242.377.567.377.911 0 .346-.133.669-.377.914m-12.76-2.994c-5.238 0-9.5-4.26-9.5-9.499 0-5.238 4.262-9.499 9.5-9.499 5.237 0 9.498 4.261 9.498 9.5 0 5.237-4.26 9.498-9.499 9.498m14.21-.28l-3.734-3.736a11.744 11.744 0 001.356-5.483c0-6.524-5.31-11.832-11.832-11.832-6.524 0-11.834 5.308-11.834 11.832 0 6.525 5.31 11.834 11.834 11.834 2.12 0 4.108-.57 5.831-1.55l3.656 3.658c.633.63 1.47.979 2.362.979.893 0 1.732-.348 2.36-.98.632-.63.98-1.467.98-2.362 0-.89-.348-1.73-.98-2.36" />
  );

  return getIcon(size, isHovered, normal, normalHover, xSmall, xSmallHover);
};

export default Search;
