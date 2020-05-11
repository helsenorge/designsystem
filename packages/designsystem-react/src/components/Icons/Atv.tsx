import React from 'react';
import {IconRawProps} from './Icon';

const Atv = React.forwardRef((svgProps: IconRawProps, ref: any) => {
  const {size = 48, color = 'black', hoverColor = 'black', isHovered = false, ...props} = svgProps;
  const isExtraSmall = size <= 38;
  const normal = (
    <path
      fill-rule="evenodd"
      d="M25.3737427,21.0243153 C25.0874731,21.3132335 24.7055533,21.4739622 24.2985101,21.4757026 L24.2898077,21.4757026 C23.8860942,21.4757026 23.5059148,21.3198927 23.2187371,21.0356662 C22.9298189,20.7491696 22.7691659,20.3672497 22.7674028,19.9602066 C22.7628851,19.1202402 23.4427281,18.4338893 24.2826188,18.4290462 L24.2904888,18.4290462 C25.1270499,18.4290462 25.8099198,19.1070732 25.8141095,19.944618 C25.8165034,20.3516612 25.6600123,20.7347161 25.3737427,21.0243153 L25.3737427,21.0243153 Z M24.2901861,17.5693293 L24.2780785,17.5693293 C22.9643257,17.5765182 21.9007466,18.6514482 21.9075996,19.9649739 C21.9109624,20.6016836 22.1618929,21.1987408 22.614491,21.6465715 C23.0638352,22.0908456 23.6582438,22.3354196 24.289505,22.3354196 L24.3030504,22.3354196 C24.9396844,22.3318629 25.5367416,22.0812351 25.984648,21.6286371 C26.4321003,21.1765687 26.6770527,20.5764846 26.6738308,19.9397749 C26.6669126,18.6304868 25.5991715,17.5693293 24.2901861,17.5693293 L24.2901861,17.5693293 Z M37.16513,37.2253747 L36.9427281,37.2259801 C36.2211895,37.2361202 35.548838,36.9531802 35.0390314,36.4489734 C34.5287707,35.9442368 34.2458307,35.2709773 34.2421984,34.5527682 L34.1960003,25.6513192 C34.1882438,24.1693461 35.3872769,22.9577514 36.8689473,22.9499571 L37.0895331,22.9487464 L37.1036839,22.9487464 C37.8162175,22.9487464 38.4867528,23.2244975 38.9936082,23.7262828 C39.5037932,24.2310193 39.7868089,24.9042789 39.7903655,25.6225636 L39.8365636,34.5240126 C39.8443201,36.0053803 38.6449843,37.2169751 37.16513,37.2253747 L37.16513,37.2253747 Z M25.5973554,25.5157895 L25.6141547,28.689576 C25.6165006,29.1529952 25.3668565,29.5822862 24.9624619,29.8106662 C24.7079748,29.9545956 24.1789473,30.1332587 23.5021312,29.7201617 C23.2308447,29.5540603 23.060884,29.2267761 23.0590678,28.8646068 L23.0416631,25.5290322 L12.2783643,17.1263416 L12.2658027,14.6863529 L21.6268117,17.1257363 L26.8374787,17.0981158 L36.2604636,14.5616443 L36.2730252,17.0022385 L25.5973554,25.5157895 Z M21.644065,13.3072189 L26.8684288,13.2802038 L25.2877029,15.7558344 L23.250898,15.7666555 L21.644065,13.3072189 Z M11.8182747,37.3566668 L11.5976889,37.3578775 C10.890301,37.3494779 10.2041015,37.085683 9.69361379,36.5802654 C9.18350448,36.0755289 8.90056446,35.4022693 8.89693217,34.6840603 L8.85065914,25.7826113 C8.84297758,24.3006382 10.0422377,23.0890434 11.5239837,23.0812492 L11.7442668,23.0800384 L11.7583419,23.0800384 C12.4708756,23.0800384 13.1414109,23.3557895 13.6483419,23.8575748 C14.1584512,24.3623871 14.4413913,25.0355709 14.4450235,25.7538557 L14.4912216,34.6553047 C14.4989781,36.1372777 13.2999451,37.3488725 11.8182747,37.3566668 L11.8182747,37.3566668 Z M41.1410465,25.615299 C41.1353711,24.5368125 40.7103178,23.5248422 39.9435269,22.766451 C39.1773414,22.0080597 38.1653711,21.5764229 37.0824198,21.598595 L36.8618341,21.5998058 C34.6357719,21.6112323 32.8340062,23.4319162 32.8453571,25.6585081 L32.8645779,29.3640462 L27.5233756,25.7073927 L37.6273386,17.6496937 L37.6015342,12.7978663 L26.7509092,15.7453915 L30.2612119,10.2482279 L34.1808279,10.2277962 L34.1741687,9.00000757 L29.9203823,9.02217965 C29.7120555,9.02339041 29.5184092,9.13008885 29.406338,9.30580073 L27.6549703,12.0484801 L20.8447349,12.0832895 L19.0651413,9.35914994 C18.9515566,9.1852542 18.7581373,9.08090163 18.551097,9.08090163 L18.5477674,9.08090163 L14.2939809,9.10314938 L14.3005645,10.3309381 L18.2198021,10.3105064 L21.7874647,15.7720283 L10.9061166,12.9357419 L10.9313156,17.7881746 L21.1175348,25.7403103 L15.8149254,29.4524319 L15.7957803,25.7465911 C15.7900291,24.6681045 15.3649759,23.6561342 14.5982607,22.897743 C13.8368425,22.1441948 12.8291099,21.7299627 11.7583419,21.7299627 L11.7370779,21.7299627 L11.5167948,21.7310978 C9.29050561,21.7425244 7.48866424,23.5632082 7.50003676,25.7898002 L7.54617545,34.6912492 C7.55192657,35.7697357 7.97690415,36.781706 8.74369507,37.5400973 C9.50511323,38.2936455 10.5128459,38.7079532 11.5836138,38.7079532 L11.6048778,38.7079532 L11.8254636,38.7067424 C14.0514501,38.6953915 15.8532158,36.874632 15.8418649,34.6481158 L15.8227197,30.9461342 L21.6978683,26.8332503 L21.7083111,28.8718714 C21.7128515,29.6979896 22.1304131,30.4647049 22.7979972,30.8724291 C23.2877506,31.1721684 23.8201076,31.3226057 24.3411138,31.3226057 C24.7888688,31.3226057 25.2286783,31.2111399 25.626111,30.9869218 C26.4567696,30.5180541 26.9696031,29.63503 26.9647601,28.6823871 L26.9549983,26.8062351 L32.8723722,30.8570675 L32.891593,34.5599571 C32.8972685,35.6385193 33.3222461,36.6504896 34.089037,37.4088052 C34.8501525,38.1624291 35.8572797,38.5760558 36.9271396,38.5760558 L36.9481009,38.5760558 L37.1705785,38.5754504 C39.396792,38.5634941 41.1985577,36.7427346 41.1872602,34.5168237 L41.1410465,25.615299 Z"
    />
  );

  const normalHover = (
    <path
      fill-rule="evenodd"
      d="M25.3737427,24.0243153 C25.0874731,24.3132335 24.7055533,24.4739622 24.2985101,24.4757026 L24.2898077,24.4757026 C23.8860942,24.4757026 23.5059148,24.3198927 23.2187371,24.0356662 C22.9298189,23.7491696 22.7691659,23.3672497 22.7674028,22.9602066 C22.7628851,22.1202402 23.4427281,21.4338893 24.2826188,21.4290462 L24.2904888,21.4290462 C25.1270499,21.4290462 25.8099198,22.1070732 25.8141095,22.944618 C25.8165034,23.3516612 25.6600123,23.7347161 25.3737427,24.0243153 L25.3737427,24.0243153 Z M24.2901861,20.5693293 L24.2780785,20.5693293 C22.9643257,20.5765182 21.9007466,21.6514482 21.9075996,22.9649739 C21.9109624,23.6016836 22.1618929,24.1987408 22.614491,24.6465715 C23.0638352,25.0908456 23.6582438,25.3354196 24.289505,25.3354196 L24.3030504,25.3354196 C24.9396844,25.3318629 25.5367416,25.0812351 25.984648,24.6286371 C26.4321003,24.1765687 26.6770527,23.5764846 26.6738308,22.9397749 C26.6669126,21.6304868 25.5991715,20.5693293 24.2901861,20.5693293 L24.2901861,20.5693293 Z M37.16513,40.2253747 L36.9427281,40.2259801 C36.2211895,40.2361202 35.548838,39.9531802 35.0390314,39.4489734 C34.5287707,38.9442368 34.2458307,38.2709773 34.2421984,37.5527682 L34.1960003,28.6513192 C34.1882438,27.1693461 35.3872769,25.9577514 36.8689473,25.9499571 L37.0895331,25.9487464 L37.1036839,25.9487464 C37.8162175,25.9487464 38.4867528,26.2244975 38.9936082,26.7262828 C39.5037932,27.2310193 39.7868089,27.9042789 39.7903655,28.6225636 L39.8365636,37.5240126 C39.8443201,39.0053803 38.6449843,40.2169751 37.16513,40.2253747 L37.16513,40.2253747 Z M25.5973554,28.5157895 L25.6141547,31.689576 C25.6165006,32.1529952 25.3668565,32.5822862 24.9624619,32.8106662 C24.7079748,32.9545956 24.1789473,33.1332587 23.5021312,32.7201617 C23.2308447,32.5540603 23.060884,32.2267761 23.0590678,31.8646068 L23.0416631,28.5290322 L12.2783643,20.1263416 L12.2658027,17.6863529 L21.6268117,20.1257363 L26.8374787,20.0981158 L36.2604636,17.5616443 L36.2730252,20.0022385 L25.5973554,28.5157895 Z M21.644065,16.3072189 L26.8684288,16.2802038 L25.2877029,18.7558344 L23.250898,18.7666555 L21.644065,16.3072189 Z M11.8182747,40.3566668 L11.5976889,40.3578775 C10.890301,40.3494779 10.2041015,40.085683 9.69361379,39.5802654 C9.18350448,39.0755289 8.90056446,38.4022693 8.89693217,37.6840603 L8.85065914,28.7826113 C8.84297758,27.3006382 10.0422377,26.0890434 11.5239837,26.0812492 L11.7442668,26.0800384 L11.7583419,26.0800384 C12.4708756,26.0800384 13.1414109,26.3557895 13.6483419,26.8575748 C14.1584512,27.3623871 14.4413913,28.0355709 14.4450235,28.7538557 L14.4912216,37.6553047 C14.4989781,39.1372777 13.2999451,40.3488725 11.8182747,40.3566668 L11.8182747,40.3566668 Z M41.1410465,28.615299 C41.1353711,27.5368125 40.7103178,26.5248422 39.9435269,25.766451 C39.1773414,25.0080597 38.1653711,24.5764229 37.0824198,24.598595 L36.8618341,24.5998058 C34.6357719,24.6112323 32.8340062,26.4319162 32.8453571,28.6585081 L32.8645779,32.3640462 L27.5233756,28.7073927 L37.6273386,20.6496937 L37.6015342,15.7978663 L26.7509092,18.7453915 L30.2612119,13.2482279 L34.1808279,13.2277962 L34.1741687,12.0000076 L29.9203823,12.0221797 C29.7120555,12.0233904 29.5184092,12.1300888 29.406338,12.3058007 L27.6549703,15.0484801 L20.8447349,15.0832895 L19.0651413,12.3591499 C18.9515566,12.1852542 18.7581373,12.0809016 18.551097,12.0809016 L18.5477674,12.0809016 L14.2939809,12.1031494 L14.3005645,13.3309381 L18.2198021,13.3105064 L21.7874647,18.7720283 L10.9061166,15.9357419 L10.9313156,20.7881746 L21.1175348,28.7403103 L15.8149254,32.4524319 L15.7957803,28.7465911 C15.7900291,27.6681045 15.3649759,26.6561342 14.5982607,25.897743 C13.8368425,25.1441948 12.8291099,24.7299627 11.7583419,24.7299627 L11.7370779,24.7299627 L11.5167948,24.7310978 C9.29050561,24.7425244 7.48866424,26.5632082 7.50003676,28.7898002 L7.54617545,37.6912492 C7.55192657,38.7697357 7.97690415,39.781706 8.74369507,40.5400973 C9.50511323,41.2936455 10.5128459,41.7079532 11.5836138,41.7079532 L11.6048778,41.7079532 L11.8254636,41.7067424 C14.0514501,41.6953915 15.8532158,39.874632 15.8418649,37.6481158 L15.8227197,33.9461342 L21.6978683,29.8332503 L21.7083111,31.8718714 C21.7128515,32.6979896 22.1304131,33.4647049 22.7979972,33.8724291 C23.2877506,34.1721684 23.8201076,34.3226057 24.3411138,34.3226057 C24.7888688,34.3226057 25.2286783,34.2111399 25.626111,33.9869218 C26.4567696,33.5180541 26.9696031,32.63503 26.9647601,31.6823871 L26.9549983,29.8062351 L32.8723722,33.8570675 L32.891593,37.5599571 C32.8972685,38.6385193 33.3222461,39.6504896 34.089037,40.4088052 C34.8501525,41.1624291 35.8572797,41.5760558 36.9271396,41.5760558 L36.9481009,41.5760558 L37.1705785,41.5754504 C39.396792,41.5634941 41.1985577,39.7427346 41.1872602,37.5168237 L41.1410465,28.615299 Z"
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

export default Atv;
