import * as React from 'react';
import * as classNames from 'classnames';

export interface DropdownProps {
  toggleDropdown?: (index: number) => void;
  index?: number;
  open: boolean;
  name: string;
  respectContent?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

interface DropdownState {
  focus: boolean;
}
export class Dropdown extends React.Component<DropdownProps, DropdownState> {
  ctrls: {
    button?: HTMLButtonElement;
    dropdown?: HTMLDivElement;
  } = {};

  constructor(props: DropdownProps) {
    super(props);
    this.addClickListener = this.addClickListener.bind(this);
    this.removeClickListener = this.removeClickListener.bind(this);
    this.clickListener = this.clickListener.bind(this);
    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.state = {
      focus: false,
    };
  }

  componentDidMount(): void {
    if (this.props.open) {
      this.addClickListener();
    }
    if (this.props.respectContent && this.ctrls.button) {
      const width: number = this.ctrls.button.offsetWidth;
      this.ctrls.button.style.width = `${width}px`;
    }
  }

  componentDidUpdate(prevProps: DropdownProps): void {
    if (!prevProps.open && this.props.open) {
      this.addClickListener();
    } else if (prevProps.open && !this.props.open) {
      this.removeClickListener();
    }
  }

  componentWillUnmount(): void {
    this.removeClickListener();
  }

  clickListener(evt: MouseEvent): void {
    const target: Element = evt.target as Element;
    if (
      this.ctrls.dropdown &&
      !this.ctrls.dropdown.contains(target) &&
      !target.classList.contains('atom_dropdown-button')
    ) {
      this.toggleDropdown();
    }
  }

  addClickListener(): void {
    document.addEventListener('click', this.clickListener);
  }

  removeClickListener(): void {
    document.removeEventListener('click', this.clickListener);
  }

  toggleDropdown(): void {
    if (this.props.toggleDropdown && this.props.index != null) {
      this.props.toggleDropdown(this.props.index);
    }
  }

  onFocus = () => {
    this.setState({focus: true});
  };

  onBlur = () => {
    this.setState({focus: false});
  };

  render(): JSX.Element {
    // Pass props
    const {open, name, children, className, toggleDropdown, respectContent, index, ...other} = this.props;
    const selectButtonClasses: string = classNames({
      'atom_dropdown-button': true,
      'arrow-up': open,
      'arrow-down': !open,
      selected: open,
    });

    const dropdownClasses: string = classNames(
      {
        mol_dropdown: true,
        open,
        'mol_dropdown--focused': this.state.focus,
      },
      className,
    );

    const joinedName = name ? name.replace(' ', '_') : '';

    return (
      <div className={dropdownClasses} ref={(dropdown: HTMLDivElement) => (this.ctrls.dropdown = dropdown)} {...other}>
        <button
          type="button"
          onClick={this.toggleDropdown}
          className={selectButtonClasses}
          ref={(button: HTMLButtonElement) => (this.ctrls.button = button)}
          aria-expanded={open}
          aria-controls={joinedName}
          onFocus={this.onFocus}
          onBlur={this.onBlur}>
          {name}
        </button>
        <div className="container" id={joinedName}>
          <div className="content">{children}</div>
        </div>
      </div>
    );
  }
}
