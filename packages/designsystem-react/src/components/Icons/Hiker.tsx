import React from 'react';
import {IconRawProps} from './Icon';

const Hiker = React.forwardRef((svgProps: IconRawProps, ref: any) => {
  const {size = 48, color = 'black', hoverColor = 'black', isHovered = false, ...props} = svgProps;
  const isExtraSmall = size <= 38;
  const normal = (
    <path
      fill-rule="evenodd"
      d="M16.572 2.0554C18.255 2.0554 19.623 3.4234 19.623 5.1064 19.623 6.7884 18.255 8.1584 16.572 8.1584 14.889 8.1584 13.521 6.7884 13.521 5.1064 13.521 3.4234 14.889 2.0554 16.572 2.0554M16.572 9.4584C18.971 9.4584 20.924 7.5054 20.924 5.1064 20.924 2.7064 18.971.7544 16.572.7544 14.173.7544 12.22 2.7064 12.22 5.1064 12.22 7.5054 14.173 9.4584 16.572 9.4584M16.864 17.3992L14.394 24.2222 6.016 40.8552C5.535 41.8202 4.392 42.2162 3.419 41.7582 2.467 41.3122 2.033 40.2012 2.43 39.2332L7.658 26.8462 10.922 15.0132C11.334 13.5152 12.589 12.3692 14.118 12.0932 14.709 11.9872 15.245 11.9322 15.736 11.9322 17.292 11.9322 18.394 12.4822 19.35 13.6782L22.26 17.0672 27.167 14.1472C27.557 13.9142 28.013 13.8482 28.452 13.9642 28.89 14.0782 29.258 14.3562 29.485 14.7472 29.936 15.5202 29.703 16.5122 28.956 17.0042L21.801 21.7142 16.864 17.3992zM21.411 39.8572C21.411 41.0082 20.474 41.9452 19.323 41.9452 18.172 41.9452 17.235 41.0082 17.235 39.8572L17.235 32.2122 13.13 29.6162 15.23 25.4432 21.411 29.3362 21.411 39.8572zM5.41 20.8992C4.92 20.7312 4.656 20.2122 4.809 19.7172L6.849 13.1772C7.003 12.6872 7.536 12.4082 8.022 12.5492L10.318 13.2202C10.035 13.6632 9.811 14.1482 9.668 14.6682L7.734 21.6922 5.41 20.8992zM29.671 18.0902C30.995 17.2182 31.407 15.4622 30.608 14.0922 30.205 13.3992 29.554 12.9072 28.777 12.7062 28 12.5052 27.192 12.6212 26.503 13.0302L22.534 15.3912 20.351 12.8492C18.807 10.9152 16.812 10.2882 13.887 10.8142 12.881 10.9952 11.964 11.4632 11.23 12.1312L8.387 11.3012C7.217 10.9612 5.97 11.6272 5.609 12.7912L3.568 19.3312C3.204 20.5032 3.828 21.7322 4.99 22.1292L7.388 22.9482 6.432 26.4202 1.23 38.7332C.566 40.3492 1.286 42.1952 2.867 42.9362 3.322 43.1492 3.799 43.2512 4.267 43.2512 5.465 43.2512 6.605 42.5862 7.178 41.4372L12.542 30.7842 15.934 32.9282 15.934 39.8572C15.934 41.7252 17.455 43.2462 19.323 43.2462 21.191 43.2462 22.712 41.7252 22.712 39.8572L22.712 28.6192 15.764 24.2442 17.438 19.6282 21.69 23.3432 27.363 19.6092 28.921 42.6392 30.218 42.5512 28.61 18.7892 29.671 18.0902z"
      transform="translate(8 2)"
    />
  );

  const normalHover = (
    <path
      fill-rule="evenodd"
      d="M16.572 2.0554C18.255 2.0554 19.623 3.4234 19.623 5.1064 19.623 6.7884 18.255 8.1584 16.572 8.1584 14.889 8.1584 13.521 6.7884 13.521 5.1064 13.521 3.4234 14.889 2.0554 16.572 2.0554M16.572 9.4584C18.971 9.4584 20.924 7.5054 20.924 5.1064 20.924 2.7064 18.971.7544 16.572.7544 14.173.7544 12.22 2.7064 12.22 5.1064 12.22 7.5054 14.173 9.4584 16.572 9.4584M28.9558 17.0046L21.8018 21.7146 16.8638 17.3996 14.3488 24.3386 11.5768 34.2286 4.9798 40.3896C4.2888 41.1916 3.0588 41.2986 2.2398 40.6256 1.4268 39.9586 1.2808 38.7746 1.8468 37.9996L7.7418 32.0706 7.6828 26.7576 10.9218 15.0136C11.3338 13.5156 12.5888 12.3686 14.1178 12.0936 16.5788 11.6496 18.0918 12.1036 19.3508 13.6786L22.2598 17.0666 27.1668 14.1476C27.5578 13.9136 28.0138 13.8486 28.4518 13.9646 28.8908 14.0776 29.2578 14.3566 29.4848 14.7466 29.9358 15.5206 29.7028 16.5126 28.9558 17.0046L28.9558 17.0046zM19.4108 39.8576C19.4108 41.0086 18.4748 41.9446 17.3228 41.9446 16.1718 41.9446 15.2348 41.0086 15.2348 39.8576L15.2348 33.0766 13.8488 30.9416 15.2698 25.8616 19.4108 30.7166 19.4108 39.8576zM5.4098 20.8996C4.9198 20.7316 4.6558 20.2126 4.8098 19.7176L6.8498 13.1776C7.0028 12.6876 7.5348 12.4076 8.0218 12.5496L10.3178 13.2206C10.0348 13.6626 9.8108 14.1486 9.6678 14.6676L7.7308 21.6916 5.4098 20.8996zM30.6078 14.0926C30.2048 13.3996 29.5548 12.9066 28.7768 12.7056 27.9998 12.5056 27.1918 12.6206 26.5028 13.0296L22.5338 15.3916 20.3518 12.8496C18.8078 10.9146 16.8118 10.2876 13.8878 10.8146 12.8808 10.9946 11.9638 11.4636 11.2298 12.1316L8.3878 11.3016C7.2148 10.9606 5.9718 11.6266 5.6088 12.7906L3.5678 19.3306C3.2038 20.5036 3.8278 21.7326 4.9898 22.1296L7.3848 22.9456 6.3798 26.5896 6.4348 31.5416.8628 37.1536C-.1772 38.5576.0648 40.5246 1.4158 41.6316 2.0218 42.1286 2.7648 42.3696 3.4988 42.3696 4.4088 42.3696 5.3078 41.9986 5.9158 41.2896L12.7308 34.9296 13.3818 32.6086 13.9348 33.4616 13.9348 39.8576C13.9348 41.7256 15.4548 43.2456 17.3228 43.2456 19.1908 43.2456 20.7118 41.7256 20.7118 39.8576L20.7118 30.2376 15.7148 24.3806 17.4378 19.6276 21.6898 23.3436 27.2528 19.6826 26.9188 42.5856 28.2198 42.6056 28.5658 18.8166 29.6708 18.0906C30.9948 17.2186 31.4068 15.4616 30.6078 14.0926L30.6078 14.0926z"
      transform="translate(10 2)"
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

export default Hiker;
