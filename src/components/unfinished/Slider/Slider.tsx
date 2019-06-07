import * as React from 'react';
import * as classnames from 'classnames';

export class Slider extends React.Component<SliderProps, SliderState> {
  static defaultProps: SliderProps = {
    disabled: false,
    value: 0,
    showValue: true,
    step: 1,
  };

  refs: {
    [key: string]: Element;
    track: HTMLDivElement;
    slider: HTMLInputElement;
  };

  constructor(props: SliderProps) {
    super(props);
    this.onMouseDown = this.onMouseDown.bind(this);
    this.onTouchDown = this.onTouchDown.bind(this);
    this.onMouseUp = this.onMouseUp.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.nativeOnInput = this.nativeOnInput.bind(this);
    this.nativeOnBlur = this.nativeOnBlur.bind(this);
    this.state = {
      min: 0,
      max: 100,
      mouseDown: false,
      value: props.value ? props.value : 0,
      tempXPos: 0,
      width: 0,
      sliderWidth: 0,
      sliderXPos: 0,
    };
  }

  componentDidMount(): void {
    if (this.supportsNativeSlider()) {
      this.initNativeEventListener();
      return;
    }

    /** to calculate the initial position of the slider we have to get
     * the width of html container element this can only be done after
     * render, and to save the value we have to put in state and trigger rerender
     */
    window.setTimeout(() => {
      /* setTimeout of 0 gives element enough time to have assumed its size */
      const trackWidth: number = this.refs.track.offsetWidth;
      const sliderWidth: number = this.refs.slider.offsetWidth;
      this.setState({
        sliderXPos: this.calculateSliderPositionBasedOnValue(this.state.value, trackWidth, sliderWidth),
      });
    }, 0);
  }

  componentWillReceiveProps(nextProps: SliderProps): void {
    if (this.supportsNativeSlider()) {
      this.updateNativeSliderWithNewProps(nextProps);
      return;
    }
    const trackWidth: number = this.refs.track.offsetWidth;
    const sliderWidth: number = this.refs.slider.offsetWidth;
    let newSliderXPos;
    /* only move slider button if we have a new value */
    if (this.alignValue(nextProps.value) !== this.alignValue(this.state.value)) {
      newSliderXPos = this.calculateSliderPositionBasedOnValue(nextProps.value, trackWidth, sliderWidth);
    } else {
      newSliderXPos = this.state.sliderXPos;
    }

    this.setState({
      value: nextProps.value,
      sliderXPos: newSliderXPos,
    });
  }

  onMouseDown(e: MouseEvent | React.MouseEvent<{}>): void {
    if (this.isDisabled()) {
      return;
    }
    this.setState(
      {
        mouseDown: true,
        tempXPos: this.getMousePosition(e),
        width: this.refs.track.offsetWidth,
        sliderWidth: this.refs.slider.offsetWidth,
      },
      () => {
        this.addMouseListeners();
      },
    );
    this.stopEvent(e);
  }

  onTouchDown(e: TouchEvent | React.TouchEvent<{}>): void {
    if (this.isDisabled()) {
      return;
    }
    this.setState(
      {
        mouseDown: true,
        tempXPos: this.getMousePosition(e),
        width: this.refs.track.offsetWidth,
        sliderWidth: this.refs.slider.offsetWidth,
      },
      () => {
        this.addTouchListeners();
      },
    );
    this.stopEvent(e);
  }

  onMouseUp(e: MouseEvent | React.MouseEvent<{}>): void {
    if (this.isDisabled()) {
      return;
    }
    this.setState({
      mouseDown: false,
    });
    this.removeMouseListeners();
    this.removeTouchListeners();
    this.notifyBlur();
    this.stopEvent(e);
  }

