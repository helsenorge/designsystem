import becameVisible from '../../../higher-order-components/became-visible';
import {CellProps} from './Cell';
import {Cell} from './Cell';

class CellLoadMore extends Cell {
  componentWillReceiveProps(newProps: CellProps): void {
    if (newProps.visible && !this.props.visible) {
      if (this.props.loadMore && this.props.threshold) {
        this.props.loadMore();
      }
    }
  }
}
export default becameVisible(CellLoadMore, true);
