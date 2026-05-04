import { useState } from 'react';

import type { ValidationErrors } from '../../Validation/types';

import DrawerNavigation from './DrawerNavigation';
import { useDrawerNavigation } from './useDrawerNavigation';
import Button from '../../Button';
import Checkbox from '../../Checkbox';
import FormGroup from '../../FormGroup';
import Input from '../../Input';
import Label from '../../Label';
import Modal from '../../Modal';
import NotificationPanel from '../../NotificationPanel';
import Toggle from '../../Toggle';
import FilterLinkList from '../FilterLinkList/FilterLinkList';

import examplestyles from './FinnFastlegeFlyt.module.scss';

type FinnFastlegeViewId = 'overview' | 'location' | 'name-doctor' | 'name-office' | 'oslo-view';

interface ValidationInputPageProps {
  inputValue: string;
  setInputValue: (value: string) => void;
  errors: ValidationErrors;
  clearErrors: () => void;
}

const LocationCountyView = (): React.ReactNode => {
  const { goToView } = useDrawerNavigation<FinnFastlegeViewId>();
  return (
    <div>
      <FilterLinkList>
        <FilterLinkList.Link title={'Agder'} onClick={() => goToView('oslo-view')} />
        <FilterLinkList.Link title={'Akershus'} onClick={() => goToView('oslo-view')} />
        <FilterLinkList.Link title={'[...]'} onClick={() => goToView('oslo-view')} />
        <FilterLinkList.Link title={'Oslo'} chips={['Alna']} onClick={() => goToView('oslo-view')} />
        <FilterLinkList.Link title={'Rogaland'} onClick={() => goToView('oslo-view')} />
      </FilterLinkList>
    </div>
  );
};

const OsloView = (): React.ReactNode => {
  const { goToView } = useDrawerNavigation<FinnFastlegeViewId>();
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
      <FilterLinkList>
        <FilterLinkList.Link title={'Jeg vil heller angi navnet til fastlegen'} onClick={() => goToView('name-doctor')} />
        <FilterLinkList.Link title={'Jeg vil heller angi navnet til legekontoret'} onClick={() => goToView('name-office')} />
      </FilterLinkList>
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

const NameDoctorView = ({ inputValue, setInputValue, errors, clearErrors }: ValidationInputPageProps): React.ReactNode => {
  const { goToView } = useDrawerNavigation<FinnFastlegeViewId>();
  return (
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
      <FilterLinkList>
        <FilterLinkList.Link title={'Jeg vil heller angi navnet på legekontoret'} onClick={() => goToView('name-office')} />
        <FilterLinkList.Link title={'Jeg vil heller angi sted'} onClick={() => goToView('location')} />
      </FilterLinkList>
    </div>
  );
};

const NameOfficeView = ({ inputValue, setInputValue, errors, clearErrors }: ValidationInputPageProps): React.ReactNode => {
  const { goToView } = useDrawerNavigation<FinnFastlegeViewId>();
  return (
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
      <FilterLinkList>
        <FilterLinkList.Link title={'Jeg vil heller angi navnet på fastlegen'} onClick={() => goToView('name-doctor')} />
        <FilterLinkList.Link title={'Jeg vil heller angi sted'} onClick={() => goToView('location')} />
      </FilterLinkList>
    </div>
  );
};

const CustomOverview = (): React.ReactNode => {
  const { goToView } = useDrawerNavigation<FinnFastlegeViewId>();
  return (
    <div>
      <NotificationPanel compactVariant="outline">
        {'Sted, navn på fastlegen eller legekontoret må være angitt for at vi skal kunne vise deg resultater'}
      </NotificationPanel>
      <FilterLinkList>
        <FilterLinkList.Link title={'Angi sted'} onClick={() => goToView('location')} />
        <FilterLinkList.Link title={'Angi navnet til fastlegen'} onClick={() => goToView('name-doctor')} />
        <FilterLinkList.Link
          title={'Angi navnet til legekontoret'}
          chips={['Sentrum legekontor']}
          onClick={() => goToView('name-office')}
        />
      </FilterLinkList>
    </div>
  );
};

const NavigationModal = ({ onClose }: { onClose: () => void }): React.ReactNode => {
  const { goToView } = useDrawerNavigation<FinnFastlegeViewId>();
  return (
    <Modal title="Du må angi sted eller navn for at vi skal kunne vise deg resultater" onClose={onClose}>
      <span>{'Velg et av alternativene'}</span>
      <div className={examplestyles['modal-buttons']}>
        <Button
          onClick={() => {
            goToView('oslo-view');
            onClose();
          }}
        >
          {'Angi bydel'}
        </Button>
        <Button
          variant="outline"
          onClick={() => {
            goToView('location');
            onClose();
          }}
        >
          {'Angi et annet fylke'}
        </Button>
        <Button
          variant="outline"
          onClick={() => {
            goToView('name-doctor');
            onClose();
          }}
        >
          {'Angi navn på fastlege'}
        </Button>
        <Button
          variant="outline"
          onClick={() => {
            goToView('name-office');
            onClose();
          }}
        >
          {'Angi navn på legekontor'}
        </Button>
      </div>
    </Modal>
  );
};

const FinnFastlegeFlytExample = (): React.ReactNode => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [errors, setErrors] = useState<ValidationErrors>({});

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>{'Åpne drawer'}</button>
      <DrawerNavigation isOpen={isOpen} onCloseButton={() => setModalOpen(true)}>
        <DrawerNavigation.View<FinnFastlegeViewId> id="overview" title="Filtrer" home>
          <CustomOverview />
        </DrawerNavigation.View>
        <DrawerNavigation.View<FinnFastlegeViewId> id="location" title="Fylke">
          <LocationCountyView />
        </DrawerNavigation.View>
        <DrawerNavigation.View<FinnFastlegeViewId> id="name-doctor" title="Navnet til fastlegen">
          <NameDoctorView inputValue={inputValue} setInputValue={setInputValue} errors={errors} clearErrors={(): void => setErrors({})} />
        </DrawerNavigation.View>
        <DrawerNavigation.View<FinnFastlegeViewId> id="name-office" title="Navnet på legekontoret">
          <NameOfficeView inputValue={inputValue} setInputValue={setInputValue} errors={errors} clearErrors={(): void => setErrors({})} />
        </DrawerNavigation.View>
        <DrawerNavigation.View<FinnFastlegeViewId> id="oslo-view" title="Bydel">
          <OsloView />
        </DrawerNavigation.View>
        {modalOpen && <NavigationModal onClose={() => setModalOpen(false)} />}
      </DrawerNavigation>
    </div>
  );
};

export default FinnFastlegeFlytExample;
