import React, { useEffect, useState } from 'react';

/**
 * Hent ut posisjon og størrelse til en Ref, med intervaller basert på ønsket frequency.
 *
 * @param ref Element som skal observeres
 * @param updatePosition om posisjonen skal fortsette å hentes ut
 * @param frequency Hvor ofte skal vi hente posisjonen i MS
 * @returns DOMRect objekt med posisjon og størrelse til ref
 */
export const useGetDOMRect = (
  ref: React.RefObject<HTMLElement | SVGSVGElement>,
  updatePosition = true,
  frequency = 10
): [DOMRect, () => void] => {
  const newDOMRect = {
    height: 0,
    width: 0,
    x: 0,
    y: 0,
    bottom: 0,
    left: 0,
    right: 0,
    top: 0,
    toJSON: () => null,
  };
  const [domRect, setDomRect] = useState<DOMRect>(newDOMRect);
  const [intervalId, setIntervalId] = useState<NodeJS.Timer>();

  useEffect(() => {
    if (updatePosition) {
      startGetPosition();
    } else {
      stopGetPosition();
    }

    return () => stopGetPosition();
  }, [updatePosition]);

  const stopGetPosition = () => {
    clearInterval(intervalId);
  };

  const startGetPosition = () => {
    const newIntervalId = setInterval(() => {
      if (ref.current) {
        setDomRect(ref.current.getBoundingClientRect());
      }
    }, frequency);

    setIntervalId(newIntervalId);
  };

  const resetDomRect = () => {
    setDomRect(newDOMRect);
  };

  return [domRect, resetDomRect];
};
