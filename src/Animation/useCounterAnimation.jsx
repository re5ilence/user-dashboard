import { useEffect } from 'react';

export default function useCounterAnimation(ref, targetValue, duration = 1500, text = '') {
    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const startTime = performance.now();

        const animate = (currentTime) => {
            const currentDuration = currentTime - startTime;
            const progress = Math.min(currentDuration / duration, 1);
            const currentValue = Math.floor(progress * targetValue);

            element.textContent = `${currentValue} ${text}`;

            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                element.textContent = `${targetValue} ${text}`;
            }
        };

        const id = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(id);
    }, [ref, targetValue, duration, text]);
}
