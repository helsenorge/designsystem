import React from 'react';

interface CancelButtonProps extends React.HTMLProps<HTMLButtonElement> {
  onClick?: () => void;
}

function CancelButton({children, ...restProps}: CancelButtonProps) {
  return (
    <button className="cancel-button" {...restProps}>
      {children}
    </button>
  );
}

CancelButton.defaultProps = {
  type: 'button',
};

export default CancelButton;
