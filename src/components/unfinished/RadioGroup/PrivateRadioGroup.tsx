import * as React from 'react';
import * as ReactDOM from 'react-dom';

export interface PrivateRadioGroupProps {
  defaultValue?: string;
  onChange?: (e: React.FormEvent<{}>) => void;
  children?: Object;
  name: string;
  value?: string | null;
}

export interface PrivateRadioGroupState {
  defaultValue?: string;
}

export default class extends React.Component<PrivateRadioGroupProps, PrivateRadioGroupState> {
  constructor(props: PrivateRadioGroupProps) {
    super(props);

    /* check the first block of comment in `setCheckedRadio`*/
    this.state = {
      defaultValue: this.props.defaultValue,
    };
  }

  componentDidMount(): void {
    this.setRadioNames();
    this.setCheckedRadio();
  }

  componentDidUpdate(): void {
    this.setRadioNames();
    this.setCheckedRadio();
  }

  render(): JSX.Element {
    return (
      <div {...this.props} onChange={this.props.onChange}>
        {this.props.children}
      </div>
    );
  }

  setRadioNames(): void {
    /* stay DRY and don't put the same `name` on all radios manually. Put it on
     the tag and it'll be done here */
    const $radios = this.getRadios();
    if ($radios) {
      for (let i = 0, length: number = $radios.length; i < length; i++) {
        $radios[i].setAttribute('name', this.props.name);
      }
    }
  }

  getRadios() {
    const node = ReactDOM.findDOMNode(this);
    if (node instanceof Element) {
      return node.querySelectorAll('input[type="radio"]');
    }
    return null;
  }

  setCheckedRadio(): void {
    const $radios = this.getRadios();
    /* if `value` is passed from parent, always use that value. This is similar
    to React's controlled component. If `defaultValue` is used instead,
    subsequent updates to defaultValue are ignored. Note: when `defaultValue`
    and `value` are both passed, the latter takes precedence, just like in
    a controlled component */
    const destinationValue = this.props.value != null ? this.props.value : this.state.defaultValue;

    /* check if destination value is actualy a value */

    if ($radios) {
      for (let i = 0, length: number = $radios.length; i < length; i++) {
        const $radio: Element = $radios[i];

        /* intentionally use implicit conversion for those who accidentally used,
      say, `valueToChange` of 1 (integer) to compare it with `value` of "1"
      (auto conversion to valid html value from React) */
        if (($radio as HTMLInputElement).value === destinationValue) {
          ($radio as HTMLInputElement).checked = true;
        }
      }
    }
  }

  getCheckedValue(): string | null {
    const $radios = this.getRadios();
    if ($radios) {
      for (let i = 0, length: number = $radios.length; i < length; i++) {
        if (($radios[i] as HTMLInputElement).checked) {
          return ($radios[i] as HTMLInputElement).value;
        }
      }
    }

    return null;
  }
}
