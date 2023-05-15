import React from 'react';

import { SvgPathProps, getIcon } from './Icon';

const Candle: React.FC<SvgPathProps> = ({ size, isHovered }: SvgPathProps): React.ReactElement => {
  const normal = (
    <path
      fillRule="evenodd"
      d="M23.89 6.542a.65.65 0 0 0-1.031.413c-.398 2.388-.944 3.419-1.554 4.57-.126.24-.256.484-.387.746-1.099 2.2.338 4.463 2.432 4.875v.766H14a.65.65 0 0 0-.65.65v22.6h-2.668c-1.343 0-3.032-1.229-3.032-3.35a.65.65 0 1 0-1.3 0c0 2.879 2.311 4.65 4.332 4.65H36c1.104 0 2.265-.304 3.161-1.05.916-.761 1.489-1.928 1.489-3.499a.65.65 0 0 0-1.3 0c0 1.229-.433 2.012-1.02 2.5-.606.504-1.445.75-2.33.75h-2.35v-22.6a.65.65 0 0 0-.65-.65h-8.35v-.744c.874-.128 1.579-.531 2.087-1.105.618-.7.913-1.614.913-2.502 0-2.49-1.622-5.416-3.76-7.02Zm.122 9.37c.816.008 1.382-.292 1.751-.71.382-.431.587-1.027.587-1.64 0-1.713-.99-3.816-2.427-5.267-.414 1.85-.946 2.854-1.473 3.848a36.02 36.02 0 0 0-.369.71c-.73 1.46.348 3.04 1.922 3.06h.009Zm-9.362 3.3h17.7v21.95h-17.7v-21.95Z"
    />
  );

  const normalHover = (
    <path
      fillRule="evenodd"
      d="M23.89 9.792a.65.65 0 0 0-1.031.413c-.398 2.388-.944 3.419-1.554 4.57-.126.24-.256.484-.387.746-1.099 2.2.338 4.463 2.432 4.875v.766H14a.65.65 0 0 0-.65.65v19.35h-2.668c-1.343 0-3.032-1.229-3.032-3.35a.65.65 0 1 0-1.3 0c0 2.879 2.311 4.65 4.332 4.65H36c1.104 0 2.265-.304 3.161-1.05.916-.761 1.489-1.928 1.489-3.499a.65.65 0 0 0-1.3 0c0 1.229-.433 2.012-1.02 2.5-.606.504-1.445.75-2.33.75h-2.35v-19.35a.65.65 0 0 0-.65-.65h-8.35v-.744c.874-.128 1.579-.531 2.087-1.105.618-.7.913-1.614.913-2.502 0-2.49-1.622-5.416-3.76-7.02Zm.122 9.37c.816.008 1.382-.292 1.751-.71.382-.431.587-1.027.587-1.64 0-1.713-.99-3.816-2.427-5.267-.414 1.85-.946 2.854-1.473 3.848a36.02 36.02 0 0 0-.369.71c-.73 1.46.348 3.04 1.922 3.06h.009Zm-9.362 3.3h17.7v18.7h-17.7v-18.7Z"
    />
  );

  return getIcon({ size, isHovered, normal, normalHover });
};

export default Candle;
