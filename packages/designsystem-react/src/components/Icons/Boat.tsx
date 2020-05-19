import React from 'react';
import {IconRawProps} from './Icon';

const Boat = React.forwardRef((svgProps: IconRawProps, ref: any) => {
  const {size = 48, className, color = 'black', hoverColor = 'black', isHovered = false, ...props} = svgProps;
  const isExtraSmall = size <= 38;
  const normal = (
    <path
      fillRule="evenodd"
      d="M40.61025,33.43545 L38.724,32.12895 C36.582,30.64545 33.71175,30.6597 31.584,32.1657 L30.864,32.67345 C30.10875,33.2082 29.09175,33.2127 28.32825,32.68545 L27.6075,32.1867 C25.464,30.70245 22.5945,30.71745 20.466,32.22345 L19.74975,32.73045 C18.993,33.2652 17.9745,33.27045 17.21175,32.7432 L16.4895,32.2437 C14.34675,30.7617 11.47725,30.77595 9.348,32.2812 L7.47375,33.60795 C7.137,33.8457 7.05825,34.3107 7.29525,34.6467 C7.4415,34.85295 7.67325,34.96245 7.908,34.9609652 C8.05575,34.9602 8.20425,34.91595 8.334,34.82445 L10.20825,33.4977 C11.8275,32.3532 14.01225,32.3427 15.642,33.4692 L16.36425,33.9687 C17.63925,34.8507 19.344,34.84245 20.61,33.9462 L21.327,33.4392 C22.94625,32.29545 25.12875,32.28195 26.75925,33.4122 L27.48075,33.91095 C28.75425,34.79295 30.46125,34.7847 31.7235,33.88995 L32.4435,33.38145 C34.06425,32.2347 36.2475,32.2257 37.87575,33.35445 L39.76275,34.66095 C40.10025,34.8942 40.56525,34.81095 40.79925,34.47195 C41.0325,34.1337 40.94925,33.66945 40.61025,33.43545 L40.61025,33.43545 Z M16.626,11.46795 L23.583,11.43195 L23.6145,17.5497 C23.13675,17.5677 22.659,17.60595 22.18575,17.68245 L15.57525,18.6597 L16.626,11.46795 Z M31.74,11.3892 L32.87025,18.5997 L25.8045,17.6637 C25.476,17.6142 25.14525,17.58195 24.8145,17.5602 L24.78225,11.4252 L31.74,11.3892 Z M12.9465,29.9427 C13.3065,29.9427 13.66425,29.9697 14.016,30.0207 C12.0525,27.09195 10.8465,23.78895 10.61775,20.60595 L22.37775,18.8667 C22.9305,18.77745 23.49525,18.7317 24.0555,18.7317 C24.579,18.7317 25.107,18.77145 25.647,18.8532 L37.84275,20.46945 C37.64775,23.63145 36.4905,26.91945 34.58325,29.85045 C34.78125,29.8347 34.98,29.82645 35.18025,29.82645 C35.454,29.82645 35.724,29.84595 35.9925,29.8752 C37.8735,26.7612 39.0915,23.09745 39.0722307,19.4217 L34.11075,18.76395 L32.76525,10.18395 L15.58725,10.27245 L14.3355,18.8427 L9.37725,19.5762 C9.396,23.2362 10.641,26.87145 12.54075,29.9577 C12.67575,29.95095 12.81075,29.9427 12.9465,29.9427 L12.9465,29.9427 Z"
    />
  );

  const normalHover = (
    <path
      fillRule="evenodd"
      d="M40.985175,33.06045 L39.098925,31.75395 C36.956925,30.27045 34.086675,30.2847 31.958925,31.7907 L31.238925,32.29845 C30.483675,32.8332 29.466675,32.8377 28.703175,32.31045 L27.982425,31.8117 C25.838925,30.32745 22.969425,30.34245 20.840925,31.84845 L20.124675,32.35545 C19.367925,32.8902 18.349425,32.89545 17.586675,32.3682 L16.865175,31.8687 C14.721675,30.3867 11.852175,30.40095 9.722925,31.9062 L7.848675,33.23295 C7.511925,33.4707 7.433175,33.9357 7.670175,34.2717 C7.816425,34.47795 8.048175,34.58745 8.282925,34.5859652 C8.430675,34.5852 8.579175,34.54095 8.708925,34.44945 L10.583175,33.1227 C12.202425,31.9782 14.387175,31.9677 16.016925,33.0942 L16.739175,33.5937 C18.014175,34.4757 19.718925,34.46745 20.984925,33.5712 L21.701925,33.0642 C23.321175,31.92045 25.503675,31.90695 27.134175,33.0372 L27.855675,33.53595 C29.129175,34.41795 30.836175,34.4097 32.098425,33.51495 L32.818425,33.00645 C34.439175,31.8597 36.622425,31.8507 38.250675,32.97945 L40.137675,34.28595 C40.475925,34.5192 40.940175,34.43595 41.174175,34.09695 C41.408175,33.7587 41.324175,33.29445 40.985175,33.06045 L40.985175,33.06045 Z M17.000925,9.2922 L23.957925,9.2562 L23.989425,15.3747 C23.511675,15.3927 23.033925,15.4302 22.560675,15.50745 L15.950175,16.4847 L17.000925,9.2922 Z M32.114925,9.2142 L33.245175,16.4247 L26.180175,15.4887 C25.850925,15.43845 25.520175,15.40695 25.189425,15.3852 L25.157175,9.2502 L32.114925,9.2142 Z M16.121925,30.1137 C15.968175,29.93895 15.815175,29.76195 15.665175,29.5797 C12.938175,26.26845 11.267925,22.25895 10.992675,18.4302 L22.752675,16.6917 C23.305425,16.60245 23.870175,16.5567 24.430425,16.5567 C24.953925,16.5567 25.481925,16.59645 26.021925,16.6782 L38.217675,18.29445 C37.956675,22.54095 36.002925,26.6742 33.413925,29.76645 C33.986925,29.5947 34.582425,29.4942 35.189925,29.46495 C37.726425,26.02395 39.470175,21.6432 39.4478902,17.2467 L34.485675,16.58895 L33.140175,8.0082 L15.962175,8.09745 L14.710425,16.6677 L9.752175,17.40045 C9.774675,21.81645 11.579175,26.19945 14.169675,29.6202 C14.843925,29.6967 15.499425,29.8602 16.121925,30.1137 L16.121925,30.1137 Z"
    />
  );

  return (
    <svg
      width={size}
      height={size}
      fill={isHovered ? hoverColor : color}
      viewBox="0 0 48 48"
      ref={ref}
      className={`${className} hnds-style-icon`}
      {...props}>
      {isHovered ? normalHover : normal}
    </svg>
  );
});

export default Boat;