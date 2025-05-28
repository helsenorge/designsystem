/** AUTO-GENERATED - DO NOT CHANGE MANUALLY **/

export const IllustrationList = [
  'BabyMobile',
  'Child',
  'Doctor',
  'FacialRecognitionFingerprint',
  'GiveBabyFood',
  'HealthcarePersonnel',
  'ReadLetters',
  'Stroller',
  'Support2',
] as const;

export interface IllustrationSize {
  small?: string;
  medium?: string;
  large?: string;
}

export const IllustrationSizeList: Record<IllustrationName, IllustrationSize> = {
  BabyMobile: { medium: 'BabyMobileMedium' },
  Child: { medium: 'ChildMedium' },
  Doctor: { small: 'DoctorSmall', medium: 'DoctorMedium' },
  FacialRecognitionFingerprint: { medium: 'FacialRecognitionFingerprintMedium' },
  GiveBabyFood: { medium: 'GiveBabyFoodMedium' },
  HealthcarePersonnel: { small: 'HealthcarePersonnelSmall', medium: 'HealthcarePersonnelMedium' },
  ReadLetters: { medium: 'ReadLettersMedium' },
  Stroller: { medium: 'StrollerMedium' },
  Support2: { medium: 'Support2Medium' },
};

export type IllustrationName = (typeof IllustrationList)[number];
