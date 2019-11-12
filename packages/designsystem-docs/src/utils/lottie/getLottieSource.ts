import {BREAKPOINTS} from '../../shared/constants';

const pathPrefix = 'lottie';

export function getLottieSource(name: string) {
  return require(`./${pathPrefix}-${name}.json`);
}

export function getLottieLogoSource(width: number) {
  return width > BREAKPOINTS.SM ? require(`./${pathPrefix}-logo.json`) : require(`./${pathPrefix}-logo-stacked.json`);
}
