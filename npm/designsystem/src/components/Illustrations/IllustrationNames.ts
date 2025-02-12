/** AUTO-GENERATED - DO NOT CHANGE MANUALLY **/

export const IllustrationList = ['Doctor', 'FacialRecognitionFingerprint', 'HealthcarePersonnel', 'ReadLetters', 'Support2'] as const;

export interface IllustrationSize {
  small?: string;
  medium?: string;
  large?: string;
}

export const IllustrationSizeList: Record<IllustrationName, IllustrationSize> = {
  Doctor: { small: 'DoctorSmall', medium: 'DoctorMedium' },
  FacialRecognitionFingerprint: { medium: 'FacialRecognitionFingerprintMedium' },
  HealthcarePersonnel: { small: 'HealthcarePersonnelSmall', medium: 'HealthcarePersonnelMedium' },
  ReadLetters: { medium: 'ReadLettersMedium' },
  Support2: { medium: 'Support2Medium' },
};

export type IllustrationName = (typeof IllustrationList)[number];
