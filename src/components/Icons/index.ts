import Verktoy from './Verktoy';
import Vaksiner from './Vaksiner';
import Timeavtaler from './Timeavtaler';
import Sykdomsinformasjon from './Sykdomsinformasjon';
import Skjema from './Skjema';
import Resepter from './Resepter';
import Provesvar from './Provesvar';
import Pasientreiser from './Pasientreiser';
import Meldinger from './Meldinger';
import Kjernejournal from './Kjernejournal';
import Henvisninger from './Henvisninger';
import Helseregister from './Helseregister';
import Helsekontakter from './Helsekontakter';
import Helsejournal from './Helsejournal';
import Helsehistorikk from './Helsehistorikk';
import Helsearkiv from './Helsearkiv';
import Frikort from './Frikort';
import Forskning from './Forskning';
import Fastlege from './Fastlege';
import Donorkort from './Donorkort';
import Behandlingssted from './Behandlingssted';

export const Size = {
  XXXSmall: 2,
  XXSmall: 4,
  XSmall: 8,
  Small: 16,
  Medium: 24,
  Large: 32,
  XLarge: 48,
  XXLarge: 64,
  XXXLarge: 80,
  XXXXLarge: 112,
  XXXXXLarge: 128,
};

export const Color = {
  Black: '#000000',
  White: '#FFFFFF',
  Gray: '#CCCCCC',
};

export type IconSizes = (typeof Size)[keyof typeof Size];
export type IconColors = (typeof Color)[keyof typeof Color];

export interface IconProps {
  color?: IconColors;
  size?: IconSizes;
}

export const Icon = () => {};
Icon.displayName = 'Icon';

Icon.Behandlingssted = Behandlingssted;
Icon.Donorkort = Donorkort;
Icon.Fastlege = Fastlege;
Icon.Forskning = Forskning;
Icon.Frikort = Frikort;
Icon.Helsearkiv = Helsearkiv;
Icon.Helsehistorikk = Helsehistorikk;
Icon.Helsejournal = Helsejournal;
Icon.Helsekontakter = Helsekontakter;
Icon.Helseregister = Helseregister;
Icon.Henvisninger = Henvisninger;
Icon.Kjernejournal = Kjernejournal;
Icon.Meldinger = Meldinger;
Icon.Pasientreiser = Pasientreiser;
Icon.Provesvar = Provesvar;
Icon.Resepter = Resepter;
Icon.Skjema = Skjema;
Icon.Sykdomsinformasjon = Sykdomsinformasjon;
Icon.Timeavtaler = Timeavtaler;
Icon.Vaksiner = Vaksiner;
Icon.Verktoy = Verktoy;
