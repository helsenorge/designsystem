import React from 'react';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';
import Dropdown, { DropdownMode } from './Dropdown';
import Checkbox from '../Checkbox';
import RadioButton from '../RadioButton';

const stories = storiesOf('Dropdown', module);
stories.addDecorator(withKnobs);
stories.addDecorator(withA11y);

stories.add('RadioButton', () => (
  <div style={{ width: '60rem' }}>
    <Dropdown
      label={text('Dropdown label', 'Ta et valg')}
      toggleLabel={text('Toggle label', 'Hva skjer i kroppen?')}
      closeText={text('Close text', 'Lukk')}
      open={boolean('Open', false)}
      mode={select('Mode', DropdownMode, DropdownMode.onwhite)}
      transparent={boolean('Transparent', false)}
      fluid={boolean('Fluid', false)}
      noCloseButton={boolean('No close button', false)}
      disabled={boolean('Disabled', false)}
      onToggle={value => console.log('onToggle', value)}
    >
      <RadioButton label="Valg 1" name="radiobutton" />
      <RadioButton label="Valg 2" name="radiobutton" />
      <RadioButton label="Valg 3" name="radiobutton" />
      <RadioButton label="Valg 4" name="radiobutton" />
      <RadioButton label="Valg 5" name="radiobutton" />
      <RadioButton label="Valg 6" name="radiobutton" />
      <RadioButton label="Valg 7" name="radiobutton" />
      <RadioButton label="Valg 8" name="radiobutton" />
      <RadioButton label="Valg 9" name="radiobutton" />
    </Dropdown>
  </div>
));
stories.add('Checkbox', () => (
  <div style={{ width: '60rem' }}>
    <Dropdown
      label={text('Dropdown label', 'Ta et valg')}
      toggleLabel={text('Toggle label', 'Hva skjer i kroppen?')}
      closeText={text('Close text', 'Lukk')}
      open={boolean('Open', false)}
      mode={select('Mode', DropdownMode, DropdownMode.onwhite)}
      transparent={boolean('Transparent', false)}
      fluid={boolean('Fluid', false)}
      noCloseButton={boolean('No close button', false)}
      disabled={boolean('Disabled', false)}
      onToggle={value => console.log('onToggle', value)}
    >
      <Checkbox label="Valg 1" name="checkbox" />
      <Checkbox label="Valg 2" name="checkbox" />
      <Checkbox label="Valg 3" name="checkbox" />
      <Checkbox label="Valg 4" name="checkbox" />
      <Checkbox label="Valg 5" name="checkbox" />
      <Checkbox label="Valg 6" name="checkbox" />
      <Checkbox label="Valg 7" name="checkbox" />
      <Checkbox label="Valg 8" name="checkbox" />
      <Checkbox label="Valg 9" name="checkbox" />
    </Dropdown>
  </div>
));
stories.add('Custom content', () => (
  <div style={{ width: '60rem' }}>
    <Dropdown
      label={text('Dropdown label', 'Ta et valg')}
      toggleLabel={text('Toggle label', 'Hva skjer i kroppen?')}
      closeText={text('Close text', 'Lukk')}
      open={boolean('Open', false)}
      mode={select('Mode', DropdownMode, DropdownMode.onwhite)}
      transparent={boolean('Transparent', false)}
      fluid={boolean('Fluid', false)}
      noCloseButton={boolean('No close button', false)}
      disabled={boolean('Disabled', false)}
      onToggle={value => console.log('onToggle', value)}
    >
      <div style={{ padding: '1rem' }}>
        {
          'Hva skjer i kroppen? Hva skjer i kroppen? Hva skjer i kroppen? Hva skjer i kroppen? Hva skjer i kroppen? Hva skjer i kroppen? Hva skjer i kroppen? Hva skjer i kroppen? Hva skjer i kroppen? Hva skjer i kroppen? Hva skjer i kroppen? Hva skjer i kroppen?'
        }
      </div>
    </Dropdown>
  </div>
));
