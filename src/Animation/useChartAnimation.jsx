import { useEffect } from "react";

export default function useAnimateChart(element, targetValue, duration = 1500) {
    useEffect(() => {

        let cancelled = false;
        const el = element.current;
        const numberElement = el.querySelector('.chart-number');
        const scale = 6;
        const startTime = performance.now();

        const animate = (currentTime) => {
            if (cancelled) return;

            const timeElapsed = currentTime - startTime;
            const progress = Math.min(timeElapsed / duration, 1);
            const currentHeight = Math.floor(progress * targetValue * scale);
            const currentValue = Math.floor(progress * targetValue);

            el.style.height = `${currentHeight}px`;

            if (numberElement) {
                numberElement.textContent = currentValue;
            }

            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                el.style.height = `${targetValue * scale}px`;
                if (numberElement) {
                    numberElement.textContent = targetValue;
                }
            }
        };

        requestAnimationFrame(animate);

        return () => {
            cancelled = true;
        };
    }, [element, targetValue, duration]);
}
