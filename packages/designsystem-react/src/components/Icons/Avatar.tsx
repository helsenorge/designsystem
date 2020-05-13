import React from 'react';
import {IconRawProps} from './Icon';

const Avatar = React.forwardRef((svgProps: IconRawProps, ref: any) => {
  const {size = 48, color = 'black', hoverColor = 'black', isHovered = false, ...props} = svgProps;
  const isExtraSmall = size <= 38;
  const normal = (
    <path
      fillRule="evenodd"
      d="M26.6821,15.1507 C26.9591,15.1507 27.1841,14.9257 27.1841,14.6477 C27.1841,14.3707 26.9591,14.1457 26.6821,14.1457 C26.4041,14.1457 26.1791,14.3707 26.1791,14.6477 C26.1791,14.9257 26.4041,15.1507 26.6821,15.1507 L26.6821,15.1507 Z M21.3891,15.1507 C21.6661,15.1507 21.8911,14.9257 21.8911,14.6477 C21.8911,14.3707 21.6661,14.1457 21.3891,14.1457 C21.1111,14.1457 20.8861,14.3707 20.8861,14.6477 C20.8861,14.9257 21.1111,15.1507 21.3891,15.1507 L21.3891,15.1507 Z M34.6361,40.6757 L31.4111,40.6757 L31.4111,33.7287 L30.5121,33.7287 L30.5121,40.6757 L17.4881,40.6757 L17.4881,33.7287 L16.5881,33.7287 L16.5881,40.6757 L13.3641,40.6757 L13.3641,32.2147 C13.3641,28.4017 15.8641,24.9887 19.4751,23.8257 C22.2701,25.2187 25.7291,25.2187 28.5251,23.8257 C32.1361,24.9887 34.6361,28.4017 34.6361,32.2147 L34.6361,40.6757 Z M28.6431,22.5027 L28.3901,22.4297 L28.1571,22.5537 C25.6141,23.9077 22.3861,23.9077 19.8431,22.5537 L19.6101,22.4297 L19.3561,22.5027 C15.0621,23.7487 12.0631,27.7417 12.0631,32.2147 L12.0631,41.9757 L35.9361,41.9757 L35.9361,32.2147 C35.9361,27.7417 32.9371,23.7487 28.6431,22.5027 L28.6431,22.5027 Z M16.1571,12.3257 L16.4181,12.3257 L16.4181,13.9167 L16.1571,13.9167 C15.7181,13.9167 15.3611,13.5597 15.3611,13.1207 C15.3611,12.6827 15.7181,12.3257 16.1571,12.3257 L16.1571,12.3257 Z M17.7181,12.3257 L18.4461,12.3257 C19.9731,12.3257 21.3041,11.4727 21.9881,10.2177 C22.6851,11.4737 24.0251,12.3257 25.5611,12.3257 L30.2811,12.3257 L30.2811,14.3437 C30.2811,17.6977 27.5531,20.4267 24.1991,20.4267 L23.8011,20.4267 C20.4471,20.4267 17.7181,17.6977 17.7181,14.3437 L17.7181,12.3257 Z M17.7181,11.0407 C17.7181,7.6867 20.4471,4.9587 23.8011,4.9587 L24.1991,4.9587 C27.5531,4.9587 30.2811,7.6867 30.2811,11.0407 L30.2811,11.3257 L25.5611,11.3257 C23.8601,11.3257 22.4761,9.9417 22.4761,8.2407 L22.4761,8.0277 L21.4761,8.0277 L21.4761,8.2947 C21.4761,9.9657 20.1171,11.3257 18.4461,11.3257 L17.7181,11.3257 L17.7181,11.0407 Z M31.5811,12.3257 L31.8431,12.3257 C32.2821,12.3257 32.6391,12.6827 32.6391,13.1207 C32.6391,13.5597 32.2821,13.9167 31.8431,13.9167 L31.5811,13.9167 L31.5811,12.3257 Z M16.1571,14.9167 L16.4481,14.9167 C16.7421,18.7197 19.9231,21.7267 23.8011,21.7267 L24.1991,21.7267 C28.0761,21.7267 31.2581,18.7197 31.5521,14.9167 L31.8431,14.9167 C32.8331,14.9167 33.6391,14.1107 33.6391,13.1207 C33.6391,12.1307 32.8331,11.3257 31.8431,11.3257 L31.5811,11.3257 L31.5811,11.0407 C31.5811,6.9697 28.2691,3.6587 24.1991,3.6587 L23.8011,3.6587 C19.7301,3.6587 16.4181,6.9697 16.4181,11.0407 L16.4181,11.3257 L16.1571,11.3257 C15.1661,11.3257 14.3611,12.1307 14.3611,13.1207 C14.3611,14.1107 15.1661,14.9167 16.1571,14.9167 L16.1571,14.9167 Z"
    />
  );

  const normalHover = (
    <path
      fillRule="evenodd"
      d="M23.9614,19.2742 C24.9824,19.2742 25.8104,18.4462 25.8104,17.4262 L22.1124,17.4262 C22.1124,18.4462 22.9404,19.2742 23.9614,19.2742 L23.9614,19.2742 Z M15.3614,13.1212 C15.3614,13.5602 15.7184,13.9172 16.1574,13.9172 L16.4184,13.9172 L16.4184,12.3252 L16.1574,12.3252 C15.7184,12.3252 15.3614,12.6822 15.3614,13.1212 L15.3614,13.1212 Z M17.7184,14.3442 C17.7184,17.6982 20.4474,20.4262 23.8014,20.4262 L24.1984,20.4262 C27.5524,20.4262 30.2814,17.6982 30.2814,14.3442 L30.2814,12.3252 L25.5614,12.3252 C24.0254,12.3252 22.6854,11.4742 21.9874,10.2182 C21.3034,11.4722 19.9724,12.3252 18.4464,12.3252 L17.7184,12.3252 L17.7184,14.3442 Z M17.7184,11.3252 L18.4464,11.3252 C20.1174,11.3252 21.4764,9.9662 21.4764,8.2952 L21.4764,8.0272 L22.4764,8.0272 L22.4764,8.2412 C22.4764,9.9412 23.8604,11.3252 25.5614,11.3252 L30.2814,11.3252 L30.2814,11.0412 C30.2814,7.6872 27.5524,4.9582 24.1984,4.9582 L23.8014,4.9582 C20.4474,4.9582 17.7184,7.6872 17.7184,11.0412 L17.7184,11.3252 Z M31.5814,13.9172 L31.8424,13.9172 C32.2814,13.9172 32.6384,13.5602 32.6384,13.1212 C32.6384,12.6822 32.2814,12.3252 31.8424,12.3252 L31.5814,12.3252 L31.5814,13.9172 Z M14.3614,13.1212 C14.3614,12.1302 15.1674,11.3252 16.1574,11.3252 L16.4184,11.3252 L16.4184,11.0412 C16.4184,6.9702 19.7304,3.6582 23.8014,3.6582 L24.1984,3.6582 C28.2694,3.6582 31.5814,6.9702 31.5814,11.0412 L31.5814,11.3252 L31.8424,11.3252 C32.8334,11.3252 33.6384,12.1302 33.6384,13.1212 C33.6384,14.1112 32.8334,14.9172 31.8424,14.9172 L31.5524,14.9172 C31.2584,18.7202 28.0764,21.7262 24.1984,21.7262 L23.8014,21.7262 C19.9234,21.7262 16.7414,18.7202 16.4474,14.9172 L16.1574,14.9172 C15.1674,14.9172 14.3614,14.1112 14.3614,13.1212 L14.3614,13.1212 Z M34.6364,32.2152 C34.6364,28.4022 32.1364,24.9892 28.5244,23.8262 C25.7294,25.2182 22.2704,25.2182 19.4754,23.8262 C15.8634,24.9892 13.3634,28.4022 13.3634,32.2152 L13.3634,40.6762 L16.5874,40.6762 L16.5874,33.7292 L17.4884,33.7292 L17.4884,40.6762 L30.5114,40.6762 L30.5114,33.7292 L31.4124,33.7292 L31.4124,40.6762 L34.6364,40.6762 L34.6364,32.2152 Z M35.9364,32.2152 L35.9364,41.9762 L12.0634,41.9762 L12.0634,32.2152 C12.0634,27.7422 15.0624,23.7482 19.3564,22.5032 L19.6104,22.4292 L19.8434,22.5532 C22.3864,23.9082 25.6134,23.9082 28.1564,22.5532 L28.3894,22.4292 L28.6434,22.5032 C32.9374,23.7482 35.9364,27.7422 35.9364,32.2152 L35.9364,32.2152 Z M21.3884,15.1502 C21.6664,15.1502 21.8914,14.9252 21.8914,14.6482 C21.8914,14.3702 21.6664,14.1462 21.3884,14.1462 C21.1114,14.1462 20.8864,14.3702 20.8864,14.6482 C20.8864,14.9252 21.1114,15.1502 21.3884,15.1502 L21.3884,15.1502 Z M26.1794,14.6482 C26.1794,14.3702 26.4044,14.1462 26.6824,14.1462 C26.9594,14.1462 27.1844,14.3702 27.1844,14.6482 C27.1844,14.9252 26.9594,15.1502 26.6824,15.1502 C26.4044,15.1502 26.1794,14.9252 26.1794,14.6482 L26.1794,14.6482 Z"
    />
  );

  const simplified = (
    <path
      fillRule="evenodd"
      d="M17.9962105,15.132 L18.5444211,15.132 C20.0122105,15.132 21.3006316,14.3564211 22.0231579,13.1930526 C22.7595789,14.3576842 24.0581053,15.132 25.5334737,15.132 L30.0037895,15.132 L30.0037895,16.98 C30.0037895,20.1821053 27.3966316,22.7892632 24.1945263,22.7892632 L23.8054737,22.7892632 C20.6021053,22.7892632 17.9962105,20.1821053 17.9962105,16.98 L17.9962105,15.132 Z M17.9962105,13.7349474 C17.9962105,10.5315789 20.6021053,7.92694737 23.8054737,7.92694737 L24.1945263,7.92694737 C27.3966316,7.92694737 30.0037895,10.5315789 30.0037895,13.7349474 L30.0037895,13.8789474 L25.5334737,13.8789474 C23.9368421,13.8789474 22.6395789,12.5804211 22.6395789,10.9850526 L22.6395789,10.7753684 L21.3865263,10.7753684 L21.3865263,11.0368421 C21.3865263,12.6031579 20.1107368,13.8789474 18.5444211,13.8789474 L17.9962105,13.8789474 L17.9962105,13.7349474 Z M23.8054737,24.3997895 L24.1945263,24.3997895 C28.2858947,24.3997895 31.6143158,21.0713684 31.6143158,16.98 L31.6143158,13.7349474 C31.6143158,9.64357895 28.2858947,6.31642105 24.1945263,6.31642105 L23.8054737,6.31642105 C19.7128421,6.31642105 16.3856842,9.64357895 16.3856842,13.7349474 L16.3856842,16.98 C16.3856842,21.0713684 19.7128421,24.3997895 23.8054737,24.3997895 L23.8054737,24.3997895 Z M34.2821053,40.9357895 L13.7178947,40.9357895 L13.7178947,34.5353684 C13.7178947,30.8848421 16.0976842,27.6145263 19.5423158,26.4738947 C22.3048421,27.8267368 25.6951579,27.8267368 28.4576842,26.4738947 C31.9023158,27.6145263 34.2821053,30.8848421 34.2821053,34.5353684 L34.2821053,40.9357895 Z M28.608,24.8355789 L28.2934737,24.7433684 L28.0054737,24.8962105 C25.5524211,26.2023158 22.4463158,26.2023158 19.9945263,24.8962105 L19.7065263,24.7433684 L19.3907368,24.8355789 C15.1023158,26.0785263 12.1073684,30.0675789 12.1073684,34.5353684 L12.1073684,42.5463158 L35.8926316,42.5463158 L35.8926316,34.5353684 C35.8926316,30.0675789 32.8976842,26.0785263 28.608,24.8355789 L28.608,24.8355789 Z"
    />
  );

  const simplifiedHover = (
    <path
      fillRule="evenodd"
      d="M17.9968421,15.132 L18.5450526,15.132 C20.0115789,15.132 21.3,14.3564211 22.0237895,13.1930526 C22.7602105,14.3576842 24.0574737,15.132 25.5341053,15.132 L30.0044211,15.132 L30.0044211,16.98 C30.0044211,20.1821053 27.3972632,22.7892632 24.1951579,22.7892632 L23.8048421,22.7892632 C20.6027368,22.7892632 17.9968421,20.1821053 17.9968421,16.98 L17.9968421,15.132 Z M17.9968421,13.7349474 C17.9968421,10.5315789 20.6027368,7.92694737 23.8048421,7.92694737 L24.1951579,7.92694737 C27.3972632,7.92694737 30.0044211,10.5315789 30.0044211,13.7349474 L30.0044211,13.8789474 L25.5341053,13.8789474 C23.9374737,13.8789474 22.6389474,12.5804211 22.6389474,10.9850526 L22.6389474,10.7753684 L21.3858947,10.7753684 L21.3858947,11.0368421 C21.3858947,12.6031579 20.1113684,13.8789474 18.5450526,13.8789474 L17.9968421,13.8789474 L17.9968421,13.7349474 Z M23.8048421,24.3997895 L24.1951579,24.3997895 C28.2865263,24.3997895 31.6149474,21.0713684 31.6149474,16.98 L31.6149474,13.7349474 C31.6149474,9.64357895 28.2865263,6.31642105 24.1951579,6.31642105 L23.8048421,6.31642105 C19.7134737,6.31642105 16.3863158,9.64357895 16.3863158,13.7349474 L16.3863158,16.98 C16.3863158,21.0713684 19.7134737,24.3997895 23.8048421,24.3997895 L23.8048421,24.3997895 Z M24.0271579,20.7037895 C24.9025263,20.7037895 25.6124211,19.9938947 25.6124211,19.1185263 L22.4418947,19.1185263 C22.4418947,19.9938947 23.1517895,20.7037895 24.0271579,20.7037895 L24.0271579,20.7037895 Z M21.4351579,17.772 C21.708,17.772 21.9290526,17.5509474 21.9290526,17.2781053 C21.9290526,17.0052632 21.708,16.7842105 21.4351579,16.7842105 C21.1623158,16.7842105 20.9412632,17.0052632 20.9412632,17.2781053 C20.9412632,17.5509474 21.1623158,17.772 21.4351579,17.772 L21.4351579,17.772 Z M34.2827368,40.9357895 L13.7172632,40.9357895 L13.7172632,34.5353684 C13.7172632,30.8848421 16.0970526,27.6145263 19.5429474,26.4738947 C22.3054737,27.8267368 25.6970526,27.8267368 28.4570526,26.4738947 C31.9029474,27.6145263 34.2827368,30.8848421 34.2827368,34.5353684 L34.2827368,40.9357895 Z M28.6073684,24.8355789 L28.2928421,24.7433684 L28.0048421,24.8974737 C25.5555789,26.1997895 22.4482105,26.2035789 19.9951579,24.8962105 L19.7071579,24.7433684 L19.3913684,24.8355789 C15.1029474,26.0785263 12.1067368,30.0675789 12.1067368,34.5353684 L12.1067368,42.5463158 L35.8932632,42.5463158 L35.8932632,34.5353684 C35.8932632,30.0663158 32.8970526,26.0785263 28.6073684,24.8355789 L28.6073684,24.8355789 Z M26.6343158,17.772 C26.9071579,17.772 27.1282105,17.5509474 27.1282105,17.2781053 C27.1282105,17.0052632 26.9071579,16.7842105 26.6343158,16.7842105 C26.3627368,16.7842105 26.1416842,17.0052632 26.1416842,17.2781053 C26.1416842,17.5509474 26.3627368,17.772 26.6343158,17.772 L26.6343158,17.772 Z"
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
      {isExtraSmall ? (isHovered ? simplifiedHover : simplified) : isHovered ? normalHover : normal}
    </svg>
  );
});

export default Avatar;
