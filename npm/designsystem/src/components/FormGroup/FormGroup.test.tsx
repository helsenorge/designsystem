import { render, screen } from '@testing-library/react';

import FormGroup from './FormGroup';
import Checkbox from '../Checkbox';
import FormLayout from '../FormLayout';
import Input from '../Input';
import Label from '../Label';
import RadioButton from '../RadioButton';
import Select from '../Select';
import Textarea from '../Textarea';

describe('Gitt at FormGroup skal vises', (): void => {
  describe('Når FormGroup rendres', (): void => {
    test('Så vises FormGroup', (): void => {
      render(
        <FormGroup title={'One amazing title'} legend={'Check out these checkboxes!'} testId="formgroup1">
          <Checkbox inputId={'Checkbox1'} label={<Label labelTexts={[{ text: 'Checkbox 1' }]} />} />
          <Checkbox inputId={'Checkbox2'} label={<Label labelTexts={[{ text: 'Checkbox 2' }]} />} />
          <Checkbox inputId={'Checkbox3'} label={<Label labelTexts={[{ text: 'Checkbox 3' }]} />} />
        </FormGroup>
      );

      const title = screen.getByText('One amazing title');
      expect(title).toBeVisible();
      expect(title.className).toBe('title title--title4');

      const legend = screen.getByText('Check out these checkboxes!');
      expect(legend).toBeVisible();
      expect(legend.className).toBe('field-set__legend');

      const formGroup = screen.getByTestId('formgroup1');
      expect(formGroup).toBeVisible();
    });
  });

  describe('Når onColor settes', (): void => {
    test('Så er stylingen satt riktig på FormGroup children', (): void => {
      render(
        <FormGroup title={'One amazing title'} legend={'Check out these checkboxes!'} onColor={'onblueberry'}>
          <Checkbox testId="checkbox1" inputId={'Checkbox1'} label={<Label labelTexts={[{ text: 'Checkbox 1' }]} />} />
          <Checkbox inputId={'Checkbox2'} label={<Label labelTexts={[{ text: 'Checkbox 2' }]} testId="checkbox1-label" />} />
          <Checkbox inputId={'Checkbox3'} label={<Label labelTexts={[{ text: 'Checkbox 3' }]} />} />
        </FormGroup>
      );

      const checkbox = screen.getByTestId('checkbox1');
      expect(checkbox).toBeVisible();
      const checkboxLabel = screen.getByTestId('checkbox1-label');
      expect(checkboxLabel).toBeVisible();
    });
  });
  describe('Når errorWrapperClass settes', (): void => {
    test('Så er stylingen satt riktig på errorWrapper', (): void => {
      render(
        <FormGroup
          errorWrapperClassName="custom-wrapper-class"
          title={'One amazing title'}
          legend={'Check out these checkboxes!'}
          onColor={'onblueberry'}
          errorWrapperTestId="error-wrapper-testid-1"
        >
          <Checkbox inputId={'Checkbox1'} label={<Label labelTexts={[{ text: 'Checkbox 1' }]} />} />
          <Checkbox inputId={'Checkbox2'} label={<Label labelTexts={[{ text: 'Checkbox 2' }]} />} />
          <Checkbox inputId={'Checkbox3'} label={<Label labelTexts={[{ text: 'Checkbox 3' }]} />} />
        </FormGroup>
      );

      const errorWrapperWithCustomClassName = screen.getByTestId('error-wrapper-testid-1');
      expect(errorWrapperWithCustomClassName).toBeVisible();
      expect(errorWrapperWithCustomClassName.className).toBe('custom-wrapper-class');
    });
  });

  describe('Når size er large', (): void => {
    test('Så er stylingen satt riktig på FormGroup children', (): void => {
      render(
        <FormGroup title={'One amazing title'} legend={'Check out these checkboxes!'} size={'large'}>
          <Checkbox inputId={'Checkbox1'} label={<Label labelTexts={[{ text: 'Checkbox 1' }]} />} />
          <Checkbox inputId={'Checkbox2'} label={<Label labelTexts={[{ text: 'Checkbox 2' }]} />} />
          <Checkbox inputId={'Checkbox3'} label={<Label labelTexts={[{ text: 'Checkbox 3' }]} />} />
        </FormGroup>
      );

      // eslint-disable-next-line testing-library/no-node-access
      const checkbox = screen.getByText('Checkbox 1').parentElement?.parentElement?.parentElement;
      expect(checkbox).toBeVisible();
      expect(checkbox?.className).toBe('checkbox-label checkbox-label--large checkbox-label__large--on-white');
    });
  });

  describe('Når FormGroup har checkbox children', (): void => {
    test('Så rendres de', (): void => {
      render(
        <FormGroup title={'One amazing title'} legend={'Check out these checkboxes!'}>
          <Checkbox inputId={'Checkbox1'} label={<Label labelTexts={[{ text: 'Checkbox 1' }]} />} />
          <Checkbox inputId={'Checkbox2'} label={<Label labelTexts={[{ text: 'Checkbox 2' }]} />} />
          <Checkbox inputId={'Checkbox3'} label={<Label labelTexts={[{ text: 'Checkbox 3' }]} />} />
        </FormGroup>
      );

      const checkboxArray = screen.getAllByRole('checkbox');
      expect(checkboxArray.length).toBe(3);
    });
  });

  describe('Når FormGroup har radio children', (): void => {
    test('Så rendres de', (): void => {
      render(
        <FormGroup title={'One amazing title'} legend={'Check out these checkboxes!'}>
          <RadioButton inputId={'Radiobutton1'} label={<Label labelTexts={[{ text: 'Radiobutton 1' }]} />} />
          <RadioButton inputId={'Radiobutton2'} label={<Label labelTexts={[{ text: 'Radiobutton 2' }]} />} />
          <RadioButton inputId={'Radiobutton3'} label={<Label labelTexts={[{ text: 'Radiobutton 3' }]} />} />
        </FormGroup>
      );

      const radioButtonArray = screen.getAllByRole('radio');
      expect(radioButtonArray.length).toBe(3);
    });
  });

  describe('Når FormGroup får error prop satt', (): void => {
    test('Så rendres error melding og styling', (): void => {
      render(
        <FormGroup testId="form-group" error={'error error!'} title={'One amazing title'} legend={'Check out these checkboxes!'}>
          <Checkbox inputId={'Checkbox1'} label={<Label labelTexts={[{ text: 'Checkbox 1' }]} />} />
          <Checkbox inputId={'Checkbox2'} label={<Label labelTexts={[{ text: 'Checkbox 2' }]} />} />
          <Checkbox inputId={'Checkbox3'} label={<Label labelTexts={[{ text: 'Checkbox 3' }]} />} />
        </FormGroup>
      );

      const checkbox = screen.getByLabelText('Checkbox 1');
      expect(checkbox).toHaveAccessibleDescription('error error!');

      const formGroup = screen.getByTestId('form-group');
      // eslint-disable-next-line testing-library/no-node-access
      const errorWrapper = formGroup.children[1];

      expect(errorWrapper?.className).toBe('error-wrapper--with-error');
      expect(formGroup?.className).toBe('form-group-wrapper');
    });
    describe('Når children er Checkbox', (): void => {
      test('Så er feilmelding knyttet til Checkbox', (): void => {
        render(
          <FormGroup error={'error error!'}>
            <Checkbox inputId={'Checkbox1'} label={<Label labelTexts={[{ text: 'Checkbox 1' }]} />} />
          </FormGroup>
        );

        const input = screen.getByLabelText('Checkbox 1');
        expect(input).toHaveAccessibleDescription('error error!');
      });
    });
    describe('Når children er RadioButton', (): void => {
      test('Så er feilmelding knyttet til RadioButton', (): void => {
        render(
          <FormGroup error={'error error!'}>
            <RadioButton inputId={'RadioButton1'} label={<Label labelTexts={[{ text: 'RadioButton 1' }]} />} />
          </FormGroup>
        );

        const input = screen.getByLabelText('RadioButton 1');
        expect(input).toHaveAccessibleDescription('error error!');
      });
    });
    describe('Når children er Input', (): void => {
      test('Så er feilmelding knyttet til Input', (): void => {
        render(
          <FormGroup error={'error error!'}>
            <Input inputId={'Input1'} label={<Label labelTexts={[{ text: 'Input 1' }]} />} />
          </FormGroup>
        );

        const input = screen.getByLabelText('Input 1');
        expect(input).toHaveAccessibleDescription('error error!');
      });
    });
    describe('Når children er TextArea', (): void => {
      test('Så er feilmelding knyttet til TextArea', (): void => {
        render(
          <FormGroup error={'error error!'}>
            <Textarea textareaId={'TextArea1'} label={<Label labelTexts={[{ text: 'TextArea 1' }]} />} />
          </FormGroup>
        );

        const input = screen.getByLabelText('TextArea 1');
        expect(input).toHaveAccessibleDescription('error error!');
      });
    });
    describe('Når children er Select', (): void => {
      test('Så er feilmelding knyttet til Select', (): void => {
        render(
          <FormGroup error={'error error!'}>
            <Select selectId={'Select1'} label={<Label labelTexts={[{ text: 'Select 1' }]} />}>
              <option value={'Option 1'}>{'Option 1'}</option>
            </Select>
          </FormGroup>
        );

        const input = screen.getByLabelText('Select 1');
        expect(input).toHaveAccessibleDescription('error error!');
      });
    });
    describe('Når children er FormGroup med Input', (): void => {
      test('Så er feilmelding knyttet til Input', (): void => {
        render(
          <FormGroup error={'error error!'}>
            <FormGroup>
              <Input inputId={'Input1'} label={<Label labelTexts={[{ text: 'Input 1' }]} />} />
            </FormGroup>
          </FormGroup>
        );

        const input = screen.getByLabelText('Input 1');
        expect(input).toHaveAccessibleDescription('error error!');
      });
    });
    describe('Når children er FormLayout med Input', (): void => {
      test('Så er feilmelding knyttet til Input', (): void => {
        render(
          <FormGroup error={'error error!'}>
            <FormLayout>
              <Input inputId={'Input1'} label={<Label labelTexts={[{ text: 'Input 1' }]} />} />
            </FormLayout>
          </FormGroup>
        );

        const input = screen.getByLabelText('Input 1');
        expect(input).toHaveAccessibleDescription('error error!');
      });
    });
  });

  describe('Når fieldsetName er satt', (): void => {
    test('Så har fieldset name-attributtet satt', (): void => {
      render(
        <FormGroup title={'One amazing title'} legend={'Check out these checkboxes!'} fieldsetName="choices">
          <Checkbox inputId={'Checkbox1'} label={<Label labelTexts={[{ text: 'Checkbox 1' }]} />} />
          <Checkbox inputId={'Checkbox2'} label={<Label labelTexts={[{ text: 'Checkbox 2' }]} />} />
          <Checkbox inputId={'Checkbox3'} label={<Label labelTexts={[{ text: 'Checkbox 3' }]} />} />
        </FormGroup>
      );

      const fieldset = screen.getByRole('group', { name: 'Check out these checkboxes!' });

      expect(fieldset).toBeVisible();
      expect(fieldset).toHaveAttribute('name', 'choices');
    });
  });
});
