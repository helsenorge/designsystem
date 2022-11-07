import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import TagList from './TagList';
import Tag from '../Tag';
import GridExample from '../GridExample';

export default {
  title: 'Components/TagList',
  component: TagList,
  parameters: {
    docs: {
      description: {
        component:
          'Som innbygger vil jeg kunne ta stilling til flere Tager med informasjon i en liste slik at jeg effektivt kan scanne gjennom nøkkelinformasjon for elementer i listen og gjennomføre mine oppgaver.',
      },
    },
  },
} as ComponentMeta<typeof TagList>;

export const Default: ComponentStory<typeof TagList> = (args: any) => (
  <GridExample>
    <TagList>
      <Tag>{'Læring'}</Tag>
      <Tag>{'Psykisk helse'}</Tag>
      <Tag>{'Fysisk helse'}</Tag>
      <Tag>{'Livsstil'}</Tag>
    </TagList>
  </GridExample>
);
