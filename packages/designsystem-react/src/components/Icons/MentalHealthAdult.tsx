import React from 'react';
import {SvgPathProps} from './Icon';

const MentalHealthAdult: React.FC<SvgPathProps> = ({isExtraSmall, isHovered}: SvgPathProps): JSX.Element => {
  const normal = (
    <g fillRule="evenodd" transform="translate(10 7)">
      <path d="M26.3005,19.616 C26.1435,19.862 25.8865,20.003 25.5945,20.003 L23.7375,20.003 L23.7375,22.043 C23.7375,24.966 21.3615,27.343 18.4395,27.343 L17.7885,27.343 L17.7885,32.527 L5.6475,32.527 L5.6475,27.13 C5.6475,24.529 4.7295,22.715 3.7585,20.794 C2.6805,18.661 1.5665,16.456 1.5665,12.823 C1.5665,7.364 5.7875,1.472 12.6095,1.472 C18.0045,1.472 23.7375,5.528 23.7375,13.044 L23.7375,13.187 L26.3545,18.812 C26.4775,19.077 26.4575,19.37 26.3005,19.616 M27.5325,18.263 L25.0375,12.898 C24.9645,4.631 18.5995,0.172 12.6095,0.172 C5.8025,0.172 0.2655,5.847 0.2655,12.823 C0.2655,16.765 1.5045,19.218 2.5985,21.381 C3.5365,23.236 4.3465,24.839 4.3465,27.13 L4.3465,33.828 L19.0895,33.828 L19.0895,28.611 C22.4245,28.284 25.0385,25.463 25.0385,22.043 L25.0385,21.303 L25.5945,21.303 C26.3275,21.303 27.0015,20.933 27.3965,20.314 C27.7915,19.696 27.8425,18.929 27.5325,18.263" />
      <path d="M10.321 12.1335C10.102 12.6485 9.696 13.0475 9.176 13.2575 8.659 13.4665 8.089 13.4605 7.573 13.2425 7.058 13.0245 6.659 12.6175 6.449 12.0985 6.24 11.5795 6.245 11.0105 6.464 10.4945 6.682 9.9805 7.089 9.5805 7.608 9.3705 7.861 9.2695 8.127 9.2175 8.392 9.2175 8.671 9.2175 8.948 9.2745 9.212 9.3855 9.726 9.6045 10.126 10.0105 10.336 10.5295 10.545 11.0485 10.54 11.6175 10.321 12.1335L10.321 12.1335zM11.995 9.3205L11.03 9.7105C10.783 9.3015 10.448 8.9605 10.044 8.7065L10.45 7.7485 9.53 7.3585 9.125 8.3155C8.661 8.1995 8.182 8.1955 7.716 8.3025L7.327 7.3385 6.399 7.7115 6.789 8.6765C6.38 8.9245 6.039 9.2595 5.784 9.6635L4.827 9.2565 4.436 10.1765 5.393 10.5835C5.279 11.0475 5.275 11.5255 5.381 11.9915L4.417 12.3795 4.79 13.3075 5.755 12.9185C6.003 13.3275 6.338 13.6675 6.742 13.9225L6.335 14.8795 7.255 15.2705 7.662 14.3135C7.903 14.3715 8.146 14.4105 8.392 14.4105 8.62 14.4105 8.845 14.3785 9.07 14.3275L9.458 15.2895 10.385 14.9165 9.997 13.9515C10.405 13.7045 10.746 13.3695 11.001 12.9655L11.958 13.3715 12.348 12.4515 11.391 12.0455C11.506 11.5815 11.51 11.1035 11.405 10.6375L12.368 10.2485 11.995 9.3205zM12.6775 6.7029C12.5945 6.2579 12.8895 5.8279 13.3345 5.7449 13.3855 5.7359 13.4355 5.7309 13.4855 5.7309 13.8725 5.7309 14.2185 6.0079 14.2925 6.4019 14.3325 6.6179 14.2865 6.8359 14.1625 7.0159 14.0385 7.1979 13.8515 7.3189 13.6365 7.3599 13.1865 7.4379 12.7605 7.1479 12.6775 6.7029M15.2755 6.2189C15.2475 6.0689 15.1975 5.9309 15.1365 5.7979L15.8365 5.1979 15.1865 4.4379 14.4885 5.0359C14.2425 4.8739 13.9575 4.7759 13.6575 4.7479L13.4885 3.8389 12.5055 4.0219 12.6745 4.9319C12.4055 5.0659 12.1745 5.2599 12.0035 5.4999L11.1365 5.1929 10.8045 6.1369 11.6735 6.4429C11.6645 6.5889 11.6675 6.7369 11.6955 6.8869 11.7235 7.0359 11.7745 7.1749 11.8345 7.3069L11.1335 7.9059 11.7835 8.6659 12.4865 8.0659C12.7315 8.2279 13.0135 8.3299 13.3145 8.3589L13.4835 9.2659 14.4655 9.0819 14.2965 8.1749C14.5615 8.0429 14.7925 7.8529 14.9675 7.6059L15.8335 7.9119 16.1675 6.9689 15.2975 6.6619C15.3065 6.5149 15.3035 6.3669 15.2755 6.2189M18.3796 13.3201C17.8166 13.3201 17.3586 13.7761 17.3586 14.3401 17.3586 14.9031 17.8166 15.3601 18.3796 15.3601 18.9426 15.3601 19.4006 14.9031 19.4006 14.3401 19.4006 13.7761 18.9426 13.3201 18.3796 13.3201" />
    </g>
  );

  const normalHover = (
    <g fillRule="evenodd" transform="translate(10 7)">
      <path d="M26.3,19.616 C26.144,19.862 25.886,20.003 25.594,20.003 L23.738,20.003 L23.738,22.043 C23.738,24.966 21.362,27.343 18.439,27.343 L17.788,27.343 L17.788,32.527 L5.648,32.527 L5.648,27.13 C5.648,24.529 4.73,22.715 3.759,20.794 C2.68,18.661 1.566,16.456 1.566,12.823 C1.566,7.364 5.787,1.472 12.609,1.472 C18.004,1.472 23.738,5.528 23.738,13.044 L23.738,13.187 L26.354,18.811 C26.477,19.077 26.457,19.37 26.3,19.616 M27.533,18.263 L25.038,12.898 C24.965,4.631 18.6,0.172 12.609,0.172 C5.802,0.172 0.265,5.847 0.265,12.823 C0.265,16.765 1.505,19.218 2.599,21.381 C3.537,23.236 4.347,24.839 4.347,27.13 L4.347,33.828 L19.089,33.828 L19.089,28.611 C22.424,28.284 25.039,25.463 25.039,22.043 L25.039,21.303 L25.594,21.303 C26.327,21.303 27.001,20.933 27.397,20.315 C27.791,19.697 27.842,18.929 27.533,18.263" />
      <path d="M8.0715 13.3845C6.9285 13.2075 6.1445 12.1345 6.3215 10.9935 6.4815 9.9595 7.3765 9.2185 8.3905 9.2185 8.4975 9.2185 8.6055 9.2275 8.7135 9.2435 9.8545 9.4205 10.6385 10.4935 10.4625 11.6345L10.4625 11.6355C10.3765 12.1885 10.0805 12.6745 9.6295 13.0055 9.1765 13.3355 8.6235 13.4685 8.0715 13.3845M11.1465 9.9205L11.9855 9.3055 11.3935 8.4985 10.5555 9.1135C10.2165 8.7775 9.8075 8.5295 9.3535 8.3805L9.5125 7.3535 8.5245 7.1985 8.3655 8.2305C7.8805 8.2355 7.4165 8.3525 6.9995 8.5645L6.3835 7.7215 5.5765 8.3115 6.1925 9.1535C5.8645 9.4855 5.6125 9.8925 5.4605 10.3545L4.4315 10.1945 4.2775 11.1825 5.3045 11.3425C5.3085 11.8205 5.4225 12.2845 5.6385 12.7095L4.7995 13.3225 5.3885 14.1295 6.2285 13.5165C6.5695 13.8525 6.9775 14.1005 7.4315 14.2475L7.2715 15.2755 8.2595 15.4295 8.4195 14.4085C8.8975 14.4055 9.3665 14.2925 9.7935 14.0745L10.4015 14.9065 11.2085 14.3175 10.5935 13.4775C10.9285 13.1375 11.1775 12.7305 11.3255 12.2765L12.3535 12.4345 12.5065 11.4465 11.4785 11.2875C11.4755 10.8105 11.3635 10.3455 11.1465 9.9205M13.4846 5.7312C13.5406 5.7312 13.5956 5.7372 13.6516 5.7482 14.0946 5.8392 14.3806 6.2742 14.2906 6.7172 14.1976 7.1612 13.7636 7.4462 13.3186 7.3572 12.8766 7.2652 12.5896 6.8302 12.6806 6.3862 12.7606 5.9992 13.1036 5.7312 13.4846 5.7312L13.4846 5.7312zM15.8596 5.2382L14.9866 5.5282C14.8216 5.2852 14.5936 5.0872 14.3276 4.9472L14.5136 4.0422 13.5356 3.8382 13.3486 4.7442C13.0476 4.7662 12.7596 4.8582 12.5106 5.0172L11.8246 4.4062 11.1606 5.1522 11.8496 5.7662C11.7866 5.8972 11.7336 6.0362 11.7026 6.1842 11.6726 6.3342 11.6666 6.4812 11.6726 6.6272L10.7966 6.9172 11.1106 7.8662 11.9846 7.5772C12.1496 7.8202 12.3776 8.0182 12.6436 8.1582L12.4576 9.0632 13.4356 9.2642 13.6256 8.3492C13.9216 8.3262 14.1966 8.2282 14.4426 8.0742L15.1456 8.6992 15.8096 7.9512 15.1076 7.3272C15.1706 7.1962 15.2386 7.0692 15.2686 6.9202L15.2686 6.9192C15.2996 6.7712 15.3056 6.6242 15.2986 6.4782L16.1736 6.1872 15.8596 5.2382zM18.425 13.3201C17.862 13.3201 17.404 13.7761 17.404 14.3401 17.404 14.9031 17.862 15.3601 18.425 15.3601 18.987 15.3601 19.445 14.9031 19.445 14.3401 19.445 13.7761 18.987 13.3201 18.425 13.3201" />
    </g>
  );

  return isHovered ? normalHover : normal;
};

export default MentalHealthAdult;
