import { MouseEvent, ReactNode } from 'react';
import './Button.css';

interface ButtonProps {
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
  children: ReactNode;
  className?: string;
}

export default function Button({ onClick, children, className = '' }: ButtonProps) {
  return (
    <button className={`btn ${className}`} onClick={onClick}>
      {children}
    </button>
  );
}