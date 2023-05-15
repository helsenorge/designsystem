import React from 'react';

import { getIcon, SvgPathProps } from './Icon';

const SectionSign: React.FC<SvgPathProps> = ({ size, isHovered }: SvgPathProps): React.ReactElement => {
  const normal = (
    <path
      d="M25.564 26.297c-1.776-1-4.15-1.442-4.15-3.085 0-.732.377-1.221 1.042-1.621 1.8.977 4.13 1.444 4.13 3.108 0 .776-.334 1.242-1.022 1.598M22.7 18.595c0-.644.445-1.11 1.465-1.11.888 0 1.71.444 2.398 1.043l1.2-1.62c-.89-.688-2.177-1.353-3.73-1.353-2.353 0-3.64 1.375-3.64 3.15 0 .755.243 1.355.665 1.82-1.109.645-1.842 1.666-1.842 2.864 0 4.128 5.97 3.774 5.97 5.905 0 .71-.554 1.243-1.597 1.243-1.02 0-1.843-.423-2.575-1.155l-1.51 1.332c.955 1.132 2.486 1.73 4.085 1.73 2.441 0 3.928-1.397 3.928-3.262 0-.732-.222-1.31-.577-1.775 1.154-.69 1.843-1.554 1.843-2.908 0-4.04-6.083-3.906-6.083-5.904M24 38.458C16.026 38.458 9.54 31.973 9.54 24S16.027 9.542 24 9.542c7.973 0 14.46 6.485 14.46 14.458s-6.487 14.458-14.46 14.458M24 8.14C15.255 8.14 8.141 15.256 8.141 24S15.255 39.858 24 39.858c8.745 0 15.86-7.114 15.86-15.858S32.743 8.14 23.998 8.14"
      fillRule="evenodd"
    />
  );
  const normalHover = (
    <path
      d="M25.79 26.628c-2.032-1.143-4.749-1.65-4.749-3.53 0-.838.431-1.397 1.193-1.855 2.058 1.12 4.724 1.652 4.724 3.557 0 .888-.381 1.421-1.168 1.828m-3.276-8.813c0-.736.508-1.27 1.676-1.27 1.016 0 1.956.51 2.743 1.193l1.371-1.853c-1.016-.788-2.489-1.549-4.267-1.549-2.691 0-4.164 1.574-4.164 3.607 0 .862.279 1.55.762 2.082-1.27.736-2.109 1.905-2.109 3.276 0 4.723 6.832 4.317 6.832 6.756 0 .812-.635 1.422-1.828 1.422-1.169 0-2.108-.483-2.946-1.32l-1.728 1.523c1.093 1.295 2.845 1.981 4.674 1.981 2.793 0 4.495-1.6 4.495-3.734 0-.838-.254-1.498-.66-2.03 1.32-.789 2.108-1.779 2.108-3.328 0-4.622-6.959-4.47-6.959-6.756M24 38.458c-7.973 0-14.459-6.486-14.459-14.458 0-7.973 6.486-14.458 14.459-14.458 7.972 0 14.458 6.485 14.458 14.458 0 7.972-6.486 14.458-14.458 14.458m0-30.317c-8.745 0-15.859 7.114-15.859 15.86 0 8.743 7.114 15.857 15.859 15.857 8.744 0 15.858-7.114 15.858-15.858 0-8.745-7.114-15.859-15.858-15.859"
      fillRule="evenodd"
    />
  );
  const xSmall = (
    <path
      d="M24 38.274c-7.871 0-14.274-6.403-14.274-14.275 0-7.87 6.403-14.274 14.274-14.274 7.87 0 14.273 6.405 14.273 14.274 0 7.872-6.403 14.275-14.273 14.275m0-30.317c-8.846 0-16.044 7.196-16.044 16.042 0 8.846 7.198 16.043 16.044 16.043S40.043 32.845 40.043 24 32.846 7.957 24 7.957m1.59 18.376c-1.804-1.015-4.218-1.465-4.218-3.133 0-.744.384-1.242 1.06-1.648 1.828.993 4.195 1.467 4.195 3.158 0 .788-.339 1.262-1.037 1.623m-2.91-7.825c0-.654.452-1.128 1.489-1.128.902 0 1.737.452 2.435 1.06l1.218-1.646c-.902-.698-2.21-1.376-3.788-1.376-2.39 0-3.699 1.399-3.699 3.204 0 .765.248 1.375.677 1.85-1.128.652-1.872 1.69-1.872 2.907 0 4.195 6.066 3.834 6.066 5.999 0 .722-.563 1.263-1.623 1.263-1.037 0-1.872-.43-2.616-1.172l-1.534 1.352c.97 1.15 2.525 1.759 4.15 1.759 2.48 0 3.991-1.421 3.991-3.316 0-.743-.226-1.329-.586-1.803 1.172-.7 1.872-1.579 1.872-2.954 0-4.104-6.18-3.969-6.18-5.999"
      fillRule="evenodd"
    />
  );
  const xSmallHover = (
    <path
      d="M24 38.274c-7.87 0-14.274-6.403-14.274-14.275C9.726 16.13 16.13 9.725 24 9.725c7.87 0 14.274 6.405 14.274 14.274 0 7.872-6.403 14.275-14.274 14.275m0-30.317c-8.846 0-16.043 7.196-16.043 16.042 0 8.846 7.197 16.043 16.043 16.043S40.043 32.845 40.043 24 32.846 7.957 24 7.957m1.837 18.738c-2.085-1.173-4.871-1.692-4.871-3.62 0-.858.442-1.433 1.224-1.902 2.11 1.147 4.844 1.694 4.844 3.647 0 .91-.392 1.458-1.197 1.875m-3.36-9.037c0-.755.52-1.302 1.717-1.302 1.043 0 2.006.521 2.813 1.224l1.408-1.901c-1.042-.807-2.553-1.588-4.376-1.588-2.76 0-4.27 1.613-4.27 3.697 0 .886.285 1.59.78 2.136-1.301.756-2.161 1.953-2.161 3.359 0 4.844 7.005 4.427 7.005 6.928 0 .833-.652 1.458-1.874 1.458-1.2 0-2.163-.495-3.022-1.354l-1.77 1.562c1.12 1.328 2.916 2.032 4.792 2.032 2.864 0 4.609-1.641 4.609-3.829 0-.859-.26-1.536-.677-2.083 1.354-.807 2.161-1.824 2.161-3.412 0-4.74-7.135-4.583-7.135-6.927"
      fillRule="evenodd"
    />
  );
  return getIcon({ size, isHovered, normal, normalHover, xSmall, xSmallHover });
};

export default SectionSign;
