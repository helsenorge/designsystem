import React, { useState } from 'react';

import { Meta } from '@storybook/react-vite';
import { Docs } from 'frankenstein-build-tools';

import DrawerNavigationPOC, { DrawerNavigationCommonProps, ViewConfig } from './DrawerNavigationPOC';
import Badge from '../Badge';
import Button from '../Button';
import LinkList from '../LinkList';
import ViewOverview, { ViewOverviewConfig } from './ViewOverview';
import Input from '../Input';
import { ValidationErrors } from '../Validation/types';

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
const OverviewPage: React.FC<DrawerNavigationCommonProps & OverviewPageProps> = ({ badge, navigate }) => (
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
const TweakParameterOne: React.FC<DrawerNavigationCommonProps> = () => <div>{'Parameter one'}</div>;
const TweakParameterTwo: React.FC<DrawerNavigationCommonProps> = ({ navigate }) => (
  <div>
    <p>{'Parameter two'}</p>
    <Button onClick={() => navigate.goToView('nested')} aria-label="Gå til side for nested parameter">
      {'Go to nested parameter'}
    </Button>
  </div>
);
const NestedParameter: React.FC<DrawerNavigationCommonProps> = ({ navigate }) => (
  <div>
    <p>{'Nested parameter'}</p>
    <Button onClick={() => navigate.goToViewAndClearStack('overview')} aria-label="Gå tilbake til oversiktsside">
      {'Go back to start'}
    </Button>
  </div>
);

type OverviewPageConfig = ViewConfig<OverviewPageProps>;
type TweakParameterOneonfig = ViewConfig;
type TweakParameterTwoConfig = ViewConfig;
type AllConfigs = OverviewPageConfig | TweakParameterOneonfig | TweakParameterTwoConfig;

const parameterViews: AllConfigs[] = [
  { id: 'overview', title: 'Overview', component: OverviewPage, props: { badge: 2 } },
  { id: 'one', title: 'First parameter', component: TweakParameterOne },
  { id: 'two', title: 'Second parameter', component: TweakParameterTwo },
  { id: 'nested', title: 'Nested parameter', component: NestedParameter },
];

export const Default = {
  args: { views: parameterViews },
  render: ({ views }: { views: AllConfigs[] }): JSX.Element => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <div>
        <button onClick={() => setIsOpen(true)}>{'Åpne drawer'}</button>
        <DrawerNavigationPOC views={views} isOpen={isOpen} onCloseButton={() => setIsOpen(false)} />
      </div>
    );
  },
};

const AgePageSimple: React.FC<DrawerNavigationCommonProps> = () => <div>{'Hello age page'}</div>;
const GenderPageSimple: React.FC<DrawerNavigationCommonProps> = () => <div>{'Hello gender page'}</div>;

export const OverviewWithJustProps = {
  render: (): JSX.Element => {
    const [isOpen, setIsOpen] = useState(false);

    const views: ViewOverviewConfig[] = [
      {
        id: 'overview',
        title: 'Filtrer',
        component: ViewOverview,
        props: {
          filters: [
            { title: 'Alder', activeFilters: ['20-30 år', '30-40 år'], viewId: 'age' },
            { title: 'Kjønn', activeFilters: ['Kvinne'], viewId: 'gender' },
          ],
        },
        nullstillButtonProps: {
          children: 'Nullstill',
          variant: 'borderless',
          onClick: (): void => {
            console.log('Cleared');
          },
        },
        showResultButtonProps: {
          children: `Vis ${3} treff`,
          onClick: () => setIsOpen(false),
        },
      },
      {
        id: 'age',
        title: 'Alder',
        component: AgePageSimple,
        showResultButtonProps: {
          children: `Vis ${2} treff`,
          onClick: () => setIsOpen(false),
        },
      },
      {
        id: 'gender',
        title: 'Kjønn',
        component: GenderPageSimple,
        showResultButtonProps: {
          children: `Vis ${1} treff`,
          onClick: () => setIsOpen(false),
        },
      },
    ];

    return (
      <div>
        <button onClick={() => setIsOpen(true)}>{'Åpne drawer'}</button>
        <DrawerNavigationPOC views={views} isOpen={isOpen} onCloseButton={() => setIsOpen(false)} />
      </div>
    );
  },
};

