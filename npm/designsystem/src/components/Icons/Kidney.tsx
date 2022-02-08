import React from 'react';
import { SvgPathProps } from './Icon';

const Kidney: React.FC<SvgPathProps> = ({ size, isHovered }: SvgPathProps): JSX.Element => {
  const normal = (
    <path d="M37.311 27.845c-.773 1.166-2.15 2.017-3.509 2.167-.778.085-1.928-.017-2.953-1.002-1.264-1.213-1.249-3.275.031-4.693l.09-.11c2.936-3.57 1.014-5.422-.07-6.46a3.17 3.17 0 01-.97-2.273 3.368 3.368 0 01.98-2.399c.688-.688 1.805-1.112 2.926-1.112h.047c1.068.012 2.026.403 2.698 1.103 2.672 2.785 5.657 7.347.73 14.78m.207-15.68c-.915-.954-2.2-1.488-3.622-1.503-1.539.011-2.955.542-3.906 1.493a4.673 4.673 0 00-1.36 3.331c.011 1.223.497 2.36 1.42 3.245.474.454.975.94 1.124 1.617h-1.273a3.925 3.925 0 00-3.92 3.921v14.507h1.301V24.27a2.622 2.622 0 012.62-2.62h1.14c-.184.49-.576 1.125-1.126 1.794-1.754 1.945-1.74 4.802.033 6.504.953.915 2.12 1.39 3.402 1.39.196 0 .395-.012.595-.034 1.752-.193 3.456-1.243 4.45-2.74 4.084-6.163 3.798-11.528-.878-16.399M18.703 24.202l.002.003.092.11c1.28 1.42 1.295 3.484.032 4.696-1.025.984-2.176 1.085-2.954 1.002-1.359-.151-2.736-1.001-3.509-2.167-4.927-7.432-1.942-11.995.731-14.78.671-.7 1.63-1.091 2.7-1.102h.045c1.12 0 2.238.424 2.925 1.112.633.632.991 1.507.982 2.399-.009.872-.355 1.678-1.02 2.319-1.036.992-2.962 2.838-.026 6.408m1.1-3.853h-1.294c.153-.686.67-1.185 1.17-1.665a4.456 4.456 0 001.37-3.196 4.685 4.685 0 00-1.362-3.332c-.937-.936-2.37-1.492-3.844-1.492h-.06c-1.422.015-2.709.548-3.624 1.502-4.675 4.87-4.962 10.235-.877 16.398.992 1.496 2.697 2.547 4.45 2.74.2.023.4.034.594.034 1.283 0 2.45-.475 3.403-1.39 1.772-1.701 1.787-4.56 0-6.545l-.022-.027c-.549-.668-.887-1.235-1.07-1.726h1.166a2.622 2.622 0 012.62 2.62v14.507h1.3V24.27a3.925 3.925 0 00-3.92-3.921" />
  );

  const normalHover = (
    <path d="M37.311 27.845c-.772 1.166-2.15 2.017-3.508 2.167-.786.083-1.929-.018-2.954-1.002-1.263-1.213-1.248-3.275.031-4.693l.075-.09.017-.023.003-.003c2.935-3.57 1.01-5.416-.075-6.455a3.17 3.17 0 01-.97-2.272 3.368 3.368 0 01.98-2.399c.688-.688 1.805-1.112 2.926-1.112h.046c1.07.012 2.027.403 2.7 1.103 2.672 2.785 5.657 7.346.73 14.78m.206-15.68c-.915-.954-2.2-1.488-3.622-1.503-1.537.011-2.955.542-3.906 1.493a4.673 4.673 0 00-1.36 3.331c.011 1.223.497 2.36 1.42 3.246.474.454.975.94 1.124 1.616h-1.272a3.925 3.925 0 00-3.92 3.921v16.507h1.301V24.27a2.621 2.621 0 012.62-2.62h1.14c-.184.49-.522 1.057-1.072 1.725l-.055.07c-1.754 1.944-1.74 4.8.033 6.503.953.915 2.12 1.39 3.402 1.39.195 0 .395-.012.595-.034 1.752-.193 3.457-1.244 4.45-2.74 4.085-6.164 3.798-11.529-.878-16.399m-18.722 12.15c1.28 1.42 1.295 3.482.032 4.695-1.026.985-2.17 1.085-2.955 1.002-1.357-.15-2.734-1.001-3.507-2.167-4.927-7.431-1.943-11.994.73-14.78.672-.7 1.63-1.09 2.699-1.102h.046c1.12 0 2.238.424 2.926 1.113.633.632.99 1.507.98 2.399-.008.87-.353 1.678-1.02 2.319-1.034.99-2.958 2.835-.03 6.403.029.034.075.092.099.118m1.006-3.966h-1.294c.153-.686.669-1.185 1.169-1.665a4.46 4.46 0 001.37-3.196 4.68 4.68 0 00-1.36-3.332c-.951-.95-2.454-1.498-3.905-1.492-1.422.014-2.71.547-3.624 1.502-4.675 4.87-4.962 10.235-.876 16.398.993 1.496 2.697 2.546 4.449 2.74.2.023.399.033.595.033 1.283 0 2.449-.474 3.403-1.39 1.772-1.701 1.787-4.558-.011-6.557l-.012-.014c-.55-.668-.887-1.235-1.07-1.726h1.166a2.622 2.622 0 012.619 2.62v16.507h1.3V24.27a3.925 3.925 0 00-3.92-3.921" />
  );

  return isHovered ? normalHover : normal;
};

export default Kidney;
