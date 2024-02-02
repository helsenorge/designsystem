interface IllustrationConfig<T> {
  size: number;
  large?: T;
  medium?: T;
  small?: T;
}

export const getIllustration = <T>({ size, large, medium, small }: IllustrationConfig<T>): T => {
  if (large && (size >= 512 || (!medium && !small))) {
    return large;
  }

  if (medium && (size >= 201 || !small)) {
    return medium;
  }

  return small as T;
};
