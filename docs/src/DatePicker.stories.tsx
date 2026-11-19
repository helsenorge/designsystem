import { useRef } from 'react';

import { createFormHook as createTanstackFormHook, createFormHookContexts as createTanstackFormHookContexts } from '@tanstack/react-form';
import { isAfter, isBefore, isValid } from 'date-fns';
import { Controller as RHFController, useForm as useRHForm } from 'react-hook-form';

import type { Meta, StoryObj } from '@storybook/react-vite';

import FormFieldTag from '@helsenorge/designsystem-react/components/FormFieldTag';
import FormGroup from '@helsenorge/designsystem-react/components/FormGroup';
import Input from '@helsenorge/designsystem-react/components/Input';
import Label, { Sublabel } from '@helsenorge/designsystem-react/components/Label';
import Validation from '@helsenorge/designsystem-react/components/Validation';
import type { ValidationErrors } from '@helsenorge/designsystem-react/components/Validation/types';

import Unsafe_DatePicker, {
  Unsafe_DateAndTime,
  type Unsafe_DatePickerHandle,
  Unsafe_ISODateAndTime,
  Unsafe_ISODatePicker,
  Unsafe_TimeInput,
} from '@helsenorge/datepicker/components/Unsafe_DatePicker';
import Unsafe_DateRangeSelector from '@helsenorge/datepicker/components/Unsafe_DatePicker/Unsafe_DateRangeSelector';
import type {
  DateRangePreset,
  ReadableRangeOption,
} from '@helsenorge/datepicker/components/Unsafe_DatePicker/Unsafe_DateRangeSelector/constants';
import { DateRangePresets } from '@helsenorge/datepicker/components/Unsafe_DatePicker/Unsafe_DateRangeSelector/utils';

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
      defaultValues: { avtale: new Date('2026-02-01') },
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
              value={field.value}
              onChange={field.onChange}
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

export const DateWithRHFormSetValue: Story = {
  render: args => {
    const {
      control,
      handleSubmit,
      setValue,
      formState: { errors },
    } = useRHForm({
      defaultValues: { avtale: new Date('2026-01-01') },
      mode: 'onBlur',
    });

    const onSubmit = (data: any) => {
      console.log('register submit: ', data);
    };

    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <RHFController
          name="avtale"
          control={control}
          render={({ field }) => (
            <Unsafe_DatePicker
              {...args}
              errorText={errors?.avtale ? (errors?.avtale?.message as string) : undefined}
              value={field.value}
              onChange={field.onChange}
            />
          )}
        />
        <br />
        <button type="button" onClick={() => setValue('avtale', new Date('2026-12-24'))}>
          {'Sett til julaften 2026'}
        </button>
        <button type="button" onClick={() => setValue('avtale', new Date())}>
          {'Sett til i dag'}
        </button>
        <button type="button" onClick={() => setValue('avtale', null as unknown as Date)}>
          {'Nullstill'}
        </button>
        <br />
        <button type="submit">{'Submit'}</button>
      </form>
    );
  },
};

export const DateAndTimeWithRHFormSetValue: Story = {
  render: args => {
    const {
      control,
      handleSubmit,
      setValue,
      formState: { errors },
    } = useRHForm({
      defaultValues: { avtale: new Date('2026-01-01T10:00') },
      mode: 'onBlur',
    });

    const onSubmit = (data: any) => {
      console.log('register submit: ', data);
    };

    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <RHFController
          name="avtale"
          control={control}
          render={({ field }) => (
            <Unsafe_DateAndTime
              {...args}
              errorText={errors?.avtale ? (errors?.avtale?.message as string) : undefined}
              value={field.value}
              onChange={field.onChange}
              legend="Avtaletidspunkt"
            />
          )}
        />
        <br />
        <button type="button" onClick={() => setValue('avtale', new Date('2026-12-24T18:30'))}>
          {'Sett til julaften kl 18:30'}
        </button>
        <button type="button" onClick={() => setValue('avtale', new Date())}>
          {'Sett til nå'}
        </button>
        <button type="button" onClick={() => setValue('avtale', null as unknown as Date)}>
          {'Nullstill'}
        </button>
        <br />
        <button type="submit">{'Submit'}</button>
      </form>
    );
  },
};

export const TimeInputWithRHFormSetValue: Story = {
  render: args => {
    const {
      control,
      handleSubmit,
      setValue,
      formState: { errors },
    } = useRHForm({
      defaultValues: { tid: '10:00' },
      mode: 'onBlur',
    });

    const onSubmit = (data: any) => {
      console.log('register submit: ', data);
    };

    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <RHFController
          name="tid"
          control={control}
          render={({ field }) => (
            <Unsafe_TimeInput
              {...args}
              errorText={errors?.tid ? (errors?.tid?.message as string) : undefined}
              value={field.value ?? undefined}
              onChange={val => field.onChange(val)}
              label={<Label labelTexts={[{ text: 'Tid' }]} />}
            />
          )}
        />
        <br />
        <button type="button" onClick={() => setValue('tid', '18:30')}>
          {'Sett til 18:30'}
        </button>
        <button type="button" onClick={() => setValue('tid', '00:00')}>
          {'Sett til midnatt'}
        </button>
        <button type="button" onClick={() => setValue('tid', '')}>
          {'Nullstill'}
        </button>
        <br />
        <button type="submit">{'Submit'}</button>
      </form>
    );
  },
};

