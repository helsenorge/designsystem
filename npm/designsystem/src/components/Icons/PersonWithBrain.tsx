import React from 'react';

import { SvgPathProps } from '../Icon';

const PersonWithBrain: React.FC<SvgPathProps> = ({ isHovered }: SvgPathProps): React.ReactElement => {
  const normal = (
    <path d="M26.604 20.51a1.02 1.02 0 100 2.042 1.02 1.02 0 000-2.041zm7.896 6.297a.826.826 0 01-.707.387h-1.856v2.04c0 2.923-2.377 5.3-5.3 5.3h-.65v5.185H13.846V34.32c0-2.601-.918-4.414-1.888-6.335-1.08-2.133-2.193-4.34-2.193-7.971 0-5.46 4.222-11.351 11.043-11.351 5.396 0 11.129 4.055 11.129 11.572v.144l2.616 5.624a.822.822 0 01-.053.803zm1.232-1.352l-2.495-5.364c-.073-8.268-6.44-12.728-12.43-12.728-6.806 0-12.343 5.676-12.343 12.652 0 3.943 1.24 6.394 2.333 8.557.939 1.856 1.748 3.459 1.748 5.749v6.698h14.743v-5.216c3.335-.328 5.95-3.15 5.95-6.57v-.738h.555c.734 0 1.408-.37 1.802-.99a2.123 2.123 0 00.137-2.05zM24.32 14.568l-.942.942a3.645 3.645 0 00-2.545-.107l-.41-.688a2.091 2.091 0 01.275-2.496l.65-.69c.904.128 1.8.397 2.64.812.389.192.654.553.726.99.075.453-.073.915-.394 1.237zm-6.29 6.29l-.46-.45a1.998 1.998 0 01-.262-2.54l.047-.068c.264.195.577.299.894.299.32 0 .642-.102.915-.311l1.229-.942a2.555 2.555 0 012.099-.45l-4.462 4.462zm-2.371 2.37a1.402 1.402 0 01-1.321.375 1.338 1.338 0 01-.988-.89 10.527 10.527 0 01-.533-2.818l.955.499c.418.215.874.322 1.329.322.398 0 .793-.086 1.162-.247.144.26.318.509.538.725l.45.442-1.592 1.592zm-.333-9.881l1.092 1.078c.15.147.163.382.029.545a1.508 1.508 0 00.075 1.993l.04.043-.168.252a3.083 3.083 0 00-.485 2.15 1.795 1.795 0 01-1.63.01l-1.464-.765c.133-1.946 1.018-3.917 2.51-5.306zm4.579-1.891l-.007.007a3.195 3.195 0 00-.42 3.814l.367.617c-.04.028-.081.05-.12.079l-1.23.942a.406.406 0 01-.54-.042l-.636-.668a.406.406 0 01-.021-.538 1.5 1.5 0 00-.108-2.026l-.994-.98a7.003 7.003 0 013.709-1.205zm5.894 1.697a2.42 2.42 0 00-1.325-1.8 9.704 9.704 0 00-4.271-1.013c-5.258 0-8.512 4.578-8.512 8.819 0 1.42.196 2.66.617 3.907.275.812.94 1.412 1.78 1.609a2.493 2.493 0 002.348-.669l8.66-8.661a2.521 2.521 0 00.703-2.192z" />
  );

  const normalHover = (
    <g>
      <path d="M26.604 20.51c-.563 0-1.02.458-1.02 1.02a1.021 1.021 0 002.04 0 1.02 1.02 0 00-1.02-1.02m-1.022-5.53l-1.063 1.063-.033-.013a3.977 3.977 0 00-2.808-.103l-.475-.798a2.358 2.358 0 01.312-2.814l.737-.78c1.009.14 2.012.44 2.949.902.445.22.748.633.83 1.133a1.624 1.624 0 01-.45 1.41zm-9.538 9.537a1.593 1.593 0 01-1.507.428 1.535 1.535 0 01-1.128-1.018 11.612 11.612 0 01-.592-3.214l1.135.593a3.135 3.135 0 002.742.065c.159.298.356.581.608.827l.536.525-1.794 1.794zM15.64 13.52l1.239 1.223a.5.5 0 01.036.675 1.607 1.607 0 00.079 2.122l.076.079-.21.313a3.347 3.347 0 00-.52 2.37 2.031 2.031 0 01-1.882.028l-1.643-.859c.14-2.184 1.138-4.4 2.825-5.951zm4.617 2.172l.43.725c-.056.039-.117.072-.172.115l-1.353 1.037a.5.5 0 01-.67-.054l-.701-.734a.502.502 0 01-.024-.666 1.597 1.597 0 00-.116-2.156l-1.141-1.127a7.772 7.772 0 014.306-1.382l-.103.109a3.465 3.465 0 00-.456 4.133zm-2.187 5.721a2.259 2.259 0 01-.296-2.869l.087-.128c.289.232.639.357.994.357.342 0 .685-.108.976-.331l1.353-1.037c.703-.537 1.607-.692 2.45-.479l-5.02 5.02-.544-.533zm9.046-8.022a2.607 2.607 0 00-1.43-1.94 10.628 10.628 0 00-4.678-1.112c-5.755 0-9.318 5.013-9.318 9.658 0 1.559.215 2.92.676 4.283a2.648 2.648 0 001.92 1.736c.209.049.419.072.626.072.71 0 1.394-.278 1.908-.794l9.538-9.537a2.722 2.722 0 00.758-2.366z" />
      <path d="M34.499 26.807a.821.821 0 01-.706.387h-1.856v2.04c0 2.923-2.376 5.3-5.3 5.3h-.65v5.184H13.846v-5.397c0-2.6-.918-4.414-1.89-6.335-1.077-2.133-2.191-4.339-2.191-7.97 0-5.46 4.22-11.353 11.043-11.353 5.395 0 11.129 4.056 11.129 11.573v.143l2.616 5.624a.824.824 0 01-.054.804m1.232-1.353l-2.494-5.364c-.073-8.267-6.438-12.727-12.43-12.727-6.806 0-12.343 5.675-12.343 12.652 0 3.942 1.239 6.394 2.333 8.557.938 1.856 1.748 3.46 1.748 5.75v6.697h14.743v-5.217a6.609 6.609 0 005.95-6.568v-.74h.555c.734 0 1.408-.37 1.803-.988a2.13 2.13 0 00.135-2.052" />
    </g>
  );

  return isHovered ? normalHover : normal;
};

export default PersonWithBrain;
