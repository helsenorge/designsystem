import React from 'react';
import {SvgPathProps} from './Icon';

const Lock: React.FC<SvgPathProps> = ({isExtraSmall, isHovered}: SvgPathProps): JSX.Element => {
  const normal = (
    <path d="M24 8.475a7.344 7.344 0 017.344 7.344v3.69h3.005v17.444H13.69V19.51l2.964-.001v-3.69a7.344 7.344 0 017.103-7.34zm8.598 12.784H30v.011H18v-.01l-2.56-.001v13.944h17.158V21.259zM24 10.225a5.594 5.594 0 00-5.594 5.594l-.001 3.7h11.19v-3.7A5.594 5.594 0 0024 10.225z" />
  );

  const normalHover = (
    <path d="M29.594 19.509v-5.921a5.594 5.594 0 00-11.184-.22l-.004.22v1.57a.875.875 0 01-1.743.11l-.007-.11v-1.57a7.344 7.344 0 0114.684-.243l.004.243v5.921h3.005v17.444H13.69V19.51l15.903-.001zm-14.154 1.75v13.944h17.158V21.259H15.44z" />
  );

  const simplified = (
    <path
      fillRule={'evenodd'}
      d="M15.735 35.075h16.53V21.477h-16.53v13.598zm2.861-19.27A5.41 5.41 0 0124 10.4a5.41 5.41 0 015.405 5.405v3.523H18.596v-3.523zm12.959 3.523v-3.523c0-4.164-3.39-7.555-7.555-7.555-4.165 0-7.552 3.39-7.552 7.555v3.523h-2.861v17.895h20.826V19.328h-2.858z"
    />
  );

  const simplifiedHover = (
    <path
      fillRule={'evenodd'}
      d="M15.735 35.075h16.53V21.477h-16.53v13.598zm15.812-15.747c.002-.011.008-.02.008-.031v-5.705c0-4.164-3.39-7.552-7.555-7.552-4.165 0-7.552 3.388-7.552 7.552v1.28a1.074 1.074 0 002.148 0v-1.28A5.41 5.41 0 0124 8.188a5.41 5.41 0 015.405 5.404v5.705c0 .011.006.02.008.031H13.587v17.895h20.826V19.328h-2.866z"
    />
  );

  return isExtraSmall ? (isHovered ? simplifiedHover : simplified) : isHovered ? normalHover : normal;
};

export default Lock;