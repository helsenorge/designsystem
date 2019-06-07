import * as React from 'react';
import {shallow} from 'enzyme';
import {Cell, CellLoadMore, Column, ExpandableRow, Header, Row, RowBecameVisible, Table} from '.';

describe('Table', () => {
  it('Cell renders without crashing', () => {
    shallow(<Cell rowData={{}} />);
  });

  it('CellLoadMore renders without crashing', () => {
    shallow(<CellLoadMore />);
  });

  it('Column renders without crashing', () => {
    shallow(<Column name="test" />);
  });

  it('ExpandableRow renders without crashing', () => {
    shallow(<ExpandableRow open />);
  });

  it('Header renders without crashing', () => {
    shallow(<Header />);
  });

  it('Row renders without crashing', () => {
    shallow(<Row expanded rowData={{}} />);
  });

  it('RowBecameVisible renders without crashing', () => {
    shallow(<RowBecameVisible />);
  });

  it('Table renders without crashing', () => {
    shallow(<Table />);
  });
});
