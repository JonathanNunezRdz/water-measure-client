import { Box, Text, useTheme } from '@chakra-ui/react';
import { ResponsiveLine } from '@nivo/line';
import type { FC } from 'react';

import type customTheme from 'lib/styles/theme';
import type { WaterLevel } from 'lib/types';
import { transformWaterLevelData } from 'lib/utils';

interface CisternWaterLevelChartProps {
	waterLevel: WaterLevel[];
	maxWaterHeight: number;
	minWaterHeight: number;
}

const CisternWaterLevelChart: FC<CisternWaterLevelChartProps> = ({
	waterLevel,
	maxWaterHeight,
	minWaterHeight,
}) => {
	const theme = useTheme<typeof customTheme>();
	const lineColor = theme.colors.blue['500'];
	const backgroundColor = theme.colors.gray['700'];
	const data = transformWaterLevelData(waterLevel);
	if (waterLevel.length === 0) return <Text>No history data.</Text>;
	return (
		<Box height={300} width='100%'>
			<ResponsiveLine
				data={data}
				theme={{
					textColor: 'white',
					tooltip: {
						container: {
							background: backgroundColor,
						},
					},
					axis: {
						ticks: {
							text: {
								fontSize: '0.75rem',
							},
						},
						legend: {
							text: {
								fontSize: '0.9rem',
							},
						},
					},
				}}
				colors={lineColor}
				margin={{ top: 10, right: 10, bottom: 100, left: 65 }}
				xScale={{ type: 'point' }}
				yScale={{
					type: 'linear',
					min: minWaterHeight,
					max: maxWaterHeight,
					stacked: true,
					reverse: false,
				}}
				curve='monotoneX'
				axisTop={null}
				axisRight={null}
				axisBottom={{
					tickSize: 5,
					tickPadding: 5,
					tickRotation: -45,
					format: (value: Date) => {
						return value.toLocaleString();
					},
				}}
				axisLeft={{
					tickSize: 5,
					tickPadding: 0,
					tickRotation: 0,
					legend: 'height',
					legendOffset: -55,
					legendPosition: 'middle',
					format: (value: number) => {
						return `${value.toFixed(2)} m`;
					},
				}}
				lineWidth={4}
				pointSize={10}
				pointColor='white'
				pointBorderWidth={2}
				pointBorderColor={{ from: 'serieColor' }}
				pointLabelYOffset={-12}
				useMesh
			/>
		</Box>
	);
};

export default CisternWaterLevelChart;
