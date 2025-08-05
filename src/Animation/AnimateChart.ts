export default function AnimateChart(
    element: HTMLElement,
    targetValue: number,
    duration: number = 1500
): void {
    const startTime = performance.now();
    const numberElement = element.querySelector('.chart-number'); 

    const scale = 6;

    const animate = (currentTime: number) => {
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);
        const currentHeight = Math.floor(progress * targetValue * scale);
        const currentValue = Math.floor(progress * targetValue);

        element.style.height = `${currentHeight}px`;

        if (numberElement) {
            numberElement.textContent = String(currentValue);
        }

        if (progress < 1) {
            requestAnimationFrame(animate);
        } else {
            element.style.height = `${targetValue * scale}px`;
            if (numberElement) {
                numberElement.textContent = String(targetValue);
            }
        }
    };

    requestAnimationFrame(animate);
};
