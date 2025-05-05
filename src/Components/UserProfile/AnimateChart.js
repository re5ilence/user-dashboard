export default function AnimateChart(element, targetValue, duration = 1500) {
    const startTime = performance.now();
    const numberElement = element.querySelector('.chart-number'); 

    const scale = 6;

    const animate = (currentTime) => {
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);
        const currentHeight = Math.floor(progress * targetValue * scale);
        const currentValue = Math.floor(progress * targetValue);

        element.style.height = `${currentHeight}px`;

        if (numberElement) {
            numberElement.textContent = currentValue;
        }

        if (progress < 1) {
            requestAnimationFrame(animate);
        } else {
            element.style.height = `${targetValue * scale}px`;
            if (numberElement) {
                numberElement.textContent = targetValue;
            }
        }
    };

    requestAnimationFrame(animate);
};
