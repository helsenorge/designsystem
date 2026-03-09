// Inspiration from https://www.joshuawootonn.com/react-roving-tabindex
import { useEffect } from 'react';

import { useKeyboardEvent } from './useKeyboardEvent';
import { KeyboardEventKey } from '../constants';

export const useRovingFocus = (
  /** Function to run when new index is set */
  handleNewIndex: (index: number) => void,
  /** List of elements that should have rocing focus */
  inputRefList: React.RefObject<React.RefObject<HTMLElement | null>[] | null | undefined>,
  /** Ref of container that should have the keyboard event handler */
  containerRef: React.RefObject<HTMLElement | null>,
  /** Indicated wether right/left or up/down arrows should be used for navigation. Default is up/down. */
  leftRightNavigation?: boolean
): void => {
  leftRightNavigation = leftRightNavigation ?? false;

  // Initialize only first index to be tabbable
  useEffect(() => {
    if (!inputRefList.current) {
      return;
    }
    inputRefList.current.forEach(ref => {
      ref.current?.setAttribute('tabIndex', '-1');
    });
    inputRefList.current[0]?.current?.setAttribute('tabIndex', '0');
  }, []);

  const handleKeyboardNavigation = (event: KeyboardEvent): void => {
    if (event.key === KeyboardEventKey.Tab) {
      return;
    }
    event.preventDefault();

    if (!inputRefList.current) {
      return;
    }
    const index = inputRefList.current.findIndex(x => x.current === event.target);
    let nextIndex = index;

    if (event.key === KeyboardEventKey.Home) {
      nextIndex = 0;
    } else if (event.key === KeyboardEventKey.End) {
      nextIndex = inputRefList.current.length - 1;
    } else if (
      (event.key === KeyboardEventKey.ArrowDown || event.key === KeyboardEventKey.ArrowRight) &&
      index < inputRefList.current.length - 1
    ) {
      nextIndex = index + 1;
    } else if ((event.key === KeyboardEventKey.ArrowUp || event.key === KeyboardEventKey.ArrowLeft) && index > 0) {
      nextIndex = index - 1;
    } else if (event.key === KeyboardEventKey.Enter || event.key === KeyboardEventKey.Space) {
      nextIndex = index;
    }

    if (nextIndex !== -1) {
      inputRefList.current?.forEach((ref, i) => {
        if (ref.current) {
          ref.current.tabIndex = i === nextIndex ? 0 : -1;
        }
      });
      inputRefList.current[nextIndex]?.current?.focus();
      inputRefList.current[nextIndex]?.current?.click?.();
      handleNewIndex(nextIndex);
    }
  };

  const commonKeys = [KeyboardEventKey.End, KeyboardEventKey.Enter, KeyboardEventKey.Escape, KeyboardEventKey.Home];

  const arrowKeys = leftRightNavigation
    ? [KeyboardEventKey.ArrowRight, KeyboardEventKey.ArrowLeft]
    : [KeyboardEventKey.ArrowUp, KeyboardEventKey.ArrowDown];

  useKeyboardEvent(containerRef, handleKeyboardNavigation, [...commonKeys, ...arrowKeys]);
};
