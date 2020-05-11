import React from 'react';
import {IconRawProps} from './Icon';

const Heart = React.forwardRef((svgProps: IconRawProps, ref: any) => {
  const {size = 48, color = 'black', hoverColor = 'black', isHovered = false, ...props} = svgProps;
  const isExtraSmall = size <= 38;
  const normal = (
    <path
      fill-rule="evenodd"
      d="M36.3677,23.0803 L23.8757,36.0023 L11.3837,23.0813 C8.7627,20.3513 8.8517,15.9963 11.5837,13.3743 C12.9127,12.0993 14.6247,11.4663 16.3357,11.4663 C18.1407,11.4663 19.9447,12.1723 21.2917,13.5753 L23.8757,16.2683 L26.4587,13.5753 C29.0797,10.8443 33.4337,10.7533 36.1667,13.3743 C38.8977,15.9963 38.9877,20.3513 36.3677,23.0803 M37.0667,12.4363 C33.8167,9.3203 28.6387,9.4273 25.5207,12.6743 L23.8757,14.3903 L22.2287,12.6743 C19.1127,9.4273 13.9317,9.3183 10.6827,12.4363 C7.4347,15.5543 7.3287,20.7343 10.4467,23.9833 L23.8757,37.8723 L37.3047,23.9823 C40.4217,20.7343 40.3147,15.5543 37.0667,12.4363 M11.3617,18.2263 C11.3347,19.5553 11.8227,20.8113 12.7377,21.7653 L13.6757,20.8653 C13.0017,20.1623 12.6407,19.2343 12.6607,18.2523 C12.6807,17.2703 13.0827,16.3553 13.7917,15.6753 C14.4787,15.0153 15.3837,14.6513 16.3367,14.6513 L16.3367,13.3513 C15.0457,13.3513 13.8217,13.8443 12.8907,14.7373 C11.9317,15.6583 11.3887,16.8963 11.3617,18.2263"
    />
  );

  const normalHover = (
    <path
      fill-rule="evenodd"
      d="M11.3900891,18.265 C11.3630891,19.568 11.8420891,20.799 12.7380891,21.734 L13.5320891,20.972 C12.8390891,20.249 12.4690891,19.296 12.4900891,18.287 C12.5100891,17.28 12.9230891,16.339 13.6510891,15.64 C14.3570891,14.962 15.2860891,14.588 16.2650891,14.588 L16.2650891,13.489 C15.0000891,13.489 13.8010891,13.971 12.8890891,14.847 C11.9490891,15.749 11.4160891,16.964 11.3900891,18.265 M37.3790891,24.156 L23.8040891,38.197 L10.2330891,24.161 C8.6840891,22.546 7.8560891,20.427 7.9020891,18.194 C7.9490891,15.959 8.8620891,13.876 10.4740891,12.329 C12.0390891,10.828 14.0950891,10 16.2650891,10 C18.5660891,10 20.7100891,10.913 22.3020891,12.574 L23.8040891,14.139 L25.3040891,12.574 C26.8970891,10.913 29.0410891,10 31.3420891,10 C33.5110891,10 35.5680891,10.828 37.1330891,12.329 C38.7450891,13.876 39.6590891,15.959 39.7050891,18.194 C39.7510891,20.427 38.9250891,22.545 37.3790891,24.156 M38.0340891,11.392 C36.2250891,9.656 33.8480891,8.7 31.3420891,8.7 C28.6830891,8.7 26.2060891,9.756 24.3660891,11.673 L23.8040891,12.26 L23.2400891,11.673 C21.4000891,9.756 18.9230891,8.7 16.2650891,8.7 C13.7580891,8.7 11.3820891,9.656 9.5740891,11.392 C7.7110891,13.179 6.6560891,15.585 6.6020891,18.166 C6.5490891,20.747 7.5060891,23.197 9.2960891,25.062 L23.8040891,40.068 L38.3150891,25.058 C40.1030891,23.195 41.0580891,20.747 41.0050891,18.166 C40.9520891,15.585 39.8960891,13.179 38.0340891,11.392"
    />
  );

  const simplified = (
    <path
      fill-rule="evenodd"
      d="M16.0010242,11.8721805 C14.2742873,11.8721805 12.6448137,12.5277594 11.3955505,13.7264962 C10.1121821,14.956812 9.38586629,16.6140752 9.34797155,18.3913384 C9.31260313,20.1686015 9.96944523,21.8549173 11.2010242,23.1395489 L23.56734,35.9302857 L35.9361821,23.1370226 C37.1652347,21.8549173 37.82334,20.1686015 37.7867084,18.3913384 C37.7500768,16.6140752 37.023761,14.956812 35.7403926,13.7264962 C34.4570242,12.4949173 32.7883926,11.8886015 30.9934452,11.8734436 C29.2161821,11.9100752 27.5589189,12.636391 26.32734,13.9197594 L23.56734,16.7959699 L20.80734,13.9197594 C19.5770242,12.636391 17.919761,11.9100752 16.1412347,11.8734436 C16.0944979,11.8734436 16.047761,11.8721805 16.0010242,11.8721805 L16.0010242,11.8721805 Z M23.56734,38.4742857 L9.92649787,24.3660752 C8.36649787,22.7391278 7.53407681,20.6056541 7.58081365,18.3559699 C7.6275505,16.1062857 8.54712944,14.0081805 10.1715505,12.4507068 C11.7934452,10.8919699 13.9092347,10.0810226 16.1778663,10.1062857 C18.4275505,10.1530226 20.5256558,11.0713384 22.0831294,12.6957594 L23.56734,14.2431278 L25.0528137,12.6957594 C26.6102873,11.0713384 28.7071294,10.1530226 30.9568137,10.1062857 C33.2027084,10.0721805 35.3412347,10.8919699 36.9643926,12.4507068 C38.5888137,14.0081805 39.5083926,16.1062857 39.5538663,18.3559699 C39.6018663,20.6056541 38.7681821,22.7391278 37.2107084,24.3635489 L23.56734,38.4742857 Z"
    />
  );

  const simplifiedHover = (
    <path
      fill-rule="evenodd"
      d="M10.2336133,23.6955789 L23.3755081,37.2884211 L36.518666,23.6930526 C37.9460344,22.2050526 38.7102449,20.2484211 38.6685607,18.1831579 C38.6256133,16.1178947 37.7805607,14.1941053 36.2912975,12.7642105 C34.8449818,11.376 32.9439291,10.6117895 30.9392975,10.6117895 C28.8121397,10.6117895 26.8315081,11.4555789 25.3599291,12.9877895 L23.3755081,15.0568421 L21.3898239,12.9890526 C19.9182449,11.4555789 17.9363502,10.6117895 15.8117186,10.6117895 C13.8058239,10.6117895 11.9047712,11.376 10.4597186,12.7642105 C8.97045544,14.1915789 8.12792912,16.1153684 8.08624491,18.1831579 C8.04329755,20.2484211 8.80624491,22.2063158 10.2336133,23.6955789 L10.2336133,23.6955789 Z M23.3755081,39.8311579 L8.96035018,24.9221053 C7.2045607,23.0917895 6.26603439,20.6867368 6.31782386,18.1465263 C6.36961334,15.6075789 7.40666597,13.2429474 9.23445544,11.4884211 C11.0117186,9.78189474 13.3472975,8.84210526 15.8117186,8.84210526 C18.422666,8.84210526 20.8567712,9.87915789 22.6643502,11.7650526 L23.3755081,12.504 L24.0841397,11.7650526 C25.8917186,9.87915789 28.327087,8.84210526 30.9392975,8.84210526 C33.4037186,8.84210526 35.7392975,9.78189474 37.5165607,11.4884211 C39.3456133,13.2454737 40.382666,15.6101053 40.4357186,18.1452632 C40.4875081,20.6842105 39.5489818,23.0905263 37.7919291,24.9195789 L23.3755081,39.8311579 Z"
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

export default Heart;
