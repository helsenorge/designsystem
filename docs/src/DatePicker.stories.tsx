import { createFormHook as createTanstackFormHook, createFormHookContexts as createTanstackFormHookContexts } from '@tanstack/react-form';
import { isAfter, isBefore, isValid } from 'date-fns';
import { Controller as RHFController, useForm as useRHForm } from 'react-hook-form';

import type { Meta, StoryObj } from '@storybook/react-vite';

import FormFieldTag from '@helsenorge/designsystem-react/components/FormFieldTag';
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
          // eslint-disable-next-line react/no-children-prop
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
