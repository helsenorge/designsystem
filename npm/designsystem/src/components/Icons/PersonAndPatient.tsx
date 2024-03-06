import React from 'react';

import { SvgPathProps } from '../Icon';

const PersonAndPatient: React.FC<SvgPathProps> = ({ isHovered }: SvgPathProps): React.ReactElement => {
  const normal = (
    <path d="M19.568 15.908a.489.489 0 100-.978.489.489 0 000 .978zm7.426-2.526h3.22a4.085 4.085 0 003.573-2.107 4.035 4.035 0 003.542 2.107h2.228V15.4a6.09 6.09 0 01-6.083 6.082h-.398a6.09 6.09 0 01-6.082-6.082v-2.02zm0-1.285a6.09 6.09 0 016.082-6.082h.398a6.09 6.09 0 016.083 6.082v.285h-2.228a3.034 3.034 0 01-3.031-3.031v-.267h-1v.214c0 1.7-1.383 3.084-3.084 3.084h-3.22v-.285zm6.082 10.686h.398c4.07 0 7.383-3.312 7.383-7.382v-3.304c0-4.07-3.312-7.382-7.383-7.382h-.398c-4.07 0-7.382 3.312-7.382 7.382V15.4c0 4.07 3.312 7.382 7.382 7.382zM14.42 15.908a.488.488 0 100-.976.488.488 0 000 .976zm-3.551-2.733h.69c1.48 0 2.773-.823 3.444-2.035a3.987 3.987 0 003.474 2.035h4.572v1.949a5.904 5.904 0 01-5.897 5.897h-.386a5.904 5.904 0 01-5.897-5.897v-1.95zm0-1.263a5.903 5.903 0 015.897-5.897h.386a5.903 5.903 0 015.897 5.897v.263h-4.572a2.99 2.99 0 01-2.986-2.986v-.207h-1v.259a2.936 2.936 0 01-2.932 2.934h-.69v-.263zm5.897 10.409h.386c3.969 0 7.197-3.23 7.197-7.197v-3.212c0-3.968-3.228-7.197-7.197-7.197h-.386c-3.97 0-7.198 3.229-7.198 7.197v3.212c0 3.968 3.229 7.197 7.198 7.197zm12.829-6.617a.503.503 0 10-1.005.001.503.503 0 001.005-.001zm14.316 26.029h-3.225v-6.948h-.9v6.948h-9.458v-7.467c0-3.242-1.352-6.27-3.576-8.448a8.723 8.723 0 011.997-.935c2.796 1.392 6.255 1.392 9.05 0 3.61 1.163 6.112 4.576 6.112 8.389v8.46zm-14.883 0h-3.316v-6.948h-.9v6.948H8.41v-3.097h7.096a2.862 2.862 0 002.859-2.86 2.855 2.855 0 00-2.428-2.813l7.607-7.92c3.31 1.82 5.485 5.346 5.485 9.223v7.467zm-13.523-7.514c.86 0 1.559.699 1.559 1.558a1.56 1.56 0 01-1.56 1.559h-3.768l2.994-3.117h.775zm-9.381 3.117v.005l-2.286-.004v-3.071c0-.176.013-.35.022-.525l18.165-9.38c.228.082.452.169.67.265l-7.964 8.293h-.001l-4.242 4.417H6.125zm5.743-13.292a9.485 9.485 0 004.899 1.365h.386c.337 0 .673-.027 1.007-.063L3.968 32.673c.645-4.146 3.754-7.62 7.9-8.63zm26.05-.485l-.253-.073-.233.124c-2.543 1.355-5.77 1.355-8.313 0l-.233-.124-.254.073a10.07 10.07 0 00-2.892 1.38c-1.153-.9-2.478-1.6-3.935-2.023l-.27-.078-.24.14a8.204 8.204 0 01-4.142 1.132h-.386a8.194 8.194 0 01-4.432-1.306l-.226-.146-.263.057c-5.393 1.172-9.308 6.029-9.308 11.55v4.37l4.572.008v4.39h38.102v-9.761c0-4.473-3-8.467-7.293-9.713zm-3.532-7.352a.503.503 0 100-1.006.503.503 0 000 1.006z" />
  );

  const normalHover = (
    <path d="M34.386 17.207a.502.502 0 100-1.004.502.502 0 000 1.004zm-4.79-.502a.503.503 0 10-1.006-.001.503.503 0 001.005 0zm-2.602-2.323h3.22a4.086 4.086 0 003.573-2.107 4.035 4.035 0 003.542 2.107h2.227V15.4a6.088 6.088 0 01-6.082 6.082h-.398a6.088 6.088 0 01-6.082-6.082v-1.02zm0-2.284a6.09 6.09 0 016.082-6.083h.398a6.09 6.09 0 016.082 6.083v1.284H37.33a3.033 3.033 0 01-3.03-3.03v-.268h-1v.214a3.087 3.087 0 01-3.085 3.084h-3.22v-1.284zm6.082 10.685h.398c4.071 0 7.382-3.311 7.382-7.382v-3.303c0-4.071-3.31-7.383-7.382-7.383h-.398c-4.07 0-7.382 3.312-7.382 7.383V15.4c0 4.07 3.312 7.382 7.382 7.382zm10.835 18.95h-3.224v-6.948h-.9v6.948H30.33v-7.466c0-3.243-1.352-6.27-3.577-8.45a8.73 8.73 0 011.998-.934c2.796 1.392 6.255 1.392 9.05 0 3.611 1.163 6.111 4.576 6.111 8.389v8.46zm-14.882 0h-3.316v-6.948h-.9v6.948H8.41v-3.097h7.096a2.863 2.863 0 002.86-2.86 2.855 2.855 0 00-2.429-2.813l7.606-7.92c3.312 1.819 5.486 5.346 5.486 9.224v7.466zm-13.523-7.514a1.56 1.56 0 011.558 1.558 1.56 1.56 0 01-1.558 1.559h-3.769l2.994-3.117h.775zm-9.38 3.117v.005l-2.288-.004v-3.07c0-.177.014-.351.023-.526l18.166-9.38c.227.082.451.169.67.265l-7.966 8.293-4.242 4.417H6.125zm5.742-13.292a9.485 9.485 0 004.898 1.366h.387c.337 0 .672-.028 1.006-.064L3.97 32.673c.644-4.146 3.753-7.62 7.9-8.63zm26.051-.484l-.254-.074-.233.124c-2.543 1.355-5.77 1.355-8.314 0l-.232-.124-.254.074c-1.037.3-2.004.77-2.892 1.38-1.154-.9-2.478-1.6-3.936-2.024l-.268-.078-.24.14a8.204 8.204 0 01-4.143 1.132h-.387c-1.568 0-3.1-.452-4.43-1.306l-.228-.146-.263.057c-5.393 1.172-9.307 6.03-9.307 11.552v4.368l4.572.008v4.39h38.102v-9.761c0-4.473-2.999-8.467-7.293-9.712zm-23.498-6.652a.489.489 0 10-.001-.978.489.489 0 00.001.978zm5.147 0a.488.488 0 100-.976.488.488 0 000 .976zm-8.009-1.733a3.937 3.937 0 003.444-2.035 3.99 3.99 0 003.475 2.035h4.57a5.902 5.902 0 01-5.895 5.846h-.387a5.902 5.902 0 01-5.894-5.846h.687zm-.69-3.263a5.904 5.904 0 015.897-5.897h.387a5.904 5.904 0 015.897 5.897v2.263h-4.572a2.99 2.99 0 01-2.986-2.986v-.207h-1v.26a2.936 2.936 0 01-2.933 2.933h-.69v-2.263zm5.897 10.409h.387c3.968 0 7.197-3.23 7.197-7.197v-3.212c0-3.968-3.229-7.197-7.197-7.197h-.387c-3.968 0-7.197 3.229-7.197 7.197v3.212c0 3.968 3.23 7.197 7.197 7.197z" />
  );

  return isHovered ? normalHover : normal;
};

export default PersonAndPatient;
