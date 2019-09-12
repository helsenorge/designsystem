import {Component, h, Prop} from '@stencil/core';

export type ActionButtonVariant = 'primary' | 'secondary';

@Component({
  tag: 'hnds-action-button',
  styleUrl: 'action-button.scss',
  shadow: true,
})
export class ActionButton {
  @Prop() variant: ActionButtonVariant = 'primary';

  render() {
    const classes = {
      'action-button': true,
      'action-button--primary': this.variant === 'primary',
      'action-button--secondary': this.variant === 'secondary',
    };

    return (
      <button class={classes}>
        <slot />
      </button>
    );
  }
}
