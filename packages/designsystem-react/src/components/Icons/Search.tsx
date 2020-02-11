import React from 'react';
import {IconRawProps} from './Icon';
const Search = React.forwardRef((svgProps: IconRawProps, ref: any) => {
  const {size = 38, color = 'black', hoverColor = 'black', isHovered = false, ...props} = svgProps;
  return !isHovered ? (
    <svg width={size} height={size} viewBox="0 0 38 38" ref={ref} className="icon" {...props}>
      <path
        fill={color}
        fillRule="evenodd"
        d="M27.2935714,27.08 C26.9085714,27.465 26.2378571,27.465 25.8528571,27.08 L22.3678571,23.5942857 C22.8978571,23.1657143 23.3678571,22.6692857 23.7771429,22.1235714 L27.2935714,25.6392857 C27.4857143,25.8314286 27.5914286,26.0878571 27.5914286,26.36 C27.5914286,26.6321429 27.4857143,26.8878571 27.2935714,27.08 M17.2121429,23.8042857 C13.5771429,23.8042857 10.62,20.8464286 10.62,17.2121429 C10.62,13.5771429 13.5771429,10.62 17.2121429,10.62 C20.8471429,10.62 23.8042857,13.5771429 23.8042857,17.2121429 C23.8042857,20.8464286 20.8471429,23.8042857 17.2121429,23.8042857 M28.4392857,24.4942857 L24.6385714,20.6935714 C25.1371429,19.635 25.4235714,18.4578571 25.4235714,17.2121429 C25.4235714,12.6835714 21.74,9 17.2121429,9 C12.6835714,9 9,12.6835714 9,17.2121429 C9,21.74 12.6835714,25.4235714 17.2121429,25.4235714 C18.5714286,25.4235714 19.8514286,25.0864286 20.9814286,24.4992857 L24.7078571,28.2257143 C25.2057143,28.7235714 25.8685714,28.9985714 26.5735714,28.9985714 C27.2785714,28.9985714 27.9407143,28.7235714 28.4392857,28.2257143 C29.4671429,27.1971429 29.4671429,25.5228571 28.4392857,24.4942857"
      />
    </svg>
  ) : (
    <svg width={size} height={size} viewBox="0 0 38 38" ref={ref} className="icon" {...props}>
      <path
        fill={hoverColor}
        fillRule="evenodd"
        d="M27.470029,27.2563897 C27.085929,27.6404897 26.411249,27.6421597 26.027149,27.2563897 L23.345129,24.5726997 C23.869509,24.1368297 24.338779,23.6391697 24.757949,23.1014297 L27.470029,25.8118397 C27.663749,26.0038897 27.768959,26.2610697 27.768959,26.5332797 C27.768959,26.8071597 27.663749,27.0626697 27.470029,27.2563897 M17.368199,24.8866597 C13.221589,24.8866597 9.848189,21.5132597 9.848189,17.3666497 C9.848189,13.2200397 13.221589,9.84663971 17.368199,9.84663971 C21.514809,9.84663971 24.888209,13.2200397 24.888209,17.3666497 C24.888209,21.5132597 21.514809,24.8866597 17.368199,24.8866597 M28.617319,24.6645497 L25.661419,21.7069797 C26.344449,20.4077197 26.735229,18.9331097 26.735229,17.3666497 C26.735229,12.2013397 22.531839,7.99961971 17.368199,7.99961971 C12.202889,7.99961971 7.999499,12.2013397 7.999499,17.3666497 C7.999499,22.5319597 12.202889,26.7353497 17.368199,26.7353497 C19.046549,26.7353497 20.619689,26.2844497 21.984079,25.5078997 L24.878189,28.4036797 C25.379189,28.9030097 26.042179,29.1785597 26.748589,29.1785597 C27.454999,29.1785597 28.119659,28.9030097 28.617319,28.4036797 C29.116649,27.9043497 29.392199,27.2413597 29.392199,26.5332797 C29.392199,25.8285397 29.116649,25.1638797 28.617319,24.6645497"
      />
    </svg>
  );
});
export default Search;
