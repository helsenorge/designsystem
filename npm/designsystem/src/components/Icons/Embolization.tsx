import React from 'react';

import { SvgPathProps } from './Icon';

const Embolization: React.FC<SvgPathProps> = ({ size, isHovered }: SvgPathProps): React.ReactElement => {
  const normal = (
    <path
      fillRule={'evenodd'}
      d="M41.064 22.427c-.035-.02-.068-.04-.104-.058.004-.11.017-.216.017-.327v-6.885a3.801 3.801 0 012.702 3.649 3.839 3.839 0 01-2.615 3.62m-1.848 4.802a8.514 8.514 0 001.581-3.44c.546.388.869.889.869 1.41 0 .963-1.062 1.792-2.45 2.03m-7.338-1.632c.207-1.153.427-2.16.659-2.977.623-2.194 2.297-5.645 4.541-7.027v6.362c-1.894.434-3.2 1.732-3.2 3.244 0 .506.152.993.427 1.438a4.656 4.656 0 01-1.421.367 3.993 3.993 0 00-1.006-1.407m-2.672 5.622a2.688 2.688 0 01-2.686-2.685 2.688 2.688 0 012.686-2.685 2.688 2.688 0 012.686 2.685 2.688 2.688 0 01-2.686 2.685m6.192-5.285a1.403 1.403 0 01-.219-.735c0-.79.73-1.52 1.801-1.875a4.668 4.668 0 01-1.582 2.61m-22.576-.735c0 1.14-1.486 2.105-3.244 2.105-1.758 0-3.243-.964-3.243-2.105 0-1.142 1.485-2.106 3.243-2.106 1.758 0 3.244.964 3.244 2.106m32.158-6.392a5.091 5.091 0 00-4.003-4.985V8.188h-1v13.854c0 3.966-3.063 7.225-6.946 7.55.094-.34.161-.69.161-1.06 0-.181-.03-.357-.054-.533 2.783-.366 4.94-2.748 4.94-5.63V8.189h-1v5.409c-1.554-.102-3.555-.33-5.042-.846a47.17 47.17 0 01-.898-.326c-1.832-.677-4.322-1.6-7.017-1.593v-.005c-.044-.001-.086.003-.13.002-.038 0-.074-.003-.112-.002v.004c-2.692-.015-5.185.917-7.017 1.594-.323.12-.624.23-.898.326-2.89 1.005-7.755.935-7.816.927a5.134 5.134 0 00-5.127 5.128c0 1.918 1.092 3.65 2.743 4.525-.459.533-.729 1.17-.729 1.867 0 1.877 2.038 3.406 4.543 3.406 2.506 0 4.544-1.53 4.544-3.406 0-1.911-1.996-3.407-4.544-3.407-1 0-1.909.237-2.651.632a3.836 3.836 0 01-2.606-3.617 3.83 3.83 0 013.815-3.828c.048.002.349.006.81 0v.006c3.142-.06 5.677 4.674 6.517 7.635 1.327 4.676 2.05 14.472 1.983 19.437l1.3.017c.066-4.937-.619-14.833-2.032-19.81-.697-2.454-2.353-5.747-4.653-7.45 1.447-.138 3.044-.386 4.33-.833.281-.098.59-.212.922-.335 1.765-.654 4.174-1.534 6.677-1.516 2.511-.003 4.928.862 6.697 1.516.332.123.641.237.922.335 1.285.446 2.888.69 4.314.828-2.481 1.844-4.083 5.503-4.636 7.456a30.393 30.393 0 00-.594 2.577 3.859 3.859 0 00-2.245-.217c.924-3.802 3.601-7.855 3.629-7.897a.5.5 0 00-.416-.778H16.339a.5.5 0 00-.416.778c.029.043 2.854 4.313 3.704 8.199.872 3.984 1.331 5.956 2.229 7.23.519.736.569 1.197.488 1.373-.088.03-.187.049-.29.07-.566.12-1.62.343-1.62 1.983v6.483h1v-6.483c0-.83.294-.891.826-1.004.145-.03.284-.061.407-.102.323-.111.559-.35.664-.673.185-.57-.049-1.36-.657-2.223-.748-1.06-1.183-2.816-2.07-6.867-.677-3.098-2.48-6.318-3.358-7.764h13.508c-.878 1.446-2.681 4.666-3.358 7.764l-.072.328c-1.246.675-2.104 1.979-2.104 3.492 0 .773.231 1.488.612 2.099a5.161 5.161 0 01-.505.948c-.609.864-.843 1.653-.658 2.223.105.323.341.562.665.673.122.04.261.072.406.102.532.113.826.174.826 1.004v6.483h1v-6.483c0-1.64-1.054-1.863-1.62-1.982-.103-.022-.202-.041-.325-.107-.046-.14.005-.601.523-1.337.143-.203.275-.43.401-.677a3.958 3.958 0 002.661 1.04c.168 0 .327-.03.489-.05-.302 3.419-.475 7.1-.441 9.604l1.3-.017c-.035-2.594.156-6.483.484-10.004a3.994 3.994 0 001.551-1.437 8.536 8.536 0 005.352-2.035c.158.013.318.024.481.024 2.505 0 4.543-1.53 4.543-3.406 0-.677-.266-1.318-.737-1.863 1.655-.873 2.752-2.607 2.752-4.53"
    />
  );

  const normalHover = (
    <path
      fillRule={'evenodd'}
      d="M41.064 22.427c-.035-.02-.068-.04-.104-.058.004-.11.017-.216.017-.327v-6.885a3.801 3.801 0 012.702 3.649 3.839 3.839 0 01-2.615 3.62m-1.848 4.802a8.514 8.514 0 001.581-3.44c.546.388.869.889.869 1.41 0 .963-1.062 1.792-2.45 2.03m-10.01 3.374a2.071 2.071 0 01-2.069-2.07c0-1.14.928-2.068 2.069-2.068s2.069.928 2.069 2.069a2.071 2.071 0 01-2.069 2.069m7.872-14.98v6.332c-1.894.434-3.2 1.732-3.2 3.244 0 .506.152.993.427 1.438a4.624 4.624 0 01-1.91.417h-.177a3.352 3.352 0 00-.427-.655c.244-1.5.511-2.776.796-3.78.616-2.17 2.27-5.591 4.491-6.996m-1.68 10.31a1.403 1.403 0 01-.219-.734c0-.79.73-1.52 1.801-1.875a4.668 4.668 0 01-1.582 2.61m-22.576-.735c0 1.14-1.486 2.105-3.244 2.105-1.758 0-3.243-.964-3.243-2.105 0-1.142 1.485-2.106 3.243-2.106 1.758 0 3.244.964 3.244 2.106m32.158-6.392a5.09 5.09 0 00-4.003-4.985V8.188h-1v13.854c0 4.18-3.401 7.582-7.582 7.582h-.017c.119-.343.197-.707.197-1.091 0-.167-.026-.327-.049-.487a5.685 5.685 0 005.552-5.676V8.188h-1v5.409c-1.554-.102-3.555-.33-5.042-.846a44.799 44.799 0 01-.898-.326c-1.832-.677-4.322-1.6-7.017-1.593v-.005c-.044-.001-.086.003-.13.002-.038 0-.074-.003-.112-.002v.004c-2.692-.015-5.185.917-7.017 1.594-.323.12-.624.23-.898.326-2.89 1.005-7.755.935-7.816.927a5.134 5.134 0 00-5.127 5.128c0 1.918 1.092 3.65 2.743 4.525-.459.533-.729 1.17-.729 1.867 0 1.877 2.038 3.406 4.543 3.406 2.506 0 4.544-1.53 4.544-3.406 0-1.911-1.996-3.407-4.544-3.407-1 0-1.909.237-2.651.632a3.836 3.836 0 01-2.606-3.617 3.83 3.83 0 013.815-3.828c.048.002.349.006.81 0v.006c3.161-.06 5.677 4.674 6.517 7.635 1.327 4.676 2.05 14.472 1.983 19.437l1.3.017c.066-4.937-.619-14.833-2.032-19.81-.697-2.454-2.353-5.747-4.653-7.45 1.447-.138 3.044-.386 4.33-.833.281-.098.59-.212.922-.335 1.767-.656 4.177-1.536 6.686-1.517 2.507-.017 4.92.863 6.688 1.517.332.123.641.237.922.335 1.298.45 2.92.697 4.357.833-2.478 1.846-4.078 5.507-4.63 7.45-.252.89-.49 1.976-.71 3.226a3.318 3.318 0 00-1.42-.326c-.32 0-.624.059-.917.143l.084-.38c.85-3.886 3.675-8.156 3.704-8.2a.5.5 0 00-.416-.777H16.339a.5.5 0 00-.416.778c.029.043 2.854 4.313 3.704 8.199.872 3.984 1.331 5.956 2.229 7.23.519.736.569 1.197.488 1.373-.088.03-.187.049-.29.07-.566.12-1.62.343-1.62 1.983v6.483h1v-6.483c0-.83.294-.891.826-1.004.145-.03.284-.061.407-.102.323-.111.559-.35.664-.673.185-.57-.048-1.36-.657-2.223-.748-1.06-1.183-2.816-2.07-6.867-.677-3.098-2.48-6.318-3.358-7.764h13.508c-.878 1.446-2.681 4.666-3.358 7.764l-.262 1.183a3.351 3.351 0 00-1.298 2.637c0 .477.103.929.282 1.34-.248.746-.496 1.29-.791 1.707-.609.864-.843 1.653-.658 2.223.105.323.341.562.665.673.122.04.261.072.406.102.532.113.826.174.826 1.004v6.483h1v-6.483c0-1.64-1.054-1.863-1.62-1.982-.103-.022-.202-.041-.325-.107-.046-.14.005-.601.523-1.337.246-.348.461-.763.664-1.262a3.357 3.357 0 002.398 1.009c.204 0 .402-.026.597-.061-.341 3.614-.535 7.53-.499 10.23l1.3-.016c-.038-2.834.182-7.036.561-10.793.251-.18.469-.398.662-.64h.568a8.535 8.535 0 005.546-2.043c.158.013.318.024.481.024 2.505 0 4.543-1.53 4.543-3.406 0-.677-.266-1.318-.737-1.863 1.655-.873 2.752-2.607 2.752-4.53"
    />
  );

  return isHovered ? normalHover : normal;
};

export default Embolization;
