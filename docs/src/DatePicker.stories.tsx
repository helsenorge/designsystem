import { createFormHook as createTanstackFormHook, createFormHookContexts as createTanstackFormHookContexts } from '@tanstack/react-form';
import { endOfMonth, formatISO, isAfter, isBefore, isToday, isValid, startOfTomorrow } from 'date-fns';
import { nb } from 'date-fns/locale';
import { FormProvider, Controller as RHFController, useFormContext, useForm as useRHForm } from 'react-hook-form';

import type { Meta, StoryObj } from '@storybook/react-vite';

import Button from '@helsenorge/designsystem-react/components/Button';
import FormFieldTag from '@helsenorge/designsystem-react/components/FormFieldTag';
import FormGroup from '@helsenorge/designsystem-react/components/FormGroup';
import Input from '@helsenorge/designsystem-react/components/Input';
import Label, { Sublabel } from '@helsenorge/designsystem-react/components/Label';
import Validation from '@helsenorge/designsystem-react/components/Validation';

import Unsafe_DatePicker, { Unsafe_ISODatePicker, Unsafe_TimeInput } from '@helsenorge/datepicker/components/Unsafe_DatePicker';

const meta: Meta = {
  title: 'Documentation/Examples/NewDatePicker',
  parameters: {
    docs: {
      description: {
        component:
          'This example demonstrates how to use the new components from @helsenorge/datepicker with react-hook-form and tanstack form. ' +
          'This story lives in the docs/guide workspace and has its own dependencies.',
      },
    },
  },
};

export default meta;

type Story = StoryObj;

export const DateWithRHForm: Story = {
  parameters: {
    docs: {
      source: {
        language: 'tsx',
        code: `

);`,
      },
    },
  },
  render: args => {
    const {
      control,
      handleSubmit,
      formState: { errors },
    } = useRHForm({
      defaultValues: { avtale: new Date('2026-01-01') },
      mode: 'onBlur',
    });

    const onSubmit = (data: any) => {
      console.log('register submit: ', data);
    };

    const validateDate = (value: Date) => {
      if (!value) {
        return 'Må velge dato';
      }
      if (isBefore(value, new Date())) {
        return 'Kan ikke velge dato i fortiden';
      }
      return true;
    };

    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <RHFController
          name="avtale"
          control={control}
          rules={{
            required: 'Feltet er påkrevd',
            validate: value => validateDate(value),
          }}
          render={({ field }) => (
            <Unsafe_DatePicker
              {...args}
              errorText={errors?.avtale ? (errors?.avtale?.message as string) : undefined}
              value={field.value ?? undefined}
              onChange={val => field.onChange(val)}
              showGoToTodayButton
            />
          )}
        />
        <br />
        <button type="submit">{'Submit'}</button>
      </form>
    );
  },
};

