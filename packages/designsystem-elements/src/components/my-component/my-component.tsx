import {Component, Prop, h} from '@stencil/core';
import {format} from '../../utils/utils';

@Component({
  tag: 'my-component',
})
export class MyComponent {
  /**
   * The first name
   */
  @Prop() first = '';

  /**
   * The middle name
   */
  @Prop() middle = '';

  /**
   * The last name
   */
  @Prop() last = '';

  private getText(): string {
    return format(this.first, this.middle, this.last);
  }

  render(): string {
    return `Hello, World! I'm ${this.getText()}`;
  }
}
