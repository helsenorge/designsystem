import React from 'react';

import { StoryObj, Meta } from '@storybook/react';
import { Docs } from 'frankenstein-build-tools';

import './styles.stories.scss';
import Label from '../Label';
import Select from '../Select';
import Tooltip from '../Tooltip';

enum MittensSize {
  XSMALL = 'XS',
  SMALLMEDIUM = 'SM',
  LARGEXLARGE = 'LXL',
}

const getParsedSizeString = (size: MittensSize, xsCount: number, smCount: number, lxlCount: number): string => {
  switch (size) {
    case MittensSize.XSMALL:
      return xsCount.toString();
    case MittensSize.SMALLMEDIUM:
      return smCount.toString();
    case MittensSize.LARGEXLARGE:
      return lxlCount.toString();
  }
};

const getDescriptionText = (xsCount: number, smCount: number, lxlCount: number): string => {
  return `XS: ${xsCount}, S/M: ${smCount}, L/XL: ${lxlCount}`;
};

interface MittenProps {
  initialSize: MittensSize;
}

const Mitten = ({ initialSize }: MittenProps): JSX.Element => {
  const [size, setSize] = React.useState<MittensSize>(initialSize);
  const handleSizeChange = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    setSize(event.target.value as MittensSize);
  };

  return (
    <div>
      <Select defaultValue={size} label={<Label labelTexts={[{ text: 'Velg størrelse', type: 'semibold' }]} />} onChange={handleSizeChange}>
        <option value={MittensSize.XSMALL}>{'XS'}</option>
        <option value={MittensSize.SMALLMEDIUM}>{'S/M'}</option>
        <option value={MittensSize.LARGEXLARGE}>{'L/XL'}</option>
      </Select>
      <h2>{'Vrangbord:'}</h2>
      <p>
        {'Legg opp '}
        <span className="size-format">
          <Tooltip description={getDescriptionText(40, 44, 48)}>{getParsedSizeString(size, 40, 44, 48)}</Tooltip>
        </span>
        {
          ' masker på pinne 3mm på den måten du ønsker. Forslag: italiensk opplegg. Sett en markør som markerer omgangens start i høyre side.'
        }
      </p>
      <p>{'Strikk 5 cm rundt i ribb (1 r, 1 vr), eller eventuelt 10 cm dersom du ønsker å brette vrangborden dobbelt.'}</p>
      <h2>{'Vott:'}</h2>
      <p>
        {'Bytt til pinne 3,5mm. Strikk 1 omgang rundt i glattstrikk samtidig som du øker 2 masker jevnt fordelt = '}
        <span className="size-format">
          <Tooltip description={getDescriptionText(42, 46, 50)}>{getParsedSizeString(size, 42, 46, 50)}</Tooltip>
        </span>
        {' masker.'}
      </p>
      <p>
        {'Strikk glattstrikk rundt til votten måler ca '}
        <span className="size-format">
          <Tooltip description={getDescriptionText(6, 6.5, 7)}>{getParsedSizeString(size, 6, 6.5, 7)}</Tooltip>
        </span>
        {' cm målt fra vrangborden.'}
      </p>
      <p>
        {
          'Det skal nå strikkes inn en hjelpetråd i kontrastfarge på bakstykket som markerer hvor tommelens masker skal plukkes opp til slutt. Dette gjøres slik:'
        }
      </p>
      <h3>{'Høyre vott:'}</h3>
      <p>
        {'Fra maskemarkør: Strikk 1 maske rett, strikk '}
        <span className="size-format">
          <Tooltip description={getDescriptionText(7, 7, 8)}>{getParsedSizeString(size, 7, 7, 8)}</Tooltip>
        </span>
        {' masker med kontrasttråd, sett de '}
        <span className="size-format">
          <Tooltip description={getDescriptionText(7, 7, 8)}>{getParsedSizeString(size, 7, 7, 8)}</Tooltip>
        </span>
        {' maskene tilbake på venstre pinne, strikk de '}
        <span className="size-format">
          <Tooltip description={getDescriptionText(7, 7, 8)}>{getParsedSizeString(size, 7, 7, 8)}</Tooltip>
        </span>
        {' maskene med det vanlige garnet ditt. Strikk rett til omgangens start.'}
      </p>
      <h3>{'Venstre vott:'}</h3>
      <p>
        {'Fra maskemarkør: Strikk '}
        <span className="size-format">
          <Tooltip description={getDescriptionText(13, 15, 16)}>{getParsedSizeString(size, 13, 15, 16)}</Tooltip>
        </span>
        {' masker rett, strikk '}
        <span className="size-format">
          <Tooltip description={getDescriptionText(7, 7, 8)}>{getParsedSizeString(size, 7, 7, 8)}</Tooltip>
        </span>
        {' masker med kontrasttråd, sett de '}
        <span className="size-format">
          <Tooltip description={getDescriptionText(7, 7, 8)}>{getParsedSizeString(size, 7, 7, 8)}</Tooltip>
        </span>
        {' maskene tilbake på venstre pinne, strikk de '}
        <span className="size-format">
          <Tooltip description={getDescriptionText(7, 7, 8)}>{getParsedSizeString(size, 7, 7, 8)}</Tooltip>
        </span>
        {' maskene med det vanlige garnet ditt. Strikk rett til omgangens start.'}
      </p>
      <p>
        {'Strikk så videre rundt i glattstrikk til arbeidet måler ca. '}
        <span className="size-format">
          <Tooltip description={getDescriptionText(15, 16, 17)}>{getParsedSizeString(size, 15, 16, 17)}</Tooltip>
        </span>
        {' cm målt fra vrangborden. (Prøv gjerne på, og start fellingene når kun fingertuppene strikker ut).'}
      </p>
      <h2>{'Fellinger:'}</h2>
      <p>
        {'Det skal nå felles på hver side. Sett en til maskemarkør '}
        <span className="size-format">
          <Tooltip description={getDescriptionText(21, 23, 25)}>{getParsedSizeString(size, 21, 23, 25)}</Tooltip>
        </span>
        {' masker fra den første.'}
      </p>
      <p>{'Fellingene gjøres slik:'}</p>
      <ol>
        <li>
          {
            'pinne: Strikk 1 maske rett, ta 2 masker rett over på høyre pinne uten å strikke de, stikk venstre pinne inn i disse 2 maskene og strikk rett (dette kalles ssk – slip slip knit), strikk rett til 3 masker før neste markør, strikk 2 masker rett sammen, strikk 2 rett, ta 2 masker rett over på høyre pinne uten å strikke de, stikk venstre pinne inn i disse 2 maskene og strikk rett (ssk), strikk rett til 3 masker før markør, strikk 2 masker rett sammen, strikk siste maske på omgangen rett.'
          }
        </li>
        <li>{'pinne: Strikk rett hele omgangen'}</li>
      </ol>
      <p>
        {'Gjenta 1. og 2. pinne i alt '}
        <span className="size-format">
          <Tooltip description={getDescriptionText(3, 3, 3)}>{getParsedSizeString(size, 3, 3, 3)}</Tooltip>
        </span>
        {' ganger = '}
        <span className="size-format">
          <Tooltip description={getDescriptionText(30, 34, 38)}>{getParsedSizeString(size, 30, 34, 38)}</Tooltip>
        </span>
        {' masker.'}
      </p>
      <p>
        {'Strikk så kun 1. pinne i alt '}
        <span className="size-format">
          <Tooltip description={getDescriptionText(4, 5, 6)}>{getParsedSizeString(size, 4, 5, 6)}</Tooltip>
        </span>
        {' ganger = '}
        <span className="size-format">
          <Tooltip description={getDescriptionText(14, 14, 14)}>{getParsedSizeString(size, 14, 14, 14)}</Tooltip>
        </span>
        {' masker.'}
      </p>
      <p>{'Bryt tråden, dra den gjennom alle maskene og snurp sammen. Fest tråden.'}</p>
      <h2>{'Tommel:'}</h2>
      <p>{'Det skal nå plukkes opp masker til tommel med pinne 3,5 mm. Det gjøres slik:'}</p>
      <p>
        {'Hent opp '}
        <span className="size-format">
          <Tooltip description={getDescriptionText(7, 7, 8)}>{getParsedSizeString(size, 7, 7, 8)}</Tooltip>
        </span>
        {' masker nedenfor kontrasttråden, hent om 1 maske i siden, hent opp '}
        <span className="size-format">
          <Tooltip description={getDescriptionText(7, 7, 8)}>{getParsedSizeString(size, 7, 7, 8)}</Tooltip>
        </span>
        {' masker ovenfor kontrasttråden, hent opp 1 maske i siden = '}
        <span className="size-format">
          <Tooltip description={getDescriptionText(16, 16, 18)}>{getParsedSizeString(size, 16, 16, 18)}</Tooltip>
        </span>
        {' masker til tommel. Kontrasttråden kan nå fjernes.'}
      </p>
      <p>
        {'Strikk rundt i glattstrikk til tommelen måler ca. '}
        <span className="size-format">
          <Tooltip description={getDescriptionText(6, 6.5, 7)}>{getParsedSizeString(size, 6, 6.5, 7)}</Tooltip>
        </span>
        {' cm.'}
      </p>
      <p>
        {'Strikk 2 rett sammen ut omgangen. Strikk 1 omgang rett. Strikk 2 rett sammen til det gjenstår '}
        <span className="size-format">
          <Tooltip description={getDescriptionText(0, 0, 1)}>{getParsedSizeString(size, 0, 0, 1)}</Tooltip>
        </span>
        {' maske, strikk '}
        <span className="size-format">
          <Tooltip description={getDescriptionText(0, 0, 1)}>{getParsedSizeString(size, 0, 0, 1)}</Tooltip>
        </span>
        {' maske rett. Bryt tråden, dra den gjennom alle maskene og snurp sammen.'}
      </p>
      <h2>{'Logo:'}</h2>
      <p>
        {
          'Votten er nå ferdig strikket, men ser ganske kjedelig ut. Det er nå tid for å brodere på mønster! Finn et passende startpunkt som gjør at mønsteret legger seg på midten av votten (ta f.eks. utgangspunkt i midterste rad så høyt opp du ønsker å ha logoen). Broder oppå maskene i votten.'
        }
      </p>
    </div>
  );
};

const meta = {
  title: '@helsenorge/designsystem-react/Components/Mittens',
  component: Mitten,
  parameters: {
    docs: {
      page: (): React.JSX.Element => (
        <Docs component={Mitten} supernovaLink="https://frankenstein.helsenorge.design/latest/komponenter/mittens/bruk-lv8iaPve" />
      ),
      description: {
        component: 'Mittens brukes for å varme kalde fingre. Kan brukes av både venner og fiender av Frankenstein.',
      },
    },
  },
  args: {
    initialSize: MittensSize.SMALLMEDIUM,
  },
  argTypes: {
    initialSize: {
      control: 'select',
      options: Object.values(MittensSize),
    },
  },
} satisfies Meta<typeof Mitten>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: args => <Mitten {...args}></Mitten>,
};
