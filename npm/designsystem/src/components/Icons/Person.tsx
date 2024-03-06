import React from 'react';

import { SvgPathProps } from '../Icon';

const Person: React.FC<SvgPathProps> = ({ isHovered }: SvgPathProps): React.ReactElement => {
  const normal = (
    <path d="M26.557 15.026a.503.503 0 100-1.005.503.503 0 000 1.005zm-5.293 0a.503.503 0 100-1.005.503.503 0 000 1.005zM34.511 40.55h-3.225v-6.947h-.899v6.947H17.363v-6.947h-.9v6.947H13.24V32.09c0-3.813 2.5-7.226 6.111-8.39 2.795 1.394 6.254 1.394 9.05 0 3.611 1.164 6.111 4.577 6.111 8.39v8.46zm-5.993-18.173l-.253-.073-.233.124c-2.543 1.354-5.77 1.354-8.314 0l-.233-.124-.254.073c-4.294 1.246-7.293 5.239-7.293 9.712v9.76h23.873v-9.76c0-4.473-2.999-8.466-7.293-9.712zM16.032 12.2h.261v1.59h-.26a.797.797 0 010-1.591zm1.561 0h.728a4.034 4.034 0 003.542-2.108 4.086 4.086 0 003.573 2.108h4.72v2.018a6.09 6.09 0 01-6.082 6.083h-.398a6.09 6.09 0 01-6.083-6.083V12.2zm0-1.285a6.09 6.09 0 016.083-6.082h.398a6.088 6.088 0 016.082 6.082v.285h-4.72a3.089 3.089 0 01-3.085-3.085v-.213h-1v.267a3.034 3.034 0 01-3.03 3.03h-.728v-.284zM31.456 12.2h.262a.797.797 0 010 1.59h-.262v-1.59zm-15.424 2.59h.291c.294 3.804 3.475 6.81 7.353 6.81h.398c3.877 0 7.06-3.006 7.353-6.81h.291c.99 0 1.796-.805 1.796-1.795 0-.99-.806-1.795-1.796-1.795h-.262v-.285c0-4.071-3.312-7.382-7.382-7.382h-.398c-4.07 0-7.383 3.31-7.383 7.382v.285h-.26c-.992 0-1.797.805-1.797 1.795 0 .99.805 1.796 1.796 1.796z" />
  );

  const normalHover = (
    <path d="M21.264 15.026a.502.502 0 100-1.004.502.502 0 000 1.004zm2.573 4.124a1.848 1.848 0 001.848-1.85h-3.697a1.85 1.85 0 001.849 1.85zm-7.804-6.95h.26v1.592h-.26a.797.797 0 010-1.591zm1.56 0h.729a4.033 4.033 0 003.54-2.107 4.088 4.088 0 003.574 2.108h4.72v2.018a6.09 6.09 0 01-6.082 6.083h-.397a6.09 6.09 0 01-6.083-6.083V12.2zm0-1.284a6.09 6.09 0 016.084-6.082h.397a6.09 6.09 0 016.083 6.082v.285h-4.721a3.088 3.088 0 01-3.084-3.085v-.213h-1v.267a3.034 3.034 0 01-3.03 3.03h-.728v-.284zM31.458 12.2h.26a.797.797 0 010 1.59h-.26v-1.59zm-15.424 2.59h.29c.294 3.804 3.476 6.81 7.354 6.81h.397c3.877 0 7.06-3.006 7.354-6.81h.29c.99 0 1.796-.805 1.796-1.795 0-.99-.806-1.795-1.796-1.795h-.261v-.285c0-4.071-3.312-7.382-7.383-7.382h-.397c-4.071 0-7.383 3.31-7.383 7.382v.285h-.261c-.991 0-1.796.805-1.796 1.795 0 .99.805 1.796 1.796 1.796zm18.479 25.76h-3.225v-6.947h-.9v6.947H17.364v-6.947h-.901v6.947h-3.224V32.09c0-3.813 2.5-7.226 6.11-8.39 2.797 1.394 6.256 1.394 9.05 0 3.613 1.164 6.113 4.577 6.113 8.39v8.46zm-5.993-18.173l-.254-.073-.233.124c-2.543 1.354-5.77 1.354-8.313 0l-.233-.124-.254.073c-4.294 1.246-7.293 5.239-7.293 9.712v9.76h23.873v-9.76c0-4.473-3-8.466-7.293-9.712zm-1.962-7.352a.503.503 0 100-1.006.503.503 0 000 1.006z" />
  );

  return isHovered ? normalHover : normal;
};

export default Person;
