import React from 'react';
import { SvgPathProps } from './Icon';

const ShuntOperation: React.FC<SvgPathProps> = ({ size, isHovered }: SvgPathProps): JSX.Element => {
  const normal = (
    <path
      fillRule={'evenodd'}
      d="M23.371 17.101h1.3v-2h-1.3v2zm0 4h1.3v-2h-1.3v2zm.001 8h1.3v-2h-1.3v2zm-.001-4h1.3v-2h-1.3v2zm-1.712-12.389l-.237-.231a2.34 2.34 0 01-.355-.462 2.161 2.161 0 01-.762.157 2.16 2.16 0 01-.989-.239l-.473-.248c.051.606.144 1.185.334 1.746.096.283.32.484.615.553.3.073.608-.016.825-.234l1.042-1.042zm-2.85-2.169l.967.506c.305.156.659.161.97.031a2.288 2.288 0 01.376-1.516l.073-.11a1.17 1.17 0 01-.03-1.509.172.172 0 00-.012-.233l-.692-.682a5.606 5.606 0 00-1.652 3.513zm7.705-4.278a6.05 6.05 0 00-1.768-.551l-.417.441a1.358 1.358 0 00-.179 1.623l.253.424a2.673 2.673 0 011.698.069l.617-.618a.88.88 0 00.247-.773.827.827 0 00-.451-.615zm-4.148 5.74l2.911-2.91a1.677 1.677 0 00-1.176.333l-.866.663a1.177 1.177 0 01-.714.242c-.206 0-.401-.074-.583-.18a1.292 1.292 0 00.185 1.614l.243.238zm1.077-6.338a4.813 4.813 0 00-2.191.737l.603.595c.434.429.47 1.106.084 1.579a.173.173 0 00.009.23l.448.47c.061.063.16.072.231.018l.866-.663.001-.001-.203-.342a2.362 2.362 0 01.152-2.623zm-.071 6.747l-2.048 2.047a1.868 1.868 0 01-1.76.501 1.842 1.842 0 01-1.334-1.207c-.301-.889-.44-1.775-.44-2.788 0-3.042 2.335-6.325 6.107-6.325 1.039 0 2.097.251 3.06.726.534.264.896.755.995 1.35a1.89 1.89 0 01-.527 1.642l-2.754 2.754v1.987h-1.299v-.687zm7.565 26.262h2v-1.301h-2v1.301zm-7.566-5.575h1.3v-2h-1.3v2zm3.384 5.324a4.952 4.952 0 001.56.251h.622v-1.301h-.622c-.395 0-.781-.062-1.149-.185l-.411 1.235zm-3.136-3.144c.24.726.653 1.398 1.196 1.943l.921-.918a3.66 3.66 0 01-.882-1.433l-1.235.408zM33.833 15.87l-1.861-4.001v-.143c0-5.171-3.94-7.96-7.648-7.96-3.649 0-7.587 2.983-7.587 7.804 0 2.513.774 4.046 1.524 5.529.664 1.313 1.351 2.672 1.351 4.549v4.094l-.362.18c-3.275 1.619-5.31 4.887-5.31 8.527v9.519h19.038v-9.519a9.54 9.54 0 00-4.866-8.3l-.331-.186v-4.358h.65a3.544 3.544 0 003.541-3.541v-1.628h1.499a.394.394 0 00.336-.184.394.394 0 00.026-.382zm1.07 1.081a1.693 1.693 0 01-1.432.785h-.199v.328c0 2.45-1.828 4.48-4.191 4.798v2.349a10.838 10.838 0 015.197 9.238v10.82H12.64v-10.82a10.75 10.75 0 015.672-9.506v-3.295c0-1.567-.562-2.677-1.211-3.963-.78-1.543-1.664-3.292-1.664-6.115 0-5.02 3.986-9.105 8.887-9.105 4.302 0 8.874 3.193 8.947 9.115l1.74 3.741a1.69 1.69 0 01-.108 1.63zm-5.778-4.313a.718.718 0 11-1.436 0 .718.718 0 011.436 0z"
    />
  );

  const normalHover = (
    <path
      fillRule={'evenodd'}
      d="M23.373 26.638h1.3l.002-2h-1.302v2zm.002-4h1.3v-2h-1.3v2zm1.084 14.189a4.95 4.95 0 001.802 1.402l.538-1.184a3.644 3.644 0 01-1.325-1.032l-1.015.814zm-1.087-6.19h1.3v-2h-1.3v2zm1.306-18h-1.3v2h1.3v-2zm-.008 21.096l.002-1.095h-1.3v1.095c0 .348.035.696.108 1.035l1.27-.272a3.667 3.667 0 01-.08-.763zm3.803 4.943h2v-1.301h-2v1.3zm-5.098-20.038h1.302v-2h-1.3l-.002 2zm10.458-2.768l-1.86-4.001v-.143c0-5.171-3.941-7.96-7.65-7.96-3.649 0-7.587 2.983-7.587 7.805 0 2.512.776 4.046 1.524 5.528.664 1.313 1.351 2.672 1.351 4.55v4.093l-.361.18c-3.275 1.619-5.31 4.887-5.31 8.528v9.518h19.037v-5.292h-.503v-1.301h.504V34.45a9.537 9.537 0 00-4.867-8.3l-.33-.187v-4.357h.65a3.545 3.545 0 003.541-3.541v-1.63h1.5c.195 0 .3-.128.334-.183a.391.391 0 00.027-.382zm1.07 1.08a1.688 1.688 0 01-1.431.787h-.2v.328a4.85 4.85 0 01-4.191 4.798v2.348a10.839 10.839 0 015.197 9.239v10.819H12.64v-10.82c0-4.002 2.162-7.608 5.67-9.505v-3.295c0-1.568-.561-2.678-1.21-3.964-.78-1.543-1.664-3.292-1.664-6.114 0-5.021 3.987-9.106 8.886-9.106 4.303 0 8.874 3.194 8.947 9.115l1.741 3.742a1.691 1.691 0 01-.108 1.629zM26.965 6.88a.827.827 0 00-.45-.615 6.095 6.095 0 00-1.77-.551l-.417.442a1.36 1.36 0 00-.178 1.623l.253.423a2.672 2.672 0 011.698.069l.617-.617a.878.878 0 00.247-.774zm-5.306 5.832l-.236-.23a2.264 2.264 0 01-.355-.463 2.15 2.15 0 01-.764.157c-.337 0-.677-.08-.988-.24l-.473-.246c.05.605.143 1.184.334 1.745.096.283.32.484.614.554.3.07.608-.017.825-.235l1.043-1.042zm-2.85-2.168l.966.505c.306.156.66.16.972.03a2.285 2.285 0 01.375-1.514l.073-.111a1.167 1.167 0 01-.03-1.508.176.176 0 00-.012-.235l-.691-.68a5.596 5.596 0 00-1.652 3.513zm4.685-1.912l-.203-.342a2.362 2.362 0 01.151-2.623 4.814 4.814 0 00-2.19.738l.603.594c.433.429.47 1.108.084 1.579a.175.175 0 00.009.23l.447.47c.061.064.16.073.232.018l.866-.663.002-.001zm-1.128 3.373l2.91-2.91a1.677 1.677 0 00-1.175.333l-.866.663a1.177 1.177 0 01-.715.242c-.204 0-.4-.074-.582-.18a1.291 1.291 0 00.184 1.614l.244.238zm5.06-3.644l-6.102 6.1a1.863 1.863 0 01-1.76.5 1.838 1.838 0 01-1.334-1.206c-.302-.888-.44-1.774-.44-2.788 0-3.042 2.335-6.325 6.108-6.325 1.038 0 2.096.25 3.058.726.535.264.896.755.995 1.35.1.6-.098 1.214-.526 1.643zm1.7 4.277a.72.72 0 11-1.44-.002.72.72 0 011.44.002z"
    />
  );

  return isHovered ? normalHover : normal;
};

export default ShuntOperation;