  onMouseMove(e: MouseEvent | React.MouseEvent<{}>): void {
    if (this.isDisabled()) {
      return;
    }
    if (!this.state.mouseDown) {
      return;
    }
    const newXpos: number = this.getMousePosition(e);
    const diff: number = newXpos - this.state.tempXPos;
    this.moveSlider(diff);
    this.stopEvent(e);
  }

  getMousePosition(e: MouseEvent | React.MouseEvent<{}> | TouchEvent | React.TouchEvent<{}>): number {
    if (this.isTouchEvent(e)) {
      const touch: Touch = (e as TouchEvent).touches[0];
      return touch.pageX;
    }
    return (e as MouseEvent).pageX;
  }

  moveSlider(diff: number): void {
    let newSliderPos: number = this.state.sliderXPos + diff;
    if (newSliderPos < 0) {
      newSliderPos = 0;
    }
    if (newSliderPos > this.state.width - this.state.sliderWidth) {
      newSliderPos = this.state.width - this.state.sliderWidth;
    }
    this.setState(
      {
        sliderXPos: newSliderPos,
        tempXPos: this.state.tempXPos + diff,
        value: this.calculateValueBasedOnSliderPosition(newSliderPos),
      },
      () => {
        this.notifyMove();
      },
    );
  }

  updateNativeSliderWithNewProps(nextProps: SliderProps): void {
    this.setState({
      value: nextProps.value,
    });
  }

  initNativeEventListener(): void {
    // Setting event listener directly on input element does not work in IE
    this.refs.slider.addEventListener('change', this.nativeOnInput, false);
    this.refs.slider.addEventListener('mouseup', this.nativeOnBlur, false);
    this.refs.slider.addEventListener('touchend', this.nativeOnBlur, false);
  }

  nativeOnBlur(): void {
    this.notifyBlur();
  }

  nativeOnInput(): void {
    this.setState(
      {
        value: parseInt(this.refs.slider.value, 10),
      },
      () => {
        this.notifyMove();
      },
    );
  }

  isDisabled() {
    return this.props.disabled;
  }

  isTouchEvent(e: MouseEvent | React.MouseEvent<{}> | TouchEvent | React.TouchEvent<{}>): boolean {
    if (
      e.type === 'touchcancel' ||
      e.type === 'touchend' ||
      e.type === 'touchenter' ||
      e.type === 'touchleave' ||
      e.type === 'touchmove' ||
      e.type === 'touchstart'
    ) {
      if ((e as TouchEvent).touches.length === 0) {
        return false;
      } else {
        return true;
      }
    }
    return false;
  }

  notifyMove(): void {
    if (this.props.onChange) {
      this.props.onChange(this.state.value);
    }
  }

  notifyBlur(): void {
    if (this.props.onBlur) {
      this.props.onBlur(this.state.value);
    }
  }

  calculateSliderPositionBasedOnValue(value: number, trackWidth: number, sliderWidth: number): number {
    const size: number = this.state.max - this.state.min;
    const pixelPerSize: number = (trackWidth - sliderWidth) / size;
    return pixelPerSize * value;
  }

  alignValue(value: number): number {
    const {max}: SliderState = this.state;

    const step = this.props.step ? this.props.step : 0;

    const valModStep: number = value % step;
    let alignedValue: number = value - valModStep;

    const possibleMaxValueWithCurrentStep: number = Math.floor(max / step) * step;
    if (value > possibleMaxValueWithCurrentStep) {
      const diff: number = max - possibleMaxValueWithCurrentStep;
      if (value > possibleMaxValueWithCurrentStep + diff / 2) {
        alignedValue = max;
      }
    }
    return Math.round(alignedValue);
  }

  calculateValueBasedOnSliderPosition(sliderPosition: number): number {
    const size: number = this.state.max - this.state.min;
    const pixelPerSize: number = (this.state.width - this.state.sliderWidth) / size;
    const newValue: number = Math.round(sliderPosition / pixelPerSize);
    return this.alignValue(newValue);
  }

