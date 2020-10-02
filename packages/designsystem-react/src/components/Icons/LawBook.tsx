import React from 'react';
import {SvgPathProps} from './Icon';

const LawBook: React.FC<SvgPathProps> = ({isExtraSmall, isHovered}: SvgPathProps): JSX.Element => {
  const normal = (
    <path d="M35.946 34.948H16.633V8.731h18.548c.422 0 .765.343.765.765v25.452zm0 2.478H12.471a1.675 1.675 0 011.593-1.177h21.882v1.177zm0 1.411a.765.765 0 01-.765.764H14.064a1.674 1.674 0 01-1.592-1.175h23.474v.411zm-23.559-28.43c0-.925.751-1.676 1.675-1.676h1.271v26.217h-1.269c-.622 0-1.199.193-1.677.521V10.406zM35.181 7.43H14.062a2.98 2.98 0 00-2.975 2.976v27.187h.034c-.013.11-.034.218-.034.333a2.98 2.98 0 002.977 2.976h21.117a2.068 2.068 0 002.065-2.065V9.497a2.068 2.068 0 00-2.065-2.067zm-6.8 15.496a1.133 1.133 0 01-.695.532c-.294.078-.602.04-.866-.114l-1.999-1.154a1.127 1.127 0 01-.385-1.53 1.141 1.141 0 011.56-.418l1.075.621.005-.008.886.512a1.142 1.142 0 01.418 1.559zm.952.55a2.228 2.228 0 00.223-1.7 2.227 2.227 0 00-1.044-1.362l-3.517-2.03a1.145 1.145 0 01-.419-1.56c.315-.547 1.014-.733 1.522-.442l1.474 1.02.626-.904-1.512-1.045a2.246 2.246 0 00-3.062.821 2.242 2.242 0 00.73 2.997 2.213 2.213 0 00-1.094 2.54c.145.544.488.997.96 1.3l-.002.001.017.01c.024.014.044.035.07.05l3.516 2.031c.265.152.454.398.532.693.08.294.04.602-.114.865-.314.545-1.012.735-1.536.433l-2.45-1.583-.597.924 2.474 1.598a2.244 2.244 0 003.063-.821 2.233 2.233 0 00-.728-2.996c.357-.195.66-.478.868-.84z" />
  );

  const normalHover = (
    <g>
      <path d="M28.863 21.94a1.125 1.125 0 01-.693.531c-.295.077-.603.04-.867-.114l-1.998-1.154a1.138 1.138 0 011.175-1.948l1.075.621.005-.007.886.511c.264.153.453.4.53.694.08.294.04.601-.113.865m.953.551a2.229 2.229 0 00.224-1.7 2.228 2.228 0 00-1.045-1.363l-3.516-2.03a1.142 1.142 0 01-.418-1.56c.314-.546 1.012-.734 1.52-.442l1.475 1.021.626-.905-1.512-1.045a2.244 2.244 0 00-3.062.821 2.24 2.24 0 00.729 2.998c-.35.19-.657.468-.87.84a2.24 2.24 0 00.736 3l-.001.001.016.008c.024.016.044.036.07.051l3.517 2.031c.265.153.453.4.532.693a1.13 1.13 0 01-.114.866c-.315.546-1.012.736-1.536.433l-2.451-1.583-.597.923 2.474 1.598a2.246 2.246 0 003.063-.82 2.223 2.223 0 00-.728-2.996c.357-.196.659-.479.868-.84" />
      <path d="M37.345 33.02l-20.73 1.728V8.52L36.58 6.75c.422 0 .765.343.765.765V33.02zm-2.181 6.595H14.047a1.674 1.674 0 01-1.592-1.176H35.93v.411a.766.766 0 01-.766.765zm.766-2.176H12.455a1.706 1.706 0 011.646-1.18l21.829-1.817v2.997zM12.37 10.42c0-.923.752-1.674 1.733-1.677l1.213-.108v26.221l-1.27.106c-.62 0-1.198.192-1.676.52V10.418zm24.158-4.966h-.005L14.046 7.444a2.978 2.978 0 00-2.975 2.975v27.187h.018a2.98 2.98 0 002.958 3.31h21.117a2.069 2.069 0 002.066-2.066v-4.517l.819-.068a.648.648 0 00.596-.647V7.515c0-1.137-.924-2.062-2.117-2.062z" />
    </g>
  );

  return isHovered ? normalHover : normal;
};

export default LawBook;
