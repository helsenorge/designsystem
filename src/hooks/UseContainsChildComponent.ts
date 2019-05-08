import React, {useEffect, useState} from 'react';

export function useContainsChildComponent(children: React.ReactNode, name: string) {
  const [containsComponent, setContainsComponent] = useState(false);
  useEffect(() => {
    setContainsComponent(
      !!React.Children.toArray(children).find((child: any) => child.type && child.type.displayName === name),
    );
  }, []);
  return containsComponent;
}
