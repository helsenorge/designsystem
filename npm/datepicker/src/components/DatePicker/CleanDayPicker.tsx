import React, { useState } from 'react';

import classNames from 'classnames';
import { DayPicker } from 'react-day-picker';
import reactdaypickerstyles from 'react-day-picker/dist/style.module.css';

// import Button from '@helsenorge/designsystem-react/components/Button';
// import Icon from '@helsenorge/designsystem-react/components/Icon';
// import ChevronLeft from '@helsenorge/designsystem-react/components/Icons/ChevronLeft';
// import ChevronRight from '@helsenorge/designsystem-react/components/Icons/ChevronRight';

import {
  CustomChevron,
  CustomDayButton,
  CustomNavButton,
  CustomNextButton,
  CustomPreviousButton,
  SelectedDateContext,
} from './CleanCustom';

import customstyles from './clean.module.scss';

interface CleanDayPickerProps {
  selectedDate?: Date;
  onDateChange?: (date: Date | undefined) => void;
}

const CleanDayPicker = (props: CleanDayPickerProps) => {
  const { selectedDate, onDateChange } = props;

  const datePickerClassNames = {
    ...reactdaypickerstyles,
    ...customstyles,
    // https://daypicker.dev/docs/styling#custom-class-names
    root: classNames(reactdaypickerstyles.root, customstyles.root_override),
    day: classNames(reactdaypickerstyles.day, customstyles['date--default']),
    month_caption: classNames(reactdaypickerstyles['month_caption'], customstyles['custom_month_caption']),
  };

  // Internal state for context - synced with external selectedDate
  const [selected, setSelected] = React.useState<Date | undefined>(selectedDate);

  // Update internal state when prop changes
  React.useEffect(() => {
    setSelected(selectedDate);
  }, [selectedDate]);

  // Handle selection changes
  const handleSelect = (date: Date | undefined): void => {
    setSelected(date);
    onDateChange?.(date);
  };

  return (
    <DayPicker
      captionLayout="dropdown" // dropdown || label
      navLayout="after" // around || after
      mode={'single'}
      fixedWeeks
      required={true} // ?
      selected={selected}
      onSelect={handleSelect}
      classNames={datePickerClassNames}
      modifiers={{
        emphasized: [new Date('11-08-2025'), new Date('11-07-2025')],
        partiallyBooked: [new Date('11-11-2025'), new Date('11-23-2025')],
        fullyBooked: [new Date('11-10-2025'), new Date('11-09-2025')],
        disabled: [new Date('11-13-2025'), new Date('11-14-2025')],
      }}
      onDayClick={(_date, modifiers) => {
        if (modifiers.disabled) {
          alert('Denne datoen er ikke tilgjengelig for valg.');
        }
        if (modifiers.fullyBooked) {
          alert('Denne datoen er fullbooket. Vennligst velg en annen dato.');
        }
      }}
      modifiersClassNames={{
        emphasized: customstyles['date--emphasized'],
        disabled: customstyles['date--disabled'],
        today: customstyles['date--today'],
        selected: customstyles['date--selected'],
        partiallyBooked: customstyles['date--partial'],
        fullyBooked: customstyles['date--fully'],
      }}
      // todo: Overskrive hele month slik aksel gjør? Vanskelig å plassere knappene ellers
      //   components={{
      //     NextMonthButton: props => (
      //       <Button variant="borderless" ariaLabel={props['aria-label']} className={reactdaypickerstyles['button_next']}>
      //         <Icon svgIcon={ChevronRight} />
      //       </Button>
      //     ),
      //     PreviousMonthButton: props => (
      //       <Button variant="borderless" ariaLabel={props['aria-label']} className={reactdaypickerstyles['button_previous']}>
      //         <Icon svgIcon={ChevronLeft} />
      //       </Button>
      //     ),
      //   }}
      // todo: bestem om vi vil overskrive eller ikke, fordelen med RDP sin er at de er like i alle browsers
      components={{
        // Dropdown: CustomSelect,
        DayButton: CustomDayButton,
        NextMonthButton: CustomNextButton,
        PreviousMonthButton: CustomPreviousButton,
      }}
    />
  );
};

export default CleanDayPicker;
