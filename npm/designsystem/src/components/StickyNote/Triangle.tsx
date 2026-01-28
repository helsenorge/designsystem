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

  let svg: React.ReactNode;

  if (isFocus) {
    svg = (
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
          fill={palette.border}
          mask="url(#path-1-inside-1_7753_1401)"
        />
      </svg>
    );
  } else {
    svg = (
      <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <mask id="path-1-inside-1_7717_293537" fill="white">
          <path d="M0.923827 20.9211L0.70703 20.9211L0.707031 0.921142L20.707 0.921143L20.707 1.13794L0.923827 20.9211Z" />
        </mask>
        <path
          d="M0.923827 20.9211L0.70703 20.9211L0.707031 0.921142L20.707 0.921143L20.707 1.13794L0.923827 20.9211Z"
          fill={palette.background}
        />
        <path
          d="M0.923827 20.9211L0.923827 21.9211L1.33804 21.9211L1.63093 21.6282L0.923827 20.9211ZM0.70703 20.9211L-0.29297 20.9211L-0.29297 21.9211L0.70703 21.9211L0.70703 20.9211ZM0.707031 0.921142L0.707031 -0.0788582L-0.292969 -0.0788583L-0.292969 0.921142L0.707031 0.921142ZM20.707 0.921143L21.707 0.921143L21.707 -0.0788574L20.707 -0.0788574L20.707 0.921143ZM20.707 1.13794L21.4141 1.84505L21.707 1.55215L21.707 1.13794L20.707 1.13794ZM0.923827 20.9211L0.923827 19.9211L0.70703 19.9211L0.70703 20.9211L0.70703 21.9211L0.923827 21.9211L0.923827 20.9211ZM0.70703 20.9211L1.70703 20.9211L1.70703 0.921142L0.707031 0.921142L-0.292969 0.921142L-0.29297 20.9211L0.70703 20.9211ZM0.707031 0.921142L0.707031 1.92114L20.707 1.92114L20.707 0.921143L20.707 -0.0788574L0.707031 -0.0788582L0.707031 0.921142ZM20.707 0.921143L19.707 0.921143L19.707 1.13794L20.707 1.13794L21.707 1.13794L21.707 0.921143L20.707 0.921143ZM20.707 1.13794L19.9999 0.430833L0.21672 20.214L0.923827 20.9211L1.63093 21.6282L21.4141 1.84505L20.707 1.13794Z"
          fill={palette.border}
          mask="url(#path-1-inside-1_7717_293537)"
        />
      </svg>
    );
  }

  return <>{svg}</>;
};

export default Triangle;
