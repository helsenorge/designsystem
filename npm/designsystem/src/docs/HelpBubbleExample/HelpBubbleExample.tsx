import React, { useRef } from 'react';

import HelpBubble, { HelpBubbleProps } from '../../components/HelpBubble';

const HelpBubbleExample: React.FC<HelpBubbleProps> = props => {
  const controllerRef = useRef<HTMLSpanElement>(null);

  return (
    <div>
      <span>
        {
          'Consequat adipisicing nostrud non in labore sunt consequat mollit dolore quis voluptate eu veniam adipisicing. Dolor ipsum excepteur anim id ea dolore esse. Sint exercitation duis pariatur in qui ea reprehenderit consectetur sunt minim in ut cupidatat dolore. Eiusmod ut Lorem nostrud id adipisicing ullamco enim. Velit officia mollit laboris amet reprehenderit ad. Nisi cupidatat dolor voluptate officia mollit eu nostrud ipsum. Dolor labore ullamco nostrud consectetur dolor duis qui magna reprehenderit. Esse reprehenderit dolor fugiat sunt adipisicing est. Aliquip duis pariatur labore amet sit occaecat ea eiusmod cillum. Adipisicing magna aute officia cillum non.'
        }
      </span>
      <div style={{ position: 'relative', display: 'inline' }}>
        <span ref={controllerRef} style={{ display: 'inline-block', color: 'red' }}>
          {'Jeg er en tooltip tekst.'}
        </span>
        <HelpBubble
          {...props}
          onClose={() => {
            alert('Bubble closed');
          }}
          controllerRef={controllerRef}
        >
          {props.children}
        </HelpBubble>
      </div>
      <span>
        {
          'Consequat adipisicing nostrud non in labore sunt consequat mollit dolore quis voluptate eu veniam adipisicing. Dolor ipsum excepteur anim id ea dolore esse. Sint exercitation duis pariatur in qui ea reprehenderit consectetur sunt minim in ut cupidatat dolore. Eiusmod ut Lorem nostrud id adipisicing ullamco enim. Velit officia mollit laboris amet reprehenderit ad. Nisi cupidatat dolor voluptate officia mollit eu nostrud ipsum. Dolor labore ullamco nostrud consectetur dolor duis qui magna reprehenderit. Esse reprehenderit dolor fugiat sunt adipisicing est. Aliquip duis pariatur labore amet sit occaecat ea eiusmod cillum. Adipisicing magna aute officia cillum non.'
        }
      </span>
    </div>
  );
};

export default HelpBubbleExample;
