import styles from './styles.module.scss';

const normalStroke = 'var(--color-action-graphics-onlight)';
const normalFill = 'transparent';
const hoverFill = 'var(--color-action-graphics-onlight-hover)';
const hoverStroke = 'var(--color-action-graphics-onlight-hover)';
const activeStroke = 'var(--core-color-blueberry-800)';

const fillColor = (isChecked: boolean, isActive: boolean, isHovered: boolean): string => {
  if (isChecked) {
    if (isActive) {
      return activeStroke;
    } else {
      if (isHovered) {
        return hoverStroke;
      } else {
        return normalStroke;
      }
    }
  } else {
    if (isHovered) {
      return hoverFill;
    } else {
      return normalFill;
    }
  }
};

const strokeColor = (isActive: boolean, isHovered: boolean): string => {
  if (isActive) {
    return activeStroke;
  } else {
    if (isHovered) {
      return hoverStroke;
    } else {
      return normalStroke;
    }
  }
};

export const starIconNormalMobile = (isChecked: boolean, isActive: boolean): React.JSX.Element => {
  return (
    <>
      <path
        d="M20.1026 31.1787L13.4007 34.7023C10.833 36.0523 7.83185 33.8719 8.32233 31.0126L9.60261 23.5492L4.17653 18.2675C2.09656 16.2428 3.24317 12.712 6.11581 12.2956L13.5982 11.2112L16.9493 4.42107C18.2332 1.81969 21.9426 1.81969 23.2265 4.42107L26.5776 11.2112L34.06 12.2956C36.9326 12.712 38.0792 16.2428 35.9993 18.2675L30.5732 23.5492L31.852 31.0044C32.3428 33.8651 29.3386 36.0456 26.7708 34.6925L20.1026 31.1787Z"
        stroke="black"
        fill="transparent"
        strokeWidth="3"
        strokeLinecap="round"
        className={styles['favoritebutton__star-icon--focus']}
        display="block"
      />
      <path
        d="M20.0961 26.5515L12.6372 30.4731L14.0621 22.1671L8.01953 16.2853L16.3582 15.0768L20.0877 7.52002L23.8171 15.0768L32.1558 16.2853L26.1133 22.1671L27.5381 30.4731L20.0961 26.5515Z"
        stroke={strokeColor(isActive, false)}
        fill={fillColor(isChecked, isActive, false)}
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  );
};

export const starIconHoverMobile = (isChecked: boolean, isActive: boolean): React.JSX.Element => (
  <>
    <path
      d="M22.2128 31.4832L16.2246 36.117C13.9303 37.8924 10.5961 36.2662 10.5826 33.3653L10.5475 25.7929L4.28665 21.5336C1.88672 19.9009 2.40278 16.2246 5.15948 15.3158L12.3399 12.9486L14.461 5.67964C15.2736 2.89484 18.9267 2.2507 20.6428 4.58962L25.1221 10.6947L32.6791 10.4633C35.5804 10.3745 37.3227 13.6526 35.6259 16.0077L31.1994 22.1514L33.7534 29.2712C34.7335 32.0033 32.1536 34.6724 29.3898 33.7857L22.2128 31.4832Z"
      stroke="black"
      fill="transparent"
      strokeWidth="3"
      strokeLinecap="round"
      className={styles['favoritebutton__star-icon--focus']}
    />
    <path
      d="M21.4079 26.8365L14.7433 31.9937L14.7041 23.5664L7.73204 18.8233L15.7342 16.1851L18.0947 8.09555L23.0798 14.8899L31.5016 14.6321L26.5722 21.4738L29.4178 29.4062L21.4079 26.8365Z"
      stroke={strokeColor(isActive, true)}
      fill={fillColor(isChecked, isActive, true)}
      fillOpacity={isChecked ? '1' : '0.13'}
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </>
);
export const starIconNormalDesktop = (isChecked: boolean, isActive: boolean): React.JSX.Element => (
  <>
    <path
      d="M30.1061 44.1854L20.3139 49.3338C17.7461 50.6838 14.745 48.5034 15.2355 45.6441L17.1061 34.7394L9.17653 27.0207C7.09656 24.9961 8.24318 21.4653 11.1158 21.0489L22.053 19.4638L26.9493 9.54278C28.2331 6.9414 31.9426 6.94139 33.2265 9.54278L38.1227 19.4638L49.06 21.0489C51.9326 21.4653 53.0792 24.9961 50.9993 27.0207L43.0697 34.7394L44.9389 45.6359C45.4296 48.4966 42.4254 50.6772 39.8576 49.324L30.1061 44.1854Z"
      stroke="black"
      fill="transparent"
      strokeWidth="3"
      strokeLinecap="round"
      className={styles['favoritebutton__star-icon--focus']}
    />
    <path
      d="M30.0998 39.4723L19.5927 44.9966L21.5998 33.2961L13.0879 25.0106L24.8343 23.3082L30.0879 12.6632L35.3414 23.3082L47.0879 25.0106L38.576 33.2961L40.5831 44.9966L30.0998 39.4723Z"
      stroke={strokeColor(isActive, false)}
      fill={fillColor(isChecked, isActive, false)}
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </>
);

export const starIconHoverDesktop = (isChecked: boolean, isActive: boolean): React.JSX.Element => (
  <>
    <path
      d="M33.1609 44.7458L24.4114 51.5164C22.1171 53.2918 18.783 51.6656 18.7695 48.7646L18.7181 37.7007L9.56864 31.4763C7.1687 29.8436 7.68476 26.1672 10.4415 25.2584L20.9373 21.7982L24.0364 11.1776C24.849 8.39281 28.5021 7.74867 30.2182 10.0876L36.7629 19.0077L47.8092 18.6695C50.7105 18.5807 52.4528 21.8588 50.756 24.2138L44.2872 33.1922L48.0201 43.5985C49.0002 46.3306 46.4203 48.9997 43.6565 48.113L33.1609 44.7458Z"
      stroke="black"
      fill="transparent"
      strokeWidth="3"
      strokeLinecap="round"
      className={styles['favoritebutton__star-icon--focus']}
    />
    <path
      d="M32.3991 40.1029L23.0108 47.3678L22.9557 35.4965L13.1343 28.815L24.4067 25.0987L27.732 13.7031L34.7542 23.2741L46.6178 22.9109L39.674 32.5486L43.6823 43.7228L32.3991 40.1029Z"
      stroke={strokeColor(isActive, true)}
      fill={fillColor(isChecked, isActive, true)}
      fillOpacity={isChecked ? '1' : '0.13'}
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </>
);