export const ISOWithRHForm: Story = {
  parameters: {
    docs: {
      source: {
        language: 'tsx',
        code: `
const {
  control,
  handleSubmit,
  formState: { errors },
} = useRHForm({
  defaultValues: { avtale: '2026-01-31' },
  mode: 'onBlur',
});

const onSubmit = (data: any) => {
  console.log('register submit: ', data);
};

const validateDate = (value: string) => {
  if (!value) {
    return 'Må velge dato';
  }
  const date = new Date(value);
  if (!isValid(date)) {
    return 'Må være på formatet dd.mm.yyyy';
  }
  if (isBefore(date, new Date())) {
    return 'Kan ikke velge dato i fortiden';
  }
  return true;
};

return (
  <form onSubmit={handleSubmit(onSubmit)}>
    <RHFController
      name="avtale"
      control={control}
      rules={{
        required: 'Feltet er påkrevd',
        validate: value => validateDate(value),
      }}
      render={({ field }) => (
        <Unsafe_ISODatePicker
          {...args}
          errorText={errors?.avtale ? (errors?.avtale?.message as string) : undefined}
          value={field.value ?? undefined}
          onChange={val => field.onChange(val)}
        />
      )}
    />
    <br />
    <button type="submit">{'Submit'}</button>
  </form>
);`,
      },
    },
  },
  render: args => {
    const {
      control,
      handleSubmit,
      formState: { errors },
    } = useRHForm({
      defaultValues: { avtale: '2026-01-31' },
      mode: 'onBlur',
    });

    const onSubmit = (data: any) => {
      console.log('register submit: ', data);
    };

    const validateDate = (value: string) => {
      if (!value) {
        return 'Må velge dato';
      }
      const date = new Date(value);
      if (!isValid(date)) {
        return 'Må være på formatet dd.mm.yyyy';
      }
      if (isBefore(date, new Date())) {
        return 'Kan ikke velge dato i fortiden';
      }
      return true;
    };

    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <RHFController
          name="avtale"
          control={control}
          rules={{
            required: 'Feltet er påkrevd',
            validate: value => validateDate(value),
          }}
          render={({ field }) => (
            <Unsafe_ISODatePicker
              {...args}
              errorText={errors?.avtale ? (errors?.avtale?.message as string) : undefined}
              value={field.value ?? undefined}
              onChange={val => field.onChange(val)}
            />
          )}
        />
        <br />
        <button type="submit">{'Submit'}</button>
      </form>
    );
  },
};

export const RequiredDateOptionalTime: Story = {
  parameters: {
    docs: {
      source: {
        language: 'tsx',
        code: `
const {
  control,
  handleSubmit,
  formState: { errors },
} = useRHForm({
  defaultValues: { reiseDate: '2026-02-15', reiseTid: '' },
  mode: 'onBlur',
});

const onSubmit = (data: any) => {
  console.log('register submit: ', data);
};

const validateDate = (value: string) => {
  if (!value) {
    return 'Må velge dato';
  }
  const date = new Date(value);
  if (!isValid(date)) {
    return 'Må være på formatet dd.mm.yyyy';
  }
  if (isAfter(date, new Date())) {
    return 'Kan ikke velge dato i fremtiden';
  }
  return true;
};

return (
  <form onSubmit={handleSubmit(onSubmit)}>
    <RHFController
      name="reiseDate"
      control={control}
      rules={{
        required: 'Dato er påkrevd',
        validate: value => validateDate(value),
      }}
      render={({ field }) => (
        <Unsafe_ISODatePicker
          {...args}
          errorText={errors?.reiseDate ? (errors?.reiseDate?.message as string) : undefined}
          value={field.value ?? undefined}
          onChange={val => field.onChange(val)}
          aria-describedby="date-format"
          label={
            <Label
              labelTexts={[{ text: 'Dato' }]}
              formFieldTag={<FormFieldTag level="required-field" />}
              sublabel={<Sublabel id="date-format" sublabelTexts={[{ text: 'dd.mm.åååå' }]} />}
            />
          }
        />
      )}
    />
    <RHFController
      name="reiseTid"
      control={control}
      render={({ field }) => (
        <Unsafe_TimeInput
          {...args}
          errorText={errors?.reiseTid ? (errors?.reiseTid?.message as string) : undefined}
          value={field.value ?? undefined}
          onChange={val => field.onChange(val)}
          aria-describedby="tid-format"
          label={
            <Label
              labelTexts={[{ text: 'Tid' }]}
              formFieldTag={<FormFieldTag level="optional" />}
              sublabel={<Sublabel id="tid-format" sublabelTexts={[{ text: 'tt:mm' }]} />}
            />
          }
        />
      )}
    />
    <br />
    <button type="submit">{'Submit'}</button>
  </form>
);`,
      },
    },
  },
  render: args => {
    const {
      control,
      handleSubmit,
      formState: { errors },
    } = useRHForm({
      defaultValues: { reiseDate: '2026-02-15', reiseTid: '' },
      mode: 'onBlur',
    });

    const onSubmit = (data: any) => {
      console.log('register submit: ', data);
    };

    const validateDate = (value: string) => {
      if (!value) {
        return 'Må velge dato';
      }
      const date = new Date(value);
      if (!isValid(date)) {
        return 'Må være på formatet dd.mm.yyyy';
      }
      if (isAfter(date, new Date())) {
        return 'Kan ikke velge dato i fremtiden';
      }
      return true;
    };

    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <RHFController
          name="reiseDate"
          control={control}
          rules={{
            required: 'Dato er påkrevd',
            validate: value => validateDate(value),
          }}
          render={({ field }) => (
            <Unsafe_ISODatePicker
              {...args}
              errorText={errors?.reiseDate ? (errors?.reiseDate?.message as string) : undefined}
              value={field.value ?? undefined}
              onChange={val => field.onChange(val)}
              aria-describedby="date-format"
              label={
                <Label
                  labelTexts={[{ text: 'Dato' }]}
                  formFieldTag={<FormFieldTag level="required-field" />}
                  sublabel={<Sublabel id="date-format" sublabelTexts={[{ text: 'dd.mm.åååå' }]} />}
                />
              }
            />
          )}
        />
        <RHFController
          name="reiseTid"
          control={control}
          render={({ field }) => (
            <Unsafe_TimeInput
              {...args}
              errorText={errors?.reiseTid ? (errors?.reiseTid?.message as string) : undefined}
              value={field.value ?? undefined}
              onChange={val => field.onChange(val)}
              aria-describedby="tid-format"
              label={
                <Label
                  labelTexts={[{ text: 'Tid' }]}
                  formFieldTag={<FormFieldTag level="optional" />}
                  sublabel={<Sublabel id="tid-format" sublabelTexts={[{ text: 'tt:mm' }]} />}
                />
              }
            />
          )}
        />
        <br />
        <button type="submit">{'Submit'}</button>
      </form>
    );
  },
};

