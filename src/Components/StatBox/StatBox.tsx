import React, { forwardRef, ReactNode } from 'react';

interface StatBoxProps {
  className?: string;
  children?: ReactNode;
}

const StatBox = forwardRef<HTMLHeadingElement, StatBoxProps>(({ className = '', children }, ref) => {
  return (
    <h3 className={`online-time ${className}`} ref={ref}>
      {children}
    </h3>
  );
});

export default StatBox;
