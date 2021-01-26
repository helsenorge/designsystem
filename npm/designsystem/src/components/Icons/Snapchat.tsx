import React from 'react';
import {SvgPathProps} from './Icon';

const Snapchat: React.FC<SvgPathProps> = ({isExtraSmall, isHovered}: SvgPathProps): JSX.Element => {
  const normal = (
    <g>
      <path d="M36.843 34.435l-.464.047-.57 2.476c-.15-.053-.316-.119-.483-.187-1.097-.44-2.755-1.11-4.745-.08-.772.4-1.382.814-1.97 1.214-1.312.89-2.347 1.592-4.508 1.651-2.197-.059-3.232-.762-4.542-1.65-.59-.4-1.199-.815-1.972-1.215a4.605 4.605 0 00-2.155-.545c-1.036 0-1.918.355-2.589.625-.168.068-.333.134-.482.187l-.572-2.476-.463-.047c-1.923-.197-3.859-.74-4.054-1.076.001-.004.13-.374 1.556-1.006 5.921-2.62 5.99-6.667 5.99-6.838l-.047-.242c-.427-1.062-1.446-1.382-2.264-1.638-1.05-.33-1.387-.497-1.363-1.22a.629.629 0 01.226-.472c.625-.566 2.298-.684 3.214-.625l.693.045V16.85c0-8.309 8.446-8.406 8.807-8.406.36 0 8.807.097 8.807 8.406l.001 4.514.691-.045c.907-.059 2.588.06 3.214.625a.63.63 0 01.227.471c.023.724-.315.891-1.364 1.221-.817.256-1.836.576-2.262 1.638l-.047.242c0 .171.068 4.218 5.988 6.838 1.367.605 1.567.948 1.56.946-.221.401-2.146.941-4.058 1.136m3.023-3.27c-4.591-2.033-5.14-4.88-5.204-5.522.216-.375.682-.546 1.39-.768.928-.292 2.33-.732 2.273-2.503a1.927 1.927 0 00-.654-1.393c-.895-.812-2.534-.96-3.476-.973V16.85c0-2.793-.852-5.059-2.531-6.733-2.937-2.93-7.33-2.973-7.572-2.973h-.01c-.245 0-4.636.044-7.573 2.973-1.68 1.674-2.53 3.94-2.53 6.733v3.157c-.943.013-2.581.161-3.478.973-.41.372-.636.853-.653 1.393-.058 1.771 1.345 2.211 2.273 2.503.708.222 1.174.392 1.39.767-.066.652-.62 3.493-5.205 5.522-1.08.478-2.492 1.241-2.315 2.356.217 1.366 2.883 1.93 4.743 2.156l.623 2.701h.517c.463 0 .924-.185 1.457-.4 1.033-.416 2.203-.887 3.66-.132.705.365 1.283.757 1.84 1.135 1.368.93 2.66 1.806 5.273 1.876 2.576-.07 3.869-.947 5.237-1.876.558-.378 1.136-.77 1.839-1.135 1.456-.755 2.627-.284 3.66.132.534.215.995.4 1.458.4h.518l.623-2.7c1.86-.228 4.525-.79 4.742-2.157.178-1.115-1.235-1.878-2.315-2.356" />
      <path d="M27.733 14.452c-.595 0-1.077.694-1.077 1.549 0 .856.482 1.55 1.077 1.55.596 0 1.078-.694 1.078-1.55 0-.855-.482-1.55-1.078-1.55m-7.293 0c-.595 0-1.077.695-1.077 1.55 0 .856.482 1.55 1.077 1.55.596 0 1.078-.694 1.078-1.55 0-.855-.482-1.55-1.078-1.55" />
    </g>
  );

  const normalHover = (
    <path d="M23.69 7.145c.71.016 4.728.232 7.473 2.971 1.68 1.674 2.531 3.94 2.531 6.733v3.157c.942.013 2.581.161 3.477.973.41.372.636.853.653 1.393.058 1.771-1.345 2.211-2.273 2.503-.708.222-1.174.393-1.39.768.065.641.613 3.49 5.205 5.521 1.08.478 2.493 1.241 2.315 2.356-.217 1.366-2.883 1.93-4.742 2.156l-.623 2.701h-.518c-.463 0-.924-.185-1.458-.4-1.033-.416-2.206-.887-3.66-.132-.704.365-1.28.757-1.839 1.135-1.368.93-2.66 1.806-5.238 1.876-2.612-.07-3.904-.947-5.273-1.876-.557-.378-1.134-.77-1.838-1.135-1.455-.755-2.628-.284-3.66.132-.535.215-.996.4-1.459.4h-.517l-.623-2.7c-1.86-.228-4.526-.79-4.743-2.157-.177-1.115 1.236-1.878 2.315-2.356 4.585-2.029 5.14-4.87 5.205-5.522-.216-.375-.682-.545-1.39-.767-.927-.292-2.33-.732-2.273-2.503.017-.54.243-1.02.653-1.393.897-.812 2.535-.96 3.478-.973V16.85c0-2.793.851-5.059 2.53-6.733 2.746-2.738 6.762-2.955 7.475-2.971zm-.054 1.299h-.1c-.78.011-8.757.33-8.757 8.405v4.514l-.693-.045c-.916-.059-2.59.06-3.214.625a.629.629 0 00-.226.471c-.024.724.314.891 1.363 1.221.818.256 1.837.576 2.264 1.638l.047.242c0 .171-.069 4.218-5.99 6.838-1.426.632-1.555 1.002-1.556 1.006.195.335 2.131.88 4.054 1.076l.463.047.572 2.476c.15-.053.314-.119.483-.187.671-.27 1.552-.625 2.588-.625.661 0 1.384.144 2.156.545.772.4 1.381.813 1.971 1.214 1.31.89 2.345 1.592 4.542 1.651 2.161-.059 3.197-.762 4.508-1.652.59-.4 1.2-.813 1.97-1.213 1.986-1.029 3.646-.362 4.744.08.17.068.333.134.484.187l.571-2.476.463-.047c1.912-.195 3.837-.735 4.057-1.136-.03 0-.238-.36-1.559-.946-5.717-2.53-5.977-6.39-5.988-6.806v-.032l.046-.242c.426-1.062 1.445-1.382 2.263-1.638 1.05-.33 1.387-.497 1.364-1.22a.63.63 0 00-.227-.472c-.626-.566-2.307-.684-3.214-.625l-.69.045-.002-4.514c0-8.075-7.978-8.394-8.757-8.405zm3.418 10.636l.846.987c-1.636 1.403-3.166 1.873-4.482 1.873-2.645 0-4.423-1.9-4.449-1.929l.96-.877c.128.138 3.17 3.341 7.125-.054zm.027-4.628c.596 0 1.079.694 1.079 1.549 0 .856-.483 1.55-1.079 1.55s-1.078-.694-1.078-1.55c0-.855.482-1.55 1.078-1.55zm-7.293 0c.596 0 1.078.694 1.078 1.549 0 .856-.482 1.55-1.078 1.55-.596 0-1.078-.694-1.078-1.55 0-.855.482-1.549 1.078-1.549z" />
  );

  return isHovered ? normalHover : normal;
};

export default Snapchat;