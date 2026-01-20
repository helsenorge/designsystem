import { createFormHook as createTanstackFormHook, createFormHookContexts as createTanstackFormHookContexts } from '@tanstack/react-form';
import { isBefore, isValid } from 'date-fns';
import { Controller as RHFController, useForm as useRHForm } from 'react-hook-form';

import type { Meta, StoryObj } from '@storybook/react-vite';

import Input from '@helsenorge/designsystem-react/components/Input';
import Label from '@helsenorge/designsystem-react/components/Label';
import Validation from '@helsenorge/designsystem-react/components/Validation';

import Unsafe_DatePicker, { Unsafe_ISODatePicker } from '@helsenorge/datepicker/components/Unsafe_DatePicker';

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

export const WithRHForm: Story = {
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
