import React from 'react';
import {SvgPathProps} from './Icon';

const Skeleton: React.FC<SvgPathProps> = ({isExtraSmall, isHovered}: SvgPathProps): JSX.Element => {
  const normal = (
    <path d="M24.652 24.734v7.574h-1.301v-7.574h1.301zM14.541 4.735c1.359 0 2.192.811 2.86 1.462.603.585 1 .944 1.563.944h9.965c.562 0 .96-.359 1.56-.944.67-.65 1.503-1.462 2.863-1.462h2.095v1.301h-2.095c-.832 0-1.353.506-1.955 1.093-.632.615-1.35 1.312-2.468 1.312h-4.285v1.251h6.7v1.301h-6.7v2.033h7.877v1.301h-7.877v2.033h8.5v1.301h-8.5v2.033h9.616v1.301h-9.384l1.542 2.033h8.154v1.301h-7.167l1.542 2.033h4.484v1.301h-3.497l.678.894-1.035.786-5.583-7.36-5.585 7.36-1.035-.786.679-.894h-3.307v-1.3h4.293l1.543-2.034h-6.978v-1.3h7.964l1.542-2.034h-9.193v-1.3h9.426V17.66H15.03v-1.3h8.312v-2.034h-7.687v-1.3h7.687v-2.034h-6.51v-1.3h6.51V8.44h-4.38c-1.118 0-1.835-.697-2.467-1.312-.602-.587-1.123-1.093-1.955-1.093h-2.095v-1.3zM8.553 29.013l.107.21c.08.159.162.41.094.71a1.037 1.037 0 01-.468.653 1.048 1.048 0 01-1.447-.336 1.054 1.054 0 01-.134-.794c.07-.297.253-.488.396-.594l.19-.143 4.163-17.935-.107-.21a1.042 1.042 0 01-.092-.708 1.048 1.048 0 011.261-.787c.274.064.505.23.653.468.15.238.197.52.133.794a1.046 1.046 0 01-.394.595l-.19.14-4.165 17.937zm5.327-17.2a2.335 2.335 0 00.393-2.953 2.327 2.327 0 00-1.463-1.046 2.336 2.336 0 00-1.776.294 2.332 2.332 0 00-.948 2.824l-3.96 17.053a2.335 2.335 0 00-.391 2.953c.332.533.851.904 1.463 1.046a2.336 2.336 0 001.775-.294 2.334 2.334 0 00.948-2.824l3.96-17.053zM41.054 30.25a1.046 1.046 0 01-.654.468 1.055 1.055 0 01-1.262-.785c-.068-.3.013-.55.093-.709l.107-.21-4.164-17.937-.189-.14a1.043 1.043 0 01-.396-.596 1.054 1.054 0 011.025-1.289c.477 0 .911.33 1.024.813.068.298-.013.55-.094.71l-.106.21 4.163 17.934.19.142a1.038 1.038 0 01.263 1.39m1.397-1.088a2.329 2.329 0 00-.686-1.179l-3.959-17.053a2.336 2.336 0 00-.949-2.823 2.318 2.318 0 00-1.775-.295 2.334 2.334 0 00-1.464 1.046 2.337 2.337 0 00.393 2.954l3.96 17.052a2.334 2.334 0 00.949 2.824 2.33 2.33 0 001.774.294 2.332 2.332 0 001.464-1.046 2.329 2.329 0 00.293-1.774m-9.858 8.42c-.134.267-.284.607-.45.986-.547 1.245-1.565 3.561-2.473 3.561-.642 0-1.248-.123-1.949-.267-.944-.193-2.12-.434-3.774-.434-1.656 0-2.832.241-3.776.434-.701.144-1.306.267-1.948.267-.909 0-1.925-2.314-2.472-3.557a22.636 22.636 0 00-.452-.99c-.542-1.085-.554-2.637.495-3.377 1.008-.713 1.854-.519 3.517-.054 1.192.334 2.677.75 4.636.75s3.443-.416 4.634-.75c1.663-.465 2.506-.658 3.518.054 1.049.74 1.037 2.292.495 3.377m.255-4.439c-1.56-1.1-2.977-.703-4.618-.244-1.175.33-2.505.702-4.285.702-1.78 0-3.11-.373-4.285-.702-1.64-.459-3.058-.858-4.618.244-1.64 1.16-1.691 3.451-.906 5.02.125.252.268.574.425.932.803 1.83 1.903 4.335 3.66 4.335.773 0 1.471-.143 2.21-.294.933-.192 1.99-.408 3.515-.408 1.523 0 2.58.216 3.514.408.738.15 1.436.294 2.21.294 1.756 0 2.858-2.508 3.662-4.338.157-.357.297-.678.422-.929.785-1.569.734-3.86-.906-5.02M18.57 37.59c-.266-.582-.129-1.106.1-1.338 0 0 .013-.005.045-.005.084 0 .293.031.7.261 1.077.608 2.322 1.903 2.763 2.572-1.852.031-3.156-.504-3.608-1.49m1.274-1.987c-.834-.454-1.46-.476-1.87-.067-.59.593-.717 1.585-.313 2.47.297.65 1.293 2.078 4.294 2.078.235 0 .482-.009.742-.027.321-.024.56-.222.625-.518.213-.977-2.202-3.239-3.478-3.936m9.48 1.987c-.451.986-1.786 1.521-3.607 1.49.44-.669 1.685-1.964 2.763-2.572.44-.248.649-.265.712-.265.014 0 .02.002.021 0 .24.242.377.765.111 1.347m-1.273-1.987c-1.277.696-3.692 2.96-3.479 3.936.065.296.304.494.625.518.26.018.507.027.742.027 3.001 0 3.997-1.428 4.294-2.078.404-.885.278-1.877-.313-2.47-.411-.41-1.04-.387-1.869.067" />
  );

  const normalHover = (
    <path d="M43.242 29.54a1.04 1.04 0 01-.6.537 1.04 1.04 0 01-.801-.043 1.036 1.036 0 01-.524-1.313l.083-.222-6.115-17.366-.203-.12a1.036 1.036 0 01-.46-.548 1.052 1.052 0 011.983-.699c.102.29.049.55-.013.716l-.083.221 6.115 17.365.203.121a1.04 1.04 0 01.415 1.351m1.27-1.233a2.328 2.328 0 00-.813-1.096l-5.814-16.514a2.349 2.349 0 00-.053-1.362 2.358 2.358 0 00-2.998-1.437 2.356 2.356 0 00-1.438 3c.157.442.436.816.814 1.095l5.813 16.511a2.333 2.333 0 001.255 2.702 2.35 2.35 0 003.234-2.899m-19.636-7.312h9.384v-1.3h-9.616V17.66h8.5v-1.3h-8.5v-2.034h7.877v-1.3h-7.877v-2.034h6.7v-1.3h-6.7V8.44h4.285c1.119 0 1.836-.697 2.468-1.312.602-.587 1.123-1.093 1.955-1.093h2.095v-1.3h-2.095c-1.36 0-2.193.81-2.862 1.461-.601.585-1 .944-1.561.944h-9.965c-.563 0-.96-.359-1.562-.944-.67-.65-1.502-1.462-2.861-1.462h-2.095v1.301h2.095c.832 0 1.353.506 1.955 1.093.632.615 1.349 1.312 2.468 1.312h4.379v1.251h-6.51v1.301h6.51v2.033h-7.687v1.301h7.687v2.033H15.03v1.301h8.312v2.033h-9.426v1.301h9.193l-1.542 2.033h-7.964v1.301h6.978l-1.543 2.033h-4.293v1.301h3.307l-.68.894 1.036.786 5.585-7.36 5.583 7.36 1.035-.786-.678-.894h3.497v-1.3h-4.484l-1.542-2.034h7.167v-1.3h-8.154l-1.542-2.034zM23.35 32.308h1.301v-7.574h-1.301v7.574zM6.488 28.499l.082.221c.063.167.116.427.015.716a1.046 1.046 0 01-1.34.641 1.04 1.04 0 01-.599-.537 1.04 1.04 0 01.415-1.35l.203-.12 6.116-17.368-.083-.222a1.039 1.039 0 01.522-1.311c.145-.069.299-.105.454-.105a1.061 1.061 0 01.948.598 1.032 1.032 0 01-.415 1.351l-.203.121L6.488 28.5zm7.19-16.508a2.327 2.327 0 00.715-2.89 2.33 2.33 0 00-1.339-1.203 2.353 2.353 0 00-2.998 1.436 2.33 2.33 0 00-.052 1.364L4.189 27.21a2.34 2.34 0 00-.716 2.894 2.351 2.351 0 004.338-.237c.156-.44.173-.907.053-1.362l5.814-16.513zm18.915 25.592c-.134.267-.284.607-.45.986-.547 1.245-1.565 3.561-2.473 3.561-.642 0-1.248-.123-1.949-.267-.944-.193-2.12-.434-3.775-.434-1.656 0-2.832.241-3.776.434-.7.144-1.306.267-1.948.267-.908 0-1.925-2.314-2.472-3.557a22.636 22.636 0 00-.452-.99c-.542-1.085-.554-2.637.495-3.377 1.008-.713 1.856-.519 3.518-.054 1.192.334 2.676.75 4.635.75 1.96 0 3.443-.416 4.634-.75 1.663-.465 2.507-.658 3.52.054 1.047.74 1.035 2.292.493 3.377m.256-4.439c-1.56-1.1-2.978-.703-4.619-.244-1.174.33-2.504.702-4.284.702-1.78 0-3.11-.373-4.285-.702-1.64-.459-3.057-.858-4.618.244-1.64 1.16-1.692 3.451-.907 5.02.126.252.268.574.425.932.803 1.83 1.904 4.335 3.661 4.335.773 0 1.471-.143 2.21-.294.932-.192 1.99-.408 3.514-.408 1.523 0 2.581.216 3.514.408.738.15 1.436.294 2.21.294 1.757 0 2.86-2.508 3.662-4.338.157-.357.298-.678.423-.929.785-1.569.734-3.86-.906-5.02M18.57 37.59c-.266-.582-.129-1.106.1-1.338 0 0 .013-.005.045-.005.084 0 .293.031.7.261 1.077.608 2.322 1.903 2.763 2.572-1.848.031-3.157-.504-3.608-1.49m1.274-1.987c-.834-.454-1.46-.476-1.87-.067-.59.593-.717 1.585-.313 2.47.297.65 1.293 2.078 4.294 2.078.235 0 .482-.009.742-.027.321-.024.56-.222.625-.518.213-.977-2.202-3.239-3.478-3.936m9.48 1.987c-.451.986-1.782 1.521-3.607 1.49.44-.669 1.685-1.964 2.763-2.572.44-.248.649-.265.712-.265.014 0 .021.002.021 0 .24.242.377.765.111 1.347m-1.273-1.987c-1.277.696-3.692 2.96-3.479 3.936.065.296.304.494.625.518.26.018.507.027.742.027 3.001 0 3.997-1.428 4.294-2.078.404-.885.278-1.877-.313-2.47-.41-.41-1.041-.387-1.869.067" />
  );

  return isHovered ? normalHover : normal;
};

export default Skeleton;
