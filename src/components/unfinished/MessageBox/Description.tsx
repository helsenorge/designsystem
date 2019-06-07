import * as React from 'react';
import * as classNames from 'classnames';
import {Collapse} from 'react-collapse';

interface Props {
  onExpanderClick: (e: React.MouseEvent<{}>) => void;
  description?: string;
  isThirdParty: boolean;
  maxlength?: number;
  expanded: boolean;
  readMoreButtonText?: string;
}

const Description: React.SFC<Props> = ({
  description,
  onExpanderClick,
  isThirdParty,
  maxlength,
  expanded,
  readMoreButtonText,
}) => {
  let moreButton;
  let descriptionText = description ? description : '';

  const hasExpander = isThirdParty && !!maxlength && maxlength > 0 && descriptionText.trim().length > maxlength;

  if (hasExpander) {
    if (!expanded && maxlength) {
      descriptionText = `${descriptionText.substr(0, maxlength - 3)}...`;
    }

    const buttonClasses: string = classNames({
      'atom_inline-navigationbutton': true,
      'arrow-after': true,
      'arrow-down': !expanded,
      'arrow-up': expanded,
    });

    moreButton = (
      <button className={buttonClasses} onClick={onExpanderClick} aria-expanded={expanded ? 'true' : 'false'}>
        {readMoreButtonText}
      </button>
    );
  }

  let element = null;
  if (!!description) {
    element = hasExpander ? (
      <Collapse isOpened>
        <p dangerouslySetInnerHTML={{__html: descriptionText}} />
        {moreButton}
      </Collapse>
    ) : (
      <p dangerouslySetInnerHTML={{__html: descriptionText}} />
    );
  }

  return element;
};

export default Description;
