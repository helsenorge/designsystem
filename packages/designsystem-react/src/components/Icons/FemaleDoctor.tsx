import React from 'react';
import {IconRawProps} from './Icon';

const FemaleDoctor = React.forwardRef((svgProps: IconRawProps, ref: any) => {
  const {size = 48, color = 'black', hoverColor = 'black', isHovered = false, ...props} = svgProps;
  const isExtraSmall = size <= 38;
  const normal = (
    <path
      fillRule="evenodd"
      d="M16.0322,15.0217 L16.2942,15.0217 L16.2942,16.6127 L16.0322,16.6127 C15.5932,16.6127 15.2362,16.2557 15.2362,15.8177 C15.2362,15.3787 15.5932,15.0217 16.0322,15.0217 L16.0322,15.0217 Z M17.5942,15.0217 L18.3212,15.0217 C19.8472,15.0217 21.1782,14.1687 21.8632,12.9137 C22.5602,14.1697 23.9002,15.0217 25.4362,15.0217 L30.1562,15.0217 L30.1562,17.0407 C30.1562,20.3947 27.4282,23.1237 24.0742,23.1237 L23.6762,23.1237 C20.3222,23.1237 17.5942,20.3947 17.5942,17.0407 L17.5942,15.0217 Z M17.5942,13.7367 C17.5942,10.3827 20.3222,7.6547 23.6762,7.6547 L24.0742,7.6547 C27.4282,7.6547 30.1562,10.3827 30.1562,13.7367 L30.1562,14.0217 L25.4362,14.0217 C23.7352,14.0217 22.3512,12.6377 22.3512,10.9377 L22.3512,10.7237 L21.3512,10.7237 L21.3512,10.9907 C21.3512,12.6627 19.9922,14.0217 18.3212,14.0217 L17.5942,14.0217 L17.5942,13.7367 Z M23.8752,4.3857 C25.1602,4.3857 26.2042,5.4097 26.2522,6.6837 C25.5632,6.4697 24.8322,6.3547 24.0742,6.3547 L23.6762,6.3547 C22.9182,6.3547 22.1872,6.4697 21.4982,6.6837 C21.5462,5.4097 22.5902,4.3857 23.8752,4.3857 L23.8752,4.3857 Z M31.4562,15.0217 L31.7182,15.0217 C32.1572,15.0217 32.5132,15.3787 32.5132,15.8177 C32.5132,16.2557 32.1572,16.6127 31.7182,16.6127 L31.4562,16.6127 L31.4562,15.0217 Z M16.0322,17.6127 L16.3232,17.6127 C16.6172,21.4167 19.7992,24.4227 23.6762,24.4227 L24.0742,24.4227 C27.9512,24.4227 31.1332,21.4167 31.4272,17.6127 L31.7182,17.6127 C32.7082,17.6127 33.5132,16.8077 33.5132,15.8177 C33.5132,14.8277 32.7082,14.0217 31.7182,14.0217 L31.4562,14.0217 L31.4562,13.7367 C31.4562,10.9267 29.8772,8.4797 27.5612,7.2327 L27.5612,6.7717 C27.5612,4.7397 25.9072,3.0857 23.8752,3.0857 C21.8432,3.0857 20.1892,4.7397 20.1892,6.7717 L20.1892,7.2327 C17.8722,8.4797 16.2942,10.9267 16.2942,13.7367 L16.2942,14.0217 L16.0322,14.0217 C15.0422,14.0217 14.2362,14.8277 14.2362,15.8177 C14.2362,16.8077 15.0422,17.6127 16.0322,17.6127 L16.0322,17.6127 Z M26.5572,17.8467 C26.8342,17.8467 27.0592,17.6217 27.0592,17.3437 C27.0592,17.0667 26.8342,16.8417 26.5572,16.8417 C26.2792,16.8417 26.0542,17.0667 26.0542,17.3437 C26.0542,17.6217 26.2792,17.8467 26.5572,17.8467 L26.5572,17.8467 Z M21.2632,17.8467 C21.5412,17.8467 21.7662,17.6217 21.7662,17.3437 C21.7662,17.0667 21.5412,16.8417 21.2632,16.8417 C20.9862,16.8417 20.7612,17.0667 20.7612,17.3437 C20.7612,17.6217 20.9862,17.8467 21.2632,17.8467 L21.2632,17.8467 Z M34.5112,41.5957 L13.2392,41.5957 L13.2392,34.9117 C13.2392,31.2727 15.5172,28.0037 18.8632,26.7017 L18.8632,32.1997 C18.0352,32.4027 17.4172,33.1467 17.4172,34.0357 C17.4172,35.0817 18.2672,35.9327 19.3132,35.9327 C20.3582,35.9327 21.2092,35.0817 21.2092,34.0357 C21.2092,33.1467 20.5912,32.4027 19.7622,32.1997 L19.7622,26.6977 C22.3562,27.8407 25.4282,27.8367 28.0172,26.6847 L28.0172,30.2277 C27.0572,30.4357 26.3362,31.2897 26.3362,32.3107 L26.3362,35.2837 L27.2352,35.2837 L27.2352,32.3107 C27.2352,31.6307 27.7882,31.0787 28.4682,31.0787 C29.1472,31.0787 29.6992,31.6307 29.6992,32.3107 L29.6992,35.2837 L30.5992,35.2837 L30.5992,32.3107 C30.5992,31.2897 29.8772,30.4357 28.9172,30.2277 L28.9172,26.7127 C32.2462,28.0237 34.5112,31.2847 34.5112,34.9117 L34.5112,41.5957 Z M19.3132,33.0407 C19.8622,33.0407 20.3092,33.4867 20.3092,34.0357 C20.3092,34.5847 19.8622,35.0317 19.3132,35.0317 C18.7632,35.0317 18.3172,34.5847 18.3172,34.0357 C18.3172,33.4867 18.7632,33.0407 19.3132,33.0407 L19.3132,33.0407 Z M28.5182,25.1987 L28.2642,25.1257 L28.0322,25.2497 C25.4872,26.6047 22.2622,26.6047 19.7182,25.2497 L19.4852,25.1257 L19.2312,25.1987 C14.9372,26.4447 11.9382,30.4387 11.9382,34.9117 L11.9382,42.8957 L35.8112,42.8957 L35.8112,34.9117 C35.8112,30.4387 32.8122,26.4447 28.5182,25.1987 L28.5182,25.1987 Z"
    />
  );

  const normalHover = (
    <path
      fillRule="evenodd"
      d="M26.5569,17.8469 C26.8339,17.8469 27.0589,17.6219 27.0589,17.3439 C27.0589,17.0669 26.8339,16.8419 26.5569,16.8419 C26.2799,16.8419 26.0549,17.0669 26.0549,17.3439 C26.0549,17.6219 26.2799,17.8469 26.5569,17.8469 L26.5569,17.8469 Z M23.8359,21.9709 C24.8569,21.9709 25.6849,21.1429 25.6849,20.1219 L21.9879,20.1219 C21.9879,21.1429 22.8149,21.9709 23.8359,21.9709 L23.8359,21.9709 Z M21.2639,17.8469 C21.5409,17.8469 21.7659,17.6219 21.7659,17.3439 C21.7659,17.0669 21.5409,16.8419 21.2639,16.8419 C20.9859,16.8419 20.7619,17.0669 20.7619,17.3439 C20.7619,17.6219 20.9859,17.8469 21.2639,17.8469 L21.2639,17.8469 Z M34.5119,41.5959 L13.2389,41.5959 L13.2389,34.9109 C13.2389,31.2729 15.5169,28.0039 18.8629,26.7009 L18.8629,32.1999 C18.0349,32.4029 17.4169,33.1459 17.4169,34.0359 C17.4169,35.0809 18.2669,35.9319 19.3129,35.9319 C20.3579,35.9319 21.2089,35.0809 21.2089,34.0359 C21.2089,33.1459 20.5909,32.4029 19.7629,32.1999 L19.7629,26.6979 C22.3559,27.8409 25.4279,27.8369 28.0169,26.6849 L28.0169,30.2279 C27.0579,30.4349 26.3359,31.2889 26.3359,32.3099 L26.3359,35.2839 L27.2359,35.2839 L27.2359,32.3099 C27.2359,31.6309 27.7879,31.0779 28.4679,31.0779 C29.1469,31.0779 29.6999,31.6309 29.6999,32.3099 L29.6999,35.2839 L30.5989,35.2839 L30.5989,32.3099 C30.5989,31.2889 29.8769,30.4349 28.9179,30.2279 L28.9179,26.7119 C32.2459,28.0229 34.5119,31.2849 34.5119,34.9109 L34.5119,41.5959 Z M19.3129,33.0399 C19.8619,33.0399 20.3089,33.4869 20.3089,34.0359 C20.3089,34.5849 19.8619,35.0319 19.3129,35.0319 C18.7639,35.0319 18.3169,34.5849 18.3169,34.0359 C18.3169,33.4869 18.7639,33.0399 19.3129,33.0399 L19.3129,33.0399 Z M28.5179,25.1989 L28.2649,25.1259 L28.0319,25.2499 C25.4879,26.6049 22.2629,26.6049 19.7189,25.2499 L19.4849,25.1259 L19.2319,25.1989 C14.9379,26.4449 11.9389,30.4379 11.9389,34.9109 L11.9389,42.8949 L35.8109,42.8949 L35.8109,34.9109 C35.8109,30.4379 32.8119,26.4449 28.5179,25.1989 L28.5179,25.1989 Z M16.0319,15.0219 L16.2939,15.0219 L16.2939,16.6129 L16.0319,16.6129 C15.5929,16.6129 15.2359,16.2559 15.2359,15.8179 C15.2359,15.3789 15.5929,15.0219 16.0319,15.0219 L16.0319,15.0219 Z M17.5939,15.0219 L18.3209,15.0219 C19.8479,15.0219 21.1789,14.1689 21.8629,12.9139 C22.5599,14.1699 23.9009,15.0219 25.4359,15.0219 L30.1559,15.0219 L30.1559,17.0399 C30.1559,20.3939 27.4279,23.1229 24.0739,23.1229 L23.6759,23.1229 C20.3219,23.1229 17.5939,20.3939 17.5939,17.0399 L17.5939,15.0219 Z M17.5939,13.7369 C17.5939,10.3829 20.3219,7.6549 23.6759,7.6549 L24.0739,7.6549 C27.4279,7.6549 30.1559,10.3829 30.1559,13.7369 L30.1559,14.0219 L25.4359,14.0219 C23.7349,14.0219 22.3519,12.6379 22.3519,10.9369 L22.3519,10.7239 L21.3519,10.7239 L21.3519,10.9909 C21.3519,12.6619 19.9929,14.0219 18.3209,14.0219 L17.5939,14.0219 L17.5939,13.7369 Z M23.8749,4.3859 C25.1609,4.3859 26.2039,5.4089 26.2519,6.6829 C25.5629,6.4699 24.8319,6.3549 24.0739,6.3549 L23.6759,6.3549 C22.9179,6.3549 22.1869,6.4699 21.4979,6.6829 C21.5459,5.4089 22.5899,4.3859 23.8749,4.3859 L23.8749,4.3859 Z M31.4559,15.0219 L31.7179,15.0219 C32.1569,15.0219 32.5139,15.3789 32.5139,15.8179 C32.5139,16.2559 32.1569,16.6129 31.7179,16.6129 L31.4559,16.6129 L31.4559,15.0219 Z M16.0319,17.6129 L16.3229,17.6129 C16.6169,21.4159 19.7989,24.4229 23.6759,24.4229 L24.0739,24.4229 C27.9519,24.4229 31.1329,21.4159 31.4279,17.6129 L31.7179,17.6129 C32.7079,17.6129 33.5139,16.8069 33.5139,15.8179 C33.5139,14.8269 32.7079,14.0219 31.7179,14.0219 L31.4559,14.0219 L31.4559,13.7369 C31.4559,10.9269 29.8779,8.4799 27.5609,7.2329 L27.5609,6.7719 C27.5609,4.7399 25.9079,3.0859 23.8749,3.0859 C21.8429,3.0859 20.1889,4.7399 20.1889,6.7719 L20.1889,7.2329 C17.8719,8.4799 16.2939,10.9269 16.2939,13.7369 L16.2939,14.0219 L16.0319,14.0219 C15.0419,14.0219 14.2359,14.8269 14.2359,15.8179 C14.2359,16.8069 15.0419,17.6129 16.0319,17.6129 L16.0319,17.6129 Z"
    />
  );

  return (
    <svg
      width={size}
      height={size}
      fill={isHovered ? hoverColor : color}
      viewBox="0 0 48 48"
      ref={ref}
      className="icon"
      {...props}>
      {isHovered ? normalHover : normal}
    </svg>
  );
});

export default FemaleDoctor;
