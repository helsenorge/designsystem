import React from 'react';

import classNames from 'classnames';

import { getResources } from './resourceHelper';
import { LanguageLocales } from '../../constants';
import { HNDesignsystemFormFieldTag } from '../../resources/Resources';
import { useLanguage } from '../../utils/language';

import styles from './styles.module.scss';

export type FormFieldTagLevel = 'all-required' | 'required-field' | 'optional';

export interface FormFieldTagProps {
  /** What level is the required tag, sets the styling and the text. */
  level: FormFieldTagLevel;
  /** Texts if overriding SOT */
  resources?: HNDesignsystemFormFieldTag;
  /** Sets the data-testid attribute. */
  testId?: string;
}

const FormFieldTag: React.FC<FormFieldTagProps> = props => {
  const { level, resources, testId } = props;

  const { language } = useLanguage<LanguageLocales>(LanguageLocales.NORWEGIAN);
  const defaultResources = getResources(language);

  const mergedResources: HNDesignsystemFormFieldTag = {
    ...defaultResources,
    ...resources,
  };

  return (
    <span
      data-testid={testId}
      className={classNames(styles['form-field-tag'], { [styles['form-field-tag--optional']]: level === 'optional' })}
    >
      {level === 'all-required'
        ? mergedResources.allRequired
        : level === 'required-field'
          ? mergedResources.requiredField
          : mergedResources.optional}
    </span>
  );
};

export default FormFieldTag;
