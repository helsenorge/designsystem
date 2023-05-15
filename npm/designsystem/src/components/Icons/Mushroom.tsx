import React from 'react';

import { SvgPathProps } from './Icon';

const Mushroom: React.FC<SvgPathProps> = ({ size, isHovered }: SvgPathProps): React.ReactElement => {
  const normal = (
    <path d="M24.186 7.352c7.182 0 13.025 5.844 13.025 13.025v.651H35.8a2.71 2.71 0 01-2.623 2.06h-5.013c.45 2.196 1.31 7.113 1.317 12.706a4.81 4.81 0 01-1.418 3.425 4.837 4.837 0 01-3.444 1.43 4.842 4.842 0 01-3.662-1.673 4.902 4.902 0 01-1.143-3.909c.758-5.282.939-10.313.979-11.979h-5.97a2.71 2.71 0 01-2.622-2.06h-1.412v-.65c0-7.182 5.843-13.026 13.025-13.026zm2.65 15.736h-4.742c-.04 1.666-.221 6.785-.994 12.164a3.599 3.599 0 00.84 2.872 3.54 3.54 0 002.679 1.223c.954 0 1.85-.37 2.524-1.047a3.515 3.515 0 001.038-2.504c-.006-5.727-.924-10.719-1.345-12.708zm7.593-2.06H13.572c.235.451.708.76 1.252.76h18.353c.544 0 1.017-.309 1.252-.76zM24.186 8.653h-.372c-4.752 0-8.846 2.845-10.686 6.918 1.667.232 2.958 1.652 2.958 3.382 0 .262-.037.521-.095.774h19.903a11.658 11.658 0 00-.276-1.91 4.142 4.142 0 01-.65.055 4.071 4.071 0 01-4.066-4.067c0-.877.286-1.717.797-2.408a11.663 11.663 0 00-7.513-2.744zm-11.53 8.171l-.003.001a11.6 11.6 0 00-.546 2.902h2.514c.097-.248.164-.506.164-.774a2.131 2.131 0 00-2.13-2.129zm14.12-4.449a3.434 3.434 0 013.43 3.43 3.434 3.434 0 01-3.43 3.43 3.434 3.434 0 01-3.43-3.43 3.434 3.434 0 013.43-3.43zm-8.758 5.01a.785.785 0 11-.002 1.57.785.785 0 01.002-1.57zm8.759-3.709a2.131 2.131 0 00-2.13 2.13c0 1.173.956 2.128 2.13 2.128a2.131 2.131 0 002.129-2.129 2.131 2.131 0 00-2.13-2.129zm5.885-1.373c-.29.445-.46.96-.46 1.502a2.769 2.769 0 002.766 2.766c.099 0 .196-.014.295-.025a11.714 11.714 0 00-2.601-4.243zm-12.996-1.745a2.486 2.486 0 012.484 2.484 2.487 2.487 0 01-2.484 2.485 2.487 2.487 0 01-2.484-2.485 2.486 2.486 0 012.484-2.484zm0 1.301a1.184 1.184 0 100 2.369 1.184 1.184 0 000-2.369zm4.956-2.44a.598.598 0 110 1.195.598.598 0 010-1.195z" />
  );

  const normalHover = (
    <path d="M17.561 10.186a12.956 12.956 0 019.59-2.727l.37.043a12.941 12.941 0 018.707 4.852 12.942 12.942 0 012.727 9.589l-.075.645-1.402-.162a2.69 2.69 0 01-2.843 1.743l-5.525-.641c.02.542.05 1.187.085 1.949.112 2.394.281 6.01.286 10.317a4.807 4.807 0 01-1.427 3.433 4.835 4.835 0 01-3.436 1.421 4.62 4.62 0 01-3.389-1.452c-.989-1.045-1.507-2.53-1.422-4.072.367-6.583 1.526-10.788 2.064-12.437l-5.467-.635a2.687 2.687 0 01-2.369-2.35l-1.4-.162.074-.646a12.937 12.937 0 014.852-8.708zm5.632 12.654c-.453 1.343-1.71 5.596-2.087 12.356-.067 1.187.323 2.319 1.068 3.107a3.285 3.285 0 002.444 1.044c.951 0 1.845-.369 2.52-1.041a3.512 3.512 0 001.042-2.51c-.004-4.278-.172-7.877-.284-10.258-.04-.858-.073-1.58-.092-2.163zm-7.796-2.979a1.405 1.405 0 001.156.9l18.232 2.117a1.4 1.4 0 001.332-.61zM27 8.75a11.648 11.648 0 00-8.632 2.455 11.717 11.717 0 00-2.794 3.182c1.636.42 2.76 1.982 2.561 3.703a3.427 3.427 0 01-.185.758l7.833.91 11.938 1.387c.04-.654.02-1.303-.048-1.944-.062.003-.122.02-.184.02a4.07 4.07 0 01-4.043-4.535 4.065 4.065 0 011.076-2.311 11.628 11.628 0 00-7.153-3.582zm-.012 4.758a3.407 3.407 0 012.525-.717c.91.105 1.724.558 2.293 1.277.57.718.824 1.614.718 2.524a3.4 3.4 0 01-1.277 2.293 3.4 3.4 0 01-2.525.718 3.401 3.401 0 01-2.293-1.277 3.404 3.404 0 01-.718-2.525 3.405 3.405 0 011.277-2.293zm-12.015 2.071h-.012a11.712 11.712 0 00-.868 2.822h.005l2.492.289c.125-.233.222-.483.253-.75a2.131 2.131 0 00-1.87-2.361zm14.14-1.512c-.478 0-.938.159-1.318.46a2.117 2.117 0 00-.793 1.425 2.119 2.119 0 00.446 1.567c.353.445.86.728 1.424.793a2.125 2.125 0 002.361-1.87 2.119 2.119 0 00-.446-1.567 2.113 2.113 0 00-1.675-.808zm-8.985 2.684l.107.005a.784.784 0 11-.181 1.557.784.784 0 01.18-1.557zm15.245-3.362a2.75 2.75 0 00-.636 1.447 2.77 2.77 0 002.428 3.067c.102.012.204.01.306.01a11.664 11.664 0 00-2.098-4.524zm-12.91-3.24l.197.016a2.47 2.47 0 011.66.925c.412.52.597 1.17.52 1.83a2.467 2.467 0 01-.925 1.66 2.47 2.47 0 01-1.829.52 2.46 2.46 0 01-1.66-.926 2.47 2.47 0 01-.52-1.829 2.47 2.47 0 01.925-1.66 2.466 2.466 0 011.83-.52zm-.093 1.3c-.265 0-.52.09-.732.256a1.17 1.17 0 00-.44.791 1.18 1.18 0 001.039 1.312 1.189 1.189 0 001.312-1.039 1.18 1.18 0 00-1.179-1.32zm5.246-1.847l.098.003a.598.598 0 11-.137 1.188.598.598 0 01.137-1.188z" />
  );

  return isHovered ? normalHover : normal;
};

export default Mushroom;