export const DateAndTimeWithRHForm: Story = {
  render: args => {
    const {
      control,
      handleSubmit,
      formState: { errors },
    } = useRHForm({
      defaultValues: { avtale: new Date('2026-01-01T10:00') },
      mode: 'onBlur',
    });

    const onSubmit = (data: any) => {
      console.log('register submit: ', data);
    };

    const validateDate = (value: Date | undefined) => {
      if (!value) {
        return 'Må velge dato og tidspunkt';
      }
      if (isBefore(value, new Date())) {
        return 'Kan ikke velge tidspunkt i fortiden';
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
            <Unsafe_DateAndTime
              {...args}
              errorText={errors?.avtale ? (errors?.avtale?.message as string) : undefined}
              value={field.value}
              onChange={field.onChange}
              legend="Avtaletidspunkt"
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

export const ISODateAndTimeWithRHForm: Story = {
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
  defaultValues: { avtale: '2026-01-31T10:00' },
  mode: 'onBlur',
});

const onSubmit = (data: any) => {
  console.log('register submit: ', data);
};

const validateDate = (value: string) => {
  if (!value) {
    return 'Må velge dato og tidspunkt';
  }
  const date = new Date(value);
  if (!isValid(date)) {
    return 'Må være på formatet dd.mm.yyyy hh:mm';
  }
  if (isBefore(date, new Date())) {
    return 'Kan ikke velge tidspunkt i fortiden';
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
        <Unsafe_ISODateAndTime
          {...args}
          errorText={errors?.avtale ? (errors?.avtale?.message as string) : undefined}
          value={field.value ?? undefined}
          onChange={val => field.onChange(val)}
          legend="Avtaletidspunkt"
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
      defaultValues: { avtale: '2026-01-31T10:00' },
      mode: 'onBlur',
    });

    const onSubmit = (data: any) => {
      console.log('register submit: ', data);
    };

    const validateDate = (value: string) => {
      if (!value) {
        return 'Må velge dato og tidspunkt';
      }
      const date = new Date(value);
      if (!isValid(date)) {
        return 'Må være på formatet dd.mm.yyyy hh:mm';
      }
      if (isBefore(date, new Date())) {
        return 'Kan ikke velge tidspunkt i fortiden';
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
            <Unsafe_ISODateAndTime
              {...args}
              errorText={errors?.avtale ? (errors?.avtale?.message as string) : undefined}
              value={field.value ?? undefined}
              onChange={val => field.onChange(val)}
              legend="Avtaletidspunkt"
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
                value={field.value}
                onChange={field.onChange}
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

export const DateRangeSelectorWithRHForm: Story = {
  render: () => {
    type FormValues = { periode?: DateRangePreset };

    const firstRadioRef = useRef<HTMLInputElement>(null);
    const fromRef = useRef<Unsafe_DatePickerHandle>(null);
    const toRef = useRef<Unsafe_DatePickerHandle>(null);

    const {
      control,
      handleSubmit,
      formState: { errors },
    } = useRHForm<FormValues>({
      mode: 'onSubmit',
      reValidateMode: 'onChange',
    });

    const onSubmit = (data: FormValues): void => {
      console.log('register submit: ', data);
    };

    const isCustom = (value?: DateRangePreset): boolean => value?.value === DateRangePresets.Custom.value;

    const options: ReadableRangeOption[] = [
      { ...DateRangePresets.LastMonth, radioButtonProps: { ref: firstRadioRef } },
      DateRangePresets.Last6Months,
      DateRangePresets.Last12Months,
    ];

    const periodeError = errors.periode;
    const fromError = periodeError?.type === 'fromDate' ? periodeError.message : undefined;
    const toError = periodeError?.type === 'toDate' || periodeError?.type === 'range' ? periodeError.message : undefined;
    const groupError = periodeError && !fromError && !toError ? periodeError.message : undefined;

    const focusTarget = fromError ? fromRef : toError ? toRef : firstRadioRef;
    const summaryErrors: ValidationErrors = periodeError
      ? { periode: { message: periodeError.message, ref: { focus: (): void => focusTarget.current?.focus() } } }
      : {};

    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <Validation errorTitle={'Sjekk at alt er riktig utfylt:'} errors={summaryErrors}>
          <FormGroup legend="Velg periode" error={groupError}>
            <RHFController
              name="periode"
              control={control}
              rules={{
                validate: {
                  required: value => !!value || 'Velg en periode, eller fyll inn fra-dato og/eller til-dato',
                  fromDate: value => {
                    const from = value?.dateRange.from;
                    if (!isCustom(value) || !from) return true;
                    if (!isValid(from)) return 'Fra-dato må være på formatet dd.mm.åååå';
                    if (isAfter(from, new Date())) return 'Fra-dato kan ikke være i fremtiden';
                    return true;
                  },
                  toDate: value => {
                    const to = value?.dateRange.to;
                    if (!isCustom(value) || !to) return true;
                    if (!isValid(to)) return 'Til-dato må være på formatet dd.mm.åååå';
                    return true;
                  },
                  range: value => {
                    if (!isCustom(value)) return true;
                    const { from, to } = value?.dateRange ?? {};
                    return !from || !to || !isBefore(to, from) || 'Til-dato kan ikke være før fra-dato';
                  },
                },
              }}
              render={({ field }) => (
                <Unsafe_DateRangeSelector
                  name={field.name}
                  options={options}
                  value={field.value}
                  onChange={field.onChange}
                  datePickerPropsFrom={{ ref: fromRef, errorText: fromError }}
                  datePickerPropsTo={{ ref: toRef, errorText: toError }}
                />
              )}
            />
          </FormGroup>
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
