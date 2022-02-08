import React from 'react';
import { SvgPathProps } from './Icon';

const EuropeanHealthCard: React.FC<SvgPathProps> = ({ size, isHovered }: SvgPathProps): JSX.Element => {
  const normal = (
    <path d="M24.312 28.655l-.437-.886-.437.886-.978.142.708.69-.167.973.874-.46.874.46-.166-.973.707-.69-.978-.142zm-.437-11.365l-.437.886-.978.142.708.689-.167.974.874-.46.874.46-.166-.974.707-.689-.978-.142-.437-.886zm4.147 9.814l-.438-.886-.437.886-.977.142.707.69-.167.973.874-.46.875.46-.167-.973.707-.69-.977-.142zm1.53-3.689l-.437-.885-.438.885-.977.142.707.69-.167.973.875-.459.874.459-.167-.973.707-.69-.977-.142zm12.125 10.472c0 1.081-.88 1.961-1.961 1.961H8.034a1.964 1.964 0 01-1.961-1.961V13.863c0-1.082.88-1.961 1.961-1.961h31.682c1.081 0 1.961.879 1.961 1.961v20.024zm-1.961-23.285H8.034a3.265 3.265 0 00-3.261 3.261v20.024a3.265 3.265 0 003.261 3.261h31.682a3.265 3.265 0 003.261-3.261V13.863a3.265 3.265 0 00-3.261-3.261zM26.71 21.532l.874-.46.875.46-.167-.974.707-.689-.977-.142-.438-.886-.437.886-.977.142.707.689-.167.974zm-6.544-2.691l-.437.886-.978.142.707.689-.167.974.875-.46.874.46-.167-.974.707-.689-.977-.142-.437-.886zm-.823 5.406l.707-.69-.977-.142-.437-.885-.438.885-.977.142.707.69-.167.973.875-.459.874.459-.167-.973zm1.26 2.857l-.437-.886-.437.886-.978.142.707.69-.167.973.875-.46.874.46-.167-.973.707-.69-.977-.142z" />
  );

  const normalHover = (
    <g>
      <path d="M41.662 33.892c0 1.081-.88 1.961-1.961 1.961H8.019a1.964 1.964 0 01-1.961-1.96V13.866c0-1.08.88-1.96 1.96-1.96h31.683c1.08 0 1.96.88 1.96 1.96v20.025zM39.7 10.606H8.019a3.265 3.265 0 00-3.261 3.261v20.025a3.265 3.265 0 003.26 3.261h31.683a3.265 3.265 0 003.26-3.26V13.866a3.265 3.265 0 00-3.26-3.26z" />
      <path d="M29.742 22.005a1.06 1.06 0 01-.442-.754c-.012-.272-.192-.35-.4-.176a1.056 1.056 0 01-.854.187c-.262-.072-.393.075-.291.327.102.251.064.643-.086.87-.15.227-.05.397.22.377.272-.019.632.14.802.351.169.212.362.17.427-.094.065-.263.327-.557.58-.653.255-.096.274-.29.044-.435m-.079 3.993a1.06 1.06 0 01-.442-.754c-.012-.272-.192-.351-.4-.176a1.055 1.055 0 01-.854.187c-.262-.072-.393.075-.29.326.101.252.063.644-.087.87-.15.227-.05.397.221.378.271-.02.631.138.801.35.17.213.362.17.427-.093s.327-.557.581-.653c.254-.096.273-.291.043-.435m-2.881 2.765a1.06 1.06 0 01-.442-.754c-.012-.272-.192-.351-.4-.176a1.056 1.056 0 01-.854.187c-.262-.072-.393.075-.291.326.102.252.064.644-.086.87-.15.228-.05.397.22.378.272-.02.632.139.802.35.169.213.362.17.427-.093s.327-.557.58-.653c.255-.096.274-.291.044-.435m-4.02-.068a1.055 1.055 0 01-.442-.754c-.013-.272-.193-.35-.4-.176a1.055 1.055 0 01-.855.187c-.262-.072-.393.075-.29.327.102.25.063.643-.087.87-.149.227-.05.397.221.377.271-.02.631.139.801.35.17.213.362.17.427-.093s.327-.557.581-.653c.254-.095.274-.291.043-.435m4.205-9.599a1.053 1.053 0 01-.442-.754c-.012-.27-.192-.35-.4-.176a1.056 1.056 0 01-.854.187c-.262-.072-.393.075-.29.327.101.251.062.643-.087.87-.15.227-.05.397.22.377a1.06 1.06 0 01.802.351c.17.213.361.17.426-.094.066-.263.328-.557.582-.652.254-.096.273-.292.043-.436m-4.02-.067a1.055 1.055 0 01-.441-.755c-.013-.271-.193-.35-.401-.175a1.055 1.055 0 01-.854.187c-.262-.072-.393.075-.291.326.102.252.064.644-.086.87-.15.227-.05.397.22.378.272-.02.632.138.802.35.169.213.362.17.427-.093.065-.264.327-.558.58-.653.255-.096.274-.291.044-.435m-2.881 2.764a1.055 1.055 0 01-.441-.755c-.013-.27-.193-.35-.401-.175a1.055 1.055 0 01-.854.187c-.262-.072-.393.075-.291.326.102.252.064.644-.086.871-.15.227-.05.396.22.377.272-.019.632.14.802.351.169.212.362.17.427-.094s.327-.558.58-.653c.255-.096.274-.29.044-.435m-.079 3.992a1.055 1.055 0 01-.441-.754c-.013-.27-.193-.35-.401-.176a1.055 1.055 0 01-.854.187c-.262-.072-.393.075-.291.327.102.252.064.643-.086.87-.149.227-.05.397.221.377.271-.019.631.14.801.351.169.213.362.171.427-.093s.327-.558.581-.653c.254-.096.273-.292.043-.436" />
    </g>
  );

  return isHovered ? normalHover : normal;
};

export default EuropeanHealthCard;
