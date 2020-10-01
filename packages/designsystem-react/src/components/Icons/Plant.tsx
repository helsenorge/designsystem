import React from 'react';
import {SvgPathProps} from './Icon';

const Plant: React.FC<SvgPathProps> = ({isExtraSmall, isHovered}: SvgPathProps): JSX.Element => {
  const normal = (
    <path d="M31.912 23.748c2.53-.08 5.125 1.65 6.377 2.629-1.475.593-4.445 1.542-6.856.758-1.109-.362-1.986-1.066-2.61-2.097.886-.817 1.924-1.251 3.09-1.29m1.897-13.276a2.466 2.466 0 012.464-2.463 2.465 2.465 0 012.464 2.463 2.466 2.466 0 01-2.464 2.463 2.467 2.467 0 01-2.464-2.463m6.863 6.228a2.466 2.466 0 01-2.463 2.464 2.466 2.466 0 01-2.464-2.464 2.467 2.467 0 012.464-2.464 2.467 2.467 0 012.463 2.464m-20.236 9.398c-1.156-2.256-.688-5.34-.336-6.889 1.164 1.081 3.29 3.366 3.604 5.881.145 1.157-.118 2.25-.785 3.255-1.116-.455-1.95-1.209-2.483-2.247m-4.33 13.595c-1.109-.361-1.985-1.065-2.61-2.095.886-.818 1.924-1.251 3.09-1.29 2.521-.087 5.124 1.65 6.375 2.628-1.475.593-4.447 1.541-6.855.757m-2.18-7.973c-.097-2.533 1.628-5.132 2.6-6.389.6 1.472 1.562 4.438.787 6.852-.339 1.058-1 1.899-1.949 2.522l-.14.091c-.817-.881-1.253-1.913-1.298-3.076m17.47 3.059a2.465 2.465 0 01-2.464 2.463 2.465 2.465 0 01-2.464-2.463 2.467 2.467 0 012.464-2.464 2.467 2.467 0 012.463 2.464m-6.568-20.385a2.465 2.465 0 012.464-2.463 2.466 2.466 0 012.464 2.463c0 .923-.518 1.72-1.272 2.142l-.294.147a2.462 2.462 0 01-.898.174 2.466 2.466 0 01-2.464-2.463m13.382 6.071a3.77 3.77 0 003.764-3.765 3.768 3.768 0 00-2.954-3.671 3.74 3.74 0 001.02-2.557 3.77 3.77 0 00-3.766-3.764 3.768 3.768 0 00-3.764 3.764c0 1.704 1.146 3.131 2.703 3.593-.618.977-2.309 3.542-4.894 6.732.088-1.028-.038-2.244-.59-3.558a3.742 3.742 0 001.328-2.845 3.77 3.77 0 00-3.765-3.764 3.77 3.77 0 00-3.765 3.764 3.77 3.77 0 003.765 3.764c.464 0 .903-.095 1.313-.249 1.173 3.01-.375 5.317-.455 5.432l-.074.105a76.83 76.83 0 01-3.13 3.337 6.017 6.017 0 00.048-1.86c-.507-4.014-4.682-7.266-4.858-7.403l-.729-.559-.286.873c-.069.213-1.685 5.251.157 8.852.636 1.245 1.623 2.145 2.903 2.728-.79.709-1.609 1.41-2.457 2.097a5.486 5.486 0 00-.283.215l-.38.31a33.42 33.42 0 01-.462.36c1.106-3.818-1.228-8.385-1.33-8.581L16.846 23l-.627.671c-.154.164-3.744 4.052-3.59 8.095.052 1.41.555 2.662 1.488 3.736-2.4 1.475-4.96 2.75-7.657 3.706l-.613.217.434 1.225.612-.217a39.785 39.785 0 005.381-2.391c.794 1.421 1.94 2.404 3.435 2.889a7.933 7.933 0 002.444.361c3.157 0 6.164-1.524 6.322-1.606l.817-.42-.668-.63c-.154-.145-3.61-3.388-7.42-3.615a56.185 56.185 0 002.551-1.884l.004.004.258-.209c.126-.101.255-.2.38-.3.601-.432 3.13-2.014 5.39.092a3.733 3.733 0 00-.619 2.055 3.77 3.77 0 003.765 3.764 3.769 3.769 0 003.764-3.764 3.769 3.769 0 00-3.764-3.764c-.847 0-1.622.292-2.25.765-1.174-1.097-2.445-1.46-3.619-1.423a73.354 73.354 0 004.69-4.629c.787 1.284 1.876 2.188 3.281 2.644.793.258 1.623.36 2.443.36 3.16 0 6.165-1.524 6.324-1.605l.816-.421-.668-.63c-.163-.153-4.01-3.779-8.077-3.627a6.172 6.172 0 00-1.418.218 82.182 82.182 0 004.062-5.252 3.77 3.77 0 003.693 3.05" />
  );

  const normalHover = (
    <path d="M30.795 23.748c.06-.002.12-.003.183-.003 2.473 0 4.972 1.677 6.194 2.632-1.474.593-4.444 1.542-6.856.758-1.108-.362-1.985-1.067-2.61-2.097.887-.817 1.924-1.25 3.089-1.29m4.133-11.042a2.467 2.467 0 012.464-2.464 2.467 2.467 0 012.463 2.464 2.466 2.466 0 01-2.463 2.463 2.466 2.466 0 01-2.464-2.463m6.862 6.228a2.466 2.466 0 01-2.464 2.463 2.466 2.466 0 01-2.463-2.463 2.466 2.466 0 012.463-2.464 2.466 2.466 0 012.464 2.464M12.81 31.72c-.097-2.533 1.628-5.133 2.6-6.389.599 1.472 1.562 4.438.788 6.852-.341 1.064-1.005 1.908-1.962 2.532l-.128.082c-.817-.882-1.253-1.915-1.297-3.077m6.51-5.622c-1.156-2.256-.688-5.34-.336-6.889 1.164 1.081 3.289 3.366 3.604 5.881.145 1.157-.118 2.25-.785 3.255-1.116-.455-1.95-1.209-2.483-2.247m10.959 9.346a2.466 2.466 0 01-2.464 2.464 2.466 2.466 0 01-2.463-2.464 2.467 2.467 0 012.463-2.464 2.467 2.467 0 012.464 2.464m-15.29 4.249c-1.108-.361-1.984-1.065-2.61-2.095.887-.818 1.925-1.251 3.09-1.29 2.545-.087 5.125 1.65 6.376 2.628-1.475.593-4.448 1.541-6.855.757m9.838-25.299a2.466 2.466 0 012.464-2.463 2.466 2.466 0 012.464 2.463 2.467 2.467 0 01-2.464 2.463 2.467 2.467 0 01-2.464-2.463m14.497 8.304a3.77 3.77 0 003.765-3.764 3.769 3.769 0 00-2.954-3.671 3.74 3.74 0 001.018-2.557 3.769 3.769 0 00-3.763-3.765 3.77 3.77 0 00-3.765 3.765c0 1.481.868 2.753 2.115 3.367-1.202.776-3.667 2.497-6.64 5.282.193-1.037.214-2.28-.224-3.559a3.762 3.762 0 002.18-3.402 3.77 3.77 0 00-3.765-3.764 3.77 3.77 0 00-3.765 3.764 3.77 3.77 0 003.765 3.764c.109 0 .213-.022.319-.032.95 2.627-.585 5.224-.601 5.25l-.063.103c-.328.342-.66.693-.994 1.057-.702.766-1.41 1.5-2.117 2.214a6.06 6.06 0 00.04-1.827c-.506-4.014-4.681-7.266-4.857-7.403l-.73-.559-.285.873c-.07.213-1.685 5.251.157 8.852.635 1.242 1.617 2.141 2.892 2.723a62.14 62.14 0 01-2.59 2.215c-.043.031-.091.063-.131.095l-.51.401.004.005c-.114.09-.227.18-.342.268 1.102-3.818-1.231-8.382-1.333-8.578L15.729 23l-.627.671c-.154.164-3.744 4.052-3.591 8.094.054 1.41.557 2.662 1.489 3.737-2.533 1.556-5.088 2.796-7.656 3.706l-.613.217.434 1.225.612-.217a40.074 40.074 0 005.387-2.381c.794 1.415 1.937 2.395 3.429 2.879a7.933 7.933 0 002.444.361c3.157 0 6.164-1.524 6.322-1.606l.817-.42-.668-.63c-.154-.145-3.6-3.383-7.41-3.614a56.435 56.435 0 003.15-2.362c.559-.388 3.145-1.932 5.463.663a3.74 3.74 0 00-.66 2.121 3.77 3.77 0 003.765 3.765 3.77 3.77 0 003.765-3.765 3.77 3.77 0 00-3.765-3.764c-.818 0-1.571.27-2.19.715-1.255-1.377-2.63-1.858-3.88-1.858a74.384 74.384 0 004.884-4.821c.787 1.29 1.879 2.198 3.289 2.656.793.258 1.623.36 2.443.36 3.159 0 6.165-1.524 6.324-1.605l.816-.421-.668-.63c-.16-.151-3.894-3.631-7.857-3.631a6.33 6.33 0 00-1.272.134c2.558-2.424 4.778-4.077 6.118-4.994-.163.421-.26.872-.26 1.349a3.768 3.768 0 003.763 3.764" />
  );

  return isHovered ? normalHover : normal;
};

export default Plant;
