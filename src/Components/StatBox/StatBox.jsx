import { forwardRef } from 'react'

const StatBox = forwardRef(({ className = '', children }, ref) => {
    return (
        <h3 className={`online-time ${className}`} ref={ref}>
            {children}
        </h3>
    );
});

export default StatBox;