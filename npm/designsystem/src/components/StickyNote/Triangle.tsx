import React from 'react';

interface TriangleProps {
  isHover: boolean;
  isFocus: boolean;
  isActive: boolean;
  isError: boolean;
}

export interface Palette {
  border: string;
  background: string;
}

const Triangle: React.FC<TriangleProps> = ({ isHover, isFocus, isActive, isError }) => {
  const palette = ((): Palette => {
    const colors: Palette = {
      border: 'var(--component-stickynote-border-normal)',
      background: 'var(--component-stickynote-background-fold-normal-light)',
    };

    if (!isError) {
      if (isHover) {
        colors.background = 'var(--component-stickynote-background-fold-normal-medium)';
      }
      if (isFocus) {
        colors.border = 'var(--color-action-border-onlight-focus)';
        colors.background = 'var(--component-stickynote-background-fold-normal-medium)';
      }
      if (isActive) {
        colors.background = 'var(--component-stickynote-background-fold-normal-dark)';
      }
    } else {
      colors.border = 'var(--component-stickynote-border-error)';
      colors.background = 'var(--component-stickynote-background-fold-error-light)';
      if (isHover) {
        colors.background = 'var(--component-stickynote-background-fold-error-medium)';
      }
      if (isFocus) {
        colors.border = 'var(--color-action-border-onlight-focus)';
        colors.background = 'var(--component-stickynote-background-fold-error-medium)';
      }
      if (isActive) {
        colors.background = 'var(--component-stickynote-background-fold-error-dark)';
      }
    }
    return colors;
  })();

  return (
    <>
      {isFocus ? (
        isError ? (
          <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <mask id="path-1-inside-1_7753_1401" fill="white">
              <path d="M0.493163 20.9211L0.276366 20.9211L0.276367 0.921142L20.2764 0.921143L20.2764 1.13794L0.493163 20.9211Z" />
            </mask>
            <path
              d="M0.493163 20.9211L0.276366 20.9211L0.276367 0.921142L20.2764 0.921143L20.2764 1.13794L0.493163 20.9211Z"
              fill={palette.background}
            />
            <path
              d="M0.493163 20.9211L0.493163 22.9211L1.32159 22.9211L1.90738 22.3354L0.493163 20.9211ZM0.276366 20.9211L-1.72363 20.9211L-1.72363 22.9211L0.276366 22.9211L0.276366 20.9211ZM0.276367 0.921142L0.276367 -1.07886L-1.72363 -1.07886L-1.72363 0.921142L0.276367 0.921142ZM20.2764 0.921143L22.2764 0.921143L22.2764 -1.07886L20.2764 -1.07886L20.2764 0.921143ZM20.2764 1.13794L21.6906 2.55215L22.2764 1.96637L22.2764 1.13794L20.2764 1.13794ZM0.493163 20.9211L0.493163 18.9211L0.276366 18.9211L0.276366 20.9211L0.276366 22.9211L0.493163 22.9211L0.493163 20.9211ZM0.276366 20.9211L2.27637 20.9211L2.27637 0.921142L0.276367 0.921142L-1.72363 0.921142L-1.72363 20.9211L0.276366 20.9211ZM0.276367 0.921142L0.276367 2.92114L20.2764 2.92114L20.2764 0.921143L20.2764 -1.07886L0.276367 -1.07886L0.276367 0.921142ZM20.2764 0.921143L18.2764 0.921142L18.2764 1.13794L20.2764 1.13794L22.2764 1.13794L22.2764 0.921143L20.2764 0.921143ZM20.2764 1.13794L18.8622 -0.276274L-0.92105 19.5069L0.493163 20.9211L1.90738 22.3354L21.6906 2.55215L20.2764 1.13794Z"
              fill="black"
              mask="url(#path-1-inside-1_7753_1401)"
            />
          </svg>
        ) : (
          <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <mask id="path-1-inside-1_7753_1374" fill="white">
              <path d="M0.923827 20.9211L0.70703 20.9211L0.707031 0.921142L20.707 0.921143L20.707 1.13794L0.923827 20.9211Z" />
            </mask>
            <path
              d="M0.923827 20.9211L0.70703 20.9211L0.707031 0.921142L20.707 0.921143L20.707 1.13794L0.923827 20.9211Z"
              fill={palette.background}
            />
            <path
              d="M0.923827 20.9211L0.923827 22.9211L1.75225 22.9211L2.33804 22.3354L0.923827 20.9211ZM0.70703 20.9211L-1.29297 20.9211L-1.29297 22.9211L0.70703 22.9211L0.70703 20.9211ZM0.707031 0.921142L0.707031 -1.07886L-1.29297 -1.07886L-1.29297 0.921142L0.707031 0.921142ZM20.707 0.921143L22.707 0.921143L22.707 -1.07886L20.707 -1.07886L20.707 0.921143ZM20.707 1.13794L22.1212 2.55215L22.707 1.96637L22.707 1.13794L20.707 1.13794ZM0.923827 20.9211L0.923827 18.9211L0.70703 18.9211L0.70703 20.9211L0.70703 22.9211L0.923827 22.9211L0.923827 20.9211ZM0.70703 20.9211L2.70703 20.9211L2.70703 0.921142L0.707031 0.921142L-1.29297 0.921142L-1.29297 20.9211L0.70703 20.9211ZM0.707031 0.921142L0.707031 2.92114L20.707 2.92114L20.707 0.921143L20.707 -1.07886L0.707031 -1.07886L0.707031 0.921142ZM20.707 0.921143L18.707 0.921142L18.707 1.13794L20.707 1.13794L22.707 1.13794L22.707 0.921143L20.707 0.921143ZM20.707 1.13794L19.2928 -0.276274L-0.490386 19.5069L0.923827 20.9211L2.33804 22.3354L22.1212 2.55215L20.707 1.13794Z"
              fill="black"
              mask="url(#path-1-inside-1_7753_1374)"
            />
          </svg>
        )
      ) : (
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
          <mask id="path-1-inside-1_1_44" fill="white">
            <path d="M22 0L1.80043e-06 22L2.83099e-06 -8.97354e-07L22 0Z" />
          </mask>
          <path d="M22 0L1.80043e-06 22L2.83099e-06 -8.97354e-07L22 0Z" fill={palette.background} />
          <path
            d="M22 0L22.7071 0.707107L24.4142 -1L22 -1L22 0ZM1.80043e-06 22L-0.999998 22L-0.999998 24.4142L0.707109 22.7071L1.80043e-06 22ZM2.83099e-06 -8.97354e-07L2.87783e-06 -1L-0.999997 -1L-0.999997 -9.38143e-07L2.83099e-06 -8.97354e-07ZM21.2929 -0.707107L-0.707105 21.2929L0.707109 22.7071L22.7071 0.707107L21.2929 -0.707107ZM1 22L1 -8.56565e-07L-0.999997 -9.38143e-07L-0.999998 22L1 22ZM2.78414e-06 0.999999L22 1L22 -1L2.87783e-06 -1L2.78414e-06 0.999999Z"
            fill={palette.border}
            mask="url(#path-1-inside-1_1_44)"
          />
        </svg>
      )}
    </>
  );
};

export default Triangle;
