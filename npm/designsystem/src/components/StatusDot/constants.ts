import { FormOnColor } from '../../constants';

export enum StatusDotOnColor {
  onwhite = FormOnColor.onwhite,
  ondark = FormOnColor.ondark,
}

export enum StatusDotVariant {
  success = 'success',
  inprocess = 'inprocess',
  exception = 'exception',
  unknown = 'unknown',
  inspected = 'inspected',
  cancelled = 'cancelled',
  alert = 'alert',
  transparent = 'transparent',
  info = 'info',
  group = 'group',
  recurring = 'recurring',
  noaccess = 'noaccess',
  draft = 'draft',
  hidden = 'hidden',
  login = 'login',
  attachment = 'attachment',
  active = 'active',
  pending = 'pending',
  inactive = 'inactive',
}
