import React from 'react';
import {SvgPathProps} from './Icon';

const CriticalHealthInfo: React.FC<SvgPathProps> = ({isExtraSmall, isHovered}: SvgPathProps): JSX.Element => {
  const normal = (
    <path d="M23.508 26.906a.583.583 0 100-1.166.583.583 0 000 1.166zM39.4 34.435c0 .827-.673 1.5-1.501 1.5H15.116c.315-.418.5-.938.5-1.5v-.14h23.785v.14zm-1.004 5.303H8.619V9.213h9.656l-2.173 1.456v.49h-5.486v23.276c0 1.379 1.122 2.5 2.5 2.5H37.9c.17 0 .337-.017.497-.05v2.853zM19.299 9.73V6.368h8.418V9.73l2.197 1.472v1.274H17.102v-1.274l2.197-1.472zm11.615 3.746V12.16H35.4v21.136H14.617v1.139a1.501 1.501 0 01-3.001 0V12.16h4.486v1.316h14.812zm-2.197-4.393h9.68v24.213H36.4V11.16h-5.486v-.491l-2.197-1.472v-.114zm10.98 24.213V7.783h-10.98V5.368H18.299v2.545H7.319v33.124h32.378v-4.871a2.484 2.484 0 00.704-1.731v-1.14h-.704zm-10.35-5.021H17.674l5.875-10.56 5.8 10.56zm1.692 1l-7.486-13.626-7.581 13.626h15.067zM23.508 9.464a.625.625 0 100-1.25.625.625 0 000 1.25zm0 15.404a.375.375 0 00.374-.374V21.47a.374.374 0 00-.748 0v3.024c0 .206.168.374.374.374z" />
  );

  const normalHover = (
    <path d="M23.448 9.463a.625.625 0 100-1.25.625.625 0 000 1.25zm.04 8.251l5.8 10.56H17.613l5.875-10.56zm.005-2.066l-7.58 13.626h15.066l-7.486-13.626zm14.342 18.787H15.052c.32-.42.516-.939.516-1.506 0-.567-.197-1.085-.516-1.506h22.783c.83 0 1.506.676 1.506 1.506s-.676 1.506-1.506 1.506zm.502 5.302H8.56V9.213h9.656l-2.173 1.456v.491h-5.486v21.774a2.504 2.504 0 002.501 2.501h24.778c.172 0 .34-.018.502-.05v4.352zM19.24 9.73V6.367h8.418V9.73l2.197 1.472v1.274H17.042v-1.274L19.24 9.73zm-4.67 23.2c0 .83-.677 1.505-1.507 1.505-.83 0-1.506-.676-1.506-1.506V12.16h4.486v1.316h14.812V12.16h4.486v18.263H13.062v1c.83 0 1.506.676 1.506 1.506zM28.656 9.082h9.68v21.391a2.514 2.514 0 00-.502-.05H36.34V11.16h-5.486v-.49l-2.197-1.474v-.113zm10.98 22.112V7.783h-10.98V5.367H18.24v2.546H7.26v33.124h32.378v-6.375a2.488 2.488 0 000-3.467zm-16.189-6.328a.374.374 0 00.374-.373V21.47a.375.375 0 00-.748 0v3.024c0 .206.168.373.374.373zm0 .873a.583.583 0 100 1.166.583.583 0 000-1.166z" />
  );
  return isHovered ? normalHover : normal;
};

export default CriticalHealthInfo;