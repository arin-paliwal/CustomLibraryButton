import React, { FC, ReactNode } from 'react';

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
declare const Button: FC<Props>;

export { Button };
