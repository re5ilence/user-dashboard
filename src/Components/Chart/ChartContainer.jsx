import Chart from './Chart'

export default function ChartContainer({title, chartRefs, labels, count}) {
    return (
        <div className="user-profile-items user-profile-items--block3">
            <h2>{title}</h2>
            <Chart chartRefs={chartRefs} count={count} />
            <div className="chart-names">
                {labels.map((label, index) => (
                    <h3 key={index}>{label}</h3>
                ))}
            </div>
        </div>
    );
}