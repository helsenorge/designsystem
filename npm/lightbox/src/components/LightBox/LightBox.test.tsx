import React from 'react';

import { render, screen, fireEvent } from '@testing-library/react';
import { vi } from 'vitest';

import LightBox from './LightBox';

describe('Gitt at LightBox skal vises', (): void => {
  describe('Når LightBox vises', (): void => {
    test('Så vises LightBox', (): void => {
      render(
        <LightBox
          ariaLabelCloseButton={''}
          ariaLabelLeftArrow={''}
          ariaLabelRightArrow={''}
          ariaLabelCloseTextBox={''}
          ariaLabelOpenTextBox={''}
          imageAlt={''}
          imageSrc={''}
          onClose={() => null}
          ariaLabelZoomOut={''}
          ariaLabelZoomIn={''}
        />
      );
    });

    test('Så vises lukkeknapp med riktig label', (): void => {
      render(
        <LightBox
          ariaLabelCloseButton="Lukk"
          ariaLabelLeftArrow=""
          ariaLabelRightArrow=""
          ariaLabelCloseTextBox=""
          ariaLabelOpenTextBox=""
          imageAlt=""
          imageSrc=""
          onClose={() => null}
          ariaLabelZoomOut=""
          ariaLabelZoomIn=""
        />
      );

      const closeButton = screen.getByLabelText('Lukk');
      expect(closeButton).toBeInTheDocument();
    });

    test('Så vises begge pilknapper når callback er gitt', (): void => {
      render(
        <LightBox
          ariaLabelCloseButton=""
          ariaLabelLeftArrow="Forrige bilde"
          onLeftArrowClick={() => null}
          ariaLabelRightArrow="Neste bilde"
          onRightArrowClick={() => null}
          ariaLabelCloseTextBox=""
          ariaLabelOpenTextBox=""
          imageAlt=""
          imageSrc=""
          onClose={() => null}
          ariaLabelZoomOut=""
          ariaLabelZoomIn=""
        />
      );

      const rightArrow = screen.getByLabelText('Neste bilde');
      const leftArrow = screen.getByLabelText('Forrige bilde');
      expect(rightArrow).toBeInTheDocument();
      expect(leftArrow).toBeInTheDocument();
    });

    test('Så blir onClose funksjonen kalt når lukkeknappen trykkes', (): void => {
      const onCloseMock = vi.fn();
      render(
        <LightBox
          ariaLabelCloseButton="Lukk"
          ariaLabelLeftArrow=""
          ariaLabelRightArrow=""
          ariaLabelCloseTextBox=""
          ariaLabelOpenTextBox=""
          imageAlt=""
          imageSrc=""
          onClose={onCloseMock}
          ariaLabelZoomOut=""
          ariaLabelZoomIn=""
        />
      );
      const closeButton = screen.getByLabelText('Lukk');
      fireEvent.click(closeButton);
      expect(onCloseMock).toHaveBeenCalled();
    });
  });
});
