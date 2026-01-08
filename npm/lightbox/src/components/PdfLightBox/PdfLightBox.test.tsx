import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import PdfLightBox from './PdfLightBox';

describe('Gitt at PdfLightBox skal vises', (): void => {
  describe('Når PdfLightBox vises', (): void => {
    test('Så vises PdfLightBox', (): void => {
      render(
        <PdfLightBox
          ariaLabelCloseButton={''}
          ariaLabelCloseTextBox={''}
          ariaLabelOpenTextBox={''}
          onClose={() => null}
          ariaLabelZoomOut={''}
          ariaLabelZoomIn={''}
          ariaLabelLightBox={''}
          ariaLabelZoomSlider={''}
        >
          <div></div>
        </PdfLightBox>
      );
    });

    test('Så vises lukkeknapp med riktig label', (): void => {
      render(
        <PdfLightBox
          ariaLabelCloseButton="Lukk"
          ariaLabelCloseTextBox=""
          ariaLabelOpenTextBox=""
          onClose={() => null}
          ariaLabelZoomOut=""
          ariaLabelZoomIn=""
          ariaLabelLightBox={''}
          ariaLabelZoomSlider={''}
        >
          <div></div>
        </PdfLightBox>
      );

      const closeButton = screen.getByLabelText('Lukk');
      expect(closeButton).toBeInTheDocument();
    });

    test('Så vises begge pilknapper når callback er gitt', (): void => {
      render(
        <PdfLightBox
          ariaLabelCloseButton=""
          ariaLabelCloseTextBox=""
          ariaLabelOpenTextBox=""
          onClose={() => null}
          ariaLabelZoomOut=""
          ariaLabelZoomIn=""
          ariaLabelLightBox={''}
          ariaLabelZoomSlider={''}
        >
          <div></div>
        </PdfLightBox>
      );

      const rightArrow = screen.getByLabelText('Neste bilde');
      const leftArrow = screen.getByLabelText('Forrige bilde');
      expect(rightArrow).toBeInTheDocument();
      expect(leftArrow).toBeInTheDocument();
    });

    test('Så blir onClose funksjonen kalt når lukkeknappen trykkes', (): void => {
      const onCloseMock = vi.fn();
      render(
        <PdfLightBox
          ariaLabelCloseButton="Lukk"
          ariaLabelCloseTextBox=""
          ariaLabelOpenTextBox=""
          onClose={onCloseMock}
          ariaLabelZoomOut=""
          ariaLabelZoomIn=""
          ariaLabelLightBox={''}
          ariaLabelZoomSlider={''}
        >
          <div></div>
        </PdfLightBox>
      );
      const closeButton = screen.getByLabelText('Lukk');
      fireEvent.click(closeButton);
      expect(onCloseMock).toHaveBeenCalled();
    });
  });
});
