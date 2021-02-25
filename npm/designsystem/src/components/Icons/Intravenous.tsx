import React from 'react';
import { SvgPathProps } from './Icon';

const Intravenous: React.FC<SvgPathProps> = ({ isExtraSmall, isHovered }: SvgPathProps): JSX.Element => {
  const normal = (
    <path
      fillRule={'evenodd'}
      d="M33.085 22.607h2.064v-1.11h-2.064v1.11zm-4.927-4.713v-1.208h1.947v-1.301h-1.947v-1.492h11.918v4.001a2.304 2.304 0 01-2.302 2.302h-7.313a2.305 2.305 0 01-2.303-2.302zm2.303-13.769h7.313a2.306 2.306 0 012.302 2.303v6.164H28.158v-1.627h1.947v-1.3h-1.947V8.039h1.947V6.738h-1.947v-.31a2.306 2.306 0 012.303-2.303zm-1.843 34.96a1.845 1.845 0 01-3.391-.4l-.462-1.638 3.56-1.004.462 1.639c.133.472.073.971-.169 1.403zM23.1 29.14a1.846 1.846 0 013.391.401l.352 1.25-3.559 1.003-.353-1.251a1.837 1.837 0 01.169-1.403zm4.953 5.941l-3.559 1.003-.938-3.327 3.559-1.004.938 3.328zm4.58 4.091c-.205-.021-.4.094-.524.259a16.1 16.1 0 00-.39.552c-.923 1.343-2.469 3.59-5.134 3.59H16.112c-.086-.465-.124-1.134.143-1.624.172-.318.458-.538.871-.672l5.393-.013a.65.65 0 000-1.301l-5.378-.016c-.052.041-.106.007-.158.019l-.042.011-7.586.018h-.006c-.688 0-1.25-.563-1.254-1.256a1.26 1.26 0 011.24-1.268l9.167-.038-.006-1.301-1.36.006v-.006l-7.799.036-.018.002-2.64.011c-.708.041-1.257-.639-1.26-1.433a1.535 1.535 0 01.383-1.043c.233-.259.54-.403.863-.404l11.837-.047-.006-1.3-1.913.007v-.007l-7.266.034h-.006a1.26 1.26 0 01-1.253-1.257 1.264 1.264 0 01.364-.897 1.24 1.24 0 01.883-.372l9.197-.043-.006-1.3-6.271.029h-.006a1.25 1.25 0 01-1.253-1.238 1.246 1.246 0 011.248-1.25l11.957-.057.095-.001c3.319 0 5.439.826 6.669 2.596.121.175.32.279.533.279l1.999-.001v1.708a2.463 2.463 0 01-2.46 2.46h-2.29l-.975-3.457a3.153 3.153 0 00-3.885-2.176 3.133 3.133 0 00-1.891 1.494 3.13 3.13 0 00-.286 2.392l2.296 8.142a3.156 3.156 0 003.886 2.175 3.124 3.124 0 001.89-1.494 3.123 3.123 0 00.286-2.391l-.954-3.384h1.923a3.765 3.765 0 003.76-3.761v-1.708l6.934-.003v-1.301l-6.934.003v-3.267h1.032a.65.65 0 00.65-.651v-1.76h1.325a3.607 3.607 0 003.602-3.603V6.428a3.607 3.607 0 00-3.602-3.603h-7.313a3.607 3.607 0 00-3.603 3.603v11.466a3.607 3.607 0 003.603 3.603h1.324v1.76c0 .36.291.651.65.651h1.032v3.268h-1.67c-2.006-2.591-5.302-2.844-7.632-2.874l-11.958.057a2.543 2.543 0 00-1.801.753 2.527 2.527 0 00-.74 1.804c.002.454.134.874.345 1.243l-.712.003a2.555 2.555 0 00-2.541 2.575c.002.462.136.888.351 1.262l-.45.001c-.694.004-1.341.3-1.822.833a2.832 2.832 0 00-.718 1.92c.007 1.507 1.152 2.729 2.554 2.729h.012l.45-.002a2.542 2.542 0 00-.339 1.265c.006 1.413 1.123 2.577 2.563 2.55l5.779-.013a.897.897 0 00-.029.053c-.722 1.337-.139 3.033-.114 3.104.092.26.337.435.613.435h10.977c3.349 0 5.207-2.703 6.205-4.155l.168-.243 8.731.082.012-1.301-9.068-.085z"
    />
  );

  const normalHover = (
    <path
      fillRule={'evenodd'}
      d="M33.085 22.607h2.063v-1.11h-2.063v1.11zm-4.927-4.713v-1.208h11.918v1.208a2.305 2.305 0 01-2.303 2.302h-7.312a2.305 2.305 0 01-2.303-2.302zm2.303-13.769h7.312a2.306 2.306 0 012.303 2.303v8.957H28.158v-1.492h1.947v-1.301h-1.947v-1.627h1.947v-1.3h-1.947V8.039h1.947V6.738h-1.947v-.31a2.306 2.306 0 012.303-2.303zm-1.843 34.96a1.845 1.845 0 01-3.391-.4l-.462-1.638 3.559-1.004.463 1.639c.133.472.073.971-.169 1.403zM23.1 29.14a1.834 1.834 0 011.109-.877 1.834 1.834 0 011.404.168c.433.242.744.637.878 1.11l.352 1.25-3.559 1.003-.353-1.251a1.837 1.837 0 01.169-1.403zm4.953 5.941l-3.559 1.003-.939-3.327 3.559-1.004.939 3.328zm4.58 4.091c-.206-.021-.4.094-.524.259-.114.151-.243.338-.391.552-.922 1.343-2.468 3.59-5.133 3.59H16.112c-.086-.465-.124-1.134.143-1.624.172-.318.458-.538.87-.672l5.394-.013a.65.65 0 000-1.301l-5.378-.016c-.049.041-.107.007-.158.019l-.042.011-7.586.018h-.006a1.26 1.26 0 01-1.254-1.256 1.26 1.26 0 011.24-1.268l9.166-.038-.005-1.301-1.36.006v-.006l-7.8.036-.017.002-2.641.011c-.7.041-1.256-.639-1.259-1.433a1.54 1.54 0 01.382-1.043c.234-.259.54-.403.864-.404l11.836-.047-.005-1.3-1.913.007v-.007l-7.266.034h-.006a1.26 1.26 0 01-1.253-1.257 1.26 1.26 0 011.247-1.269l9.197-.043-.006-1.3-6.271.029h-.006c-.688 0-1.25-.554-1.254-1.238a1.232 1.232 0 01.363-.881c.235-.237.55-.368.885-.369l11.958-.057.095-.001c3.318 0 5.439.826 6.668 2.596a.65.65 0 00.534.279l1.999-.001v1.708a2.463 2.463 0 01-2.46 2.46h-2.29l-.975-3.457a3.127 3.127 0 00-1.494-1.89 3.138 3.138 0 00-4.282 1.208 3.125 3.125 0 00-.286 2.392l2.296 8.142a3.156 3.156 0 003.885 2.175 3.123 3.123 0 001.891-1.494 3.127 3.127 0 00.286-2.391l-.954-3.384h1.923a3.765 3.765 0 003.76-3.761v-1.708l6.934-.003-.001-1.301-6.933.003v-3.267h1.031a.65.65 0 00.651-.651v-1.76h1.324a3.608 3.608 0 003.603-3.603V6.428a3.608 3.608 0 00-3.603-3.603h-7.312a3.607 3.607 0 00-3.603 3.603v11.466a3.607 3.607 0 003.603 3.603h1.324v1.76c0 .36.291.651.65.651h1.032v3.268h-1.67c-2.006-2.591-5.299-2.844-7.632-2.874l-11.958.057a2.543 2.543 0 00-1.801.753 2.506 2.506 0 00-.395 3.047l-.712.003a2.56 2.56 0 00-2.542 2.575c.003.462.137.888.352 1.262l-.45.001c-.694.004-1.341.3-1.822.833a2.838 2.838 0 00-.719 1.92c.008 1.507 1.153 2.729 2.555 2.729h.011l.451-.002a2.532 2.532 0 00-.339 1.265 2.559 2.559 0 002.551 2.55h.012l5.779-.013-.03.053c-.721 1.337-.139 3.033-.113 3.104a.65.65 0 00.613.435h10.977c3.349 0 5.207-2.703 6.205-4.155l.168-.243 8.731.082.012-1.301-9.068-.085z"
    />
  );

  return isHovered ? normalHover : normal;
};

export default Intravenous;