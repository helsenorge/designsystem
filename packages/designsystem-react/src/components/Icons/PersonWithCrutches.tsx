import React from 'react';
import {IconRawProps} from './Icon';

const PersonWithCrutches = React.forwardRef((svgProps: IconRawProps, ref: any) => {
  const {size = 48, className, color = 'black', hoverColor = 'black', isHovered = false, ...props} = svgProps;
  const isExtraSmall = size <= 38;
  const normal = (
    <path
      fillRule="evenodd"
      d="M23.8774 28.8503C23.5224 28.9743 23.1474 28.9453 22.8154 28.7703 22.4854 28.5943 22.2514 28.2983 22.1504 27.9143L19.4244 18.8233C19.3324 18.4753 19.0064 18.2523 18.6364 18.2923L18.0084 18.4343 18.0664 39.3343C18.0654 40.5353 17.0864 41.5113 15.8854 41.5113 14.6874 41.5113 13.7074 40.5363 13.7034 39.3363L13.6554 27.1323 13.6524 27.0143 12.3544 27.0473 12.3644 39.3363C12.3604 40.5363 11.3814 41.5113 10.1834 41.5113 8.9824 41.5113 8.0044 40.5353 8.0014 39.3373L8.0594 19.0053C8.0594 18.6453 7.7894 18.3383 7.4324 18.2923L6.8104 18.2733 3.9114 27.9363C3.8164 28.2983 3.5824 28.5943 3.2524 28.7703 2.9214 28.9453 2.5434 28.9733 2.1904 28.8503 1.5454 28.6233 1.1804 27.9523 1.3394 27.2963L3.9754 17.0983C4.6064 14.5003 7.8074 12.7553 10.4004 12.7553L15.6684 12.7553C18.2084 12.7553 21.4724 14.5383 22.0964 17.1083L24.7264 27.2883C24.8884 27.9523 24.5234 28.6233 23.8774 28.8503M25.9864 26.9703L23.3564 16.7913C22.5564 13.4963 18.7424 11.4543 15.6684 11.4543L10.4004 11.4543C7.3254 11.4543 3.5124 13.4963 2.7144 16.7823L.0784 26.9793C-.2416 28.2963.4814 29.6283 1.7614 30.0773 1.8324 30.1013 1.9064 30.1103 1.9794 30.1283L1.9794 42.1623 3.2794 42.1623 3.2794 30.1343C3.4814 30.0833 3.6774 30.0153 3.8614 29.9173 4.5074 29.5753 4.9834 28.9733 5.1634 28.2883L6.7474 23.0053 6.7004 39.3373C6.7054 41.2533 8.2684 42.8123 10.1834 42.8123 11.3584 42.8123 12.4024 42.2233 13.0334 41.3243 13.6644 42.2233 14.7084 42.8123 15.8854 42.8123 17.8014 42.8123 19.3634 41.2523 19.3674 39.3333L19.3204 23.0033 20.8984 28.2663C21.0844 28.9733 21.5614 29.5753 22.2064 29.9173 22.3924 30.0153 22.5884 30.0833 22.7884 30.1343L22.7884 42.1623 24.0894 42.1623 24.0894 30.1273C24.1624 30.1093 24.2364 30.1013 24.3074 30.0773 25.5874 29.6283 26.3104 28.2963 25.9864 26.9703M12.9067 2.2644C14.5897 2.2644 15.9577 3.6334 15.9577 5.3164 15.9577 6.9984 14.5897 8.3674 12.9067 8.3674 11.2237 8.3674 9.8547 6.9984 9.8547 5.3164 9.8547 3.6334 11.2237 2.2644 12.9067 2.2644M12.9067 9.6674C15.3057 9.6674 17.2587 7.7154 17.2587 5.3164 17.2587 2.9164 15.3057.9634 12.9067.9634 10.5077.9634 8.5537 2.9164 8.5537 5.3164 8.5537 7.7154 10.5077 9.6674 12.9067 9.6674"
      transform="translate(11 2)"
    />
  );

  const normalHover = (
    <path
      fillRule="evenodd"
      d="M23.877 26.3503C23.525 26.4733 23.148 26.4463 22.817 26.2703 22.486 26.0943 22.252 25.7983 22.14 25.3813L19.424 17.8233C19.332 17.4743 18.99 17.2463 18.637 17.2923L18.009 17.4343 18.067 38.3333C18.065 39.5353 17.086 40.5113 15.886 40.5113 14.688 40.5113 13.708 39.5363 13.704 38.3363L13.656 26.1323 13.653 26.0143 12.355 26.0473 12.364 38.3373C12.361 39.5373 11.382 40.5113 10.183 40.5113 8.982 40.5113 8.004 39.5353 8.001 38.3373L8.06 17.9973C8.055 17.6333 7.789 17.3363 7.428 17.2913L6.837 17.2793 3.912 25.4353C3.817 25.7983 3.582 26.0943 3.252 26.2703 2.921 26.4453 2.543 26.4733 2.191 26.3503 1.546 26.1233 1.181 25.4523 1.332 24.8223L3.975 16.0983C4.606 13.5003 7.807 11.7553 10.4 11.7553L15.668 11.7553C18.262 11.7553 21.462 13.5003 22.104 16.1333L24.727 24.7883C24.889 25.4523 24.523 26.1233 23.877 26.3503M25.981 24.4453L23.357 15.7913C22.556 12.4963 18.742 10.4543 15.668 10.4543L10.4 10.4543C7.326 10.4543 3.513 12.4963 2.721 15.7563L.078 24.4803C-.241 25.7973.482 27.1283 1.762 27.5773 1.833 27.6013 1.907 27.6103 1.98 27.6283L1.98 39.6673 3.28 39.6673 3.28 27.6353C3.481 27.5843 3.677 27.5163 3.861 27.4183 4.507 27.0763 4.983 26.4743 5.152 25.8213L6.749 21.3683 6.7 38.3373C6.705 40.2533 8.268 41.8123 10.183 41.8123 11.359 41.8123 12.403 41.2233 13.034 40.3243 13.665 41.2223 14.709 41.8123 15.886 41.8123 17.801 41.8123 19.363 40.2533 19.368 38.3333L19.319 21.3703 20.899 25.7663C21.085 26.4733 21.562 27.0763 22.207 27.4183 22.393 27.5163 22.589 27.5843 22.789 27.6353L22.789 39.6673 24.09 39.6673 24.09 27.6283C24.162 27.6103 24.236 27.6013 24.307 27.5773 25.587 27.1283 26.311 25.7963 25.981 24.4453M12.9063 1.9646C14.5893 1.9646 15.9583 3.3326 15.9583 5.0156 15.9583 6.6976 14.5893 8.0676 12.9063 8.0676 11.2233 8.0676 9.8553 6.6976 9.8553 5.0156 9.8553 3.3326 11.2233 1.9646 12.9063 1.9646M12.9063 9.3676C15.3053 9.3676 17.2593 7.4146 17.2593 5.0156 17.2593 2.6156 15.3053.6636 12.9063.6636 10.5073.6636 8.5543 2.6156 8.5543 5.0156 8.5543 7.4146 10.5073 9.3676 12.9063 9.3676"
      transform="translate(11 3)"
    />
  );

  return (
    <svg
      width={size}
      height={size}
      fill={isHovered ? hoverColor : color}
      viewBox="0 0 48 48"
      ref={ref}
      className={`${className} hnds-style-icon`}
      {...props}>
      {isHovered ? normalHover : normal}
    </svg>
  );
});

export default PersonWithCrutches;
