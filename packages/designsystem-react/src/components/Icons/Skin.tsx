import React from 'react';
import {SvgPathProps} from './Icon';

const Skin: React.FC<SvgPathProps> = ({isExtraSmall, isHovered}: SvgPathProps): JSX.Element => {
  const normal = (
    <path
      fillRule="evenodd"
      d="M23.9878,37.9126 C23.4848,37.9126 23.0758,37.5036 23.0758,37.0006 C23.0758,36.4986 23.4848,36.0896 23.9878,36.0896 C24.4898,36.0896 24.8988,36.4986 24.8988,37.0006 C24.8988,37.5036 24.4898,37.9126 23.9878,37.9126 L23.9878,37.9126 Z M23.9878,34.9896 C22.8788,34.9896 21.9758,35.8916 21.9758,37.0006 C21.9758,38.1096 22.8788,39.0126 23.9878,39.0126 C25.0958,39.0126 25.9988,38.1096 25.9988,37.0006 C25.9988,35.8916 25.0958,34.9896 23.9878,34.9896 L23.9878,34.9896 Z M30.0928,37.9126 C29.5918,37.9126 29.1818,37.5036 29.1818,37.0006 C29.1818,36.4986 29.5918,36.0896 30.0928,36.0896 C30.5958,36.0896 31.0058,36.4986 31.0058,37.0006 C31.0058,37.5036 30.5958,37.9126 30.0928,37.9126 L30.0928,37.9126 Z M30.0928,34.9896 C28.9848,34.9896 28.0828,35.8916 28.0828,37.0006 C28.0828,38.1096 28.9848,39.0126 30.0928,39.0126 C31.2028,39.0126 32.1048,38.1096 32.1048,37.0006 C32.1048,35.8916 31.2028,34.9896 30.0928,34.9896 L30.0928,34.9896 Z M38.2848,31.8336 C38.2848,32.1456 38.0318,32.3996 37.7198,32.3996 L10.0298,32.3996 C9.7178,32.3996 9.4658,32.1456 9.4658,31.8336 L9.4658,19.0816 L21.8208,19.0826 L21.3128,20.7926 C19.8018,21.7476 19.0258,23.5356 19.3718,25.3266 C19.6958,27.0046 21.0368,28.3666 22.7068,28.7146 C23.0138,28.7786 23.3218,28.8106 23.6278,28.8106 C24.6258,28.8106 25.5918,28.4746 26.3738,27.8396 C27.3928,27.0096 27.9788,25.7806 27.9788,24.4666 C27.9788,23.1236 27.3608,21.8666 26.3078,21.0426 C26.3098,20.3616 26.3208,19.7196 26.3318,19.0816 L38.2848,19.0816 L38.2848,31.8336 Z M22.4108,21.6646 L25.3898,11.6306 C25.1788,14.2146 25.0078,17.4396 25.0078,21.3756 L25.0498,21.7486 L25.3358,21.9416 C26.1758,22.5096 26.6778,23.4536 26.6778,24.4666 C26.6778,25.3876 26.2678,26.2486 25.5528,26.8306 C24.8378,27.4126 23.8948,27.6346 22.9718,27.4426 C21.8078,27.1996 20.8748,26.2506 20.6488,25.0806 C20.3918,23.7536 21.0068,22.4336 22.1758,21.7936 L22.4108,21.6646 Z M26.3628,17.7826 C26.3818,17.1126 26.4058,16.4716 26.4328,15.8516 L39.4978,15.8516 L39.4978,14.8016 L26.4868,14.8016 C26.6798,11.2046 26.9908,8.5106 27.2108,6.6586 L27.3278,5.6566 C27.3718,5.2766 27.1218,4.9336 26.7478,4.8566 C26.3718,4.7796 26.0038,4.9996 25.8938,5.3686 L23.0918,14.8016 L8.2318,14.8016 L8.2318,15.8516 L22.7808,15.8516 L22.2078,17.7826 L8.1648,17.7826 L8.1648,31.8336 C8.1648,32.8626 9.0018,33.6996 10.0298,33.6996 L37.7198,33.6996 C38.7488,33.6996 39.5858,32.8626 39.5858,31.8336 L39.5858,17.7826 L26.3628,17.7826 Z M36.1998,37.9126 C35.6968,37.9126 35.2878,37.5036 35.2878,37.0006 C35.2878,36.4986 35.6968,36.0896 36.1998,36.0896 C36.7018,36.0896 37.1108,36.4986 37.1108,37.0006 C37.1108,37.5036 36.7018,37.9126 36.1998,37.9126 L36.1998,37.9126 Z M36.1998,34.9896 C35.0908,34.9896 34.1878,35.8916 34.1878,37.0006 C34.1878,38.1096 35.0908,39.0126 36.1998,39.0126 C37.3078,39.0126 38.2108,38.1096 38.2108,37.0006 C38.2108,35.8916 37.3078,34.9896 36.1998,34.9896 L36.1998,34.9896 Z M11.7758,37.9126 C11.2738,37.9126 10.8648,37.5036 10.8648,37.0006 C10.8648,36.4986 11.2738,36.0896 11.7758,36.0896 C12.2788,36.0896 12.6878,36.4986 12.6878,37.0006 C12.6878,37.5036 12.2788,37.9126 11.7758,37.9126 L11.7758,37.9126 Z M11.7758,34.9896 C10.6678,34.9896 9.7648,35.8916 9.7648,37.0006 C9.7648,38.1096 10.6678,39.0126 11.7758,39.0126 C12.8848,39.0126 13.7878,38.1096 13.7878,37.0006 C13.7878,35.8916 12.8848,34.9896 11.7758,34.9896 L11.7758,34.9896 Z M17.8828,37.9126 C17.3798,37.9126 16.9698,37.5036 16.9698,37.0006 C16.9698,36.4986 17.3798,36.0896 17.8828,36.0896 C18.3838,36.0896 18.7938,36.4986 18.7938,37.0006 C18.7938,37.5036 18.3838,37.9126 17.8828,37.9126 L17.8828,37.9126 Z M17.8828,34.9896 C16.7728,34.9896 15.8708,35.8916 15.8708,37.0006 C15.8708,38.1096 16.7728,39.0126 17.8828,39.0126 C18.9908,39.0126 19.8928,38.1096 19.8928,37.0006 C19.8928,35.8916 18.9908,34.9896 17.8828,34.9896 L17.8828,34.9896 Z"
    />
  );

  const normalHover = (
    <path
      fillRule="evenodd"
      d="M3.9009 34.0376C3.3989 34.0376 2.9899 33.6286 2.9899 33.1256 2.9899 32.6236 3.3989 32.2146 3.9009 32.2146 4.4039 32.2146 4.8129 32.6236 4.8129 33.1256 4.8129 33.6286 4.4039 34.0376 3.9009 34.0376M3.9009 31.1146C2.7929 31.1146 1.8899 32.0166 1.8899 33.1256 1.8899 34.2346 2.7929 35.1376 3.9009 35.1376 5.0099 35.1376 5.9129 34.2346 5.9129 33.1256 5.9129 32.0166 5.0099 31.1146 3.9009 31.1146M10.0073 34.0376C9.5043 34.0376 9.0953 33.6286 9.0953 33.1256 9.0953 32.6236 9.5043 32.2146 10.0073 32.2146 10.5093 32.2146 10.9183 32.6236 10.9183 33.1256 10.9183 33.6286 10.5093 34.0376 10.0073 34.0376M10.0073 31.1146C8.8983 31.1146 7.9953 32.0166 7.9953 33.1256 7.9953 34.2346 8.8983 35.1376 10.0073 35.1376 11.1153 35.1376 12.0183 34.2346 12.0183 33.1256 12.0183 32.0166 11.1153 31.1146 10.0073 31.1146M16.1128 34.0376C15.6108 34.0376 15.2018 33.6286 15.2018 33.1256 15.2018 32.6236 15.6108 32.2146 16.1128 32.2146 16.6158 32.2146 17.0248 32.6236 17.0248 33.1256 17.0248 33.6286 16.6158 34.0376 16.1128 34.0376M16.1128 31.1146C15.0048 31.1146 14.1018 32.0166 14.1018 33.1256 14.1018 34.2346 15.0048 35.1376 16.1128 35.1376 17.2218 35.1376 18.1248 34.2346 18.1248 33.1256 18.1248 32.0166 17.2218 31.1146 16.1128 31.1146M22.2183 34.0376C21.7163 34.0376 21.3073 33.6286 21.3073 33.1256 21.3073 32.6236 21.7163 32.2146 22.2183 32.2146 22.7213 32.2146 23.1303 32.6236 23.1303 33.1256 23.1303 33.6286 22.7213 34.0376 22.2183 34.0376M22.2183 31.1146C21.1103 31.1146 20.2073 32.0166 20.2073 33.1256 20.2073 34.2346 21.1103 35.1376 22.2183 35.1376 23.3273 35.1376 24.2303 34.2346 24.2303 33.1256 24.2303 32.0166 23.3273 31.1146 22.2183 31.1146M28.3247 34.0376C27.8217 34.0376 27.4127 33.6286 27.4127 33.1256 27.4127 32.6236 27.8217 32.2146 28.3247 32.2146 28.8267 32.2146 29.2357 32.6236 29.2357 33.1256 29.2357 33.6286 28.8267 34.0376 28.3247 34.0376M28.3247 31.1146C27.2157 31.1146 26.3127 32.0166 26.3127 33.1256 26.3127 34.2346 27.2157 35.1376 28.3247 35.1376 29.4327 35.1376 30.3357 34.2346 30.3357 33.1256 30.3357 32.0166 29.4327 31.1146 28.3247 31.1146M30.4097 27.959C30.4097 28.271 30.1567 28.525 29.8457 28.525L2.1557 28.525C1.8447 28.525 1.5907 28.271 1.5907 27.959L1.5907 15.207 14.3107 15.208 13.4917 16.885C11.9447 17.832 11.1467 19.64 11.4977 21.452 11.8217 23.13 13.1617 24.492 14.8317 24.84 15.1387 24.904 15.4467 24.936 15.7527 24.936 16.7507 24.936 17.7177 24.6 18.4987 23.964 19.5177 23.135 20.1037 21.906 20.1037 20.592 20.1037 19.283 19.5167 18.055 18.5137 17.231 18.6807 16.518 18.8417 15.851 18.9987 15.207L30.4097 15.207 30.4097 27.959zM17.1497 17.354L17.0907 17.817 17.4617 18.067C18.3017 18.634 18.8037 19.578 18.8037 20.592 18.8037 21.513 18.3927 22.374 17.6787 22.956 16.9627 23.537 16.0207 23.76 15.0967 23.567 13.9337 23.325 13.0007 22.376 12.7737 21.205 12.5167 19.879 13.1317 18.558 14.3007 17.918L14.4817 17.819 19.9507 6.623C19.2597 9.033 18.3187 12.325 17.1497 17.354L17.1497 17.354zM19.3197 13.907C19.4937 13.219 19.6577 12.586 19.8177 11.977L31.6227 11.977 31.6227 10.927 20.0967 10.927C20.5257 9.335 20.9037 8.017 21.2237 6.898 21.8707 4.643 22.2977 3.154 22.4527 1.782 22.4967 1.402 22.2467 1.058 21.8727.981 21.5227.91 21.1797 1.096 21.0457 1.42L16.4017 10.927.3567 10.927.3567 11.977 15.8887 11.977 14.9457 13.908.2897 13.907.2897 27.959C.2897 28.988 1.1267 29.825 2.1557 29.825L29.8457 29.825C30.8737 29.825 31.7107 28.988 31.7107 27.959L31.7107 13.907 19.3197 13.907z"
      transform="translate(7.87 3.88)"
    />
  );

  return isHovered ? normalHover : normal;
};

export default Skin;
