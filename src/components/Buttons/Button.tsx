import React, { FC, ReactNode } from 'react';
import './Button.css';

interface Props {
  children: ReactNode | ReactNode[];
  className?: string;
  style?: React.CSSProperties;
  backgroundColor?: string;
  borderRadius?: string;
  padding?: string;
  shadow?: string;
  hoverShadow?: string;
  border?: string;
  transitionDuration?: string;
  onClick?: () => void;
}

const Button: FC<Props> = ({
  children,
  className = '',
  style = {},
  backgroundColor,
  borderRadius,
  padding,
  shadow,
  hoverShadow,
  border,
  transitionDuration,
  onClick,
}) => {
  const customStyles = {
    '--button-bg-color': backgroundColor,
    '--button-border-radius': borderRadius,
    '--button-padding': padding,
    '--button-shadow': shadow,
    '--button-hover-shadow': hoverShadow,
    '--button-border': border,
    '--button-transition-duration': transitionDuration,
    ...style,
  } as React.CSSProperties;

  return (
    <button
      className={`custom-button ${className}`}
      style={customStyles}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