  addMouseListeners(): void {
    document.addEventListener(
      'mousemove',
      (evt: MouseEvent) => {
        this.onMouseMove(evt);
      },
      false,
    );
    document.addEventListener(
      'mouseup',
      (evt: MouseEvent) => {
        this.onMouseUp(evt);
      },
      false,
    );
  }

  removeMouseListeners(): void {
    document.removeEventListener(
      'mousemove',
      (evt: MouseEvent) => {
        this.onMouseMove(evt);
      },
      false,
    );
    document.removeEventListener(
      'mouseup',
      (evt: MouseEvent) => {
        this.onMouseUp(evt);
      },
      false,
    );
  }

  addTouchListeners(): void {
    document.addEventListener(
      'touchmove',
      (evt: MouseEvent) => {
        this.onMouseMove(evt);
      },
      false,
    );
    document.addEventListener(
      'touchend',
      (evt: MouseEvent) => {
        this.onMouseUp(evt);
      },
      false,
    );
  }

  removeTouchListeners(): void {
    document.removeEventListener(
      'touchmove',
      (evt: MouseEvent) => {
        this.onMouseMove(evt);
      },
      false,
    );
    document.removeEventListener(
      'touchend',
      (evt: MouseEvent) => {
        this.onMouseUp(evt);
      },
      false,
    );
  }

  stopEvent(e: MouseEvent | React.MouseEvent<{}> | TouchEvent | React.TouchEvent<{}>): boolean {
    if (e.stopPropagation) {
      e.stopPropagation();
    }
    if (e.preventDefault) {
      e.preventDefault();
    }
    return false;
  }

  supportsNativeSlider(): boolean {
    const testrange: HTMLInputElement = document.createElement('input');
    testrange.setAttribute('type', 'range');
    if (testrange.type === 'range') {
      return true;
    }
    return false;
  }

  renderNativeSlider(): JSX.Element {
    const containerClassNames: string = classnames('hnSlider natveSlider', {
      showValue: this.props.showValue,
    });
    const step: number = this.props.step ? this.props.step : 1;
    const disabled: boolean = this.props.disabled ? this.props.disabled : false;
    const value = this.props.value;
    return (
      <div className={containerClassNames}>
        <input
          type="range"
          min="0"
          aria-valuemin={0}
          max="100"
          aria-valuemax={100}
          step={step}
          disabled={disabled}
          ref="slider"
          value={value}
          aria-valuenow={value}
          onChange={() => {
            // Also set onChange here, or else react will show error message
            // And render a readonly input field
            this.nativeOnInput();
          }}
        />
        {this.props.showValue ? (
          <div className="value">
            {this.state.value}
            <span>%</span>
          </div>
        ) : (
          false
        )}
      </div>
    );
  }

  render(): JSX.Element {
    if (this.supportsNativeSlider()) {
      return this.renderNativeSlider();
    }
    const sliderStyle: Style = {
      left: `${this.state.sliderXPos}px`,
    };

    const containerClassNames: string = classnames('hnSlider', {showValue: this.props.showValue});

    return (
      <div className={containerClassNames}>
        <div className="track" ref="track" />
        <button
          style={sliderStyle}
          ref="slider"
          type="button"
          className="trigger"
          onMouseDown={this.onMouseDown}
          onTouchStart={this.onTouchDown}
        />
        {this.props.showValue ? (
          <div className="value">
            {this.state.value}
            <span>%</span>
          </div>
        ) : (
          false
        )}
      </div>
    );
  }
}

export interface SliderState {
  value: number;
  min: number;
  max: number;
  mouseDown?: boolean;
  tempXPos: number;
  width: number;
  sliderWidth: number;
  sliderXPos: number;
}

export interface SliderProps {
  disabled?: boolean;
  value: number;
  onChange?: (value: number) => void;
  onBlur?: (value: number) => void;
  showValue?: boolean;
  step?: number;
}

interface Style {
  left: string;
}
