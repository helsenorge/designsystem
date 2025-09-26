import { describe, it, expect } from 'vitest';

import { deepContains } from '../deepContains';

describe('deepContains', () => {
  it('should return true if the container directly contains the element', () => {
    const container = document.createElement('div');
    const element = document.createElement('span');
    container.appendChild(element);

    expect(deepContains(container, element)).toBe(true);
  });

  it('should return false if the container does not contain the element', () => {
    const container = document.createElement('div');
    const element = document.createElement('span');

    expect(deepContains(container, element)).toBe(false);
  });

  it('should return true if the container contains the element through shadow DOM', () => {
    const container = document.createElement('div');
    const shadowHost = document.createElement('div');
    const shadowRoot = shadowHost.attachShadow({ mode: 'open' });
    const element = document.createElement('span');

    shadowRoot.appendChild(element);
    container.appendChild(shadowHost);

    expect(deepContains(container, element)).toBe(true);
  });

  it('should return false if the element is null', () => {
    const container = document.createElement('div');

    expect(deepContains(container, null)).toBe(false);
  });

  it('should return false if the container is not an ancestor of the element', () => {
    const container = document.createElement('div');
    const unrelatedContainer = document.createElement('div');
    const element = document.createElement('span');

    unrelatedContainer.appendChild(element);

    expect(deepContains(container, element)).toBe(false);
  });

  it('should return true if the container is the same as the element', () => {
    const container = document.createElement('div');

    expect(deepContains(container, container)).toBe(true);
  });
});
