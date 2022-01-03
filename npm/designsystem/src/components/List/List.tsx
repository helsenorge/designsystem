import React from 'react';

import classNames from 'classnames';

import listStyles from './styles.module.scss';

interface ListProps {
  children: React.ReactNode[];
  className?: string;
  /** Sets the data-testid attribute. */
  testId?: string;
}

function List(props: ListProps) {
  const { children, className, testId } = props;
  return (
    <ul className={classNames(listStyles.list, className)} data-testid={testId}>
      {children.map((child: React.ReactNode, index: number) => {
        return (
          <li className={listStyles.list__item} key={index}>
            {child}
          </li>
        );
      })}
    </ul>
  );
}

export default List;
