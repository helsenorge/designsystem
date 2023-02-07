import React from 'react';
import { getIcon, SvgPathProps } from './Icon';

const Medicine: React.FC<SvgPathProps> = ({ size, isHovered }: SvgPathProps): JSX.Element => {
  const normal = (
    <path
      fillRule="evenodd"
      d="M25.551 13.585a1.227 1.227 0 01-1.699.374 1.231 1.231 0 01.664-2.266 1.231 1.231 0 011.035 1.893zm.164-2.542a2.233 2.233 0 00-3.08.68 2.232 2.232 0 001.875 3.43c.161 0 .323-.017.484-.053a2.211 2.211 0 001.4-.976 2.212 2.212 0 00.298-1.681 2.216 2.216 0 00-.977-1.4zm6.525 25.523a1.23 1.23 0 11-.824-2.318 1.23 1.23 0 01.824 2.319zm-1.16-3.259a2.232 2.232 0 00-1.353 2.85 2.233 2.233 0 002.85 1.353 2.234 2.234 0 001.352-2.85 2.233 2.233 0 00-2.849-1.352zm-.446-13.184c.078-.319.276-.588.557-.758a1.22 1.22 0 01.931-.141 1.231 1.231 0 01-.589 2.389 1.226 1.226 0 01-.899-1.49zm.66 2.46a2.234 2.234 0 002.699-1.632 2.233 2.233 0 00-1.63-2.698 2.22 2.22 0 00-1.689.256c-.51.308-.869.797-1.012 1.375a2.218 2.218 0 00.258 1.688c.308.51.796.869 1.374 1.012zm1.57-8.997a1.231 1.231 0 01-2.073-1.325 1.23 1.23 0 012.073 1.325zm.165-2.543a2.234 2.234 0 00-3.08.68 2.233 2.233 0 00.678 3.08 2.232 2.232 0 003.379-2.36 2.22 2.22 0 00-.977-1.4zm3.802 27.208a1.906 1.906 0 01-1.904 1.903H26.55V18.207h-7.038v-7.825c0-1.048.854-1.902 1.904-1.902h13.512c1.05 0 1.904.854 1.904 1.902v27.869zM11.038 24.934h14.21v-5.426h-14.21v5.425zm14.21 15.219h-14.21v-2.685h8.497v-8.067h-8.497v-3.169h14.21v13.92zm-14.21-3.685h7.498v-6.067h-7.498v6.067zm23.89-29.29H21.414a3.208 3.208 0 00-3.204 3.204v7.825H9.738v23.247h25.19a3.208 3.208 0 003.203-3.204V10.383a3.207 3.207 0 00-3.204-3.203zm-2.064 21.397a1.231 1.231 0 01-2.073-1.326 1.23 1.23 0 012.073 1.325zm.165-2.543a2.217 2.217 0 00-1.68-.299 2.233 2.233 0 00-.721 4.058 2.23 2.23 0 002.402-3.759z"
    />
  );

  const normalHover = (
    <path
      fillRule="evenodd"
      d="M32.865 28.575a1.223 1.223 0 01-.772.54 1.233 1.233 0 01-1.301-1.864 1.232 1.232 0 011.699-.375c.57.366.739 1.128.374 1.7zm.165-2.542a2.217 2.217 0 00-1.681-.298 2.216 2.216 0 00-1.4.977 2.233 2.233 0 002.359 3.38 2.216 2.216 0 001.4-.978 2.235 2.235 0 00-.678-3.08zm-2.396-5.91c.079-.319.277-.588.558-.758a1.218 1.218 0 01.93-.142c.66.163 1.063.831.9 1.49a1.232 1.232 0 01-2.246.341 1.22 1.22 0 01-.142-.93zm.66 2.46a2.234 2.234 0 002.699-1.632 2.233 2.233 0 00-1.631-2.699 2.217 2.217 0 00-1.687.257c-.51.31-.87.797-1.012 1.375a2.22 2.22 0 00.257 1.688c.308.51.797.87 1.375 1.011zm.947 13.984a1.23 1.23 0 11-.825-2.318 1.23 1.23 0 01.825 2.318zm-1.16-3.26a2.233 2.233 0 00-1.354 2.85 2.235 2.235 0 002.849 1.352 2.232 2.232 0 001.353-2.849 2.232 2.232 0 00-2.848-1.353zm1.784-19.722a1.23 1.23 0 11-2.074-1.325 1.23 1.23 0 012.074 1.325zm.164-2.542a2.233 2.233 0 00-3.08.68 2.233 2.233 0 00.679 3.08 2.232 2.232 0 003.08-.679 2.232 2.232 0 00-.68-3.08zm3.803 27.207c0 1.05-.855 1.904-1.904 1.904H26.55V25.671l1.93-7.027-8.968-2.466v-5.795c0-1.05.854-1.904 1.904-1.904h13.512c1.049 0 1.904.854 1.904 1.904V38.25zm-25.09-17.232l1.438-5.232 13.703 3.767-1.438 5.231-13.703-3.766zm13.507 19.136H11.038V37.47h8.498v-8.068h-8.498v-3.168h14.21v13.92zM11.038 36.47h7.498v-6.067h-7.498v6.067zm23.89-29.29H21.416a3.207 3.207 0 00-3.204 3.204v5.438l-5.941-1.633-2.127 7.74 10.94 3.006H9.739v16.52h25.189a3.209 3.209 0 003.204-3.204V10.383a3.208 3.208 0 00-3.204-3.204zm-9.376 6.406a1.23 1.23 0 11-2.074-1.326 1.23 1.23 0 012.074 1.326zm.164-2.542a2.233 2.233 0 00-3.08.68 2.232 2.232 0 001.875 3.43 2.23 2.23 0 001.205-4.11z"
    />
  );

  const xSmall = (
    <path
      fillRule="evenodd"
      d="M32.11 36.435a1.231 1.231 0 01-1.525-1.686 1.226 1.226 0 011.113-.703c.18 0 .358.04.526.12a1.231 1.231 0 01-.115 2.27zm.544-3.173a2.214 2.214 0 00-1.705-.087 2.234 2.234 0 00-1.353 2.85 2.234 2.234 0 002.85 1.353 2.231 2.231 0 00.208-4.116zm-8.497-19.808a1.227 1.227 0 01-1.7.373 1.223 1.223 0 01-.539-.771 1.23 1.23 0 112.238.398zm.164-2.542a2.232 2.232 0 00-3.38 2.36c.13.58.476 1.078.979 1.398a2.21 2.21 0 001.68.3 2.233 2.233 0 00.721-4.057v-.001zm8.412 2.542c-.176.276-.45.468-.771.539-.322.07-.65.011-.927-.166a1.223 1.223 0 01-.54-.771 1.23 1.23 0 112.238.398zm.165-2.542a2.218 2.218 0 00-1.682-.298 2.21 2.21 0 00-1.398.976 2.22 2.22 0 00-.3 1.682c.128.58.476 1.078.978 1.398a2.21 2.21 0 001.68.3 2.215 2.215 0 001.4-.978 2.21 2.21 0 00.298-1.68 2.213 2.213 0 00-.976-1.4zm3.82 27.207a1.924 1.924 0 01-1.922 1.921H26.4V18.094h-8.3v-7.843c0-1.06.862-1.92 1.922-1.92h14.775c1.06 0 1.921.86 1.921 1.92V38.12zm-25.83-13.298h14.248v-5.463H10.888v5.463zm0 15.22h14.248V26.083H10.888V40.04zM34.796 7.066H20.021a3.188 3.188 0 00-3.186 3.184v7.843h-7.21v23.21h25.171a3.188 3.188 0 003.185-3.185V10.251a3.187 3.187 0 00-3.185-3.184zm-1.905 17.261a1.23 1.23 0 11-2.388-.59 1.23 1.23 0 012.388.59zm-.66-2.46a2.214 2.214 0 00-1.688.257 2.232 2.232 0 001.153 4.14 2.237 2.237 0 002.167-1.698 2.217 2.217 0 00-.258-1.687 2.213 2.213 0 00-1.374-1.011z"
    />
  );

  const xSmallHover = (
    <path
      fillRule="evenodd"
      d="M32.11 36.435c-.312.11-.644.094-.942-.048-.295-.14-.52-.389-.63-.698a1.226 1.226 0 011.157-1.642c.506 0 .981.314 1.16.817a1.231 1.231 0 01-.746 1.571zm1.687-1.907a2.23 2.23 0 10-4.202 1.496 2.23 2.23 0 004.202-1.495v-.001zm-9.64-21.074a1.23 1.23 0 01-2.073-1.326 1.232 1.232 0 011.698-.373c.571.365.74 1.128.374 1.699zm.164-2.542a2.232 2.232 0 00-3.38 2.36c.13.58.477 1.078.978 1.398a2.21 2.21 0 001.68.3 2.233 2.233 0 00.721-4.057v-.001zm6.34 1.216a1.232 1.232 0 011.698-.373 1.232 1.232 0 01-.398 2.238c-.32.07-.65.011-.927-.166a1.223 1.223 0 01-.54-.771c-.069-.321-.012-.65.166-.928zm-.165 2.542a2.21 2.21 0 001.68.3 2.233 2.233 0 00.721-4.057 2.232 2.232 0 00-3.379 2.359c.13.58.477 1.078.978 1.398zm2.237 10.026c-.177.276-.45.468-.772.539a1.23 1.23 0 11.772-.54zm.164-2.542a2.231 2.231 0 00-3.08.678 2.231 2.231 0 001.875 3.431 2.23 2.23 0 001.205-4.109zm3.821 15.965a1.925 1.925 0 01-1.922 1.921h-8.398V25.537l1.928-7.012-10.228-2.812v-5.462c0-1.06.863-1.92 1.923-1.92h14.775c1.06 0 1.922.86 1.922 1.92V38.12zM11.588 20.9l1.448-5.267 13.738 3.776-1.448 5.267L11.588 20.9zm-.701 19.141h14.248V26.084H10.887V40.04zM34.796 7.067H20.021a3.188 3.188 0 00-3.186 3.184v5.115l-4.682-1.287-2.119 7.703 11.054 3.039H9.625v16.483h25.171a3.188 3.188 0 003.186-3.185V10.251a3.188 3.188 0 00-3.186-3.184z"
    />
  );

  return getIcon({ size, isHovered, normal, normalHover, xSmall, xSmallHover });
};

export default Medicine;
