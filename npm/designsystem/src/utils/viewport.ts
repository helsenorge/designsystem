export const isElementInViewport = (el: HTMLElement): boolean => {
  var { top, left, bottom, right } = el.getBoundingClientRect();

  return (
    top >= 0 &&
    left >= 0 &&
    bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};
