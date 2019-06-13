// import React, {useEffect, useState} from 'react';

// export function useContainsChildComponent(children: React.ReactNode, name: string): boolean {
//   const [containsComponent, setContainsComponent] = useState(false);
//   useEffect((): void => {
//     setContainsComponent(
//       !!React.Children.toArray(children).find((child: any): boolean => child.type && child.type.displayName === name),
//     );
//   }, []);
//   return containsComponent;
// }