export const MultipleFields: Story = {
  render: args => {
    const {
      control,
      register,
      handleSubmit,
      formState: { errors },
    } = useRHForm({
      mode: 'onBlur',
    });

    const onSubmit = (data: any) => {
      console.log('register submit: ', data);
    };

    const validateDate = (value: string) => {
      if (!value) {
        return 'Må velge dato';
      }
      const date = new Date(value);
      if (!isValid(date)) {
        return 'Må være gyldig dato';
      }
      if (isBefore(date, new Date())) {
        return 'Kan ikke velge dato i fortiden';
      }
      return true;
    };

    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <Validation>
          <Input
            label={<Label labelTexts={[{ text: 'Navn' }]} />}
            error={!!errors?.name?.message}
            errorText={errors.name ? (errors.name.message as string) : undefined}
            {...register('name', { required: 'Navn er påkrevd' })}
          />
          <br />
          <RHFController
            name="birthday"
            control={control}
            rules={{
              required: 'Feltet er påkrevd',
              validate: value => validateDate(value),
            }}
            render={({ field }) => (
              <Unsafe_DatePicker
                {...args}
                errorText={errors?.birthday?.message as string}
                value={field.value ?? ''}
                onChange={val => field.onChange(val)}
                onBlur={field.onBlur}
              />
            )}
          />
          <br />
          <button type="submit">{'Submit'}</button>
        </Validation>
      </form>
    );
  },
};

export const WithTanstackForm: Story = {
  render: args => {
    const { fieldContext, formContext } = createTanstackFormHookContexts();
    const { useAppForm } = createTanstackFormHook({
      fieldComponents: {},
      formComponents: {},
      fieldContext,
      formContext,
    });
    const form = useAppForm({
      defaultValues: {
        avtale: '',
      },
      onSubmit: ({ value }) => {
        alert(JSON.stringify(value, null, 2));
      },
    });

    const validateDate = ({ value }: { value: string }) => {
      if (!value) {
        return 'Må velge dato';
      }
      const date = new Date(value);
      if (!isValid(date)) {
        return 'Må være gyldig dato';
      }
      if (isBefore(date, new Date())) {
        return 'Kan ikke velge dato i fortiden';
      }
      return true;
    };

    return (
      <form
        onSubmit={e => {
          e.preventDefault();
          form.handleSubmit();
        }}
      >
        <form.Field
          name="avtale"
          children={field => (
            <Unsafe_ISODatePicker
              {...args}
              withClearButton
              value={field.state.value}
              onChange={(value: string) => field.handleChange(value)}
              errorText={field.state.meta.errors.filter(e => typeof e === 'string').join(', ')}
            />
          )}
          validators={{ onChange: validateDate }}
        />
        <br />
        <button type="submit">{'Submit'}</button>
      </form>
    );
  },
};

