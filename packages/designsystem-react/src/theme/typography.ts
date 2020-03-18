import {css} from 'styled-components';
import {screen} from './grid';

const titleFeature = css`
  font-size: 3rem;
  line-height: 4rem;
  font-weight: 600;
  @media ${screen.md} {
    font-size: 4rem;
    line-height: 5rem;
  }
`;

const title1 = css`
  font-size: 2.75rem;
  line-height: 3.25rem;
  font-weight: 600;
  @media ${screen.md} {
    font-size: 3.25rem;
    line-height: 3.75rem;
  }
`;

const title2 = css`
  font-size: 1.75rem;
  line-height: 2.25rem;
  font-weight: 600;
  @media ${screen.md} {
    font-size: 2.125rem;
    line-height: 2.75rem;
  }
`;

const title3 = css`
  font-size: 1.5rem;
  line-height: 2rem;
  font-weight: 600;
`;

const title4 = css`
  font-size: 1.25rem;
  line-height: 1.75rem;
  font-weight: 700;
`;

const title5 = css`
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.45px;
  @media ${screen.md} {
    font-size: 1.125rem;
    line-height: 1.5rem;
  }
`;

const preamble = css`
  font-size: 1.375rem;
  line-height: 2rem;
  font-weight: 600;
  @media ${screen.md} {
    font-size: 1.5rem;
  }
`;

const legend = css`
  font-size: 1.25rem;
  line-height: 1.75rem;
  font-weight: 600;
  @media ${screen.md} {
    font-size: 1.5rem;
    line-height: 2rem;
  }
`;

const label = css`
  font-size: 1.125rem;
  line-height: 1.5rem;
  font-weight: 600;
  @media ${screen.md} {
    font-size: 1.25rem;
    line-height: 1.75rem;
  }
`;

const body = css`
  font-size: 1.125rem;
  line-height: 1.75rem;
  @media ${screen.md} {
    font-size: 1.25rem;
    line-height: 1.875rem;
  }
`;

const focusedContent = css`
  font-size: 1.125rem;
  line-height: 1.75rem;
`;

const table = css`
  font-size: 1.125rem;
  line-height: 1.75rem;
  @media ${screen.md} {
    font-size: 1.25rem;
  }
`;

const strong = css`
  font-size: 1.125rem;
  line-height: 1.175rem;
  font-weight: 700;
  @media ${screen.md} {
    font-size: 1.25rem;
    line-height: 1.875rem;
  }
`;

const form = css`
  font-size: 1.125rem;
  line-height: 1.75rem;
`;

const imageCaption = css`
  font-size: 1rem;
  line-height: 1.5rem;
`;

const imageCredit = css`
  font-size: 0.75rem;
  line-height: 1rem;
`;

const time = css`
  font-size: 1.25rem;
  line-height: 1.75rem;
`;

export const typography = {
  titleFeature,
  title1,
  title2,
  title3,
  title4,
  title5,
  preamble,
  legend,
  label,
  body,
  focusedContent,
  table,
  strong,
  form,
  imageCaption,
  imageCredit,
  time,
};
