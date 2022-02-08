import React from 'react';
import { SvgPathProps } from './Icon';

const PoisonInformation: React.FC<SvgPathProps> = ({ size, isHovered }: SvgPathProps): JSX.Element => {
  const normal = (
    <g>
      <path d="M23.765 4.5a3.751 3.751 0 013.746 3.747 3.75 3.75 0 01-3.746 3.746 3.75 3.75 0 01-3.746-3.747 3.751 3.751 0 013.746-3.745m0 8.793a5.054 5.054 0 005.047-5.047A5.054 5.054 0 0023.765 3.2a5.054 5.054 0 00-5.047 5.047 5.054 5.054 0 005.047 5.047m-11.8-1.341a.556.556 0 10-.002 1.11.556.556 0 00.002-1.11" />
      <path d="M34.21 40.92c-.161-.08-.37-.2-.551-.305-1.046-.6-2.798-1.608-5.498-1.608-1.384 0-12.554-.048-12.557-.048-1.642 0-5.461-.496-5.461-5.093 0-1.805.44-3.159 1.31-4.024 1.254-1.243 3.097-1.24 4.004-1.226l.167.001 3.094-.027v3.11l-1.034-.008c-.48-.004-.797-.007-1.19-.007-.72 0-2.637 0-2.637 2.166 0 1.316.94 2.102 2.516 2.102h.22c6.495-.01 10.845.03 11.969.118 2.234.082 3.549.525 4.4 1.481.834.938 1.268 2.661 1.249 3.368zM20.02 42.86v-2.582c2.743.012 6.016.024 7.492.03v2.552h-7.492zm-1.301-8.207h-2.346c-1.215 0-1.215-.542-1.215-.802 0-.704.25-.866 1.338-.866.388 0 .7.003 1.177.007l1.046.01v1.651zm8.793-9.474v9.546c-1.731-.049-4.734-.066-7.492-.07v-9.437l7.492-.039zm1.947-.01s1.526.04 1.919.04c.284 0 .522.09.689.258.177.18.269.446.265.772-.005.454-.174.995-.953.995l-2.202.004h-.364v-2.065l.646-.004zm-18.89-4.32c-.912-1.445-1.248-3.424-1.023-6.078a6.894 6.894 0 01.835-3.018c.658-1.175 1.515-1.964 2.545-2.345.71-.257 1.493.104 1.77.851.155.382.503 1.464.44 3.237a8.12 8.12 0 01-.361 2.018c-.024.087-.077.191-.135.32-.19.408-.475 1.026-.546 1.83-.046.528.12 1.043.533 1.6.349.423.82.741 1.314.891.29.098.522.113.855.133l12.639.063s.502.033 2.06.033c1.41 0 6.009.44 6.009 6.093 0 4.436-3.595 5.11-6.334 5.233-.741.035-1.991.028-2.001.028l-.356.001v-3.2h.362l2.204-.004c1.333 0 2.238-.917 2.254-2.282.007-.68-.215-1.269-.641-1.7-.411-.415-.984-.645-1.614-.645-.385 0-1.885-.038-1.905-.039l-12.667.066c-2.74-.03-5.013-1.155-6.236-3.087zm9.45-4.492h7.493v2.685l-7.492-.037v-2.648zm9.15 16.682c.003 0 1.294.005 2.095-.032 6.232-.279 7.54-3.705 7.54-6.53 0-5.452-3.776-7.394-7.31-7.394-1.465 0-1.958-.028-2.015-.03l-.666-.005v-3.992H18.718V19l-1.88-.01c-.264-.017-.362-.025-.501-.07a1.487 1.487 0 01-.686-.454c-.197-.268-.281-.486-.263-.687.05-.578.26-1.034.43-1.4.093-.2.167-.369.204-.495a9.38 9.38 0 00.412-2.334c.07-1.955-.303-3.203-.535-3.784a2.657 2.657 0 00-1.393-1.498c.294-.584.64-.743 1.056-.926.578-.255 1.298-.572 1.652-1.997l-.971-.24c-.235.948-.573 1.096-1.085 1.322-.53.233-1.174.518-1.645 1.601a2.685 2.685 0 00-1.04.163c-1.326.49-2.413 1.475-3.231 2.934a8.179 8.179 0 00-.994 3.563C8 17.608 8.4 19.851 9.47 21.543c1.463 2.312 4.13 3.657 7.33 3.692l1.917-.009v2.062l-3.251.028c-.99-.01-3.291-.022-4.93 1.604-1.124 1.117-1.695 2.781-1.695 4.946 0 5.933 5.176 6.394 6.759 6.394l3.117.013v3.888h10.094v-3.824c1.98.141 3.3.89 4.2 1.405.536.31.989.57 1.422.57.16 0 .318-.037.476-.12.202-.107.463-.342.557-.86.199-1.099-.441-3.415-1.533-4.643-1.356-1.526-3.435-1.83-5.122-1.907V33.04h.357z" />
    </g>
  );

  const normalHover = (
    <g>
      <path d="M23.764 4.5a3.751 3.751 0 013.746 3.747 3.75 3.75 0 01-3.746 3.746 3.75 3.75 0 01-3.746-3.747 3.751 3.751 0 013.746-3.745m0 8.793a5.054 5.054 0 005.047-5.047A5.054 5.054 0 0023.764 3.2a5.054 5.054 0 00-5.047 5.047 5.054 5.054 0 005.047 5.047M12.221 8.919a.556.556 0 10-.212 1.092.556.556 0 00.212-1.092" />
      <path d="M24.475 34.774c-.78-.06-2.308-.095-4.457-.11v-9.446l7.492-.04v9.8a50.401 50.401 0 00-3.035-.204zm7.807 2.78c-.666.387-3.326 1.453-8.282 1.453-1.382 0-8.39-.047-8.396-.047-1.642 0-5.46-.497-5.46-5.093 0-1.806.44-3.16 1.31-4.025 1.253-1.243 3.097-1.241 4.003-1.225h.167l3.093-.027v3.11l-1.033-.007c-.48-.005-.797-.008-1.189-.008-.722 0-2.639 0-2.639 2.166 0 1.317.941 2.103 2.517 2.103l.213-.001c5.036-.005 7.013.058 7.815.119 2.532.093 5.682.4 6.928.989.21.099.683.323.953.494zm-4.772 5.307h-7.492v-2.572c1.7.009 3.377.019 3.982.019 1.308 0 2.473-.073 3.51-.19v2.743zm-10.927-8.208h-.21c-1.216 0-1.216-.541-1.216-.802 0-.704.25-.865 1.338-.865.388 0 .703.003 1.177.007l1.045.009v1.654c-.669-.002-1.37-.004-2.134-.003zm12.875-9.483s1.527.04 1.92.04c.284 0 .522.088.69.257.176.179.267.447.263.773-.004.454-.173.995-.953.995l-2.202.004-.365-.001v-2.065l.647-.003zm-12.66-1.235c-5.148 0-6.989-3.511-7.626-6.456-.472-2.184-.43-4.281.133-6.258a6.918 6.918 0 011.4-2.801c.872-1.026 1.864-1.635 2.947-1.812.737-.116 1.447.386 1.575 1.175.077.404.213 1.532-.19 3.26a8.229 8.229 0 01-.742 1.912c-.04.077-.11.167-.192.277-.27.368-.679.923-.893 1.713-.398 1.466.072 3.01.594 3.887.598 1 1.971 1.457 2.991 1.457l12.64.062s.501.033 2.06.033c1.41 0 6.008.44 6.008 6.093 0 4.437-3.594 5.11-6.334 5.234-.74.035-1.99.028-2 .028h-.358v-3.2h.363l2.204-.003c1.333 0 2.24-.917 2.254-2.283.007-.68-.215-1.268-.64-1.7-.412-.415-.985-.644-1.615-.644-.384 0-1.884-.038-1.905-.04l-12.674.066zm3.22-7.578h7.492v2.686l-7.492-.04v-2.646zM29.17 33.04c0-.001 1.293.005 2.094-.033 6.233-.28 7.541-3.705 7.541-6.53 0-5.451-3.776-7.393-7.309-7.393-1.466 0-1.959-.03-2.017-.032l-.667-.004v-3.992H18.717v3.942l-1.919-.01c-.764 0-1.606-.37-1.877-.822-.316-.531-.767-1.734-.457-2.881.151-.555.448-.958.686-1.282.131-.177.237-.33.298-.446a9.444 9.444 0 00.853-2.212c.445-1.906.32-3.202.201-3.815a2.659 2.659 0 00-1.076-1.74c.401-.515.77-.605 1.212-.704.617-.14 1.385-.312 2.006-1.641l-.906-.424c-.413.885-.774.967-1.32 1.089-.565.128-1.25.283-1.92 1.253a2.635 2.635 0 00-1.054-.038c-1.398.227-2.653.985-3.735 2.259a8.176 8.176 0 00-1.66 3.304c-.617 2.16-.666 4.47-.148 6.866.604 2.794 2.564 7.482 8.9 7.482l1.916-.01v2.063l-3.25.028c-.984-.012-3.292-.022-4.929 1.603-1.125 1.118-1.696 2.782-1.696 4.947 0 5.932 5.176 6.393 6.757 6.393l3.118.02v3.882h10.094v-4.224c2.688-.448 4.217-1.196 4.582-1.612.341-.39.354-.75.306-.982-.13-.622-.773-.966-1.816-1.46-.733-.345-1.877-.582-3.072-.75V33.04l.358-.001z" />
    </g>
  );

  return isHovered ? normalHover : normal;
};

export default PoisonInformation;
