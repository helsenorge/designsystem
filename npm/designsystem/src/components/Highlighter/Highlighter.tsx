import React from 'react';

import { isComponent } from '../../utils/component';
import uuid from '../../utils/uuid';
import { DuolistGroup, DuolistGroupProps } from '../Duolist';

import styles from './styles.module.scss';

interface HighlightProps {
  children?: React.ReactNode;
  searchText?: string;
}

export const Highlighter = ({ children, searchText }: HighlightProps): React.ReactElement | null => {
  if (!searchText) {
    return <>{children}</>;
  }

  const highlightRegex = new RegExp(`(${searchText})`, 'i');

  const replaceWithMarkTag = (text: string): (string | React.JSX.Element)[] => {
    return text.split(highlightRegex).map(part => {
      if (highlightRegex.test(part)) {
        const id = uuid();
        return (
          <mark key={id} className={styles.highlight}>
            {part}
          </mark>
        );
      }
      return part;
    });
  };

  const recursivelyHighlight = (node: React.ReactNode): React.ReactNode => {
    if (typeof node === 'string') {
      return replaceWithMarkTag(node);
    }

    if (React.isValidElement(node)) {
      const { children: nodeChildren, ...props } = node.props;

      // Handle DuoList specifically
      if (isComponent<DuolistGroupProps>(node, DuolistGroup)) {
        const term = replaceWithMarkTag(node.props.term as string);
        const description = replaceWithMarkTag(node.props.description as string);
        return React.cloneElement(node, {
          term,
          description,
        });
      }

      if (!nodeChildren) {
        return node;
      }

      const highlightedChildren = React.Children.toArray(nodeChildren).map(child => recursivelyHighlight(child));
      return React.cloneElement(node, props, highlightedChildren);
    }

    return node;
  };

  return <>{React.Children.map(children, recursivelyHighlight)}</>;
};

export default Highlighter;
