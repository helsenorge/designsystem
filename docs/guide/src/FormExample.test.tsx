import { useId } from 'react';

import { render, screen } from '@testing-library/react';
import { useForm } from 'react-hook-form';
import { createMemoryRouter, RouterProvider } from 'react-router';
import { vi } from 'vitest';

import FormGroup from '@helsenorge/designsystem-react/components/FormGroup';
import Input from '@helsenorge/designsystem-react/components/Input';

const TestDispatcher = () => {
  const skrivMeldingForm = useForm<{ subject: string }>({
    defaultValues: {
      subject: '',
    },
  });

  const { register } = skrivMeldingForm;

  const uniqueId = useId();
  const id = `id-${uniqueId}`;
  return (
    <div>
      {'Page 1'}
      <FormGroup error={'heihei'} size="medium" htmlMarkup="div" name={'subject'} testId={'test-id'}>
        <Input
          {...register('subject')}
          inputId={id}
          placeholder={'tjohei'}
          testId="form-input-field"
          aria-required={true}
          maxCharacters={50}
        />
      </FormGroup>
    </div>
  );
};

const setup = () => {
  const router = createMemoryRouter([
    {
      path: '/',
      element: <TestDispatcher />,
    },
  ]);

  render(<RouterProvider router={router} />);
};

beforeEach(() => {
  vi.clearAllMocks();
});

it('Input og FormGroup logger ingenting', async () => {
  const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
  setup();

  screen.debug();
  expect(consoleSpy).not.toHaveBeenCalled();
});
