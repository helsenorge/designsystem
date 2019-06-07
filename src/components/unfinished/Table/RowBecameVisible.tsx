import becameVisible from '../../../higher-order-components/became-visible';
import {RowProps} from './Row';
import {Row} from './Row';

class RowBecameVisible extends Row {
  componentWillReceiveProps(newProps: RowProps): void {
    if (newProps.visible && !this.props.visible) {
      if (newProps.rowBecameVisible) {
        newProps.rowBecameVisible();
      }
    }
  }
}
export default becameVisible(RowBecameVisible, true);
