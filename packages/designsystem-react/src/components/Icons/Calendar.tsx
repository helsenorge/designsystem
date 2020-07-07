import React from 'react';
import {IconRawProps} from './Icon';

const Calendar = React.forwardRef((svgProps: IconRawProps, ref: any) => {
  const {size = 48, className, color = 'black', hoverColor = 'black', isHovered = false, ...props} = svgProps;
  const isExtraSmall = size <= 38;
  const normal = (
    <path
      fillRule="evenodd"
      d="M32.8604,22.9863 C33.4024,22.9863 33.8434,23.4273 33.8434,23.9693 C33.8434,24.5123 33.4024,24.9533 32.8604,24.9533 C32.3184,24.9533 31.8774,24.5123 31.8774,23.9693 C31.8774,23.4273 32.3184,22.9863 32.8604,22.9863 L32.8604,22.9863 Z M32.8604,26.0163 C33.9884,26.0163 34.9064,25.0983 34.9064,23.9693 C34.9064,22.8413 33.9884,21.9233 32.8604,21.9233 C31.7324,21.9233 30.8144,22.8413 30.8144,23.9693 C30.8144,25.0983 31.7324,26.0163 32.8604,26.0163 L32.8604,26.0163 Z M39.0704,18.1523 L8.6794,18.1523 L8.6794,11.9583 L12.5264,11.9583 L12.5264,13.1193 C12.5264,14.3553 13.5314,15.3603 14.7674,15.3603 C16.0034,15.3603 17.0084,14.3553 17.0084,13.1193 L17.0084,11.9583 L30.6194,11.9583 L30.6194,13.1193 C30.6194,14.3553 31.6254,15.3603 32.8604,15.3603 C34.0964,15.3603 35.1014,14.3553 35.1014,13.1193 L35.1014,11.9583 L39.0704,11.9583 L39.0704,18.1523 Z M8.6784,35.9813 L39.0704,35.9813 L39.0704,19.4513 L8.6784,19.4513 L8.6784,35.9813 Z M13.8264,9.7093 C13.8264,9.1913 14.2484,8.7683 14.7674,8.7683 C15.2864,8.7683 15.7084,9.1913 15.7084,9.7093 L15.7084,13.1193 C15.7084,13.6383 15.2864,14.0603 14.7674,14.0603 C14.2484,14.0603 13.8264,13.6383 13.8264,13.1193 L13.8264,9.7093 Z M31.9194,9.7093 C31.9194,9.1913 32.3414,8.7683 32.8604,8.7683 C33.3794,8.7683 33.8014,9.1913 33.8014,9.7093 L33.8014,13.1193 C33.8014,13.6383 33.3794,14.0603 32.8604,14.0603 C32.3414,14.0603 31.9194,13.6383 31.9194,13.1193 L31.9194,9.7093 Z M35.1014,10.6583 L35.1014,9.7093 C35.1014,8.4733 34.0964,7.4683 32.8604,7.4683 C31.6254,7.4683 30.6194,8.4733 30.6194,9.7093 L30.6194,10.6583 L17.0084,10.6583 L17.0084,9.7093 C17.0084,8.4733 16.0034,7.4683 14.7674,7.4683 C13.5314,7.4683 12.5264,8.4733 12.5264,9.7093 L12.5264,10.6583 L7.3794,10.6583 L7.3794,37.2813 L40.3714,37.2813 L40.3714,10.6583 L35.1014,10.6583 Z M26.9444,26.8263 C27.4874,26.8263 27.9284,27.2673 27.9284,27.8093 C27.9284,28.3523 27.4874,28.7933 26.9444,28.7933 C26.4024,28.7933 25.9614,28.3523 25.9614,27.8093 C25.9614,27.2673 26.4024,26.8263 26.9444,26.8263 L26.9444,26.8263 Z M26.9444,29.8563 C28.0734,29.8563 28.9914,28.9383 28.9914,27.8093 C28.9914,26.6813 28.0734,25.7633 26.9444,25.7633 C25.8164,25.7633 24.8984,26.6813 24.8984,27.8093 C24.8984,28.9383 25.8164,29.8563 26.9444,29.8563 L26.9444,29.8563 Z"
    />
  );

  const normalHover = (
    <path
      fillRule="evenodd"
      d="M33.8434,23.9693 C33.8434,24.5123 33.4024,24.9533 32.8604,24.9533 C32.3184,24.9533 31.8774,24.5123 31.8774,23.9693 C31.8774,23.4273 32.3184,22.9863 32.8604,22.9863 C33.4024,22.9863 33.8434,23.4273 33.8434,23.9693 Z M34.9064,23.9693 C34.9064,22.8413 33.9884,21.9233 32.8604,21.9233 C31.7324,21.9233 30.8144,22.8413 30.8144,23.9693 C30.8144,25.0983 31.7324,26.0163 32.8604,26.0163 C33.9884,26.0163 34.9064,25.0983 34.9064,23.9693 Z M39.0704,18.1523 L8.6794,18.1523 L8.6794,11.9583 L12.5264,11.9583 L12.5264,13.1193 C12.5264,14.3553 13.5314,15.3603 14.7674,15.3603 C16.0034,15.3603 17.0084,14.3553 17.0084,13.1193 L17.0084,11.9583 L30.6194,11.9583 L30.6194,13.1193 C30.6194,14.3553 31.6254,15.3603 32.8604,15.3603 C34.0964,15.3603 35.1014,14.3553 35.1014,13.1193 L35.1014,11.9583 L39.0704,11.9583 L39.0704,18.1523 Z M8.6784,35.9813 L39.0704,35.9813 L39.0704,19.4513 L8.6784,19.4513 L8.6784,35.9813 Z M13.8264,9.7093 C13.8264,9.1913 14.2484,8.7683 14.7674,8.7683 C15.2864,8.7683 15.7084,9.1913 15.7084,9.7093 L15.7084,13.1193 C15.7084,13.6383 15.2864,14.0603 14.7674,14.0603 C14.2484,14.0603 13.8264,13.6383 13.8264,13.1193 L13.8264,9.7093 Z M31.9194,9.7093 C31.9194,9.1913 32.3414,8.7683 32.8604,8.7683 C33.3794,8.7683 33.8014,9.1913 33.8014,9.7093 L33.8014,13.1193 C33.8014,13.6383 33.3794,14.0603 32.8604,14.0603 C32.3414,14.0603 31.9194,13.6383 31.9194,13.1193 L31.9194,9.7093 Z M35.1014,10.6583 L35.1014,9.7093 C35.1014,8.4733 34.0964,7.4683 32.8604,7.4683 C31.6254,7.4683 30.6194,8.4733 30.6194,9.7093 L30.6194,10.6583 L17.0084,10.6583 L17.0084,9.7093 C17.0084,8.4733 16.0034,7.4683 14.7674,7.4683 C13.5314,7.4683 12.5264,8.4733 12.5264,9.7093 L12.5264,10.6583 L7.3794,10.6583 L7.3794,37.2813 L40.3714,37.2813 L40.3714,10.6583 L35.1014,10.6583 Z M23.9284,27.8093 C23.9284,28.3523 23.4874,28.7933 22.9444,28.7933 C22.4024,28.7933 21.9614,28.3523 21.9614,27.8093 C21.9614,27.2673 22.4024,26.8263 22.9444,26.8263 C23.4874,26.8263 23.9284,27.2673 23.9284,27.8093 Z M24.9914,27.8093 C24.9914,26.6813 24.0734,25.7633 22.9444,25.7633 C21.8164,25.7633 20.8984,26.6813 20.8984,27.8093 C20.8984,28.9383 21.8164,29.8563 22.9444,29.8563 C24.0734,29.8563 24.9914,28.9383 24.9914,27.8093 Z"
    />
  );

  const simplified = (
    <path
      fillRule="evenodd"
      d="M38.8874526,16.7096842 L8.59945263,16.7096842 L8.59945263,10.5126316 L12.4609263,10.5126316 L12.4609263,11.6835789 C12.4609263,12.9063158 13.4550316,13.8991579 14.6765053,13.8991579 C15.8979789,13.8991579 16.8920842,12.9063158 16.8920842,11.6835789 L16.8920842,10.5126316 L30.4735579,10.5126316 L30.4735579,11.6835789 C30.4735579,12.9063158 31.4676632,13.8991579 32.6891368,13.8991579 C33.9106105,13.8991579 34.9047158,12.9063158 34.9047158,11.6835789 L34.9047158,10.5126316 L38.8874526,10.5126316 L38.8874526,16.7096842 Z M8.59945263,34.4608421 L38.8874526,34.4608421 L38.8874526,17.9728421 L8.59945263,17.9728421 L8.59945263,34.4608421 Z M13.7240842,8.28947368 C13.7240842,7.764 14.1510316,7.33705263 14.6765053,7.33705263 C15.2019789,7.33705263 15.6289263,7.764 15.6289263,8.28947368 L15.6289263,11.6835789 C15.6289263,12.2090526 15.2019789,12.636 14.6765053,12.636 C14.1510316,12.636 13.7240842,12.2090526 13.7240842,11.6835789 L13.7240842,8.28947368 Z M31.7367158,8.28947368 C31.7367158,7.764 32.1636632,7.33705263 32.6891368,7.33705263 C33.2146105,7.33705263 33.6415579,7.764 33.6415579,8.28947368 L33.6415579,11.6835789 C33.6415579,12.2090526 33.2146105,12.636 32.6891368,12.636 C32.1636632,12.636 31.7367158,12.2090526 31.7367158,11.6835789 L31.7367158,8.28947368 Z M34.9047158,9.24947368 L34.9047158,8.28947368 C34.9047158,7.068 33.9106105,6.07389474 32.6891368,6.07389474 C31.4676632,6.07389474 30.4735579,7.068 30.4735579,8.28947368 L30.4735579,9.24947368 L16.8920842,9.24947368 L16.8920842,8.28947368 C16.8920842,7.068 15.8979789,6.07389474 14.6765053,6.07389474 C13.4550316,6.07389474 12.4609263,7.068 12.4609263,8.28947368 L12.4609263,9.24947368 L7.33629474,9.24947368 L7.33629474,35.724 L40.1506105,35.724 L40.1506105,9.24947368 L34.9047158,9.24947368 Z M27.6706105,28.2928421 C28.5030316,28.2928421 29.1788211,27.6183158 29.1788211,26.7846316 C29.1788211,25.9522105 28.5030316,25.2764211 27.6706105,25.2764211 C26.8369263,25.2764211 26.1624,25.9522105 26.1624,26.7846316 C26.1624,27.6183158 26.8369263,28.2928421 27.6706105,28.2928421 L27.6706105,28.2928421 Z"
    />
  );

  const simplifiedHover = (
    <path
      fillRule="evenodd"
      d="M38.8878316,16.7096842 L8.59856842,16.7096842 L8.59856842,10.5126316 L12.4600421,10.5126316 L12.4600421,11.6835789 C12.4600421,12.9063158 13.4541474,13.8991579 14.6768842,13.8991579 C15.8983579,13.8991579 16.8912,12.9063158 16.8912,11.6835789 L16.8912,10.5126316 L30.4739368,10.5126316 L30.4739368,11.6835789 C30.4739368,12.9063158 31.4667789,13.8991579 32.6895158,13.8991579 C33.9109895,13.8991579 34.9050947,12.9063158 34.9050947,11.6835789 L34.9050947,10.5126316 L38.8878316,10.5126316 L38.8878316,16.7096842 Z M8.59856842,34.4608421 L38.8878316,34.4608421 L38.8878316,17.9728421 L8.59856842,17.9728421 L8.59856842,34.4608421 Z M13.7232,8.28947368 C13.7232,7.764 14.1514105,7.33705263 14.6768842,7.33705263 C15.2010947,7.33705263 15.6280421,7.764 15.6280421,8.28947368 L15.6280421,11.6835789 C15.6280421,12.2090526 15.2010947,12.636 14.6768842,12.636 C14.1514105,12.636 13.7232,12.2090526 13.7232,11.6835789 L13.7232,8.28947368 Z M31.7370947,8.28947368 C31.7370947,7.764 32.1640421,7.33705263 32.6895158,7.33705263 C33.2149895,7.33705263 33.6419368,7.764 33.6419368,8.28947368 L33.6419368,11.6835789 C33.6419368,12.2090526 33.2149895,12.636 32.6895158,12.636 C32.1640421,12.636 31.7370947,12.2090526 31.7370947,11.6835789 L31.7370947,8.28947368 Z M34.9050947,9.24947368 L34.9050947,8.28947368 C34.9050947,7.068 33.9109895,6.07389474 32.6895158,6.07389474 C31.4667789,6.07389474 30.4739368,7.068 30.4739368,8.28947368 L30.4739368,9.24947368 L16.8912,9.24947368 L16.8912,8.28947368 C16.8912,7.068 15.8983579,6.07389474 14.6768842,6.07389474 C13.4541474,6.07389474 12.4600421,7.068 12.4600421,8.28947368 L12.4600421,9.24947368 L7.33541053,9.24947368 L7.33541053,35.724 L40.1509895,35.724 L40.1509895,9.24947368 L34.9050947,9.24947368 Z M27.6709895,28.2928421 C28.5034105,28.2928421 29.1779368,27.6183158 29.1779368,26.7846316 C29.1779368,25.9522105 28.5034105,25.2764211 27.6709895,25.2764211 C26.8373053,25.2764211 26.1615158,25.9522105 26.1615158,26.7846316 C26.1615158,27.6183158 26.8373053,28.2928421 27.6709895,28.2928421 L27.6709895,28.2928421 Z M32.6895158,23.9955789 C33.5219368,23.9955789 34.1977263,23.3197895 34.1977263,22.4873684 C34.1977263,21.6536842 33.5219368,20.9778947 32.6895158,20.9778947 C31.8558316,20.9778947 31.1813053,21.6536842 31.1813053,22.4873684 C31.1813053,23.3197895 31.8558316,23.9955789 32.6895158,23.9955789 L32.6895158,23.9955789 Z"
    />
  );

  return (
    <svg
      width={size}
      height={size}
      fill={isHovered ? hoverColor : color}
      viewBox="0 0 48 48"
      ref={ref}
      className={`hnds-style-icon ${className}`}
      {...props}>
      {isExtraSmall ? (isHovered ? simplifiedHover : simplified) : isHovered ? normalHover : normal}
    </svg>
  );
});

export default Calendar;
