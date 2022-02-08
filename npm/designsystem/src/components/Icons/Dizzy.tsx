import React from 'react';
import { SvgPathProps } from './Icon';

const Dizzy: React.FC<SvgPathProps> = ({ size, isHovered }: SvgPathProps): JSX.Element => {
  const normal = (
    <path d="M25.27 20.808l2.636.022-.011 1.3-2.636-.022.011-1.3zm-4.531-8.045l-1.653 1.347 1.348 1.652-.775.632-1.979-2.428 2.427-1.98.632.777zm.988-6.971l1.587-1.422-1.423-1.587.744-.668 2.091 2.332-2.332 2.09-.667-.745zm12.772 21.016a.823.823 0 01-.706.387h-1.856v2.039a5.306 5.306 0 01-5.299 5.3h-.651v5.185H13.846v-5.397c0-2.601-.917-4.415-1.889-6.336-1.078-2.133-2.192-4.34-2.192-7.971 0-2.363.794-4.806 2.245-6.82 1.221.533 2.714.958 4.426 1.232l.158-.988c-1.502-.24-2.837-.607-3.94-1.055 1.911-2.204 4.697-3.721 8.154-3.721 3.027 0 6.161 1.278 8.329 3.727-1.938.779-4.602 1.298-7.539 1.37l.024 1c3.234-.08 6.075-.664 8.151-1.572 1.329 1.827 2.164 4.184 2.164 7.048v.143l2.616 5.624a.826.826 0 01-.054.805zm1.232-1.353l-2.494-5.364c-.027-3.024-.901-5.532-2.285-7.505 1.487-.884 2.362-1.976 2.362-3.172 0-2.202-2.87-4.09-7.49-4.928l-.179.984c3.989.723 6.669 2.308 6.669 3.944 0 .874-.731 1.7-1.962 2.396-2.427-2.914-6.045-4.446-9.544-4.446-3.749 0-7.107 1.728-9.373 4.44-1.254-.708-1.985-1.544-1.985-2.39 0-2.103 4.593-4.355 11.432-4.355v-1c-6.971 0-12.432 2.353-12.432 5.355 0 1.187.865 2.29 2.379 3.185a12.78 12.78 0 00-2.365 7.416c0 3.942 1.24 6.394 2.333 8.557.938 1.856 1.749 3.459 1.749 5.75v6.697h14.742v-5.216c3.335-.328 5.95-3.15 5.95-6.57v-.738h.555c.734 0 1.408-.37 1.802-.988a2.128 2.128 0 00.136-2.052z" />
  );

  const normalHover = (
    <path d="M25.27 20.808l2.636.022-.011 1.3-2.636-.022.011-1.3zm-6.583-8.08l-1.712 1.27 1.27 1.714-.803.596-1.867-2.516 2.515-1.866.597.803zm5.612-6.537l1.793-1.153-1.153-1.793.841-.541 1.694 2.635-2.635 1.693-.54-.841zm10.2 20.617a.823.823 0 01-.706.387h-1.856v2.039a5.306 5.306 0 01-5.299 5.3h-.651v5.185H13.846v-5.397c0-2.601-.917-4.415-1.889-6.336-1.078-2.133-2.192-4.34-2.192-7.971 0-2.362.793-4.804 2.243-6.816.708.307 1.505.58 2.394.809l.249-.97a15.86 15.86 0 01-1.999-.651c1.911-2.205 4.697-3.724 8.156-3.724 3.027 0 6.16 1.278 8.328 3.727-2.002.82-4.849 1.378-8.254 1.378-.575 0-1.14-.016-1.693-.048l-.058.998c.572.033 1.156.05 1.751.05 3.519 0 6.65-.6 8.891-1.58 1.329 1.827 2.164 4.184 2.164 7.048v.143l2.616 5.624a.826.826 0 01-.054.805zm1.232-1.353l-2.494-5.364c-.027-3.025-.902-5.534-2.287-7.508 1.486-.882 2.364-1.972 2.364-3.17 0-1.684-1.71-3.223-4.691-4.222l-.318.949c2.51.84 4.009 2.065 4.009 3.274 0 .82-.709 1.663-1.97 2.387-2.426-2.908-6.04-4.437-9.536-4.437-3.75 0-7.108 1.728-9.373 4.44-1.26-.711-1.985-1.545-1.985-2.39 0-2.06 4.202-3.945 9.566-4.294a28.883 28.883 0 014.929.104l.11-.994a30.033 30.033 0 00-5.104-.108C12.768 4.524 8.45 6.7 8.45 9.414c0 1.185.852 2.29 2.376 3.189a12.775 12.775 0 00-2.362 7.412c0 3.942 1.24 6.394 2.333 8.557.938 1.856 1.749 3.459 1.749 5.75v6.697h14.742v-5.216a6.61 6.61 0 005.949-6.57v-.738h.556c.734 0 1.408-.37 1.802-.99a2.126 2.126 0 00.136-2.05z" />
  );

  return isHovered ? normalHover : normal;
};

export default Dizzy;
