import React from 'react';

import { render, screen } from '@testing-library/react';

import FormFieldTag from './FormFieldTag';
import { AnalyticsId } from '../../constants';

describe('Gitt at FormFieldTag skal vises', (): void => {
  describe('Når FormFieldTag vises med level="all-required"', (): void => {
    test('Så vises riktig tekst for all-required', (): void => {
      render(<FormFieldTag level="all-required" testId="form-field-tag" />);

      const tag = screen.getByTestId('form-field-tag');
      expect(tag).toBeInTheDocument();
      expect(tag).toHaveTextContent('Alle felt må fylles ut');
    });
  });

  describe('Når FormFieldTag vises med level="required-field"', (): void => {
    test('Så vises riktig tekst for required-field', (): void => {
      render(<FormFieldTag level="required-field" testId="form-field-tag" />);

      const tag = screen.getByTestId('form-field-tag');
      expect(tag).toBeInTheDocument();
      expect(tag).toHaveTextContent('Må fylles ut');
    });
  });

  describe('Når FormFieldTag vises med level="optional"', (): void => {
    test('Så vises riktig tekst for optional', (): void => {
      render(<FormFieldTag level="optional" testId="form-field-tag" />);

      const tag = screen.getByTestId('form-field-tag');
      expect(tag).toBeInTheDocument();
      expect(tag).toHaveTextContent('Valgfritt');
    });

    test('Så har komponenten optional-klassen', (): void => {
      render(<FormFieldTag level="optional" testId="form-field-tag" />);

      const tag = screen.getByTestId('form-field-tag');
      expect(tag).toHaveClass('form-field-tag--optional');
    });
  });

  describe('Når FormFieldTag vises med overskrevne tekster', (): void => {
    test('Så brukes tekster fra prop', (): void => {
      const customResources = {
        allRequired: 'Custom all required',
        requiredField: 'Custom required field',
        optional: 'Custom optional',
      };

      render(<FormFieldTag level="all-required" resources={customResources} testId="form-field-tag" />);

      const tag = screen.getByTestId('form-field-tag');
      expect(tag).toHaveTextContent('Custom all required');
    });
  });

  describe('Når FormFieldTag vises', (): void => {
    test('Så har komponenten riktige data-attributer', (): void => {
      render(<FormFieldTag level="all-required" testId="form-field-tag" />);

      const tag = screen.getByTestId('form-field-tag');
      expect(tag).toHaveAttribute('data-testid', 'form-field-tag');
      expect(tag).toHaveAttribute('data-analyticsid', AnalyticsId.FormFieldTag);
    });

    test('Så er komponenten en span-tag', (): void => {
      render(<FormFieldTag level="all-required" testId="form-field-tag" />);

      const tag = screen.getByTestId('form-field-tag');
      expect(tag.tagName).toBe('SPAN');
    });
  });
});
