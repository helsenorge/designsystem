import { useRef, useState } from 'react';

import type { ValidationErrors } from '../Validation/types';

import Input from '../Input';
import DrawerNavigationPOC, { createView, type DrawerNavigationCommonProps, type NavigateProps } from './DrawerNavigationPOC';
import FilterOverviewLinkList from './FilterOverviewLinkList';
import ViewOverview from './ViewOverview';
import Button from '../Button';
import Checkbox from '../Checkbox';
import FormGroup from '../FormGroup';
import Label from '../Label';
import Modal from '../Modal';
import NotificationPanel from '../NotificationPanel';
import Toggle from '../Toggle';

import examplestyles from './FinnFastlegeFlyt.module.scss';

type FinnFastlegeViewId = 'overview' | 'location' | 'name-doctor' | 'name-office' | 'oslo-view';

interface ValidationInputPageProps {
  inputValue: string;
  setInputValue: (value: string) => void;
  errors: ValidationErrors;
  clearErrors: () => void;
}

const LocationCountyView: React.FC<DrawerNavigationCommonProps<FinnFastlegeViewId>> = ({ navigate }) => (
  <div>
    <FilterOverviewLinkList>
      <FilterOverviewLinkList.Link title={'Agder'} onClick={() => navigate.goToView('oslo-view')} />
      <FilterOverviewLinkList.Link title={'Akershus'} onClick={() => navigate.goToView('oslo-view')} />
      <FilterOverviewLinkList.Link title={'[...]'} onClick={() => navigate.goToView('oslo-view')} />
      <FilterOverviewLinkList.Link title={'Oslo'} chips={['Alna']} onClick={() => navigate.goToView('oslo-view')} />
      <FilterOverviewLinkList.Link title={'Rogaland'} onClick={() => navigate.goToView('oslo-view')} />
    </FilterOverviewLinkList>
  </div>
);

const OsloView: React.FC<DrawerNavigationCommonProps<FinnFastlegeViewId>> = ({ navigate }) => {
  const bydeler = ['Alna', 'Bjerke', 'Frogner', 'Gamle Oslo', 'Grorud', 'Grünerløkka', 'Osv.'];

  const [selectedBydeler, setSelectedBydeler] = useState<string[]>([]);
  const allSelected = selectedBydeler.length === bydeler.length;

  const handleToggleAll = (): void => {
    setSelectedBydeler(allSelected ? [] : [...bydeler]);
  };

  const handleCheckboxChange = (bydel: string): void => {
    setSelectedBydeler(prev => (prev.includes(bydel) ? prev.filter(b => b !== bydel) : [...prev, bydel]));
  };

  return (
    <div>
      <FilterOverviewLinkList>
        <FilterOverviewLinkList.Link title={'Jeg vil heller angi navnet til fastlegen'} onClick={() => navigate.goToView('name-doctor')} />
        <FilterOverviewLinkList.Link
          title={'Jeg vil heller angi navnet til legekontoret'}
          onClick={() => navigate.goToView('name-office')}
        />
      </FilterOverviewLinkList>
      <div className={examplestyles['toggle']}>
        <Toggle
          label={[
            {
              text: 'Alle bydeler',
            },
          ]}
          checked={allSelected}
          onChange={handleToggleAll}
        />
      </div>
      <FormGroup name="bydeler" className={examplestyles['checkboxes-under-toggle']}>
        {bydeler.map(bydel => (
          <Checkbox
            key={bydel}
            inputId={bydel.toLowerCase().replace(/\s/g, '')}
            label={<Label labelTexts={[{ text: bydel }]} />}
            checked={selectedBydeler.includes(bydel)}
            onChange={() => handleCheckboxChange(bydel)}
          />
        ))}
      </FormGroup>
    </div>
  );
};

const NameDoctorView: React.FC<DrawerNavigationCommonProps<FinnFastlegeViewId> & ValidationInputPageProps> = ({
  inputValue,
  setInputValue,
  errors,
  clearErrors,
  navigate,
}) => (
  <div>
    <Input
      label="Navnet til fastlegen"
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
    <FilterOverviewLinkList>
      <FilterOverviewLinkList.Link title={'Jeg vil heller angi navnet på legekontoret'} onClick={() => navigate.goToView('name-office')} />
      <FilterOverviewLinkList.Link title={'Jeg vil heller angi sted'} onClick={() => navigate.goToView('location')} />
    </FilterOverviewLinkList>
  </div>
);

