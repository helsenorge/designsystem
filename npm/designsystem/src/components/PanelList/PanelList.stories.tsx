import React from 'react';
import { select, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import Panel, { PanelVariant } from '../Panel';
import PanelList from '../PanelList';
import { withA11y } from '@storybook/addon-a11y';

const stories = storiesOf('PanelList', module);
stories.addDecorator(withKnobs);
stories.addDecorator(withA11y);

stories.add('Default', () => {
  return (
    <div style={{ width: '90vw', padding: '1vw', backgroundColor: 'white' }}>
      <PanelList variant={select('Variant', PanelVariant, PanelVariant.fill)}>
        <Panel title="Overskrift 1">
          {
            'Syk og ønsker legetime? Hvis fastlegen din tilbyr videotimer på Helsenorge, kan det være et godt alternativ. Da slipper du å møte opp fysisk på legekontoret.'
          }
        </Panel>
        <Panel title="Overskrift 2">
          {
            'Syk og ønsker legetime? Hvis fastlegen din tilbyr videotimer på Helsenorge, kan det være et godt alternativ. Da slipper du å møte opp fysisk på legekontoret.'
          }
        </Panel>
        <Panel title="Overskrift 3">
          {
            'Syk og ønsker legetime? Hvis fastlegen din tilbyr videotimer på Helsenorge, kan det være et godt alternativ. Da slipper du å møte opp fysisk på legekontoret.'
          }
        </Panel>
        <Panel title="Overskrift 4">
          {
            'Syk og ønsker legetime? Hvis fastlegen din tilbyr videotimer på Helsenorge, kan det være et godt alternativ. Da slipper du å møte opp fysisk på legekontoret.'
          }
        </Panel>
      </PanelList>
    </div>
  );
});