interface RofFormData {
  tilbakemeldingstype: string;
  hendelseTidspunktDate: string;
  hendelseTidspunktTime: string;
  kategorier: string[];
  beskrivelse: string;
  onskerSvar: string;
}

const InnerComponent = (): React.JSX.Element => {
  const {
    formState: { errors },
    trigger,
    getValues,
    control,
  } = useFormContext<RofFormData>();

  const getHoursFromTime = (time: string): number => {
    const parts = time.split(':');
    return parts.length > 0 ? parseInt(parts[0], 10) : -1;
  };

  const getMinutesFromTime = (time: string): number => {
    const parts = time.split(':');
    return parts.length > 1 ? parseInt(parts[1], 10) : -1;
  };

  const validateDate = (value: string): boolean | string => {
    if (!value) {
      return false;
    }

    const date = new Date(value);

    if (!isValid(date)) {
      return 'Ugyldig dato';
    }

    if (isAfter(date, new Date())) {
      return 'Kan ikke oppgi datoer i fremtiden';
    }
    return true;
  };

  const validateTime = (value: string): boolean | string => {
    if (!value) {
      return true;
    }

    const hours = getHoursFromTime(value);
    const minutes = getMinutesFromTime(value);

    if (hours < 0 || hours > 23 || minutes < 0 || minutes > 59) {
      return 'Ugyldig tidsformat';
    }

    const dateValue = getValues('hendelseTidspunktDate');
    if (dateValue) {
      const date = new Date(dateValue);
      date.setHours(hours);
      date.setMinutes(minutes);

      const isDateTimeInFuture = isToday(date) && isAfter(date, new Date());
      if (isDateTimeInFuture) {
        return 'Kan ikke oppgi tidspunkt i fremtiden';
      }
    }

    return true;
  };

  const onDatePickerBlur = (): void => {
    if (!errors.hendelseTidspunktDate) {
      trigger('hendelseTidspunktDate');
      trigger('hendelseTidspunktTime');
    }
  };

  const onDatePickerChange = (): void => {
    if (errors.hendelseTidspunktDate) {
      trigger('hendelseTidspunktDate');
    }
    if (!errors.hendelseTidspunktDate) {
      trigger('hendelseTidspunktTime');
    }
  };

  const onTimeBlur = (): void => {
    if (!errors.hendelseTidspunktTime) {
      trigger('hendelseTidspunktTime');
    }
  };

  const onTimeChange = (): void => {
    if (errors.hendelseTidspunktTime) {
      trigger('hendelseTidspunktTime');
    }
  };

  return (
    <FormGroup legend={'Gi dato og tid'}>
      <RHFController
        name="hendelseTidspunktDate"
        control={control}
        rules={{
          validate: value => validateDate(value),
          onChange: onDatePickerChange,
          onBlur: onDatePickerBlur,
        }}
        render={({ field }) => (
          <Unsafe_ISODatePicker
            {...field}
            localeForCalendar={nb}
            id="hendelse-tidspunkt-date"
            data-testId="hendelse-tidspunkt-date"
            errorText={errors?.hendelseTidspunktDate?.message}
            aria-describedby="formfieldtag-velg-hendelse-tidspunkt-dato"
            endMonth={new Date()}
            modifiers={{ disabled: [{ from: startOfTomorrow(), to: endOfMonth(new Date()) }] }}
            label={
              <Label
                labelId="velg-hendelse-tidspunkt-dato-title"
                formFieldTag={<FormFieldTag id="formfieldtag-velg-hendelse-tidspunkt-dato" level="required-field" />}
                labelTexts={[
                  {
                    text: 'Dato',
                  },
                  { text: `(dd.mm.yyyy)`, type: 'subdued' },
                ]}
              />
            }
          />
        )}
      />
      <RHFController
        name="hendelseTidspunktTime"
        control={control}
        rules={{
          validate: value => validateTime(value),
          onChange: onTimeChange,
          onBlur: onTimeBlur,
        }}
        render={({ field }) => (
          <Unsafe_TimeInput
            {...field}
            errorText={errors?.hendelseTidspunktTime?.message}
            aria-describedby="hendelse-tidspunkt-tid-title"
            label={
              <Label
                labelId="hendelse-tidspunkt-tid-title"
                formFieldTag={<FormFieldTag id="formfieldtag-velg-hendelse-tidspunkt-tid" level="optional" />}
                labelTexts={[
                  {
                    text: 'Tid',
                  },
                  { text: `(tt:mm)`, type: 'subdued' },
                ]}
              />
            }
          />
        )}
      />
    </FormGroup>
  );
};

