import React, { useState } from 'react';

import { Docs } from 'frankenstein-build-tools';

import type { ValidationErrors } from '../Validation/types';
import type { Meta } from '@storybook/react-vite';

import DrawerNavigationPOC, { createView, type DrawerNavigationCommonProps, type ViewConfig } from './DrawerNavigationPOC';
import Badge from '../Badge';
import Button from '../Button';
import LinkList from '../LinkList';
import ViewOverview, { type ViewOverviewConfig } from './ViewOverview';
import Input from '../Input';
import FinnFastLegeFlyt from './FinnFastlegeFlyt.example';

const meta = {
  title: '@helsenorge/designsystem-react/Components/DrawerNavigationPOC',
  component: DrawerNavigationPOC,
  tags: ['new'],
  parameters: {
    docs: {
      page: (): React.ReactNode => <Docs component={DrawerNavigationPOC} />,
      description: {
        component:
          'Drawer er en generisk container komponent som brukes for å vise innhold fra bunn til topp på mobil, og venstre eller høyre til motsatt side på desktop. Samtidig som det lar brukeren se litt av innholdet bak komponentet. Komponenten er controlled og vises via `isOpen` prop',
      },
      story: {
        inline: false,
        iframeHeight: '40rem',
      },
    },
  },
  args: {},
  argTypes: {},
} satisfies Meta<typeof DrawerNavigationPOC>;

export default meta;

interface OverviewPageProps {
  badge: number;
}
const OverviewPage: React.FC<DrawerNavigationCommonProps<DefaultViewIds> & OverviewPageProps> = ({ badge, navigate }) => (
  <div>
    <LinkList>
      <LinkList.Link onClick={() => navigate.goToView('one')} htmlMarkup="button" aria-label="Gå til side for å endre parameter 1">
        {'Parameter one '}
        <Badge>{badge}</Badge>
      </LinkList.Link>
      <LinkList.Link onClick={() => navigate.goToView('two')} htmlMarkup="button" aria-label="Gå til side for å endre parameter 2">
        {'Parameter two'}
      </LinkList.Link>
    </LinkList>
  </div>
);
const TweakParameterOne: React.FC<DrawerNavigationCommonProps<DefaultViewIds>> = () => <div>{'Parameter one'}</div>;
const TweakParameterTwo: React.FC<DrawerNavigationCommonProps<DefaultViewIds>> = ({ navigate }) => (
  <div>
    <p>{'Parameter two'}</p>
    <Button onClick={() => navigate.goToView('nested')} aria-label="Gå til side for nested parameter">
      {'Go to nested parameter'}
    </Button>
  </div>
);
const NestedParameter: React.FC<DrawerNavigationCommonProps<DefaultViewIds>> = ({ navigate }) => (
  <div>
    <p>{'Nested parameter'}</p>
    <Button onClick={() => navigate.goToViewAndClearStack('overview')} aria-label="Gå tilbake til oversiktsside">
      {'Go back to start'}
    </Button>
  </div>
);

type DefaultViewIds = 'overview' | 'one' | 'two' | 'nested';

const homeView = createView({ id: 'overview', title: 'Overview', component: OverviewPage, props: { badge: 2 } });
const parameterViews = [
  createView({ id: 'one', title: 'First parameter', component: TweakParameterOne }),
  createView({ id: 'two', title: 'Second parameter', component: TweakParameterTwo }),
  createView({ id: 'nested', title: 'Nested parameter', component: NestedParameter }),
];

export const Default = {
  render: (): React.JSX.Element => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <div>
        <button onClick={() => setIsOpen(true)}>{'Åpne drawer'}</button>
        <DrawerNavigationPOC homeView={homeView} views={parameterViews} isOpen={isOpen} onCloseButton={() => setIsOpen(false)} />
      </div>
    );
  },
};

type FilterViewId = 'overview' | 'age' | 'gender';

const AgePageSimple: React.FC<DrawerNavigationCommonProps<FilterViewId>> = () => <div>{'Hello age page'}</div>;
const GenderPageSimple: React.FC<DrawerNavigationCommonProps<FilterViewId>> = () => <div>{'Hello gender page'}</div>;

export const OverviewWithJustProps = {
  render: (): React.JSX.Element => {
    const [isOpen, setIsOpen] = useState(false);

    const overviewHome: ViewOverviewConfig<FilterViewId> = {
      id: 'overview',
      title: 'Filtrer',
      component: ViewOverview,
      props: {
        filters: [
          { title: 'Alder', activeFilters: ['20-30 år', '30-40 år'], viewId: 'age' },
          { title: 'Kjønn', activeFilters: ['Kvinne'], viewId: 'gender' },
        ],
      },
      resetButtonProps: {
        children: 'Nullstill',
        variant: 'borderless',
        onClick: (): void => {
          console.log('Cleared');
        },
      },
    };

    const views: ViewOverviewConfig<FilterViewId>[] = [
      {
        id: 'age',
        title: 'Alder',
        component: AgePageSimple,
      },
      {
        id: 'gender',
        title: 'Kjønn',
        component: GenderPageSimple,
      },
    ];

    return (
      <div>
        <button onClick={() => setIsOpen(true)}>{'Åpne drawer'}</button>
        <DrawerNavigationPOC
          homeView={overviewHome}
          views={views}
          isOpen={isOpen}
          onCloseButton={() => setIsOpen(false)}
          defaultResultButtonProps={{
            children: `Vis ${3} treff`,
            onClick: () => setIsOpen(false),
          }}
        />
      </div>
    );
  },
};

