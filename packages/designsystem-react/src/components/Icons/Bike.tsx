import React from 'react';
import {IconRawProps} from './Icon';

const Bike = React.forwardRef((svgProps: IconRawProps, ref: any) => {
  const {size = 48, color = 'black', hoverColor = 'black', isHovered = false, ...props} = svgProps;
  const isExtraSmall = size <= 38;
  const normal = (
    <path
      fill-rule="evenodd"
      d="M36.6442625,34.0915564 C33.1962131,34.0915564 30.3909642,31.2863884 30.3909642,27.838258 C30.3909642,25.0735686 32.195177,22.723785 34.6874453,21.9002881 L36.3979097,27.908448 C36.4299687,28.0211404 36.5325415,28.0945686 36.6441006,28.0945686 C36.6673353,28.0945686 36.6908939,28.0913303 36.7143715,28.0846109 C36.8504606,28.0459133 36.9293129,27.9041572 36.8905344,27.7681491 L35.1800701,21.7598273 C35.6501077,21.6465681 36.1399799,21.5849597 36.6442625,21.5849597 C40.0923119,21.5849597 42.8975609,24.3902087 42.8975609,27.838258 C42.8975609,31.2863884 40.0923119,34.0915564 36.6442625,34.0915564 L36.6442625,34.0915564 Z M12.0853201,34.0915564 C8.63727067,34.0915564 5.83202169,31.2863884 5.83202169,27.838258 C5.83202169,24.3902087 8.63727067,21.5849597 12.0853201,21.5849597 C13.0105802,21.5849597 13.8887233,21.7885671 14.6796755,22.1507698 L11.8567778,27.7224892 C11.816623,27.8019892 11.820428,27.8965473 11.8670594,27.9723232 C11.9136098,28.0482611 11.9962671,28.0944067 12.0853201,28.0944067 L18.3320609,28.0944067 C18.1971052,31.4240966 15.4474738,34.0915564 12.0853201,34.0915564 L12.0853201,34.0915564 Z M18.3320609,27.5821094 L12.5022498,27.5821094 L15.1364362,22.3827932 C16.9751368,23.4153217 18.2415507,25.349309 18.3320609,27.5821094 L18.3320609,27.5821094 Z M17.8642091,17.9055345 L22.5004677,27.141864 L19.6391963,27.1667178 C19.4247406,24.735896 18.0597208,22.6314128 16.092703,21.4021582 L17.8642091,17.9055345 Z M31.964206,17.2728538 L23.7279412,26.6180707 L19.0369555,17.2728538 L31.964206,17.2728538 Z M36.6442625,20.2529704 C36.1556047,20.2529704 35.6782809,20.3012209 35.2152055,20.389869 L34.1048771,16.5134749 L34.1048771,14.3002662 L37.0016887,14.3002662 C37.3694774,14.3002662 37.6677238,14.0021007 37.6677238,13.6342311 C37.6677238,13.2664424 37.3694774,12.9682769 37.0016887,12.9682769 L33.4389229,12.9682769 C33.0711342,12.9682769 32.7728878,13.2664424 32.7728878,13.6342311 L32.7728878,15.9408645 L18.3683297,15.9408645 L17.4352977,14.0820055 L18.4291286,14.0820055 C18.7969173,14.0820055 19.0951637,13.78384 19.0951637,13.4160513 C19.0951637,13.0481817 18.7969173,12.7500162 18.4291286,12.7500162 L13.3042121,12.7500162 C12.9364234,12.7500162 12.6382579,13.0481817 12.6382579,13.4160513 C12.6382579,13.78384 12.9364234,14.0820055 13.3042121,14.0820055 L15.944956,14.0820055 L17.1211026,16.4251506 L14.9052223,20.798784 C14.0328272,20.4479963 13.0816607,20.2529704 12.0853201,20.2529704 C7.90274572,20.2529704 4.50003238,23.6556837 4.50003238,27.838258 C4.50003238,32.0208324 7.90274572,35.4235457 12.0853201,35.4235457 C16.0451001,35.4235457 19.3040334,32.3729154 19.6400059,28.4987881 L23.1609978,28.4681863 C23.1783226,28.4680243 23.6517605,28.461062 23.8470293,28.381643 C24.0524988,28.2980142 24.299985,27.9804189 24.3647508,27.9101481 L33.1337951,17.9603426 L33.9343002,20.75531 C31.0865487,21.8486374 29.0589748,24.6104123 29.0589748,27.838258 C29.0589748,32.0208324 32.4616882,35.4235457 36.6442625,35.4235457 C40.8268369,35.4235457 44.2295502,32.0208324 44.2295502,27.838258 C44.2295502,23.6556837 40.8268369,20.2529704 36.6442625,20.2529704 L36.6442625,20.2529704 Z"
    />
  );

  const normalHover = (
    <path
      fill-rule="evenodd"
      d="M38.8942625,34.0915564 C35.4462131,34.0915564 32.6409642,31.2863884 32.6409642,27.838258 C32.6409642,25.0735686 34.445177,22.723785 36.9374453,21.9002881 L38.6479097,27.908448 C38.6799687,28.0211404 38.7825415,28.0945686 38.8941006,28.0945686 C38.9173353,28.0945686 38.9408939,28.0913303 38.9643715,28.0846109 C39.1004606,28.0459133 39.1793129,27.9041572 39.1405344,27.7681491 L37.4300701,21.7598273 C37.9001077,21.6465681 38.3899799,21.5849597 38.8942625,21.5849597 C42.3423119,21.5849597 45.1475609,24.3902087 45.1475609,27.838258 C45.1475609,31.2863884 42.3423119,34.0915564 38.8942625,34.0915564 L38.8942625,34.0915564 Z M14.3353201,34.0915564 C10.8872707,34.0915564 8.08202169,31.2863884 8.08202169,27.838258 C8.08202169,24.3902087 10.8872707,21.5849597 14.3353201,21.5849597 C15.2605802,21.5849597 16.1387233,21.7885671 16.9296755,22.1507698 L14.1067778,27.7224892 C14.066623,27.8019892 14.070428,27.8965473 14.1170594,27.9723232 C14.1636098,28.0482611 14.2462671,28.0944067 14.3353201,28.0944067 L20.5820609,28.0944067 C20.4471052,31.4240966 17.6974738,34.0915564 14.3353201,34.0915564 L14.3353201,34.0915564 Z M20.5820609,27.5821094 L14.7522498,27.5821094 L17.3864362,22.3827932 C19.2251368,23.4153217 20.4915507,25.349309 20.5820609,27.5821094 L20.5820609,27.5821094 Z M20.1142091,17.9055345 L24.7504677,27.141864 L21.8891963,27.1667178 C21.6747406,24.735896 20.3097208,22.6314128 18.342703,21.4021582 L20.1142091,17.9055345 Z M34.214206,17.2728538 L25.9779412,26.6180707 L21.2869555,17.2728538 L34.214206,17.2728538 Z M38.8942625,20.2529704 C38.4056047,20.2529704 37.9282809,20.3012209 37.4652055,20.389869 L36.3548771,16.5134749 L36.3548771,14.3002662 L39.2516887,14.3002662 C39.6194774,14.3002662 39.9177238,14.0021007 39.9177238,13.6342311 C39.9177238,13.2664424 39.6194774,12.9682769 39.2516887,12.9682769 L35.6889229,12.9682769 C35.3211342,12.9682769 35.0228878,13.2664424 35.0228878,13.6342311 L35.0228878,15.9408645 L20.6183297,15.9408645 L19.6852977,14.0820055 L20.6791286,14.0820055 C21.0469173,14.0820055 21.3451637,13.78384 21.3451637,13.4160513 C21.3451637,13.0481817 21.0469173,12.7500162 20.6791286,12.7500162 L15.5542121,12.7500162 C15.1864234,12.7500162 14.8882579,13.0481817 14.8882579,13.4160513 C14.8882579,13.78384 15.1864234,14.0820055 15.5542121,14.0820055 L18.194956,14.0820055 L19.3711026,16.4251506 L17.1552223,20.798784 C16.2828272,20.4479963 15.3316607,20.2529704 14.3353201,20.2529704 C10.1527457,20.2529704 6.75003238,23.6556837 6.75003238,27.838258 C6.75003238,32.0208324 10.1527457,35.4235457 14.3353201,35.4235457 C18.2951001,35.4235457 21.5540334,32.3729154 21.8900059,28.4987881 L25.4109978,28.4681863 C25.4283226,28.4680243 25.9017605,28.461062 26.0970293,28.381643 C26.3024988,28.2980142 26.549985,27.9804189 26.6147508,27.9101481 L35.3837951,17.9603426 L36.1843002,20.75531 C33.3365487,21.8486374 31.3089748,24.6104123 31.3089748,27.838258 C31.3089748,32.0208324 34.7116882,35.4235457 38.8942625,35.4235457 C43.0768369,35.4235457 46.4795502,32.0208324 46.4795502,27.838258 C46.4795502,23.6556837 43.0768369,20.2529704 38.8942625,20.2529704 L38.8942625,20.2529704 Z"
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

export default Bike;