export const OverviewWithJustPropsAlwaysOpen = {
  render: (): JSX.Element => {
    const views: ViewOverviewConfig[] = [
      {
        id: 'overview',
        title: 'Filtrer',
        component: ViewOverview,
        props: {
          filters: [
            { title: 'Alder', activeFilters: ['20-30 år'], viewId: 'age' },
            { title: 'Kjønn', activeFilters: ['Mann', 'Kvinne'], viewId: 'gender' },
          ],
        },
        nullstillButtonProps: { children: 'Nullstill', variant: 'borderless', onClick: () => undefined },
        showResultButtonProps: { children: 'Vis 3 treff', onClick: () => undefined },
      },
      {
        id: 'age',
        title: 'Alder',
        component: AgePageSimple,
        nullstillButtonProps: { children: 'Nullstill', variant: 'borderless', onClick: () => undefined },
        showResultButtonProps: { children: 'Vis 4 treff', onClick: () => undefined },
      },
      {
        id: 'gender',
        title: 'Kjønn',
        component: GenderPageSimple,
        nullstillButtonProps: { children: 'Nullstill', variant: 'borderless', onClick: () => undefined },
        showResultButtonProps: { children: 'Vis 5 treff', onClick: () => undefined },
      },
    ];

    return (
      <div>
        <DrawerNavigationPOC views={views} isOpen={true} onCloseButton={() => null} />
      </div>
    );
  },
};

const CustomOverview: React.FC<DrawerNavigationCommonProps> = ({ navigate }) => (
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
const AgePage: React.FC<DrawerNavigationCommonProps> = () => <div>{'Hello age page'}</div>;
const GenderPage: React.FC<DrawerNavigationCommonProps> = () => <div>{'Hello gender page'}</div>;

const customOverviewViews: ViewConfig[] = [
  { id: 'overview', title: 'Filtrer', component: CustomOverview },
  { id: 'age', title: 'Alder', component: AgePage },
  { id: 'gender', title: 'Kjønn', component: GenderPage },
];

export const OverviewWithCustomComponent = {
  args: { views: customOverviewViews },
  render: ({ views }: { views: ViewConfig[] }): JSX.Element => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <div>
        <button onClick={() => setIsOpen(true)}>{'Åpne drawer'}</button>
        <DrawerNavigationPOC views={views} isOpen={isOpen} onCloseButton={() => setIsOpen(false)} />
      </div>
    );
  },
};

interface ValidationInputPageProps {
  inputRef: React.RefObject<HTMLInputElement>;
  inputValue: string;
  setInputValue: (value: string) => void;
  errors: ValidationErrors;
  clearErrors: () => void;
}

const ValidationInputPage: React.FC<DrawerNavigationCommonProps & ValidationInputPageProps> = ({
  inputRef,
  inputValue,
  setInputValue,
  errors,
  clearErrors,
}) => (
  <div>
    <Input
      ref={inputRef}
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
  render: () => {
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

    const views = [
      {
        id: 'overview',
        title: 'Filtrer',
        component: ViewOverview,
        props: {
          filters: [{ title: 'Dato', activeFilters: [], viewId: 'date' }],
        },
        nullstillButtonProps: {
          children: 'Nullstill',
          onClick: (): void => {
            setInputValue('');
            setErrors({});
          },
        },
        showResultButtonProps: {
          children: `Vis ${3} treff`,
          onClick: (): void => setIsOpen(false),
        },
      },
      {
        id: 'date',
        title: 'Dato',
        component: ValidationInputPage,
        props: {
          inputRef,
          inputValue,
          setInputValue,
          errors,
          clearErrors: (): void => setErrors({}),
        },
        nullstillButtonProps: {
          children: 'Nullstill',
          onClick: (): void => {
            setInputValue('');
            setErrors({});
          },
        },
        showResultButtonProps: {
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
        <DrawerNavigationPOC views={views} isOpen={isOpen} onCloseButton={() => setIsOpen(false)} />
      </div>
    );
  },
};
