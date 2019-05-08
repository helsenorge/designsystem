export const ButtonVariants = {
  Primary: 'primary',
  Secondary: 'secondary',
  Tertiary: 'tertiary',
};

export type ActionButtonVariants = (typeof ButtonVariants)[keyof typeof ButtonVariants];
