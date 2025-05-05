import { useEffect } from "react";


export default function Chart({ chartRefs, count }) {
    return (
        <div className="online-time online-time--third_block">
            {Array.from({ length: count }).map((_, index) => (
                <div
                    key={index}
                    className="chart"
                    ref={(el) => (chartRefs.current[index] = el)}
                >
                    <span className="chart-number"></span>
                </div>
            ))}
        </div>
    );
}
