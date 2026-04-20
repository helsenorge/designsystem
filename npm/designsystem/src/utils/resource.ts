/**
 * Replace `{0}`, `{1}` etc. placeholders in a resource string with the supplied values.
 * @example formatResource('Siste {0} måneder', 6)  // 'Siste 6 måneder'
 * @example formatResource('{0} av {1}', 'side', 10) // 'side av 10'
 */
export const formatResource = (template: string, ...args: (string | number)[]): string =>
  args.reduce<string>((result, arg, index) => result.replace(`{${index}}`, String(arg)), template);
