export * from './lib/index';
export {};

declare module '*.module.scss' {
  const classes: { [key: string]: string };
  export default classes;
}
