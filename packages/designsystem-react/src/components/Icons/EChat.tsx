import React from 'react';
import {IconRawProps} from './Icon';

const EChat = React.forwardRef((svgProps: IconRawProps, ref: any) => {
  const {size = 48, color = 'black', hoverColor = 'black', isHovered = false, ...props} = svgProps;
  const isExtraSmall = size <= 38;
  const normal = (
    <path
      fill-rule="evenodd"
      d="M25.834,39.6735 C25.051,39.6735 24.413,39.0355 24.413,38.2525 C24.413,37.4685 25.051,36.8305 25.834,36.8305 C26.618,36.8305 27.256,37.4685 27.256,38.2525 C27.256,39.0355 26.618,39.6735 25.834,39.6735 L25.834,39.6735 Z M25.834,35.6315 C24.389,35.6315 23.214,36.8075 23.214,38.2525 C23.214,39.6975 24.389,40.8725 25.834,40.8725 C27.279,40.8725 28.455,39.6975 28.455,38.2525 C28.455,36.8075 27.279,35.6315 25.834,35.6315 L25.834,35.6315 Z M29.028,7.6815 L24.695,7.6815 C24.421,7.6815 24.199,7.9025 24.199,8.1775 C24.199,8.4515 24.421,8.6735 24.695,8.6735 L29.028,8.6735 C29.303,8.6735 29.524,8.4515 29.524,8.1775 C29.524,7.9025 29.303,7.6815 29.028,7.6815 L29.028,7.6815 Z M35.25,39.3605 C35.25,40.7365 34.131,41.8565 32.755,41.8565 L18.913,41.8565 C17.537,41.8565 16.418,40.7365 16.418,39.3605 L16.418,27.9555 L19.005,27.9555 L23.848,31.0695 L23.848,27.9555 L25.974,27.9555 C27.61,27.9555 28.942,26.6235 28.942,24.9855 L28.942,17.5825 C28.942,15.9455 27.61,14.6135 25.974,14.6135 L16.418,14.6135 L16.418,8.6395 C16.418,7.2625 17.537,6.1435 18.913,6.1435 L32.755,6.1435 C34.131,6.1435 35.25,7.2625 35.25,8.6395 L35.25,39.3605 Z M9.969,26.5375 C9.113,26.5375 8.418,25.8415 8.418,24.9855 L8.418,17.5825 C8.418,16.7275 9.113,16.0315 9.969,16.0315 L25.974,16.0315 C26.829,16.0315 27.524,16.7275 27.524,17.5825 L27.524,24.9855 C27.524,25.8415 26.829,26.5375 25.974,26.5375 L22.43,26.5375 L22.43,28.4735 L19.421,26.5375 L9.969,26.5375 Z M32.755,4.7255 L18.913,4.7255 C16.756,4.7255 15,6.4815 15,8.6395 L15,14.6135 L9.969,14.6135 C8.332,14.6135 7,15.9455 7,17.5825 L7,24.9855 C7,26.6235 8.332,27.9555 9.969,27.9555 L15,27.9555 L15,39.3605 C15,41.5185 16.756,43.2745 18.913,43.2745 L32.755,43.2745 C34.912,43.2745 36.668,41.5185 36.668,39.3605 L36.668,8.6395 C36.668,6.4815 34.912,4.7255 32.755,4.7255 L32.755,4.7255 Z M23.065,7.7515 C22.83,7.7515 22.64,7.9425 22.64,8.1775 C22.64,8.4115 22.83,8.6025 23.065,8.6025 C23.3,8.6025 23.49,8.4115 23.49,8.1775 C23.49,7.9425 23.3,7.7515 23.065,7.7515 L23.065,7.7515 Z M11.451,23.0425 L23.491,23.0425 L23.491,22.0505 L11.451,22.0505 L11.451,23.0425 Z M11.451,20.0615 L23.491,20.0615 L23.491,19.0695 L11.451,19.0695 L11.451,20.0615 Z"
    />
  );

  const normalHover = (
    <path
      fill-rule="evenodd"
      d="M32.9199,4.7844 C35.0459,4.7844 36.7749,6.5134 36.7749,8.6394 L36.7749,8.6394 L36.7749,39.3604 C36.7749,41.4864 35.0459,43.2154 32.9199,43.2154 L32.9199,43.2154 L19.0789,43.2154 C16.9539,43.2154 15.2249,41.4864 15.2249,39.3604 L15.2249,39.3604 L15.2249,25.7974 L10.1349,25.7974 C8.5309,25.7974 7.2249,24.4914 7.2249,22.8864 L7.2249,22.8864 L7.2249,15.4834 C7.2249,13.8784 8.5309,12.5724 10.1349,12.5724 L10.1349,12.5724 L15.2249,12.5724 L15.2249,8.6394 C15.2249,6.5134 16.9539,4.7844 19.0789,4.7844 L19.0789,4.7844 Z M32.9199,6.0854 L19.0789,6.0854 C17.6709,6.0854 16.5249,7.2304 16.5249,8.6394 L16.5249,8.6394 L16.5249,12.5724 L26.1399,12.5724 C27.7439,12.5724 29.0489,13.8784 29.0489,15.4834 L29.0489,15.4834 L29.0489,22.8864 C29.0489,24.4914 27.7439,25.7974 26.1399,25.7974 L26.1399,25.7974 L23.9539,25.7974 L23.9539,28.8634 L19.1879,25.7974 L16.5249,25.7974 L16.5249,39.3604 C16.5249,40.7694 17.6709,41.9154 19.0789,41.9154 L19.0789,41.9154 L32.9199,41.9154 C34.3289,41.9154 35.4749,40.7694 35.4749,39.3604 L35.4749,39.3604 L35.4749,8.6394 C35.4749,7.2304 34.3289,6.0854 32.9199,6.0854 L32.9199,6.0854 Z M25.9998,35.7314 C27.3898,35.7314 28.5208,36.8624 28.5208,38.2524 C28.5208,39.6424 27.3898,40.7734 25.9998,40.7734 C24.6098,40.7734 23.4788,39.6424 23.4788,38.2524 C23.4788,36.8624 24.6098,35.7314 25.9998,35.7314 Z M25.9998,36.7314 C25.1608,36.7314 24.4788,37.4144 24.4788,38.2524 C24.4788,39.0914 25.1608,39.7734 25.9998,39.7734 C26.8388,39.7734 27.5208,39.0914 27.5208,38.2524 C27.5208,37.4144 26.8388,36.7314 25.9998,36.7314 Z M26.1399,13.8734 L10.1349,13.8734 C9.2469,13.8734 8.5249,14.5954 8.5249,15.4834 L8.5249,15.4834 L8.5249,22.8864 C8.5249,23.7744 9.2469,24.4964 10.1349,24.4964 L10.1349,24.4964 L19.5699,24.4964 L22.6549,26.4804 L22.6549,24.4964 L26.1399,24.4964 C27.0269,24.4964 27.7489,23.7744 27.7489,22.8864 L27.7489,22.8864 L27.7489,15.4834 C27.7489,14.5954 27.0269,13.8734 26.1399,13.8734 L26.1399,13.8734 Z M23.657,19.951 L23.657,20.943 L11.617,20.943 L11.617,19.951 L23.657,19.951 Z M23.657,16.969 L23.657,17.961 L11.617,17.961 L11.617,16.969 L23.657,16.969 Z M29.1941,7.6816 C29.4681,7.6816 29.6901,7.9036 29.6901,8.1776 C29.6901,8.4526 29.4681,8.6736 29.1941,8.6736 L29.1941,8.6736 L24.8611,8.6736 C24.5871,8.6736 24.3641,8.4526 24.3641,8.1776 C24.3641,7.9036 24.5871,7.6816 24.8611,7.6816 L24.8611,7.6816 Z M23.2307,7.752 C23.4657,7.752 23.6557,7.942 23.6557,8.178 C23.6557,8.412 23.4657,8.603 23.2307,8.603 C22.9957,8.603 22.8057,8.412 22.8057,8.178 C22.8057,7.942 22.9957,7.752 23.2307,7.752 Z"
    />
  );

  const simplified = (
    <path
      fill-rule="evenodd"
      d="M29.1947368,7.68138947 L24.8608421,7.68138947 C24.588,7.68138947 24.3656842,7.90370526 24.3656842,8.17781053 C24.3656842,8.45065263 24.588,8.67296842 24.8608421,8.67296842 L29.1947368,8.67296842 C29.4688421,8.67296842 29.6911579,8.45065263 29.6911579,8.17781053 C29.6911579,7.90370526 29.4688421,7.68138947 29.1947368,7.68138947 L29.1947368,7.68138947 Z M26.0002105,39.7668632 C25.1652632,39.7668632 24.4844211,39.0872842 24.4844211,38.2523368 C24.4844211,37.4173895 25.1652632,36.7378105 26.0002105,36.7378105 C26.8351579,36.7378105 27.5147368,37.4173895 27.5147368,38.2523368 C27.5147368,39.0872842 26.8351579,39.7668632 26.0002105,39.7668632 L26.0002105,39.7668632 Z M26.0002105,35.7260211 C24.6069474,35.7260211 23.4738947,36.8603368 23.4738947,38.2523368 C23.4738947,39.6456 24.6069474,40.7786526 26.0002105,40.7786526 C27.3922105,40.7786526 28.5265263,39.6456 28.5265263,38.2523368 C28.5265263,36.8603368 27.3922105,35.7260211 26.0002105,35.7260211 L26.0002105,35.7260211 Z M23.2301053,7.75212632 C22.9951579,7.75212632 22.8056842,7.94286316 22.8056842,8.17781053 C22.8056842,8.41275789 22.9951579,8.60223158 23.2301053,8.60223158 C23.4650526,8.60223158 23.6557895,8.41275789 23.6557895,8.17781053 C23.6557895,7.94286316 23.4650526,7.75212632 23.2301053,7.75212632 L23.2301053,7.75212632 Z M35.3677895,39.3601263 C35.3677895,40.7091789 34.2701053,41.8081263 32.9197895,41.8081263 L19.0793684,41.8081263 C17.7303158,41.8081263 16.6326316,40.7091789 16.6326316,39.3601263 L16.6326316,28.0043368 L19.1564211,28.0043368 L24.0625263,31.1609684 L24.0625263,28.0043368 L26.1391579,28.0043368 C27.8027368,28.0043368 29.1568421,26.6514947 29.1568421,24.9866526 L29.1568421,17.5832842 C29.1568421,15.9184421 27.8027368,14.5656 26.1391579,14.5656 L16.6326316,14.5656 L16.6326316,8.64012632 C16.6326316,7.28981053 17.7303158,6.19212632 19.0793684,6.19212632 L32.9197895,6.19212632 C34.2701053,6.19212632 35.3677895,7.28981053 35.3677895,8.64012632 L35.3677895,39.3601263 Z M10.1349474,26.4898105 C9.30757895,26.4898105 8.63305263,25.8140211 8.63305263,24.9866526 L8.63305263,17.5832842 C8.63305263,16.7559158 9.30757895,16.0801263 10.1349474,16.0801263 L26.1391579,16.0801263 C26.9665263,16.0801263 27.6423158,16.7559158 27.6423158,17.5832842 L27.6423158,24.9866526 C27.6423158,25.8140211 26.9665263,26.4898105 26.1391579,26.4898105 L22.5467368,26.4898105 L22.5467368,28.3832842 L19.6023158,26.4898105 L10.1349474,26.4898105 Z M32.9197895,4.6776 L19.0793684,4.6776 C16.8953684,4.6776 15.1168421,6.45486316 15.1168421,8.64012632 L15.1168421,14.5656 L10.1349474,14.5656 C8.47136842,14.5656 7.11726316,15.9184421 7.11726316,17.5832842 L7.11726316,24.9866526 C7.11726316,26.6514947 8.47136842,28.0043368 10.1349474,28.0043368 L15.1168421,28.0043368 L15.1168421,39.3601263 C15.1168421,41.5453895 16.8953684,43.3226526 19.0793684,43.3226526 L32.9197895,43.3226526 C35.1050526,43.3226526 36.8823158,41.5453895 36.8823158,39.3601263 L36.8823158,8.64012632 C36.8823158,6.45486316 35.1050526,4.6776 32.9197895,4.6776 L32.9197895,4.6776 Z M11.6178947,20.0717053 L23.6570526,20.0717053 L23.6570526,19.0599158 L11.6178947,19.0599158 L11.6178947,20.0717053 Z M11.6178947,23.0527579 L23.6570526,23.0527579 L23.6570526,22.0409684 L11.6178947,22.0409684 L11.6178947,23.0527579 Z"
    />
  );

  const simplifiedHover = (
    <path
      fill-rule="evenodd"
      d="M32.9202947,4.67772632 C35.1055579,4.67772632 36.8828211,6.45498947 36.8828211,8.64025263 L36.8828211,8.64025263 L36.8828211,39.3602526 C36.8828211,41.5442526 35.1055579,43.3227789 32.9202947,43.3227789 L32.9202947,43.3227789 L19.0786105,43.3227789 C16.8946105,43.3227789 15.1173474,41.5442526 15.1173474,39.3602526 L15.1173474,39.3602526 L15.1173474,25.5766737 L10.1341895,25.5766737 C8.47061053,25.5766737 7.11650526,24.2238316 7.11650526,22.5589895 L7.11650526,22.5589895 L7.11650526,15.1556211 C7.11650526,13.4907789 8.47061053,12.1366737 10.1341895,12.1366737 L10.1341895,12.1366737 L15.1173474,12.1366737 L15.1173474,8.64025263 C15.1173474,6.45498947 16.8946105,4.67772632 19.0786105,4.67772632 L19.0786105,4.67772632 Z M32.9202947,6.19225263 L19.0786105,6.19225263 C17.7308211,6.19225263 16.6331368,7.28993684 16.6331368,8.64025263 L16.6331368,8.64025263 L16.6331368,12.1366737 L26.1396632,12.1366737 C27.8032421,12.1366737 29.1573474,13.4907789 29.1573474,15.1556211 L29.1573474,15.1556211 L29.1573474,22.5589895 C29.1573474,24.2238316 27.8032421,25.5766737 26.1396632,25.5766737 L26.1396632,25.5766737 L24.0630316,25.5766737 L24.0630316,28.7307789 L19.1569263,25.5766737 L16.6331368,25.5766737 L16.6331368,39.3602526 C16.6331368,40.7093053 17.7308211,41.8069895 19.0786105,41.8069895 L19.0786105,41.8069895 L32.9202947,41.8069895 C34.2693474,41.8069895 35.3670316,40.7093053 35.3670316,39.3602526 L35.3670316,39.3602526 L35.3670316,8.64025263 C35.3670316,7.28993684 34.2693474,6.19225263 32.9202947,6.19225263 L32.9202947,6.19225263 Z M26.0000842,35.7264 C27.3933474,35.7264 28.5264,36.8594526 28.5264,38.2527158 C28.5264,39.6447158 27.3933474,40.7790316 26.0000842,40.7790316 C24.6068211,40.7790316 23.4737684,39.6447158 23.4737684,38.2527158 C23.4737684,36.8594526 24.6068211,35.7264 26.0000842,35.7264 Z M26.0000842,36.7381895 C25.1638737,36.7381895 24.4842947,37.4177684 24.4842947,38.2527158 C24.4842947,39.0876632 25.1638737,39.7672421 26.0000842,39.7672421 C26.8362947,39.7672421 27.5158737,39.0876632 27.5158737,38.2527158 C27.5158737,37.4177684 26.8362947,36.7381895 26.0000842,36.7381895 Z M26.1396632,13.6512 L10.1341895,13.6512 C9.30682105,13.6512 8.63229474,14.3269895 8.63229474,15.1556211 L8.63229474,15.1556211 L8.63229474,22.5589895 C8.63229474,23.3863579 9.30682105,24.0621474 10.1341895,24.0621474 L10.1341895,24.0621474 L19.6015579,24.0621474 L22.5472421,25.9556211 L22.5472421,24.0621474 L26.1396632,24.0621474 C26.9682947,24.0621474 27.6415579,23.3863579 27.6415579,22.5589895 L27.6415579,22.5589895 L27.6415579,15.1556211 C27.6415579,14.3269895 26.9682947,13.6512 26.1396632,13.6512 L26.1396632,13.6512 Z M23.6564211,19.6130526 L23.6564211,20.6248421 L11.6172632,20.6248421 L11.6172632,19.6130526 L23.6564211,19.6130526 Z M23.6564211,16.6307368 L23.6564211,17.6425263 L11.6172632,17.6425263 L11.6172632,16.6307368 L23.6564211,16.6307368 Z M29.1943579,7.68138947 C29.4684632,7.68138947 29.6907789,7.90370526 29.6907789,8.17781053 C29.6907789,8.45065263 29.4684632,8.67296842 29.1943579,8.67296842 L29.1943579,8.67296842 L24.8604632,8.67296842 C24.5876211,8.67296842 24.3653053,8.45065263 24.3653053,8.17781053 C24.3653053,7.90370526 24.5876211,7.68138947 24.8604632,7.68138947 L24.8604632,7.68138947 Z M23.2307368,7.75162105 C23.4656842,7.75162105 23.6551579,7.94235789 23.6551579,8.17730526 C23.6551579,8.41225263 23.4656842,8.60298947 23.2307368,8.60298947 C22.9957895,8.60298947 22.8050526,8.41225263 22.8050526,8.17730526 C22.8050526,7.94235789 22.9957895,7.75162105 23.2307368,7.75162105 Z"
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

export default EChat;
