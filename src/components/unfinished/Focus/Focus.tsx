import * as React from 'react';
import {Location, Action} from 'history';
import {withRouter, RouteComponentProps} from 'react-router-dom';
import {navigate, navigateAdd} from '../../../utils/navigation';

function focus(targets: HTMLElement[]) {
  const target = targets.pop();
  if (target) {
    target.focus();
    if (document.activeElement && document.activeElement.nodeName === 'BODY') {
      focus(targets);
    }
  }
}

function handleFocus(event: FocusEvent) {
  const target = event.target as HTMLElement;
  if (target && target.focus) {
    navigateAdd(target);
  }
}

function handleNavigation(location: Location, action: Action) {
  navigate(location, action, focus);
}

interface FocusProps extends RouteComponentProps<{}> {}

class Focus extends React.Component<FocusProps> {
  private unregisterCallback: () => void;

  componentDidMount() {
    window.addEventListener('focus', handleFocus, true);
    if (this.props.history) {
      this.unregisterCallback = this.props.history.listen(handleNavigation);
    }
  }

  componentWillUnmount(): void {
    window.removeEventListener('focus', handleFocus, true);
    if (this.unregisterCallback) {
      this.unregisterCallback();
    }
  }

  render(): JSX.Element | null {
    return null;
  }
}

export default withRouter(Focus);
