import {Component, h, Prop} from '@stencil/core';

export type ActionButtonVariant = 'primary' | 'secondary';

@Component({
  tag: 'hnds-action-button',
  styleUrl: 'action-button.scss',
})
export class ActionButton {
  @Prop() variant: ActionButtonVariant = 'primary';
  @Prop() type?: string = 'button';
  @Prop() disabled?: boolean = false;

  render() {
    const {variant, type, disabled} = this;
    const classes = {
      'action-button': true,
      'action-button--primary': variant === 'primary',
      'action-button--secondary': variant === 'secondary',
    };

    return (
      <button disabled={disabled} type={type} class={classes}>
        <slot />
      </button>
    );
  }
}
