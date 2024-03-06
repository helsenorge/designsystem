import React from 'react';

import { SvgPathProps } from '../Icon';

const PdfFile: React.FC<SvgPathProps> = ({ isHovered }: SvgPathProps): React.ReactElement => {
  const normal = (
    <path
      fillRule="evenodd"
      d="M26.845 33.311h.803v-2.052h2.094v-.644h-2.094v-1.47h2.431V28.5h-3.234v4.811zm-1.712-2.085c0 .448-.112.8-.339 1.057-.225.258-.577.387-1.054.387h-.645v-3.525h.687c.456 0 .795.126 1.018.379.222.254.333.606.333 1.058v.644zM23.805 28.5h-1.513v4.811h1.47c.679 0 1.21-.188 1.596-.567.385-.377.579-.884.579-1.518v-.638c0-.63-.192-1.135-.574-1.517-.382-.38-.902-.571-1.558-.571zm-3.915-5.116c.055-.043.186-.167.308-.282-.893 1.424-1.492 1.991-1.884 2.169.145-.398.722-1.187 1.576-1.887zm2.527-2.476c.464-.878.758-1.565.976-2.129a7.02 7.02 0 001.61 1.999c.08.068.164.135.252.202-1.293.256-2.41.567-3.393.945.178-.321.365-.658.555-1.017zm.952-7.28c.257 0 .404.648.415 1.256.013.607-.128 1.033-.305 1.349-.146-.467-.217-1.203-.217-1.685 0 0-.011-.92.107-.92zm5.189 7.705c.469 0 .608-.002 1.067.115.459.117.465.355.386.405-.078.049-.304.077-.449.077-.468 0-1.047-.214-1.86-.562.313-.023.598-.035.856-.035zm-10.822 4.28l.318.161a.963.963 0 00.434.104c.798 0 1.727-.996 3.006-3.229a30.052 30.052 0 014.632-1.101c1.123.633 2.504 1.072 3.376 1.072.156 0 .288-.015.398-.043a.681.681 0 00.393-.269c.169-.255.203-.605.157-.965-.013-.106-.098-.238-.19-.328-.259-.255-.833-.39-1.705-.401a14.158 14.158 0 00-2.05.15c-.336-.193-.681-.403-.951-.657-.73-.68-1.338-1.625-1.717-2.664.025-.097.046-.182.066-.269 0 0 .41-2.333.301-3.121a.915.915 0 00-.052-.223l-.036-.092c-.113-.258-.332-.531-.674-.516l-.201-.006h-.006c-.383 0-.695.196-.777.488-.249.918.008 2.291.473 4.07l-.119.289c-.333.813-.751 1.631-1.119 2.353l-.048.094a38.894 38.894 0 01-1.059 1.949l-.329.174c-.024.012-.589.311-.721.391-1.123.671-1.867 1.432-1.99 2.036-.04.192-.011.439.19.553zm2.74 4.995c-.147.157-.371.234-.676.234h-1.077v-1.697H19.8c.305 0 .529.08.676.241.146.16.22.365.22.614a.855.855 0 01-.22.608zM19.8 28.5h-1.88v4.811h.803v-1.824H19.8c.542 0 .961-.134 1.256-.402.295-.267.443-.631.443-1.091 0-.456-.148-.819-.443-1.089-.295-.27-.714-.405-1.256-.405zM12 39.1h23.999V8.9H12v30.2zm-1.301 1.3H37.3V7.6H10.699v32.8z"
    />
  );

  const normalHover = (
    <path
      fillRule="evenodd"
      d="M26.845 33.311h.803v-2.052h2.094v-.644h-2.094v-1.47h2.431V28.5h-3.234v4.811zm-1.712-2.085c0 .448-.113.8-.339 1.057-.225.258-.577.387-1.055.387h-.645v-3.525h.688c.456 0 .794.126 1.017.379.223.254.334.606.334 1.058v.644zM23.805 28.5h-1.514v4.811h1.471c.679 0 1.21-.188 1.596-.567.385-.377.578-.884.578-1.518v-.638c0-.63-.192-1.135-.573-1.517-.382-.38-.902-.571-1.558-.571zm-4.504-5.865c.061-.033.212-.133.351-.226-1.12 1.253-1.806 1.711-2.223 1.82.211-.368.913-1.048 1.872-1.594zm2.909-2.014a19.414 19.414 0 001.322-1.934 6.983 6.983 0 001.462 2.485c-1.316.033-2.47.152-3.503.358.23-.286.471-.588.719-.909zm2.168-7.015c.253.044.288.708.197 1.308-.09.601-.302.997-.529 1.279-.065-.485-.011-1.223.07-1.697 0 0 .146-.909.262-.89zm3.813 8.471c.463.079.599.101 1.033.294.433.193.397.428.312.463-.087.036-.313.025-.457.001-.461-.079-.996-.388-1.737-.868.312.03.595.066.849.11zm-11.39 2.391l.287.213a.96.96 0 00.409.175c.788.135 1.872-.69 3.509-2.674a29.86 29.86 0 014.752-.303c1 .813 2.287 1.479 3.147 1.626.152.026.287.034.398.024a.675.675 0 00.434-.199c.21-.222.302-.561.318-.923.004-.108-.058-.252-.133-.356-.212-.295-.755-.525-1.613-.684a14.15 14.15 0 00-2.046-.197c-.297-.248-.602-.513-.826-.808-.604-.794-1.044-1.828-1.242-2.916.041-.092.076-.172.109-.255 0 0 .799-2.229.825-3.024a.966.966 0 00-.014-.23l-.02-.096c-.067-.273-.236-.579-.578-.622l-.197-.041-.005-.001c-.378-.064-.718.076-.849.351-.4.862-.379 2.259-.22 4.091l-.167.265c-.465.745-1.015 1.481-1.5 2.13l-.063.085a40.732 40.732 0 01-1.372 1.742l-.355.116c-.025.008-.631.207-.776.264-1.22.471-2.082 1.096-2.306 1.67-.071.183-.084.432.094.577zm3.675 6.14c-.147.157-.372.234-.676.234h-1.077v-1.697H19.8c.304 0 .529.08.676.241.146.16.22.365.22.614a.855.855 0 01-.22.608zM19.8 28.5h-1.88v4.811h.803v-1.824H19.8c.542 0 .961-.134 1.256-.402.295-.267.442-.631.442-1.091 0-.456-.147-.819-.442-1.089-.295-.27-.714-.405-1.256-.405zM12 39.1h23.999V8.9H12v30.2zm-1.301 1.3H37.3V7.6H10.699v32.8z"
    />
  );

  return isHovered ? normalHover : normal;
};

export default PdfFile;
