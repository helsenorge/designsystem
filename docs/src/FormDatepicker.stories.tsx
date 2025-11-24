import { useForm, Controller } from 'react-hook-form';

import type { Meta, StoryObj } from '@storybook/react-vite';

import Button from '@helsenorge/designsystem-react/components/Button';
import FormGroup from '@helsenorge/designsystem-react/components/FormGroup';
import Input from '@helsenorge/designsystem-react/components/Input';
import Label from '@helsenorge/designsystem-react/components/Label';
import Spacer from '@helsenorge/designsystem-react/components/Spacer';
import Validation from '@helsenorge/designsystem-react/components/Validation';

import DatePicker from '@helsenorge/datepicker/components/DatePicker';

const meta: Meta = {
  title: 'Documentation/Examples/Form with DatePicker',
};

export default meta;

type Story = StoryObj;

// Simple example - easiest way to integrate DatePicker
export const SimpleIntegration: Story = {
  render: () => {
    interface SimpleFormData {
      appointmentDate: Date | undefined;
      name: string;
    }

    const {
      register,
      handleSubmit,
      setValue,
      watch,
      formState: { errors },
    } = useForm<SimpleFormData>({
      defaultValues: {
        appointmentDate: undefined,
        name: '',
      },
    });

    const appointmentDate = watch('appointmentDate');

    const onSubmit = (data: SimpleFormData): void => {
      console.log('Form submitted:', data);
      console.log('Selected date:', data.appointmentDate?.toLocaleDateString());
    };

    return (
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <Validation errorTitle={'Sjekk at alt er riktig utfylt:'} errors={errors}>
          <FormGroup>
            <Label>{'Navn'}</Label>
            <Input {...register('name', { required: 'Navn er påkrevd' })} error={!!errors.name} />
          </FormGroup>

          <FormGroup>
            <DatePicker
              label={'Velg dato'}
              dateValue={appointmentDate}
              onChange={(_, date) => {
                if (date instanceof Date) {
                  setValue('appointmentDate', date, { shouldValidate: true });
                } else {
                  setValue('appointmentDate', undefined, { shouldValidate: true });
                }
              }}
            />
            {appointmentDate && (
              <p style={{ marginTop: '8px' }}>
                {'Valgt dato: '}
                {appointmentDate.toLocaleDateString('nb-NO')}
              </p>
            )}
          </FormGroup>
        </Validation>

        <Spacer />
        <Button type="submit">{'Send inn'}</Button>
      </form>
    );
  },
};

// Controlled example - more advanced with validation and custom modifiers
export const ControlledWithValidation: Story = {
  render: () => {
    interface ControlledFormData {
      appointmentDate: Date | undefined;
      name: string;
      email: string;
    }

    const {
      control,
      register,
      handleSubmit,
      formState: { errors },
    } = useForm<ControlledFormData>({
      defaultValues: {
        appointmentDate: undefined,
        name: '',
        email: '',
      },
    });

    // Mock data for date restrictions
    const today = new Date();

    const onSubmit = (data: ControlledFormData): void => {
      console.log('Form submitted:', data);
      alert(`Avtale booket for ${data.name} på ${data.appointmentDate?.toLocaleDateString('nb-NO')}`);
    };

    return (
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <Validation errorTitle={'Sjekk at alt er riktig utfylt:'} errors={errors}>
          <FormGroup>
            <Label>{'Navn'}</Label>
            <Input
              {...register('name', {
                required: 'Navn er påkrevd',
                minLength: { value: 2, message: 'Navn må være minst 2 tegn' },
              })}
              error={!!errors.name}
            />
          </FormGroup>

          <FormGroup>
            <Label>{'E-post'}</Label>
            <Input
              type="email"
              {...register('email', {
                required: 'E-post er påkrevd',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Ugyldig e-postadresse',
                },
              })}
              error={!!errors.email}
            />
          </FormGroup>

          <FormGroup>
            <Controller
              name="appointmentDate"
              control={control}
              rules={{
                required: 'Du må velge en dato',
                validate: value => {
                  if (!value) return 'Du må velge en dato';
                  if (value < today) return 'Kan ikke velge dato i fortiden';
                  return true;
                },
              }}
              render={({ field }) => (
                <DatePicker
                  label={'Velg avtale-dato *'}
                  dateValue={field.value}
                  onChange={(_, date) => {
                    if (date instanceof Date) {
                      field.onChange(date);
                    } else {
                      field.onChange(undefined);
                    }
                  }}
                  onBlur={field.onBlur}
                  name={field.name}
                  minDate={today}
                  maxDate={new Date(today.getFullYear(), today.getMonth() + 3)}
                  footerContent={
                    <div style={{ padding: '12px', fontSize: '14px', color: '#666' }}>
                      <p>{'• Helger er deaktivert'}</p>
                      <p>{'• Kan velge opptil 3 måneder frem'}</p>
                    </div>
                  }
                  error={!!errors.appointmentDate}
                  errorText={errors.appointmentDate?.message}
                />
              )}
            />
            {errors.appointmentDate && <p style={{ color: 'red', marginTop: '8px' }}>{errors.appointmentDate.message}</p>}
            <Controller
              name="appointmentDate"
              control={control}
              render={({ field }) =>
                field.value && !errors.appointmentDate ? (
                  <p style={{ marginTop: '8px', color: '#28a745' }}>
                    {'✓ Valgt dato: '}
                    {field.value.toLocaleDateString('nb-NO', {
                      weekday: 'long',
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </p>
                ) : (
                  <></>
                )
              }
            />
          </FormGroup>
        </Validation>

        <Spacer />
        <Button type="submit">{'Book avtale'}</Button>
      </form>
    );
  },
};
