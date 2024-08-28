import React from 'react';

import { SvgPathProps } from '../Icon';

const PlateKnifeFork: React.FC<SvgPathProps> = ({ isHovered }: SvgPathProps): React.ReactElement => {
  const normal = (
    <>
      <path
        fillRule="evenodd"
        d="M41.809 11.341c-.396-.761-1.22-.962-1.843-.88-.32.043-.649.164-.91.379-.27.22-.48.556-.48.979 0 .653-.6 15.073-.9 22.225a.53.53 0 0 0 0 .026c0 1.05 1.03 1.706 2.1 1.706 1.046 0 2.1-.593 2.1-1.706v-.027l-.429-9.718a.589.589 0 0 0-.004-.05.427.427 0 0 1 .044-.23c0-.002.002-.003.008-.006.5-.196.785-.677.97-1.137.196-.485.347-1.115.484-1.836.225-1.185.55-4.203-.102-7.004-.258-1.106-.796-2.255-1.038-2.72Zm-2.033.478c0-.005 0-.006.002-.009a.151.151 0 0 1 .039-.043.63.63 0 0 1 .307-.116c.308-.04.533.077.62.244.223.43.71 1.476.934 2.44.6 2.576.3 5.41.092 6.507-.134.707-.268 1.24-.417 1.611-.16.396-.282.463-.295.469a1.251 1.251 0 0 0-.728.773c-.09.259-.1.519-.08.704l.426 9.68c-.003.101-.048.204-.176.3-.14.105-.382.197-.724.197-.7 0-.893-.374-.9-.5.3-7.128.9-21.57.9-22.257ZM24.617 31.6a8.344 8.344 0 1 0 0-16.689 8.344 8.344 0 0 0 0 16.688Zm0-1.2a7.144 7.144 0 1 0 0-14.289 7.144 7.144 0 0 0 0 14.288Z"
      />
      <path
        fillRule="evenodd"
        d="M24.617 35.498c6.762 0 12.243-5.481 12.243-12.243 0-6.761-5.481-12.242-12.243-12.242-6.761 0-12.243 5.48-12.243 12.242 0 6.762 5.482 12.243 12.243 12.243Zm0-1.2c6.099 0 11.043-4.944 11.043-11.043 0-6.098-4.944-11.042-11.043-11.042-6.099 0-11.043 4.944-11.043 11.042 0 6.1 4.944 11.043 11.043 11.043ZM6.147 18.937a2 2 0 0 0 1.09 1.7l-.318 12.9a1.947 1.947 0 1 0 3.894.01l-.249-12.905a2 2 0 0 0 1.103-1.788v-1.117h-.002l-.137-6.76h-.666l-.127 6.76H9.37l-.137-6.76h-.667l-.126 6.76H7.076l-.136-6.726h-.667l-.126 6.726h-.002v1.117c0 .028 0 .056.002.083Zm2.31.974-.339 13.655a.747.747 0 1 0 1.495.004L9.35 19.91l.675-.34a.8.8 0 0 0 .437-.633H7.35a.8.8 0 0 0 .434.63l.673.344Z"
      />
    </>
  );

  const normalHover = (
    <>
      <path
        fillRule="evenodd"
        d="m9.553 10.723-.66.1.878 6.703-1.349.202-1.138-6.663-.66.099.878 6.702-1.35.202-1.132-6.63-.659.1.873 6.668h-.002l.166 1.105c.004.027.008.055.014.082a2 2 0 0 0 1.33 1.519l1.6 12.804a1.947 1.947 0 1 0 3.851-.567l-2.16-12.726a2 2 0 0 0 .825-1.932l-.165-1.104h-.002l-1.138-6.664Zm-1.713 9.29 1.692 13.554a.747.747 0 1 0 1.478-.217L8.724 19.879l.617-.436a.8.8 0 0 0 .339-.69l-3.079.462a.8.8 0 0 0 .522.558l.717.24Zm16.652 11.585a8.344 8.344 0 1 0 0-16.688 8.344 8.344 0 0 0 0 16.688Zm0-1.2a7.144 7.144 0 1 0 0-14.288 7.144 7.144 0 0 0 0 14.288Z"
      />
      <path
        fillRule="evenodd"
        d="M24.492 35.496c6.762 0 12.243-5.48 12.243-12.242 0-6.762-5.481-12.243-12.243-12.243-6.761 0-12.243 5.481-12.243 12.243 0 6.761 5.482 12.242 12.243 12.242Zm0-1.2c6.099 0 11.043-4.943 11.043-11.042S30.59 12.21 24.492 12.21c-6.099 0-11.043 4.944-11.043 11.043 0 6.099 4.944 11.043 11.043 11.043Zm18.81-22.656c-.286-.809-1.075-1.122-1.702-1.126a1.819 1.819 0 0 0-.955.248 1.257 1.257 0 0 0-.61.903c-.091.647-2.684 14.845-3.973 21.886a.497.497 0 0 0-.004.025c-.146 1.04.784 1.832 1.843 1.98 1.036.146 2.163-.294 2.317-1.397a.584.584 0 0 0 .003-.027l.923-9.683a.589.589 0 0 0 .003-.05.424.424 0 0 1 .046-.18.15.15 0 0 1 .029-.043s.002-.002.009-.004c.523-.124.871-.562 1.119-.991.261-.454.498-1.056.733-1.752.388-1.142 1.128-4.086.87-6.95-.102-1.131-.476-2.344-.65-2.839Zm-2.08.192c.001-.005.002-.006.004-.009a.153.153 0 0 1 .044-.037.63.63 0 0 1 .32-.072c.311.002.518.15.58.327.162.456.499 1.56.588 2.545.238 2.636-.453 5.401-.811 6.458-.231.682-.437 1.191-.637 1.538-.213.37-.343.42-.357.423-.431.102-.69.396-.828.665a1.67 1.67 0 0 0-.178.686l-.919 9.646c-.017.1-.076.195-.216.272-.153.085-.405.142-.744.094-.694-.097-.833-.493-.822-.618 1.285-7.019 3.881-21.239 3.977-21.918Z"
      />
    </>
  );

  return isHovered ? normalHover : normal;
};

export default PlateKnifeFork;