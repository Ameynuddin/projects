import React from 'react';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme, VictoryLabel } from 'victory';

const MyVictoryChart = () => {
    const data = [
        { quarter: 1, earnings: 13000 },
        { quarter: 2, earnings: 16500 },
        { quarter: 3, earnings: 14250 },
        { quarter: 4, earnings: 19000 },
    ];

    return (
        <VictoryChart theme={VictoryTheme.material} domainPadding={20}>
            <VictoryLabel
                text="Quarterly Earnings in 2023"
                x={225}
                y={30}
                textAnchor="end"
                style={{ fontSize: 10, fontWeight: 'bold' }}
            />
            <VictoryAxis
                label="Quarter"
                style={{
                    axisLabel: { padding: 30, fontSize: 10, fontWeight: 'bold' },
                    tickLabels: { fontSize: 8 }
                }}
                tickValues={[1, 2, 3, 4]}
                tickFormat={['Q1', 'Q2', 'Q3', 'Q4']}
            />
            <VictoryAxis
                dependentAxis
                label="Earnings ($)"
                style={{
                    axisLabel: { padding: 40, fontSize: 10, fontWeight: 'bold' },
                    tickLabels: { fontSize: 8 }
                }}
                tickFormat={(x) => `$${x / 1000}k`}
            />
            <VictoryBar data={data} x="quarter" y="earnings" />
        </VictoryChart>
    );
};

export default MyVictoryChart;
