export const disableBodyScroll = (): void => {
  document.body.style.overflow = 'hidden';
};

export const enableBodyScroll = (): void => {
  document.body.style.removeProperty('overflow');
};
