import React from 'react';
import { getIcon, SvgPathProps } from './Icon';

const MobilePhone: React.FC<SvgPathProps> = ({ size, isHovered }: SvgPathProps): JSX.Element => {
  const normal = (
    <path d="M27.195 7.68H22.86a.497.497 0 100 .993h4.334a.495.495 0 100-.992zm6.28 31.68a2.557 2.557 0 01-2.555 2.554H17.08a2.556 2.556 0 01-2.554-2.553V8.64a2.557 2.557 0 012.553-2.555H30.92a2.558 2.558 0 012.555 2.555v30.72zM30.92 4.786H17.08a3.859 3.859 0 00-3.854 3.855v30.72a3.858 3.858 0 003.853 3.855H30.92a3.859 3.859 0 003.855-3.854V8.64a3.859 3.859 0 00-3.854-3.855zm-9.265 3.393a.425.425 0 10-.85-.001.425.425 0 00.85 0zM24 39.774a1.521 1.521 0 111.52-1.522c0 .839-.681 1.522-1.52 1.522zm0-4.042a2.524 2.524 0 00-2.52 2.52A2.524 2.524 0 0024 40.774a2.524 2.524 0 002.52-2.522 2.524 2.524 0 00-2.52-2.52z" />
  );

  const normalHover = (
    <path d="M15.388 7.33a3.858 3.858 0 014.337-3.301l13.716 1.86a3.859 3.859 0 013.3 4.338l-4.128 30.442a3.826 3.826 0 01-1.485 2.55 3.82 3.82 0 01-2.852.752L14.56 42.11a3.834 3.834 0 01-2.55-1.485 3.833 3.833 0 01-.751-2.852zm3.818-2.036a2.56 2.56 0 00-2.53 2.21l-4.13 30.444a2.536 2.536 0 00.499 1.89 2.534 2.534 0 001.689.984l13.717 1.86a2.49 2.49 0 001.89-.498 2.537 2.537 0 00.984-1.69l4.129-30.441a2.558 2.558 0 00-2.188-2.875L19.55 5.318a2.508 2.508 0 00-.344-.024zm16.603 33.055l2.535 2.318-.877.959-2.535-2.318.877-.96zm-16.223-.565a2.524 2.524 0 012.837-2.159 2.524 2.524 0 012.16 2.837 2.5 2.5 0 01-.972 1.667 2.5 2.5 0 01-1.866.491 2.502 2.502 0 01-1.667-.97 2.5 2.5 0 01-.492-1.866zm2.498-1.183a1.524 1.524 0 00-1.21 2.443c.246.323.603.531 1.006.586a1.54 1.54 0 001.126-.297 1.523 1.523 0 00-.922-2.732zm17.641-1.893v1.301h-3.087v-1.301h3.087zm-29.21-23.105v1.301H7.429v-1.301h3.086zm-.83-5.616l2.537 2.318-.877.959-2.536-2.318.877-.96zm15.29 1.682l.09.008 4.293.582a.495.495 0 11-.133.982l-4.294-.582a.495.495 0 01-.425-.557c.037-.272.285-.475.558-.425zm-1.612-.145l.077.003a.426.426 0 11-.115.844.426.426 0 01.115-.844z" />
  );

  const xSmall = (
    <path d="M23.874 39.641c-.835 0-1.515-.68-1.515-1.514 0-.835.68-1.515 1.515-1.515.835 0 1.514.68 1.514 1.515 0 .835-.68 1.514-1.514 1.514zm0-4.04a2.529 2.529 0 00-2.527 2.526 2.53 2.53 0 002.527 2.526 2.53 2.53 0 002.526-2.526 2.529 2.529 0 00-2.526-2.527zm9.367 3.633a2.45 2.45 0 01-2.446 2.447H16.953a2.45 2.45 0 01-2.447-2.447V8.512a2.45 2.45 0 012.447-2.446h13.842a2.45 2.45 0 012.446 2.446v30.722zM30.795 4.552H16.953a3.965 3.965 0 00-3.961 3.96v30.722a3.966 3.966 0 003.96 3.962h13.843a3.966 3.966 0 003.96-3.962V8.512a3.965 3.965 0 00-3.96-3.96zm-3.727 3.004h-4.332a.495.495 0 100 .991h4.332a.496.496 0 000-.991zm-5.539.495a.425.425 0 10-.85-.002.425.425 0 00.85.002z" />
  );

  const xSmallHover = (
    <path d="M15.385 7.262c.309-2.161 2.312-3.682 4.48-3.367L33.57 5.842a3.967 3.967 0 013.365 4.48l-4.32 30.416a3.93 3.93 0 01-1.544 2.61 3.92 3.92 0 01-2.937.755L14.43 42.157a3.939 3.939 0 01-2.61-1.544 3.934 3.934 0 01-.755-2.937zm4.267-1.866a2.462 2.462 0 00-2.766 2.078l-4.32 30.416a2.427 2.427 0 00.466 1.813c.393.523.965.86 1.612.954l13.704 1.947a2.44 2.44 0 001.813-.468 2.42 2.42 0 00.952-1.61l4.321-30.416a2.45 2.45 0 00-2.078-2.767zm16.23 32.873l2.534 2.318-1.021 1.118-2.536-2.318 1.024-1.118zm-16.388-.513a2.53 2.53 0 012.856-2.147c.669.095 1.26.444 1.665.984.406.54.576 1.204.481 1.871a2.531 2.531 0 01-2.856 2.149 2.512 2.512 0 01-1.664-.985 2.513 2.513 0 01-.482-1.872zm2.501-1.161a1.518 1.518 0 00-1.211 2.426c.243.324.597.533.998.59.4.062.8-.045 1.124-.29.323-.242.533-.598.59-.997.057-.4-.045-.8-.29-1.124a1.498 1.498 0 00-.997-.589 1.362 1.362 0 00-.214-.016zm17.73-1.993v1.514h-3.087v-1.514h3.087zm-29.21-23.105v1.515H7.429v-1.515h3.086zm-.756-5.59l2.535 2.318-1.023 1.118-2.534-2.318 1.022-1.118zM25.08 7.678l.087.006 4.29.61c.271.037.46.288.42.56a.494.494 0 01-.56.42l-4.29-.608a.496.496 0 01.14-.981zm-1.614-.158l.077.005a.423.423 0 01.361.48.426.426 0 11-.361-.48z" />
  );

  return getIcon(size, isHovered, normal, normalHover, xSmall, xSmallHover);
};

export default MobilePhone;
