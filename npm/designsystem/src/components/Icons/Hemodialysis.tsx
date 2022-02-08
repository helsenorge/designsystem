import React from 'react';
import { SvgPathProps } from './Icon';

const Hemodialysis: React.FC<SvgPathProps> = ({ size, isHovered }: SvgPathProps): JSX.Element => {
  const normal = (
    <path
      fillRule={'evenodd'}
      d="M30.479 22.662h3.587v-1.297h-3.587v1.297zm-1.301 1.3h6.188v-3.898h-6.188v3.898zm-6.742-1.3h3.635v-1.297h-3.635v1.297zm-1.3 1.301h6.235v-3.898h-6.235v3.898zm1.299-6.886h11.686V9.9H22.435v7.177zm-1.3 1.301h14.286V8.6H21.135v9.778zm-2.172 7.101h3.455c2.891 0 4.485 2.318 5.342 3.563l.113.165 9.614-.043v-9.257h1.3v9.252l2.176-.01V7.298c0-.552-.449-1.001-1.001-1.001H19.964c-.552 0-1.001.449-1.001 1.001v18.181zm12.441 9.432a.842.842 0 10-1.683.001.842.842 0 001.683-.001zm12.669 4.468l-.001 1.301-17.187-.004c-1.699 2.158-4.434 2.436-6.415 2.436h-.103l-10.135-.048a2.248 2.248 0 01-1.596-.668 2.234 2.234 0 01-.656-1.598c.001-.343.086-.664.226-.955l-.438-.002a2.265 2.265 0 01-2.253-2.282c.002-.343.086-.67.23-.97l-.215-.001a2.179 2.179 0 01-1.618-.739 2.499 2.499 0 01-.634-1.694c.006-1.335 1.023-2.45 2.274-2.412l.216.001a2.25 2.25 0 01-.221-.972 2.27 2.27 0 012.264-2.261h.009l4.733.011c-.543-1.13-.104-2.458-.051-2.609a.65.65 0 01.613-.434h4.548V7.298a2.304 2.304 0 012.301-2.302h19.998a2.305 2.305 0 012.302 2.302v21.846l1.801-.008.006 1.301-5.284.022v1.342a3.765 3.765 0 01-3.76 3.761h-2.435a2.135 2.135 0 01-2.029 1.491 2.144 2.144 0 01-2.141-2.142c0-1.181.961-2.141 2.141-2.141.953 0 1.752.628 2.029 1.491h2.435a2.463 2.463 0 002.46-2.46v-1.336l-9.944.044a.668.668 0 01-.521-.259c-.097-.128-.208-.289-.334-.471-.771-1.122-2.063-3-4.27-3h-8.793c-.059.371-.073.866.125 1.231.132.242.351.412.667.517l4.556.011a.652.652 0 010 1.301l-4.558.014c-.052.014-.107-.007-.159-.02l-.024-.006-6.416-.015h-.004a.968.968 0 00-.965.966.967.967 0 00.953.974l7.768.033-.005 1.301-1.153-.005v.005l-6.611-.031-.012-.002-2.24-.009h-.004c-.53 0-.962.5-.965 1.117-.001.312.105.602.299.817a.889.889 0 00.659.309l10.032.039-.005 1.301-1.622-.006v.006l-6.158-.028h-.006a.967.967 0 00-.962.965.972.972 0 00.28.69.954.954 0 00.678.286l2.47.012h.01l5.315.025-.006 1.301-5.319-.025a.96.96 0 00-.963.951.957.957 0 00.958.96l10.136.048c2.832.053 4.619-.672 5.65-2.158a.65.65 0 01.534-.279l17.515.004zm-5.936-23.844a.633.633 0 10.001-1.267.633.633 0 00-.001 1.267zm0-2.826a.633.633 0 10.001-1.267.633.633 0 00-.001 1.267zm0 5.652a.633.633 0 10.001-1.267.633.633 0 00-.001 1.267zm-.633-9.111a.633.633 0 111.266 0 .633.633 0 01-1.266 0z"
    />
  );

  const normalHover = (
    <path
      fillRule={'evenodd'}
      d="M30.479 22.662h3.587v-1.297h-3.587v1.297zm-1.301 1.3h6.188v-3.898h-6.188v3.898zm-6.743-1.3h3.635v-1.297h-3.635v1.297zm-1.299 1.301h6.235v-3.898h-6.235v3.898zm1.299-6.886h11.686V9.9H22.435v7.177zm-1.3 1.301h14.286V8.6H21.135v9.778zm-2.172 6.081l4.354.897c2.584.533 3.682 2.375 4.338 3.476.08.134.155.26.227.375l9.605-.043v-9.257h1.3v9.252l2.176-.01V7.298c0-.552-.449-1.001-1.001-1.001H19.964c-.552 0-1.001.449-1.001 1.001v17.161zm12.441 10.452a.842.842 0 10-1.683.001.842.842 0 001.683-.001zm12.668 4.468v1.301l-17.187-.004c-1.699 2.158-4.434 2.436-6.415 2.436h-.103l-10.135-.048a2.248 2.248 0 01-1.596-.668 2.239 2.239 0 01-.435-2.553l-.434-.002a2.246 2.246 0 01-1.598-.674 2.25 2.25 0 01-.424-2.578l-.215-.001a2.179 2.179 0 01-1.618-.739 2.5 2.5 0 01-.634-1.694c.006-1.335 1.014-2.402 2.274-2.412l.216.001a2.25 2.25 0 01-.222-.972 2.272 2.272 0 012.264-2.261h.01l7.937.019-1.286-.545c-.728-.348-1.203-.873-1.401-1.53-.376-1.254.362-2.534.447-2.676a.648.648 0 01.689-.301l3.457.712V7.298a2.304 2.304 0 012.301-2.302h19.998a2.304 2.304 0 012.301 2.302v21.846l1.802-.008.005 1.301-5.283.022v1.342a3.765 3.765 0 01-3.76 3.761h-2.435a2.135 2.135 0 01-2.029 1.491 2.144 2.144 0 01-2.141-2.142c0-1.181.96-2.141 2.141-2.141.953 0 1.752.628 2.029 1.491h2.435a2.463 2.463 0 002.46-2.46v-1.336l-9.944.044a.656.656 0 01-.522-.259 8.533 8.533 0 01-.482-.753c-.617-1.034-1.462-2.45-3.484-2.867l-8.612-1.776c-.133.352-.247.834-.126 1.232.092.303.317.537.689.715l4.219 1.789a.65.65 0 01-.254 1.249h-.001l-11.154-.027h-.004a.968.968 0 00-.965.966.967.967 0 00.952.974l7.769.033-.005 1.301-1.153-.005v.005l-6.611-.031-.012-.002-2.241-.009h-.003c-.53 0-.962.5-.965 1.117-.001.312.105.602.299.817a.889.889 0 00.659.309l10.032.039-.005 1.301-1.622-.006v.006l-6.158-.028h-.006a.966.966 0 00-.962.965.966.966 0 00.958.976l2.479.012h.001l5.315.025-.006 1.301-5.319-.025a.96.96 0 00-.963.951.961.961 0 00.958.96l10.135.048.08.001c2.778 0 4.549-.687 5.571-2.159a.65.65 0 01.534-.279l17.514.004zm-5.935-23.844a.632.632 0 10.001-1.265.632.632 0 00-.001 1.265zm0-2.826a.632.632 0 10.001-1.265.632.632 0 00-.001 1.265zm0 5.652a.632.632 0 10.001-1.265.632.632 0 00-.001 1.265zm-.633-9.111a.632.632 0 111.265-.001.632.632 0 01-1.265.001z"
    />
  );

  return isHovered ? normalHover : normal;
};

export default Hemodialysis;