export const RofDatepicker: Story = {
  render: () => {
    const methods = useRHForm<RofFormData>({
      shouldFocusError: false,
      reValidateMode: 'onSubmit',
      defaultValues: {
        hendelseTidspunktTime: '',
        hendelseTidspunktDate: '',
      },
    });

    const getHoursFromTime = (time: string): number => {
      const parts = time.split(':');
      return parts.length > 0 ? parseInt(parts[0], 10) : 0;
    };

    const getMinutesFromTime = (time: string): number => {
      const parts = time.split(':');
      return parts.length > 1 ? parseInt(parts[1], 10) : 0;
    };

    const getHendelseTidspunkt = (data: RofFormData): string | null => {
      try {
        const time = data.hendelseTidspunktTime;
        if (time) {
          const date = new Date(data.hendelseTidspunktDate);
          const hours = getHoursFromTime(time);
          const minutes = getMinutesFromTime(time);
          date.setHours(hours);
          date.setMinutes(minutes);
          return formatISO(date);
        }
        return data.hendelseTidspunktDate;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (e) {
        return null;
      }
    };

    const onSubmitHandler = async (data: RofFormData): Promise<void> => {
      const hendelseTidspunkt = getHendelseTidspunkt(data);
      console.log('✅ Form submitted successfully:', { ...data, hendelseTidspunkt });
      alert(`Dato: ${data.hendelseTidspunktDate}\nTid: ${data.hendelseTidspunktTime || 'ikke oppgitt'}\n\nISO: ${hendelseTidspunkt}`);
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const onError = (errors: any): void => {
      console.log('❌ Form has errors:', errors);
    };

    return (
      <div>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmitHandler, onError)}>
            <InnerComponent />
            <br />
            <Button testId="submit" htmlMarkup="button" type="submit" name="submit">
              {'Send inn'}
            </Button>
          </form>
        </FormProvider>

        {/* Display form state for testing */}
        <div style={{ marginTop: '2rem', padding: '1rem', backgroundColor: '#f5f5f5', borderRadius: '4px' }}>
          <h3>{'📋 Skjemastatus'}</h3>
          <pre>
            {JSON.stringify(
              {
                date: methods.watch('hendelseTidspunktDate'),
                time: methods.watch('hendelseTidspunktTime'),
                combined: getHendelseTidspunkt(methods.getValues()),
                errors: Object.keys(methods.formState.errors).length > 0 ? methods.formState.errors : 'Ingen feil',
                isDirty: methods.formState.isDirty,
                isValid: methods.formState.isValid,
              },
              null,
              2
            )}
          </pre>
        </div>
      </div>
    );
  },
};
