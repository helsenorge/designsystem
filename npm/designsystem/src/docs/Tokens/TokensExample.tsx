import type React from 'react';
import './styles.scss';

interface TokensExampleProps {
  colorName?: string;
  color?: string;
}

function TokensExample(props: TokensExampleProps): React.JSX.Element {
  let borderColor = 'transparent';
  if (props.color === '#ffffff' || props.color === '#fff') {
    borderColor = '#EAE7E7';
  }
  return (
    <div className="token-container">
      <div>
        <div className="token-circle" style={{ backgroundColor: props.color, borderColor: borderColor }}></div>
      </div>
      <span className="token-text">{props.colorName}</span>
    </div>
  );
}

export default TokensExample;
