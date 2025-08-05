/* Кастомный хук */

import { useEffect } from "react";
import type { RefObject } from "react"

export default function useAnimateChart(
    element: RefObject<HTMLElement>, 
    targetValue: number, 
    duration = 1500 /* уже есть значение по умолчанию */
): void {
    useEffect(() => {

        let cancelled = false;
        const el = element.current;
        const numberElement = el?.querySelector('.chart-number'); /* Опциональная цепочка */
        const scale = 6;
        const startTime = performance.now();

        const animate = (currentTime: number) => {
            if (cancelled) return;

            const timeElapsed = currentTime - startTime;
            const progress = Math.min(timeElapsed / duration, 1);
            const currentHeight = Math.floor(progress * targetValue * scale);
            const currentValue = Math.floor(progress * targetValue);

            if (el) {  
                el.style.height = `${currentHeight}px`;
            }

            if (numberElement) {
                numberElement.textContent = String(currentValue);
            }

            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                el.style.height = `${targetValue * scale}px`;
                if (numberElement) {
                    numberElement.textContent = String(targetValue);
                }
            }
        };

        requestAnimationFrame(animate);

        return () => {
            cancelled = true;
        };
    }, [element, targetValue, duration]);
}
