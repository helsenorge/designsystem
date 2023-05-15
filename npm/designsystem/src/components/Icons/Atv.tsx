import React from 'react';

import { SvgPathProps } from './Icon';

const Atv: React.FC<SvgPathProps> = ({ size, isHovered }: SvgPathProps): React.ReactElement => {
  const normal = (
    <path d="M25.374 21.024c-.287.29-.668.45-1.075.452h-.01c-.403 0-.783-.156-1.07-.44a1.525 1.525 0 011.064-2.607h.007a1.525 1.525 0 011.084 2.595zM24.29 17.57h-.012a2.387 2.387 0 00-2.37 2.396c.003.637.254 1.234.706 1.682.45.444 1.044.688 1.676.688h.013a2.368 2.368 0 001.682-.706 2.369 2.369 0 00.689-1.69 2.386 2.386 0 00-2.384-2.37zm12.875 19.656l-.222.001a2.638 2.638 0 01-1.904-.777 2.668 2.668 0 01-.797-1.896l-.046-8.902a2.69 2.69 0 012.673-2.701l.22-.001h.015c.712 0 1.383.275 1.89.777.51.505.793 1.178.796 1.897l.047 8.901a2.69 2.69 0 01-2.672 2.701zm-11.568-11.71l.017 3.175c.003.463-.247.892-.652 1.12-.254.145-.783.323-1.46-.09-.271-.166-.441-.493-.443-.855l-.017-3.336-10.764-8.403-.012-2.44 9.36 2.44 5.211-.028 9.423-2.536.013 2.44-10.676 8.514zm-3.953-12.208l5.224-.027-1.58 2.476-2.037.01-1.607-2.459zm-9.826 24.05h-.22a2.738 2.738 0 01-1.904-.777 2.669 2.669 0 01-.797-1.896l-.046-8.901a2.69 2.69 0 012.673-2.702l.22-.001h.014a2.67 2.67 0 011.89.778c.51.504.793 1.178.797 1.896l.046 8.901a2.69 2.69 0 01-2.673 2.702zm29.323-11.742a4.01 4.01 0 00-1.197-2.849c-.767-.758-1.779-1.19-2.862-1.167h-.22a4.042 4.042 0 00-4.017 4.06l.02 3.705-5.342-3.657 10.104-8.057-.025-4.852-10.851 2.947 3.51-5.497 3.92-.02L34.174 9l-4.254.022a.614.614 0 00-.514.284l-1.751 2.742-6.81.035-1.78-2.724a.614.614 0 00-.514-.278h-.003l-4.254.022.007 1.228 3.919-.02 3.567 5.461-10.88-2.836.024 4.852 10.187 7.952-5.303 3.712-.02-3.705a4.01 4.01 0 00-1.197-2.85 4.011 4.011 0 00-2.84-1.167h-.02l-.221.001A4.042 4.042 0 007.5 25.79l.046 8.901a4.01 4.01 0 001.198 2.85 4.011 4.011 0 002.84 1.167h.02l.221-.001a4.042 4.042 0 004.017-4.059l-.02-3.702 5.876-4.113.01 2.039c.005.826.422 1.593 1.09 2 .49.3 1.022.45 1.543.45.448 0 .888-.11 1.285-.335a2.633 2.633 0 001.339-2.305l-.01-1.876 5.917 4.051.02 3.703a4.01 4.01 0 001.197 2.849 4.007 4.007 0 002.838 1.167h.244a4.043 4.043 0 004.016-4.06l-.046-8.9z" />
  );

  const normalHover = (
    <path d="M25.374 24.024c-.287.29-.668.45-1.075.452h-.01c-.403 0-.783-.156-1.07-.44a1.525 1.525 0 011.064-2.607h.007a1.525 1.525 0 011.084 2.595zM24.29 20.57h-.012a2.387 2.387 0 00-2.37 2.396c.003.637.254 1.234.706 1.682.45.444 1.044.688 1.676.688h.013a2.368 2.368 0 001.682-.706 2.369 2.369 0 00.689-1.69 2.386 2.386 0 00-2.384-2.37zm12.875 19.656l-.222.001a2.638 2.638 0 01-1.904-.777 2.668 2.668 0 01-.797-1.896l-.046-8.902a2.69 2.69 0 012.673-2.701l.22-.001h.015c.712 0 1.383.275 1.89.777.51.505.793 1.178.796 1.897l.047 8.901a2.69 2.69 0 01-2.672 2.701zm-11.568-11.71l.017 3.175c.003.463-.247.892-.652 1.12-.254.145-.783.323-1.46-.09-.271-.166-.441-.493-.443-.855l-.017-3.336-10.764-8.403-.012-2.44 9.36 2.44 5.211-.028 9.423-2.536.013 2.44-10.676 8.514zm-3.953-12.208l5.224-.027-1.58 2.476-2.037.01-1.607-2.459zm-9.826 24.05h-.22a2.738 2.738 0 01-1.904-.777 2.669 2.669 0 01-.797-1.896l-.046-8.901a2.69 2.69 0 012.673-2.702l.22-.001h.014a2.67 2.67 0 011.89.778c.51.504.793 1.178.797 1.896l.046 8.901a2.69 2.69 0 01-2.673 2.702zm29.323-11.742a4.01 4.01 0 00-1.197-2.849c-.767-.758-1.779-1.19-2.862-1.167h-.22a4.042 4.042 0 00-4.017 4.06l.02 3.705-5.342-3.657 10.104-8.057-.025-4.852-10.851 2.947 3.51-5.497 3.92-.02L34.174 12l-4.254.022a.614.614 0 00-.514.284l-1.751 2.742-6.81.035-1.78-2.724a.614.614 0 00-.514-.278h-.003l-4.254.022.007 1.228 3.919-.02 3.567 5.461-10.88-2.836.024 4.852 10.187 7.952-5.303 3.712-.02-3.705a4.01 4.01 0 00-1.197-2.85 4.011 4.011 0 00-2.84-1.167h-.02l-.221.001A4.042 4.042 0 007.5 28.79l.046 8.901a4.01 4.01 0 001.198 2.85 4.011 4.011 0 002.84 1.167h.02l.221-.001a4.042 4.042 0 004.017-4.059l-.02-3.702 5.876-4.113.01 2.039c.005.826.422 1.593 1.09 2 .49.3 1.022.45 1.543.45.448 0 .888-.11 1.285-.335a2.633 2.633 0 001.339-2.305l-.01-1.876 5.917 4.051.02 3.703a4.01 4.01 0 001.197 2.849 4.007 4.007 0 002.838 1.167h.244a4.043 4.043 0 004.016-4.06l-.046-8.9z" />
  );

  return isHovered ? normalHover : normal;
};

export default Atv;
