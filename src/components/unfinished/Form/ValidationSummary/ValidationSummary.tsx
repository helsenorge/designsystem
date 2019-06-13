import * as React from 'react';
import './validation-summary.scss';
import {FormChild} from '../Form';
import {log} from '../../../../utils/logger';

export interface Props {
  components: Array<FormChild>;
  submitted?: boolean;
  header: string;
}

const ValidationSummary: React.SFC<Props> = ({submitted, components, header}) => {
  if (submitted) {
    const componentsWithErrors = sortComponentsWithErrorsByApperanceInDOM(getComponentsWithErrors(components));
    const listItems = componentsWithErrors.map((el: FormChild) => {
      let text;
      if (el.props.label) {
        text = el.props.label;
      } else if (el.props.legend) {
        text = el.props.legend;
      }
      return (
        <li key={el.props.id} className="mol_validation-summary__listitem">
          <a className="mol_validation-summary__link" href={`#${el.props.id}-wrapper`}>
            {text}
          </a>
        </li>
      );
    });
    if (componentsWithErrors.length) {
      return (
        <div className="mol_validation-summary">
          <h3 className="mol_validation-summary__header">{header}</h3>
          <ul className="mol_validation-summary__list">{listItems}</ul>
        </div>
      );
    }
  }
  return null;
};

function getComponentsWithErrors(components: Array<FormChild>) {
  const componentsWithErrors = components.filter((c: FormChild) => {
    const componentToValidate = c && c.getWrappedInstance ? c.getWrappedInstance() : c;
    if (
      (componentToValidate &&
        componentToValidate.props &&
        componentToValidate.props.isValid &&
        !componentToValidate.props.isValid()) ||
      (componentToValidate && componentToValidate.isValid && !componentToValidate.isValid())
    ) {
      return true;
    }
  });
  return componentsWithErrors;
}

function sortComponentsWithErrorsByApperanceInDOM(components: Array<FormChild>) {
  return components.sort((a, b) => {
    const el1 = document.getElementById(`${a.props.id}-wrapper`);
    const el2 = document.getElementById(`${b.props.id}-wrapper`);
    if (!el1 || !el2) {
      const missingElement = !el1 ? `${a.props.id}-wrapper` : `${b.props.id}-wrapper`;
      log(`Validation-summary: could not find element with id ${missingElement}`);
    }
    if (el1 && el2) {
      const compare = el1.compareDocumentPosition(el2);
      if (compare === 2) {
        return 1;
      } else if (compare === 4) {
        return -1;
      }
    }
    return 0;
  });
}

export default ValidationSummary;
