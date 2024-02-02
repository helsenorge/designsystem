/** AUTO-GENERATED - DO NOT CHANGE MANUALLY **/

export const IllustrationList = ['Doctor', 'HealthcarePersonnel'] as const;

export interface IllustrationSize {
  small?: string;
  medium?: string;
  large?: string;
}

export const IllustrationSizeList: Record<IllustrationName, IllustrationSize> = {
  Doctor: { small: 'DoctorSmall', medium: 'DoctorMedium' },
  HealthcarePersonnel: { small: 'HealthcarePersonnelSmall', medium: 'HealthcarePersonnelMedium' },
};

export type IllustrationName = (typeof IllustrationList)[number];
