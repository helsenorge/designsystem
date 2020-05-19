import React from 'react';
import {IconRawProps} from './Icon';

const PersonAndPatient = React.forwardRef((svgProps: IconRawProps, ref: any) => {
  const {size = 48, className, color = 'black', hoverColor = 'black', isHovered = false, ...props} = svgProps;
  const isExtraSmall = size <= 38;
  const normal = (
    <path
      fillRule="evenodd"
      d="M19.5679,15.9079 C19.8379,15.9079 20.0569,15.6889 20.0569,15.4199 C20.0569,15.1499 19.8379,14.9309 19.5679,14.9309 C19.2979,14.9309 19.0789,15.1499 19.0789,15.4199 C19.0789,15.6889 19.2979,15.9079 19.5679,15.9079 L19.5679,15.9079 Z M26.9939,13.3819 L30.2139,13.3819 C31.7499,13.3819 33.0899,12.5309 33.7869,11.2749 C34.4709,12.5289 35.8019,13.3819 37.3289,13.3819 L39.5569,13.3819 L39.5569,15.4009 C39.5569,18.7549 36.8279,21.4829 33.4739,21.4829 L33.0759,21.4829 C29.7229,21.4829 26.9939,18.7549 26.9939,15.4009 L26.9939,13.3819 Z M26.9939,12.0969 C26.9939,8.7429 29.7229,6.0149 33.0759,6.0149 L33.4739,6.0149 C36.8279,6.0149 39.5569,8.7429 39.5569,12.0969 L39.5569,12.3819 L37.3289,12.3819 C35.6579,12.3819 34.2979,11.0229 34.2979,9.3509 L34.2979,9.0839 L33.2979,9.0839 L33.2979,9.2979 C33.2979,10.9979 31.9149,12.3819 30.2139,12.3819 L26.9939,12.3819 L26.9939,12.0969 Z M33.0759,22.7829 L33.4739,22.7829 C37.5449,22.7829 40.8569,19.4709 40.8569,15.4009 L40.8569,12.0969 C40.8569,8.0269 37.5449,4.7149 33.4739,4.7149 L33.0759,4.7149 C29.0059,4.7149 25.6939,8.0269 25.6939,12.0969 L25.6939,15.4009 C25.6939,19.4709 29.0059,22.7829 33.0759,22.7829 L33.0759,22.7829 Z M14.4209,15.9079 C14.6909,15.9079 14.9089,15.6889 14.9089,15.4199 C14.9089,15.1499 14.6909,14.9309 14.4209,14.9309 C14.1509,14.9309 13.9319,15.1499 13.9319,15.4199 C13.9319,15.6889 14.1509,15.9079 14.4209,15.9079 L14.4209,15.9079 Z M10.8699,13.1749 L11.5599,13.1749 C13.0399,13.1749 14.3329,12.3519 15.0039,11.1399 C15.6869,12.3529 16.9879,13.1749 18.4779,13.1749 L23.0499,13.1749 L23.0499,15.1239 C23.0499,18.3749 20.4049,21.0209 17.1529,21.0209 L16.7669,21.0209 C13.5149,21.0209 10.8699,18.3749 10.8699,15.1239 L10.8699,13.1749 Z M10.8699,11.9119 C10.8699,8.6599 13.5149,6.0149 16.7669,6.0149 L17.1529,6.0149 C20.4049,6.0149 23.0499,8.6599 23.0499,11.9119 L23.0499,12.1749 L18.4779,12.1749 C16.8319,12.1749 15.4919,10.8349 15.4919,9.1889 L15.4919,8.9819 L14.4919,8.9819 L14.4919,9.2409 C14.4919,10.8589 13.1769,12.1749 11.5599,12.1749 L10.8699,12.1749 L10.8699,11.9119 Z M16.7669,22.3209 L17.1529,22.3209 C21.1219,22.3209 24.3499,19.0919 24.3499,15.1239 L24.3499,11.9119 C24.3499,7.9439 21.1219,4.7149 17.1529,4.7149 L16.7669,4.7149 C12.7979,4.7149 9.5689,7.9439 9.5689,11.9119 L9.5689,15.1239 C9.5689,19.0919 12.7979,22.3209 16.7669,22.3209 L16.7669,22.3209 Z M29.5959,15.7039 C29.5959,15.4269 29.3709,15.2019 29.0929,15.2019 C28.8159,15.2019 28.5909,15.4269 28.5909,15.7039 C28.5909,15.9819 28.8159,16.2069 29.0929,16.2069 C29.3709,16.2069 29.5959,15.9819 29.5959,15.7039 L29.5959,15.7039 Z M43.9119,41.7329 L40.6869,41.7329 L40.6869,34.7849 L39.7869,34.7849 L39.7869,41.7329 L30.3289,41.7329 L30.3289,34.2659 C30.3289,31.0239 28.9769,27.9969 26.7529,25.8179 C27.3779,25.4229 28.0459,25.1089 28.7499,24.8829 C31.5459,26.2749 35.0049,26.2749 37.7999,24.8829 C41.4109,26.0459 43.9119,29.4589 43.9119,33.2719 L43.9119,41.7329 Z M29.0289,41.7329 L25.7129,41.7329 L25.7129,34.7849 L24.8129,34.7849 L24.8129,41.7329 L8.4099,41.7329 L8.4099,38.6359 L15.5059,38.6359 C17.0829,38.6359 18.3649,37.3529 18.3649,35.7769 C18.3649,34.3489 17.3079,33.1729 15.9369,32.9629 L23.5439,25.0429 C26.8549,26.8629 29.0289,30.3889 29.0289,34.2659 L29.0289,41.7329 Z M15.5059,34.2189 C16.3659,34.2189 17.0649,34.9179 17.0649,35.7769 C17.0649,36.6369 16.3659,37.3359 15.5059,37.3359 L11.7369,37.3359 L14.7309,34.2189 L14.7309,34.2189 L15.5059,34.2189 Z M6.1249,37.3359 L6.1249,37.3409 L3.8389,37.3369 L3.8389,34.2659 C3.8389,34.0899 3.8519,33.9159 3.8609,33.7409 L22.0259,24.3619 C22.2539,24.4429 22.4779,24.5299 22.6969,24.6259 L14.7319,32.9189 L14.7309,32.9189 L14.7309,32.9199 L10.4889,37.3359 L6.1249,37.3359 Z M11.8679,24.0439 C13.3529,24.9379 15.0409,25.4089 16.7669,25.4089 L17.1529,25.4089 C17.4899,25.4089 17.8259,25.3819 18.1599,25.3459 L3.9679,32.6729 C4.6129,28.5269 7.7219,25.0539 11.8679,24.0439 L11.8679,24.0439 Z M37.9189,23.5589 L37.6649,23.4859 L37.4319,23.6099 C34.8889,24.9649 31.6619,24.9649 29.1189,23.6099 L28.8859,23.4859 L28.6319,23.5589 C27.5959,23.8599 26.6289,24.3299 25.7399,24.9399 C24.5869,24.0399 23.2619,23.3399 21.8049,22.9159 L21.5359,22.8379 L21.2949,22.9789 C20.0319,23.7189 18.5999,24.1099 17.1529,24.1099 L16.7669,24.1099 C15.1979,24.1099 13.6659,23.6579 12.3349,22.8039 L12.1089,22.6579 L11.8459,22.7149 C6.4529,23.8869 2.5379,28.7439 2.5379,34.2659 L2.5379,38.6349 L7.1099,38.6429 L7.1099,43.0329 L45.2119,43.0329 L45.2119,33.2719 C45.2119,28.7989 42.2129,24.8049 37.9189,23.5589 L37.9189,23.5589 Z M34.3859,16.2069 C34.6639,16.2069 34.8889,15.9819 34.8889,15.7039 C34.8889,15.4269 34.6639,15.2019 34.3859,15.2019 C34.1089,15.2019 33.8839,15.4269 33.8839,15.7039 C33.8839,15.9819 34.1089,16.2069 34.3859,16.2069 L34.3859,16.2069 Z"
    />
  );

  const normalHover = (
    <path
      fillRule="evenodd"
      d="M34.3863,17.2067 C34.6643,17.2067 34.8883,16.9817 34.8883,16.7047 C34.8883,16.4267 34.6643,16.2017 34.3863,16.2017 C34.1093,16.2017 33.8843,16.4267 33.8843,16.7047 C33.8843,16.9817 34.1093,17.2067 34.3863,17.2067 L34.3863,17.2067 Z M29.5953,16.7047 C29.5953,16.4267 29.3703,16.2017 29.0933,16.2017 C28.8163,16.2017 28.5913,16.4267 28.5913,16.7047 C28.5913,16.9817 28.8163,17.2067 29.0933,17.2067 C29.3703,17.2067 29.5953,16.9817 29.5953,16.7047 L29.5953,16.7047 Z M26.9943,14.3817 L30.2143,14.3817 C31.7493,14.3817 33.0903,13.5307 33.7873,12.2747 C34.4713,13.5287 35.8023,14.3817 37.3293,14.3817 L39.5563,14.3817 L39.5563,15.4007 C39.5563,18.7547 36.8283,21.4827 33.4743,21.4827 L33.0763,21.4827 C29.7223,21.4827 26.9943,18.7547 26.9943,15.4007 L26.9943,14.3817 Z M26.9943,12.0977 C26.9943,8.7437 29.7223,6.0147 33.0763,6.0147 L33.4743,6.0147 C36.8283,6.0147 39.5563,8.7437 39.5563,12.0977 L39.5563,13.3817 L37.3293,13.3817 C35.6573,13.3817 34.2983,12.0227 34.2983,10.3517 L34.2983,10.0837 L33.2983,10.0837 L33.2983,10.2977 C33.2983,11.9987 31.9153,13.3817 30.2143,13.3817 L26.9943,13.3817 L26.9943,12.0977 Z M33.0763,22.7827 L33.4743,22.7827 C37.5453,22.7827 40.8563,19.4717 40.8563,15.4007 L40.8563,12.0977 C40.8563,8.0267 37.5453,4.7147 33.4743,4.7147 L33.0763,4.7147 C29.0063,4.7147 25.6943,8.0267 25.6943,12.0977 L25.6943,15.4007 C25.6943,19.4717 29.0063,22.7827 33.0763,22.7827 L33.0763,22.7827 Z M43.9113,41.7327 L40.6873,41.7327 L40.6873,34.7847 L39.7873,34.7847 L39.7873,41.7327 L30.3293,41.7327 L30.3293,34.2667 C30.3293,31.0237 28.9773,27.9977 26.7523,25.8177 C27.3773,25.4227 28.0463,25.1087 28.7503,24.8827 C31.5463,26.2747 35.0053,26.2747 37.8003,24.8827 C41.4113,26.0457 43.9113,29.4587 43.9113,33.2717 L43.9113,41.7327 Z M29.0293,41.7327 L25.7133,41.7327 L25.7133,34.7847 L24.8133,34.7847 L24.8133,41.7327 L8.4103,41.7327 L8.4103,38.6357 L15.5063,38.6357 C17.0823,38.6357 18.3653,37.3527 18.3653,35.7767 C18.3653,34.3487 17.3083,33.1727 15.9373,32.9627 L23.5433,25.0427 C26.8553,26.8617 29.0293,30.3887 29.0293,34.2667 L29.0293,41.7327 Z M15.5063,34.2187 C16.3653,34.2187 17.0643,34.9177 17.0643,35.7767 C17.0643,36.6367 16.3653,37.3357 15.5063,37.3357 L11.7373,37.3357 L14.7313,34.2187 L14.7313,34.2187 L15.5063,34.2187 Z M6.1253,37.3357 L6.1253,37.3407 L3.8383,37.3367 L3.8383,34.2667 C3.8383,34.0897 3.8523,33.9157 3.8613,33.7407 L22.0273,24.3617 C22.2543,24.4427 22.4783,24.5297 22.6973,24.6257 L14.7313,32.9187 L14.7313,32.9187 L14.7313,32.9197 L10.4893,37.3357 L6.1253,37.3357 Z M11.8683,24.0437 C13.3533,24.9377 15.0413,25.4097 16.7663,25.4097 L17.1533,25.4097 C17.4903,25.4097 17.8253,25.3817 18.1593,25.3457 L3.9683,32.6727 C4.6133,28.5267 7.7223,25.0537 11.8683,24.0437 L11.8683,24.0437 Z M37.9193,23.5597 L37.6653,23.4857 L37.4323,23.6097 C34.8893,24.9647 31.6613,24.9647 29.1183,23.6097 L28.8863,23.4857 L28.6323,23.5597 C27.5953,23.8597 26.6283,24.3297 25.7403,24.9397 C24.5863,24.0397 23.2623,23.3397 21.8043,22.9157 L21.5363,22.8377 L21.2953,22.9787 C20.0323,23.7187 18.6003,24.1097 17.1533,24.1097 L16.7663,24.1097 C15.1983,24.1097 13.6663,23.6577 12.3353,22.8037 L12.1083,22.6577 L11.8453,22.7147 C6.4523,23.8867 2.5383,28.7447 2.5383,34.2667 L2.5383,38.6347 L7.1103,38.6427 L7.1103,43.0327 L45.2123,43.0327 L45.2123,33.2717 C45.2123,28.7987 42.2133,24.8047 37.9193,23.5597 L37.9193,23.5597 Z M14.4213,16.9077 C14.6903,16.9077 14.9093,16.6887 14.9093,16.4197 C14.9093,16.1497 14.6903,15.9307 14.4213,15.9307 C14.1513,15.9307 13.9323,16.1497 13.9323,16.4197 C13.9323,16.6887 14.1513,16.9077 14.4213,16.9077 L14.4213,16.9077 Z M19.5683,16.9077 C19.8383,16.9077 20.0563,16.6887 20.0563,16.4197 C20.0563,16.1497 19.8383,15.9307 19.5683,15.9307 C19.2983,15.9307 19.0793,16.1497 19.0793,16.4197 C19.0793,16.6887 19.2983,16.9077 19.5683,16.9077 L19.5683,16.9077 Z M11.5593,15.1747 C13.0403,15.1747 14.3323,14.3517 15.0033,13.1397 C15.6873,14.3527 16.9883,15.1747 18.4783,15.1747 L23.0473,15.1747 C23.0193,18.4027 20.3873,21.0207 17.1533,21.0207 L16.7663,21.0207 C13.5323,21.0207 10.9003,18.4027 10.8723,15.1747 L11.5593,15.1747 Z M10.8693,11.9117 C10.8693,8.6607 13.5143,6.0147 16.7663,6.0147 L17.1533,6.0147 C20.4053,6.0147 23.0503,8.6607 23.0503,11.9117 L23.0503,14.1747 L18.4783,14.1747 C16.8313,14.1747 15.4923,12.8347 15.4923,11.1887 L15.4923,10.9817 L14.4923,10.9817 L14.4923,11.2417 C14.4923,12.8587 13.1773,14.1747 11.5593,14.1747 L10.8693,14.1747 L10.8693,11.9117 Z M16.7663,22.3207 L17.1533,22.3207 C21.1213,22.3207 24.3503,19.0917 24.3503,15.1237 L24.3503,11.9117 C24.3503,7.9437 21.1213,4.7147 17.1533,4.7147 L16.7663,4.7147 C12.7983,4.7147 9.5693,7.9437 9.5693,11.9117 L9.5693,15.1237 C9.5693,19.0917 12.7983,22.3207 16.7663,22.3207 L16.7663,22.3207 Z"
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

export default PersonAndPatient;