export const Color = {
  Black: 'black',
  White: 'white',
};

export type Color = (typeof Color)[keyof typeof Color];
