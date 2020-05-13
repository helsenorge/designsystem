import React, {useState, useEffect} from 'react';
import {Icon, IconTypes} from '@helsenorge/designsystem-react';
import Checkbox from '../../../CheckBox/CheckBox';
import styled from 'styled-components';

const StyledIconTile = styled('div')`
  background-color: #f6f5f2;
  border: 1px solid #dedbd3;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledIconName = styled('span')`
  margin-top: 1rem;
  color: #9b978c;
`;

const StyledSearch = styled('input')`
  width: 100%;
  padding: 0.5rem;
  font-size: 1.5rem;
  border: 1px solid #dedbd3;
  outline: none;
  color: #9b978c;
  transition: all 250ms;
  &::placeholder {
    color: #9b978c;
  }
  &:focus,
  :hover {
    background-color: #f6f5f2;
  }
`;

const StyledFilterProps = styled('div')`
  display: flex;
  margin-top: 1rem;
  padding: 0.5rem;
`;

interface IconWallFilterProps {
  onFilterChange: (e: any) => void;
}

function IconWallFilter(props: IconWallFilterProps) {
  const {onFilterChange} = props;
  const [filter, setFilter] = useState('');
  const [isHovered, setIsHovered] = useState(false);
  useEffect(() => {
    onFilterChange({filter, isHovered});
  }, [filter, isHovered]);
  return (
    <div>
      <StyledSearch
        onFocus={e => (e.currentTarget.placeholder = '')}
        onBlur={e => (e.currentTarget.placeholder = 'Filter icon by name...')}
        onInput={e => setFilter(e.currentTarget.value)}
        placeholder="Filter icon by name..."
      />
      <StyledFilterProps>
        <Checkbox label="Hover state" checked={isHovered} onChange={() => setIsHovered(!isHovered)} />
      </StyledFilterProps>
    </div>
  );
}

const allIcons: IconTypes[] = [
  'alarmClock',
  'alertSignFill',
  'alertSignStroke',
  'amputation',
  'anxiety',
  'apple',
  'archive',
  'armFlexing',
  'arrowLeft',
  'arrowRight',
  'arrowUpRight',
  'attachment',
  'atv',
  'avatar',
  'awakePersonOnPillow',
  'baby',
  'bandAid',
  'beerAndPills',
  'bell',
  'bike',
  'birthdayCake',
  'boat',
  'brain',
  'breasts',
  'brokenHeart',
  'brokenPuzzle',
  'bus',
  'calendar',
  'calendarEvent',
  'calendarSave',
  'cancer',
  'car',
  'check',
  'chevronDown',
  'chevronLeft',
  'chevronRight',
  'chevronUp',
  'childPlaying',
  'cigarette',
  'contacts',
  'copy',
  'coronavirus',
  'cough',
  'criticalHealthInfo',
  'cross',
  'depression',
  'digestiveSystem',
  'dizzy',
  'documents',
  'dog',
  'donorCard',
  'draft',
  'eChat',
  'earNoseThroat',
  'elderlyPerson',
  'enterFullScreen',
  'envelope',
  'epilepsy',
  'eraser',
  'errorSignFill',
  'errorSignStroke',
  'europeanHealthCard',
  'exitFullScreen',
  'eye',
  'facebook',
  'female',
  'femaleDoctor',
  'ferry',
  'filterOff',
  'fingerBleed',
  'firstAidKit',
  'football',
  'form',
  'forward',
  'garden',
  'gasCan',
  'globe',
  'handWaving',
  'handWithDisease',
  'heart',
  'helpSign',
  'hiker',
  'history',
  'hivAndAids',
  'hormone',
  'hospital',
  'imgFile',
  'inbox',
  'infoSignFill',
  'infoSignStroke',
  'instagram',
  'jointPain',
  'journal',
  'jpgFile',
  'kidney',
  'kjernejournal',
  'laboratory',
  'laptopBlog',
  'lawBook',
  'lightBulb',
  'location',
  'lock',
  'lungs',
  'makeup',
  'maleDoctor',
  'maleDoctorAndPerson',
  'maleGenitalia',
  'medicine',
  'medicineWarning',
  'mentalHealthAdult',
  'mentalHealthChild',
  'menu',
  'microscope',
  'minus',
  'mirror',
  'mobilePhone',
  'motherHoldingBaby',
  'muscleBack',
  'muscleLeg',
  'mushroom',
  'noFilter',
  'notepad',
  'paintRoller',
  'paperPlane',
  'patientAndPerson',
  'pause',
  'pdfFile',
  'pencil',
  'person',
  'personAndPatient',
  'personInXRayMachine',
  'personOverweight',
  'personRelaxing',
  'personWithBrain',
  'personWithBrokenArm',
  'personWithCrutches',
  'personWithJaw',
  'personWithMagnifyingGlass',
  'personWithSenses',
  'personWorking',
  'pizzaSlice',
  'plane',
  'plant',
  'plusLarge',
  'plusSmall',
  'pngFile',
  'poisonInformation',
  'pregnant',
  'printer',
  'psychosis',
  'publication',
  'puzzle',
  'receptionist',
  'referral',
  'refresh',
  'refund',
  'reply',
  'rocket',
  'rtfFile',
  'save',
  'scale',
  'search',
  'shakingHand',
  'share',
  'skeleton',
  'skin',
  'snake',
  'snapchat',
  'spray',
  'taxi',
  'teddyBear',
  'thinkingAboutBaby',
  'ticket',
  'toolbox',
  'tooth',
  'train',
  'trashCan',
  'twitter',
  'upload',
  'userOrganization',
  'vaccine',
  'verticalDots',
  'videoCamera',
  'videoChat',
  'wallet',
  'warningSignFill',
  'warningSignStroke',
  'window',
  'wordDocument',
  'x',
  'xmlFile',
  'youTube',
];

function IconWall() {
  const [filterProps, setFilterProps] = useState({
    filter: '',
    isHovered: false,
  });
  return (
    <>
      <IconWallFilter onFilterChange={e => setFilterProps(e)} />
      <StyledIconWall>
        {allIcons
          .filter(icon => (filterProps.filter ? icon.includes(filterProps.filter) : icon))
          .map(icon => (
            <StyledIconTile key={icon}>
              <Icon isHovered={filterProps.isHovered} type={icon} />
              <StyledIconName>{icon}</StyledIconName>
            </StyledIconTile>
          ))}
      </StyledIconWall>
    </>
  );
}

const StyledIconWall = styled('div')`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 1rem;
  margin: 1rem 0;
`;

export default IconWall;
