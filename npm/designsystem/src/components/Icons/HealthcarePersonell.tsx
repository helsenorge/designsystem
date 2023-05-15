import React from 'react';

import { SvgPathProps, getIcon } from './Icon';

const HealthcarePersonell: React.FC<SvgPathProps> = ({ size, isHovered }: SvgPathProps): React.ReactElement => {
  const normal = (
    <>
      <path d="M31.483 17.922a.492.492 0 1 1-.984 0 .492.492 0 0 1 .984 0Zm4.713.492a.492.492 0 1 0 0-.984.492.492 0 0 0 0 .984Z" />
      <path
        fillRule="evenodd"
        d="M37.257 8.102c.037-.844-.253-1.78-.834-2.526-.638-.819-1.638-1.422-2.949-1.422-2.172 0-3.838 1.882-3.707 3.998a7.491 7.491 0 0 0-3.706 6.468v2.805a7.494 7.494 0 1 0 14.988 0V14.62a7.492 7.492 0 0 0-3.792-6.518Zm-1.343-.597a2.721 2.721 0 0 0-.517-1.13c-.414-.532-1.048-.92-1.923-.92-1.211 0-2.207.923-2.385 2.086a7.483 7.483 0 0 1 2.466-.415c.824 0 1.617.133 2.359.379Zm-8.553 9.92v-1.488c.838.055 1.88-.044 2.808-.492a3.795 3.795 0 0 0 1.659-1.513c.053.083.11.166.17.247.7.941 1.859 1.64 3.608 1.64h4.143v1.606a6.194 6.194 0 1 1-12.388 0Zm12.388-2.905a6.194 6.194 0 0 0-12.388.1v.013c.677.057 1.53-.015 2.242-.36a2.497 2.497 0 0 0 1.068-.94c.262-.425.444-1.012.441-1.832v-.05h1.3v.039c.008.537.171 1.297.629 1.912.445.598 1.21 1.117 2.565 1.117h4.143Z"
      />
      <path d="M12.241 16.476a.492.492 0 1 0 0-.984.492.492 0 0 0 0 .984Zm5.697-.492a.492.492 0 1 1-.984 0 .492.492 0 0 1 .984 0Z" />
      <path
        fillRule="evenodd"
        d="M14.818 5.214a7.494 7.494 0 0 1 7.495 7.494v2.805a7.494 7.494 0 1 1-14.989 0v-2.805a7.494 7.494 0 0 1 7.494-7.494ZM8.624 12.72v-.012a6.194 6.194 0 0 1 12.388-.1h-4.143c-1.356 0-2.12-.52-2.565-1.117-.458-.615-.621-1.375-.629-1.912v-.041h-1.3v.051c.003.82-.18 1.406-.44 1.83-.266.43-.637.733-1.069.942-.712.344-1.565.416-2.242.36Zm8.245 1.188h4.144v1.605a6.194 6.194 0 1 1-12.389 0v-1.49c.838.056 1.88-.043 2.808-.492a3.795 3.795 0 0 0 1.658-1.512c.054.084.11.167.171.248.7.941 1.859 1.64 3.608 1.64ZM41.15 35.033v-3.51h-1.753v-.988h-1.3v.988h-1.754v3.51h4.806Zm-1.3-2.21h-2.207v.91h2.206v-.91ZM22.18 30.01v3.562h-4.807v-3.561h1.754v-.988h1.3v.988h1.753Zm-3.507 1.3h2.207v.962h-2.207v-.961Z"
      />
      <path
        fillRule="evenodd"
        d="M25.044 41.806H4.008V34.41a11.17 11.17 0 0 1 6.325-10.067l.284-.137.185.09.01-.008.021.024.067.032a8.9 8.9 0 0 0 3.92.905c1.53 0 2.97-.385 4.234-1.065l.277-.15.29.126a11.213 11.213 0 0 1 5.562 5.282 11.21 11.21 0 0 1 4.248-3.428l.283-.131.28.14a8.862 8.862 0 0 0 3.971.934c1.475 0 2.867-.36 4.096-.998l.277-.144.285.127a11.171 11.171 0 0 1 6.653 10.218v5.646h-20.23Zm8.92-13.55c.776 0 1.532-.086 2.26-.251l-2.3 2.639-2.269-2.65a10.23 10.23 0 0 0 2.31.263Zm-8.192 2.614a9.919 9.919 0 0 1 3.7-3.427l4.443 5.19 4.616-5.297a9.869 9.869 0 0 1 5.444 8.824v4.346h-17.63V34.41c0-1.238-.201-2.428-.573-3.54Zm-1.448-.115.013-.022a9.906 9.906 0 0 0-4.672-5.115l-4.718 5.04-4.538-4.892a9.866 9.866 0 0 0-5.102 8.644v6.095h19.738v-6.03a9.846 9.846 0 0 0-.613-3.43l-.108-.29Zm-11.62-4.425 2.247 2.42 2.345-2.504a10.26 10.26 0 0 1-4.591.083Z"
      />
    </>
  );

  const normalHover = (
    <>
      <path d="M30.883 17.296a.492.492 0 1 1-.967-.185.492.492 0 0 1 .967.185Zm3.783 1.228a.492.492 0 1 0 .186-.967.492.492 0 0 0-.185.967Z" />
      <path
        fillRule="evenodd"
        d="M39.378 8.954c.203-.828.097-1.812-.337-2.662-.471-.924-1.34-1.705-2.627-1.952-2.125-.408-4.108 1.111-4.39 3.2a7.491 7.491 0 0 0-4.908 5.671l-.529 2.754a7.494 7.494 0 1 0 14.72 2.826l.529-2.754a7.491 7.491 0 0 0-2.458-7.083Zm-1.2-.849a2.72 2.72 0 0 0-.295-1.222c-.306-.6-.856-1.102-1.715-1.266-1.183-.228-2.33.483-2.73 1.582a7.485 7.485 0 0 1 2.45.065 7.485 7.485 0 0 1 2.29.841ZM27.864 16.21l.28-1.46c.813.213 1.855.311 2.85.046a3.795 3.795 0 0 0 1.916-1.173c.036.091.076.183.12.274.51 1.056 1.516 1.961 3.233 2.291l4.07.781-.303 1.577a6.194 6.194 0 1 1-12.166-2.336Zm12.713-.518a6.194 6.194 0 0 0-12.185-2.236l-.002.014c.654.184 1.505.273 2.27.07.463-.123.885-.35 1.226-.723.336-.366.624-.905.776-1.704l.012-.063 1.277.245-.002.006-.008.045c-.091.53-.072 1.3.26 1.985.324.671.976 1.325 2.307 1.58l4.07.781Z"
      />
      <path d="M13.775 15.988a.491.491 0 1 1-.982 0 .491.491 0 0 1 .982 0Zm4.685.492a.491.491 0 0 0 .177-.95.492.492 0 1 0-.326.927.492.492 0 0 0 .15.022Zm-3.32 2.986a1.714 1.714 0 0 1-.502-1.211h3.426a1.714 1.714 0 0 1-2.924 1.211Z" />
      <path
        fillRule="evenodd"
        d="M14.818 5.213a7.494 7.494 0 0 1 7.495 7.494v2.805a7.494 7.494 0 1 1-14.989 0v-2.805a7.494 7.494 0 0 1 7.494-7.494Zm-6.194 7.506v-.012a6.194 6.194 0 0 1 12.388-.1h-4.143c-1.356 0-2.12-.52-2.565-1.117-.458-.615-.621-1.375-.629-1.913v-.04h-1.3v.051c.003.82-.18 1.406-.44 1.83-.266.43-.637.733-1.069.942-.712.344-1.565.416-2.242.359Zm8.245 1.188h4.144v1.605a6.194 6.194 0 1 1-12.389 0v-1.49c.838.056 1.88-.044 2.808-.492a3.795 3.795 0 0 0 1.658-1.512 4.1 4.1 0 0 0 .171.248c.7.941 1.859 1.64 3.608 1.64ZM41.15 35.032v-3.51h-1.753v-.988h-1.3v.987h-1.754v3.511h4.806Zm-1.3-2.21h-2.207v.91h2.206v-.91ZM22.18 30.01v3.56h-4.807v-3.56h1.754v-.988h1.3v.988h1.753Zm-3.507 1.3h2.207v.96h-2.207v-.96Z"
      />
      <path
        fillRule="evenodd"
        d="M4.007 41.806v-7.397a11.17 11.17 0 0 1 6.325-10.066l.284-.137.185.09.01-.01.023.026.065.032a8.9 8.9 0 0 0 3.92.905c1.53 0 2.97-.386 4.234-1.066l.277-.149.29.126a11.213 11.213 0 0 1 5.562 5.281 11.209 11.209 0 0 1 4.248-3.428l.283-.131.28.14a8.861 8.861 0 0 0 3.971.934c1.475 0 2.867-.36 4.096-.998l.277-.144.285.127a11.171 11.171 0 0 1 6.653 10.217v5.648H4.007Zm29.957-13.55c.776 0 1.533-.087 2.26-.253l-2.313 2.654-2.434-2.708c.797.2 1.63.307 2.487.307Zm-8.192 2.613a9.921 9.921 0 0 1 3.566-3.354l4.589 5.103 4.605-5.283a9.869 9.869 0 0 1 5.443 8.823v4.348h-17.63v-6.097c0-1.237-.201-2.427-.573-3.54Zm-1.448-.115.013-.022a9.905 9.905 0 0 0-4.673-5.114l-4.717 5.038-4.538-4.89a9.866 9.866 0 0 0-5.102 8.643v6.097h19.738v-6.032a9.846 9.846 0 0 0-.613-3.43l-.108-.29Zm-11.618-4.425 2.245 2.42 2.344-2.503a10.257 10.257 0 0 1-4.589.083Z"
      />
    </>
  );

  const xSmall = (
    <>
      <path
        fillRule="evenodd"
        d="M37.326 8.083c.06-.898-.242-1.899-.859-2.69-.661-.85-1.7-1.476-3.059-1.476-2.28 0-4.02 1.996-3.84 4.218a7.49 7.49 0 0 0-3.573 6.387v2.805a7.494 7.494 0 0 0 14.989 0v-2.805a7.49 7.49 0 0 0-3.658-6.439Zm-1.631-.725a2.584 2.584 0 0 0-.474-.996c-.39-.5-.985-.866-1.813-.866-1.113 0-2.037.832-2.235 1.897a7.49 7.49 0 0 1 2.317-.365c.767 0 1.508.115 2.205.33Zm-8.12 9.969v-1.494c.78.018 1.695-.104 2.52-.502a3.777 3.777 0 0 0 1.667-1.533c.057.092.119.183.185.272.697.936 1.85 1.633 3.593 1.633h3.865v1.624a5.915 5.915 0 0 1-11.83 0Zm11.83-2.887H35.54c-1.361 0-2.13-.522-2.58-1.125-.456-.614-.621-1.37-.632-1.91v-.053h-1.263v.064c.001.816-.181 1.403-.444 1.829a2.514 2.514 0 0 1-1.075.948c-.62.3-1.347.394-1.972.377v-.048a5.915 5.915 0 0 1 11.83-.082ZM14.753 5.116a7.494 7.494 0 0 1 7.494 7.494v2.805a7.494 7.494 0 1 1-14.989 0V12.61a7.494 7.494 0 0 1 7.495-7.494Zm-5.916 7.54v-.046a5.915 5.915 0 0 1 11.83-.082h-3.864c-1.361 0-2.13-.522-2.58-1.125-.456-.613-.622-1.37-.632-1.91V9.44h-1.263v.065c.001.814-.181 1.401-.444 1.827a2.514 2.514 0 0 1-1.075.948c-.62.3-1.347.394-1.972.377Zm4.373-.498a4.058 4.058 0 0 1-.186-.272 3.776 3.776 0 0 1-1.666 1.532c-.824.397-1.74.52-2.52.502v1.495a5.915 5.915 0 1 0 11.83 0v-1.624h-3.865c-1.744 0-2.896-.697-3.593-1.633Zm27.874 22.777v-3.511h-1.772v-.987H38.05v.987h-1.771v3.51h4.806Zm-1.263-2.248h-2.28v.985h2.28v-.985Zm-17.707-2.774v3.561h-4.806v-3.561h1.772v-.988h1.263v.988h1.771Zm-3.543 1.263h2.28v1.035h-2.28v-1.035Z"
      />
      <path
        fillRule="evenodd"
        d="M29.306 25.79a11.347 11.347 0 0 0-4.166 3.295 11.353 11.353 0 0 0-5.53-5.15l-.351-.153-.337.182a8.763 8.763 0 0 1-4.168 1.049 8.76 8.76 0 0 1-3.86-.891l-.344-.168-.345.166a11.31 11.31 0 0 0-6.403 10.192v6.938h41.547v-5.188c0-4.619-2.77-8.59-6.736-10.345l-.346-.154-.337.175a8.722 8.722 0 0 1-4.031.982c-1.404 0-2.73-.33-3.91-.92l-.34-.17-.343.16ZM43.77 36.062a9.73 9.73 0 0 0-5.416-8.723l-4.493 5.154-4.475-4.977a9.781 9.781 0 0 0-3.526 3.276c.362 1.108.558 2.291.558 3.52v5.36H43.77v-3.61Zm-9.924-5.474-2.3-2.559a10.359 10.359 0 0 0 4.489.048l-2.189 2.51Zm-9.61.407a9.709 9.709 0 0 1 .604 3.382v5.294H5.38v-5.359a9.727 9.727 0 0 1 5.078-8.547l4.424 4.767 4.6-4.914a9.766 9.766 0 0 1 4.634 5.006l-.01.02.13.351Zm-11.464-4.593 2.114 2.278 2.203-2.353a10.39 10.39 0 0 1-4.317.075Z"
      />
    </>
  );

  const xSmallHover = (
    <>
      <path d="M29.618 17.337a.473.473 0 1 0 .179-.929.473.473 0 0 0-.179.929Zm4.742.428a.473.473 0 1 1-.928-.178.473.473 0 0 1 .929.178Z" />
      <path
        fillRule="evenodd"
        d="M39.714 9.304c.29-.853.258-1.897-.133-2.822-.42-.991-1.26-1.865-2.573-2.217-2.203-.59-4.4.888-4.801 3.08a7.49 7.49 0 0 0-5.104 5.246l-.726 2.709a7.494 7.494 0 1 0 14.478 3.88l.726-2.71a7.49 7.49 0 0 0-1.867-7.166ZM38.326 8.18a2.582 2.582 0 0 0-.2-1.084C37.88 6.512 37.4 6.005 36.6 5.79c-1.076-.289-2.184.276-2.65 1.253a7.488 7.488 0 0 1 2.331.247 7.492 7.492 0 0 1 2.045.89Zm-10.037 6.084-.387 1.444A5.915 5.915 0 0 0 39.33 18.77l.42-1.57-3.733-1c-1.684-.451-2.617-1.423-3.048-2.508a4.085 4.085 0 0 1-.109-.31l-.091.089a3.776 3.776 0 0 1-1.915.96c-.9.17-1.815.052-2.565-.167Zm7.584-5.448a5.915 5.915 0 0 1 4.204 7.164l-3.733-1c-1.315-.352-1.924-1.055-2.201-1.754-.284-.715-.246-1.493-.114-2.018l.01-.037.001-.005-1.22-.327-.014.053c-.21.793-.54 1.316-.904 1.66a2.51 2.51 0 0 1-1.284.638c-.678.129-1.403.032-2.002-.147l.012-.045a5.915 5.915 0 0 1 7.245-4.182Z"
      />
      <path d="M13.262 16.175a.472.472 0 1 0 0-.944.472.472 0 0 0 0 .944Zm1.783 2.871a1.647 1.647 0 0 1-.482-1.164h3.292a1.647 1.647 0 0 1-2.81 1.164Zm3.649-3.347a.473.473 0 1 1-.945 0 .473.473 0 0 1 .945 0Z" />
      <path
        fillRule="evenodd"
        d="M22.247 12.61a7.494 7.494 0 0 0-14.989 0v2.805a7.494 7.494 0 0 0 14.99 0V12.61Zm-13.41 0v.046c.625.018 1.351-.077 1.972-.376.434-.21.808-.515 1.075-.948.263-.426.445-1.012.444-1.827V9.44h1.263v.053c.01.54.176 1.297.633 1.91.448.603 1.218 1.125 2.579 1.125h3.865a5.915 5.915 0 0 0-11.83.082Zm4.187-.724c.058.091.12.182.186.272.697.936 1.85 1.633 3.593 1.633h3.865v1.624a5.915 5.915 0 1 1-11.83 0V13.92c.78.018 1.696-.105 2.52-.503a3.776 3.776 0 0 0 1.666-1.531Zm28.06 23.049v-3.511h-1.772v-.987H38.05v.987h-1.771v3.51h4.806Zm-1.263-2.248h-2.28v.985h2.28v-.985Zm-17.707-2.774v3.561h-4.806v-3.561h1.772v-.988h1.263v.988h1.771Zm-3.543 1.263h2.28v1.035h-2.28v-1.035Z"
      />
      <path
        fillRule="evenodd"
        d="M29.306 25.79a11.347 11.347 0 0 0-4.166 3.295 11.353 11.353 0 0 0-5.53-5.15l-.351-.153-.337.182a8.763 8.763 0 0 1-4.168 1.049 8.76 8.76 0 0 1-3.86-.891l-.344-.168-.345.166a11.31 11.31 0 0 0-6.403 10.192v6.937l41.547.001v-5.188c0-4.619-2.77-8.59-6.736-10.345l-.346-.154-.337.175a8.722 8.722 0 0 1-4.031.982c-1.404 0-2.73-.33-3.91-.92l-.34-.17-.343.16ZM43.77 36.062a9.73 9.73 0 0 0-5.416-8.723l-4.493 5.154-4.475-4.977a9.781 9.781 0 0 0-3.526 3.276c.362 1.108.558 2.291.558 3.52v5.36H43.77v-3.61Zm-9.924-5.474-2.3-2.559a10.359 10.359 0 0 0 4.489.048l-2.189 2.51Zm-9.61.407a9.709 9.709 0 0 1 .604 3.382v5.293H5.38v-5.358a9.727 9.727 0 0 1 5.078-8.547l4.424 4.767 4.6-4.914a9.766 9.766 0 0 1 4.634 5.006l-.01.02.13.351Zm-11.464-4.593 2.114 2.278 2.203-2.353a10.39 10.39 0 0 1-4.317.075Z"
      />
    </>
  );

  return getIcon({ size, isHovered, normal, normalHover, xSmall, xSmallHover });
};

export default HealthcarePersonell;