const NameOfficeView: React.FC<DrawerNavigationCommonProps<FinnFastlegeViewId> & ValidationInputPageProps> = ({
  inputValue,
  setInputValue,
  errors,
  clearErrors,
  navigate,
}) => (
  <div>
    <Input
      label="Navnet på legekontoret"
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
    <FilterOverviewLinkList>
      <FilterOverviewLinkList.Link title={'Jeg vil heller angi navnet på fastlegen'} onClick={() => navigate.goToView('name-doctor')} />
      <FilterOverviewLinkList.Link title={'Jeg vil heller angi sted'} onClick={() => navigate.goToView('location')} />
    </FilterOverviewLinkList>
  </div>
);

const CustomOverview: React.FC<DrawerNavigationCommonProps<FinnFastlegeViewId>> = ({ navigate }) => (
  <div>
    <NotificationPanel compactVariant="outline">
      {'Sted, navn på fastlegen eller legekontoret må være angitt for at vi skal kunne vise deg resultater'}
    </NotificationPanel>
    <ViewOverview
      filters={[
        { title: 'Angi sted', activeFilters: [], viewId: 'location' },
        { title: 'Angi navnet til fastlegen', activeFilters: [], viewId: 'name-doctor' },
        { title: 'Angi navnet til legekontoret', activeFilters: ['Sentrum legekontor'], viewId: 'name-office' },
      ]}
      navigate={navigate}
    />
  </div>
);

const FinnFastLegeFlyt = (): React.ReactNode => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [errors, setErrors] = useState<ValidationErrors>({});
  const drawerRef = useRef<NavigateProps<FinnFastlegeViewId>>(null);

  const homeView = createView<FinnFastlegeViewId>({
    id: 'overview',
    title: 'Filtrer',
    component: CustomOverview,
    resetButtonProps: {
      children: 'Nullstill',
      onClick: (): void => {
        // eslint-disable-next-line no-console
        console.log('nullstill alt');
      },
    },
    resultButtonProps: {
      children: `Vis ${3} treff`,
      onClick: (): void => setModalOpen(true),
    },
  });

  const views = [
    createView<FinnFastlegeViewId>({
      id: 'location',
      title: 'Fylke',
      component: LocationCountyView,
      resetButtonProps: {
        children: 'Nullstill',
        onClick: (): void => {
          setInputValue('');
          setErrors({});
        },
      },
      resultButtonProps: {
        children: `Vis ${3} treff`,
        onClick: (): void => setModalOpen(true),
      },
    }),
    createView<FinnFastlegeViewId, ValidationInputPageProps>({
      id: 'name-doctor',
      title: 'Navnet til fastlegen',
      component: NameDoctorView,
      props: {
        inputValue,
        setInputValue,
        errors,
        clearErrors: (): void => setErrors({}),
      },
    }),
    createView<FinnFastlegeViewId, ValidationInputPageProps>({
      id: 'name-office',
      title: 'Navnet på legekontoret',
      component: NameOfficeView,
      props: {
        inputValue,
        setInputValue,
        errors,
        clearErrors: (): void => setErrors({}),
      },
    }),
    createView<FinnFastlegeViewId>({
      id: 'oslo-view',
      title: 'Bydel',
      component: OsloView,
      props: {
        inputValue,
        setInputValue,
        errors,
        clearErrors: (): void => setErrors({}),
      },
    }),
  ];

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>{'Åpne drawer'}</button>
      <DrawerNavigationPOC
        homeView={homeView}
        views={views}
        isOpen={isOpen}
        onCloseButton={() => setModalOpen(true)}
        navigationRef={drawerRef}
      />
      {modalOpen && (
        <Modal title="Du må angi sted eller navn for at vi skal kunne vise deg resultater" onClose={() => setModalOpen(false)}>
          <span>{'Velg et av alternativene'}</span>
          <div className={examplestyles['modal-buttons']}>
            <Button
              onClick={() => {
                drawerRef.current?.goToView('oslo-view');
                setModalOpen(false);
              }}
            >
              {'Angi bydel'}
            </Button>
            <Button
              variant="outline"
              onClick={() => {
                drawerRef.current?.goToView('location');
                setModalOpen(false);
              }}
            >
              {'Angi et annet fylke'}
            </Button>
            <Button
              variant="outline"
              onClick={() => {
                drawerRef.current?.goToView('name-doctor');
                setModalOpen(false);
              }}
            >
              {'Angi navn på fastlege'}
            </Button>
            <Button
              variant="outline"
              onClick={() => {
                drawerRef.current?.goToView('name-office');
                setModalOpen(false);
              }}
            >
              {'Angi navn på legekontor'}
            </Button>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default FinnFastLegeFlyt;
