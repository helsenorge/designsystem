import React from 'react';

import classNames from 'classnames';

import { getResources } from './resourceHelper';
import { AnalyticsId, LanguageLocales } from '../../constants';
import { HNDesignsystemFormFieldTag } from '../../resources/Resources';
import { useLanguage } from '../../utils/language';

import styles from './styles.module.scss';

export type FormFieldTagLevel =
  | 'all-required'
  | 'required-field'
  | 'optional'
  | 'all-optional'
  | 'required-radiobutton-list'
  | 'required-checkbox-list'
  | 'required-single-checkbox';

export interface FormFieldTagProps {
  /** Id that is placed on the component */
  id?: string;
  /** What level is the required tag, sets the styling and the text. */
  level: FormFieldTagLevel;
  /** Texts if overriding SOT */
  resources?: HNDesignsystemFormFieldTag;
  /** Sets the data-testid attribute. */
  testId?: string;
}

const FormFieldTag: React.FC<FormFieldTagProps> = props => {
  const { id, level, resources, testId } = props;
  const isOptional = level === 'optional' || level === 'all-optional';

  const { language } = useLanguage<LanguageLocales>(LanguageLocales.NORWEGIAN);
  const defaultResources = getResources(language);

  const mergedResources: HNDesignsystemFormFieldTag = {
    ...defaultResources,
    ...resources,
  };

  const textMap = {
    'all-required': mergedResources.allRequired,
    'required-field': mergedResources.requiredField,
    optional: mergedResources.optional,
    'all-optional': mergedResources.allOptional,
    'required-radiobutton-list': mergedResources.requiredRadiobuttonList,
    'required-checkbox-list': mergedResources.requiredCheckboxList,
    'required-single-checkbox': mergedResources.requiredSingleCheckbox,
  };

  return (
    <span
      id={id}
      data-testid={testId}
      data-analyticsid={AnalyticsId.FormFieldTag}
      className={classNames(styles['form-field-tag'], { [styles['form-field-tag--optional']]: isOptional })}
    >
      {textMap[level]}
    </span>
  );
};

export default FormFieldTag;
