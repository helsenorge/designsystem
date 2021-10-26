import React from 'react';

import classNames from 'classnames';

import listStyles from './styles.module.scss';

interface ListProps {
  children: React.ReactNode[];
  className?: string;
}

function List(props: ListProps) {
  const { children, className } = props;
  return (
    <ul className={classNames(listStyles.list, className)}>
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
