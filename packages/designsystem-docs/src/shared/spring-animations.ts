const DURATION = 200;

const springProps = {
  logo: {
    config: {
      duration: DURATION,
    },
    delay: 200,
    from: {
      transform: 'translateY(-1rem)',
      opacity: 0,
    },
    to: {
      transform: 'translateY(0)',
      opacity: 1,
    },
  },
  slogan: {
    config: {
      duration: DURATION,
    },
    delay: 400,
    from: {
      transform: 'translateY(1rem)',
      opacity: 0,
    },
    to: {
      transform: 'translateY(0)',
      opacity: 1,
    },
  },
  introduction: {
    config: {
      duration: DURATION,
    },
    delay: 600,
    from: {
      transform: 'translateY(1rem)',
      opacity: 0,
    },
    to: {
      transform: 'translateY(0)',
      opacity: 1,
    },
  },
  card: (delay: number) => ({
    config: {
      duration: DURATION,
    },
    delay: delay,
    from: {
      transform: 'translateY(1rem)',
      opacity: 0,
    },
    to: {
      transform: 'translateY(0)',
      opacity: 1,
    },
  }),
  cardIcon: (toggleHover: boolean) => ({
    config: {
      duration: 200,
    },
    opacity: toggleHover ? 1 : 0,
  }),
};

export default springProps;
