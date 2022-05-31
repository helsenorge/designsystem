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
  const [domRect, setDomRect] = useState<DOMRect>(new DOMRect());
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
    setDomRect(new DOMRect());
  };

  return [domRect, resetDomRect];
};
