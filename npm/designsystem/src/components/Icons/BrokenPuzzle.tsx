import React from 'react';
import {SvgPathProps} from './Icon';

const BrokenPuzzle: React.FC<SvgPathProps> = ({isExtraSmall, isHovered}: SvgPathProps): JSX.Element => {
  const normal = (
    <path d="M35.758 24.81a3.682 3.682 0 002.919 2.831 3.697 3.697 0 002.61-.482c.283-.174.654-.266 1.073-.266v3.228a.658.658 0 01-.656.657h-6.461v1.444c0 .658.159 1.264.459 1.752.313.508.42 1.094.31 1.694a2.367 2.367 0 01-1.82 1.882 2.386 2.386 0 01-2.031-.477 2.38 2.38 0 01-.547-3.076c.314-.523.473-1.149.473-1.86v-1.359H25.78a.657.657 0 01-.656-.657v-3.227c.437.011.809.107 1.108.287.57.342 1.223.523 1.889.523a3.66 3.66 0 002.027-.63l1.497 1.295.85-.982-1.403-1.215a3.7 3.7 0 00.634-2.95 3.507 3.507 0 00-.211-.648l.624-2.698 3.325.562-.382-4.864-1.296.102.25 3.202-2.888-.487-.65 2.811a3.645 3.645 0 00-1.693-.813 3.707 3.707 0 00-2.61.482c-.281.174-.652.266-1.07.266l-.001-8.05H42.36v8.05c-.437-.012-.81-.108-1.108-.287a3.666 3.666 0 00-1.89-.523 3.674 3.674 0 00-2.865 1.365 3.711 3.711 0 00-.74 3.117M24.84 32.962a.651.651 0 01-.422.273l-4.843.895c-.067-.427-.04-.82.08-1.142a3.676 3.676 0 00-1.691-4.522 3.708 3.708 0 00-3.2-.162 3.683 3.683 0 00-1.307 5.865c.223.246.38.594.456 1.005v.001l-5.036.93-3.13-16.949 5.035-.93c.068.427.04.82-.08 1.142a3.68 3.68 0 001.692 4.523 3.713 3.713 0 003.199.161 3.68 3.68 0 002.255-3.385 3.701 3.701 0 00-.947-2.48c-.223-.247-.381-.594-.456-1.005l4.843-.896c.355-.067.699.17.786.608l1.75 5.421v.122h1.302c.659 0 1.265-.159 1.753-.459a2.364 2.364 0 011.694-.31c.933.17 1.689.902 1.882 1.821a2.38 2.38 0 01-.477 2.03c-.728.896-2.09 1.14-3.076.547-.522-.314-1.148-.472-1.861-.472h-1.216v4.527c0 .73.406 1.36.999 1.696l.12.654a.653.653 0 01-.104.491m15.744-10.998c.522.314 1.148.473 1.86.473h1.216v-10.65H23.825v6.312l-.494-1.523a1.96 1.96 0 00-2.28-1.568L14.93 16.14l.236 1.28c.119.646.385 1.214.769 1.64.4.442.612 1 .614 1.61a2.371 2.371 0 01-1.45 2.181 2.386 2.386 0 01-2.083-.1 2.383 2.383 0 01-1.096-2.927c.213-.57.256-1.215.127-1.915l-.221-1.197-7.593 1.403L7.835 37.62l7.593-1.403-.236-1.28c-.12-.648-.386-1.214-.77-1.639a2.38 2.38 0 01-.613-1.61 2.37 2.37 0 011.449-2.182 2.386 2.386 0 012.083.101 2.384 2.384 0 011.097 2.926c-.214.571-.256 1.215-.127 1.915l.22 1.196 6.123-1.13a1.95 1.95 0 001.257-.815c.296-.43.407-.95.312-1.465l-.03-.156h4.594v.058c0 .473-.097.874-.287 1.192a3.674 3.674 0 00.842 4.754 3.678 3.678 0 002.329.823c.26 0 .525-.027.788-.082a3.683 3.683 0 002.832-2.92 3.7 3.7 0 00-.482-2.61c-.174-.283-.266-.653-.266-1.07v-.145h5.16a1.958 1.958 0 001.957-1.957v-4.527h-1.3c-.66 0-1.265.158-1.753.458a2.362 2.362 0 01-1.696.311 2.371 2.371 0 01-1.881-1.822 2.382 2.382 0 01.477-2.029c.728-.897 2.09-1.139 3.077-.548" />
  );

  const normalHover = (
    <path d="M35.758 24.81a3.682 3.682 0 002.918 2.831 3.698 3.698 0 002.612-.482c.282-.174.653-.266 1.07-.266l.003 3.228a.658.658 0 01-.657.657h-6.461v1.444c0 .658.159 1.264.459 1.752.312.508.42 1.094.31 1.694a2.367 2.367 0 01-1.821 1.882 2.385 2.385 0 01-2.03-.477 2.38 2.38 0 01-.547-3.076c.314-.523.473-1.149.473-1.86v-1.359H25.78a.657.657 0 01-.656-.657v-3.227c.437.011.809.107 1.108.287.57.342 1.223.523 1.889.523a3.66 3.66 0 002.027-.63l1.496 1.295.85-.982-1.402-1.215a3.7 3.7 0 00.634-2.95 3.436 3.436 0 00-.212-.648l.625-2.698 3.325.562-.327-4.163h2.056v-1.3h-3.462l.306 3.903-2.89-.487-.65 2.811a3.637 3.637 0 00-1.692-.813 3.712 3.712 0 00-2.61.482c-.282.174-.652.266-1.07.266l-.001-8.05H42.36v8.05c-.437-.012-.81-.108-1.108-.287a3.668 3.668 0 00-1.89-.523 3.673 3.673 0 00-2.865 1.365 3.708 3.708 0 00-.74 3.117zm-12.002 7.363a.652.652 0 01-.61.699l-4.913.338c-.018-.432.053-.819.21-1.125a3.67 3.67 0 00.392-1.92 3.676 3.676 0 00-1.558-2.766 3.711 3.711 0 00-3.161-.525 3.683 3.683 0 00-1.966 5.678c.193.271.31.633.339 1.05v.002l-5.11.351L6.198 16.76l5.109-.35c.019.436-.051.814-.21 1.124a3.661 3.661 0 00-.392 1.921 3.674 3.674 0 001.559 2.765 3.713 3.713 0 003.16.525 3.682 3.682 0 002.625-3.106 3.697 3.697 0 00-.66-2.573c-.192-.27-.31-.633-.338-1.05l4.915-.339c.362-.022.675.25.71.694l1.144 5.685h.004v.381h1.302c.659 0 1.265-.159 1.752-.459a2.379 2.379 0 011.695-.31c.932.17 1.688.902 1.882 1.821a2.38 2.38 0 01-.477 2.03c-.728.896-2.09 1.14-3.076.547-.523-.314-1.15-.472-1.861-.472h-1.217v3.134h-.017l-.051 3.445zm16.827-10.209c.523.314 1.149.473 1.86.473h1.217v-10.65H23.824v3.838a1.96 1.96 0 00-1.947-1.245l-6.212.427.089 1.298c.046.658.245 1.251.578 1.716a2.38 2.38 0 01.426 1.672 2.37 2.37 0 01-1.688 2.001 2.384 2.384 0 01-2.058-.337 2.381 2.381 0 01-.756-3.032c.276-.543.392-1.178.343-1.889l-.083-1.213-7.703.53L6.17 35.34l7.704-.529-.09-1.298c-.045-.658-.244-1.25-.577-1.717a2.378 2.378 0 01-.426-1.67 2.372 2.372 0 011.688-2.002 2.385 2.385 0 012.059.337 2.386 2.386 0 01.756 3.032c-.277.543-.393 1.178-.344 1.888l.083 1.214 6.212-.427a1.938 1.938 0 001.34-.666c.344-.394.513-.898.479-1.365l.003-.203c.224.09.467.143.723.143h5.006v.058c0 .473-.097.874-.288 1.192a3.674 3.674 0 00-.523 1.89c0 1.116.498 2.16 1.366 2.864a3.677 3.677 0 002.328.823c.262 0 .526-.027.789-.082a3.683 3.683 0 002.832-2.92 3.705 3.705 0 00-.482-2.61c-.174-.283-.266-.653-.266-1.07v-.145h5.16a1.958 1.958 0 001.957-1.957v-4.527h-1.301c-.66 0-1.264.158-1.752.458a2.38 2.38 0 01-1.697.311 2.371 2.371 0 01-1.88-1.822 2.385 2.385 0 01.477-2.03c.728-.896 2.089-1.139 3.076-.547z" />
  );

  return isHovered ? normalHover : normal;
};

export default BrokenPuzzle;