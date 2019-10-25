import React, {useState} from 'react';

// import './CommonButton.scss';

// TODO: Make this inherit attributes form both 'a'-tags and 'button'-tags.
interface ButtonProps
  extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

// TODO: Move most of the logic out in a generic Button-component that the others inherit.
const Button = React.forwardRef((props: ButtonProps, ref: any) => {
  const {children, className, ...rest} = props;
  const [hasIcon, setHasIcon] = useState(false);
  const classes = hasIcon ? `button ${className} has-icon` : `button ${className}`;
  return (
    // TODO: Add a 'as' prop so that the button can be either an 'a'-tag or 'button'-tag.
    <button className={classes} ref={ref} {...rest}>
      {React.Children.map(children, (child: any, index: number) => {
        if (child.type && child.type.displayName === 'Icon') {
          if (!hasIcon) {
            setHasIcon(true);
          }
          return React.cloneElement(child, {size: 24});
        }
        return <span>{child}</span>;
      })}
    </button>
  );
});

Button.defaultProps = {
  type: 'button',
};

export {Button};