export const OverviewWithJustPropsAlwaysOpen = {
  render: (): React.JSX.Element => {
    const overviewHome: ViewOverviewConfig<FilterViewId> = {
      id: 'overview',
      title: 'Filtrer',
      component: ViewOverview,
      props: {
        filters: [
          { title: 'Alder', activeFilters: ['20-30 år'], viewId: 'age' },
          { title: 'Kjønn', activeFilters: ['Mann', 'Kvinne'], viewId: 'gender' },
        ],
      },
    };

    const views: ViewOverviewConfig<FilterViewId>[] = [
      {
        id: 'age',
        title: 'Alder',
        component: AgePageSimple,
      },
      {
        id: 'gender',
        title: 'Kjønn',
        component: GenderPageSimple,
      },
    ];

    return (
      <div>
        <DrawerNavigationPOC
          homeView={overviewHome}
          views={views}
          isOpen={true}
          onCloseButton={() => null}
          defaultResetButtonProps={{ children: 'Nullstill', variant: 'borderless', onClick: () => undefined }}
          defaultResultButtonProps={{ children: 'Vis 3 treff', onClick: () => undefined }}
        />
      </div>
    );
  },
};

type CustomOverviewViewId = 'overview' | 'age' | 'gender';

const CustomOverview: React.FC<DrawerNavigationCommonProps<CustomOverviewViewId>> = ({ navigate }) => (
  <div>
    <span>{'Alert message here'}</span>
    <ViewOverview
      filters={[
        { title: 'Alder', activeFilters: ['20-30 år'], viewId: 'age' },
        { title: 'Kjønn', activeFilters: ['Mann', 'Kvinne'], onClick: () => navigate.goToView('gender') },
      ]}
      navigate={navigate}
    />
  </div>
);
const AgePage: React.FC<DrawerNavigationCommonProps<CustomOverviewViewId>> = () => <div>{'Hello age page'}</div>;
const GenderPage: React.FC<DrawerNavigationCommonProps<CustomOverviewViewId>> = () => <div>{'Hello gender page'}</div>;

const customOverviewHome: ViewConfig<CustomOverviewViewId> = {
  id: 'overview',
  title: 'Filtrer',
  component: CustomOverview,
};
const customOverviewViews: ViewConfig<CustomOverviewViewId>[] = [
  { id: 'age', title: 'Alder', component: AgePage },
  { id: 'gender', title: 'Kjønn', component: GenderPage },
];

export const OverviewWithCustomComponent = {
  render: (): React.JSX.Element => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <div>
        <button onClick={() => setIsOpen(true)}>{'Åpne drawer'}</button>
        <DrawerNavigationPOC
          homeView={customOverviewHome}
          views={customOverviewViews}
          isOpen={isOpen}
          onCloseButton={() => setIsOpen(false)}
        />
      </div>
    );
  },
};

interface ValidationInputPageProps {
  inputValue: string;
  setInputValue: (value: string) => void;
  errors: ValidationErrors;
  clearErrors: () => void;
}

type ValidationViewId = 'overview' | 'date';

const ValidationInputPage: React.FC<DrawerNavigationCommonProps<ValidationViewId> & ValidationInputPageProps> = ({
  inputValue,
  setInputValue,
  errors,
  clearErrors,
}) => (
  <div>
    <Input
      label="Skriv inn verdi"
      required
      value={inputValue}
      onChange={e => {
        setInputValue(e.target.value);
        if (Object.keys(errors).length > 0) {
          clearErrors();
        }
      }}
      error={Object.keys(errors).length > 0}
      errorText={errors.input?.message as string}
    />
  </div>
);

export const WithValidation = {
  render: (): React.ReactNode => {
    const [isOpen, setIsOpen] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [errors, setErrors] = useState<ValidationErrors>({});
    const inputRef = React.useRef<HTMLInputElement>(null);

    const validate = (): boolean => {
      if (!inputValue.trim()) {
        setErrors({ input: { message: 'Du må fylle ut dette feltet', ref: inputRef.current ?? undefined } });
        return false;
      }
      setErrors({});
      return true;
    };

    const homeView = {
      id: 'overview' as const,
      title: 'Filtrer',
      component: ViewOverview,
      props: {
        filters: [{ title: 'Dato', activeFilters: [], viewId: 'date' }],
      },
    };

    const views = [
      {
        id: 'date' as const,
        title: 'Dato',
        component: ValidationInputPage,
        props: {
          inputValue,
          setInputValue,
          errors,
          clearErrors: (): void => setErrors({}),
        },
        resultButtonProps: {
          children: `Vis ${3} treff`,
          onClick: (): void => {
            if (validate()) {
              setIsOpen(false);
            }
          },
        },
      },
    ];

    return (
      <div>
        <button onClick={() => setIsOpen(true)}>{'Åpne drawer'}</button>
        <DrawerNavigationPOC
          homeView={homeView}
          views={views}
          isOpen={isOpen}
          onCloseButton={() => setIsOpen(false)}
          defaultResetButtonProps={{
            children: 'Nullstill',
            onClick: (): void => {
              setInputValue('');
              setErrors({});
            },
          }}
          defaultResultButtonProps={{
            children: `Vis ${3} treff`,
            onClick: (): void => setIsOpen(false),
          }}
        />
      </div>
    );
  },
};

export const FinnFastlege = {
  render: (): React.ReactNode => <FinnFastLegeFlyt />,
};
