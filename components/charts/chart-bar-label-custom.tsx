'use client'
import { Bar, BarChart, LabelList, XAxis, YAxis } from 'recharts'
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart'

export const description = 'A bar chart with a custom label'

const chartData = [
	{ month: 'A', desktop: 120, mobile: 80 },
	{ month: 'B', desktop: 80, mobile: 80 },
	{ month: 'C', desktop: 70, mobile: 70 },
	{ month: 'D', desktop: 50, mobile: 50 },
	{ month: 'E', desktop: 25, mobile: 25 },
]

const chartConfig = {
	desktop: {
		label: 'Desktop',
		color: '#3366FF',
	},
	mobile: {
		label: 'Mobile',
		color: '#3366FF',
	},
	label: {
		color: 'var(--background)',
	},
} satisfies ChartConfig

export function ChartBarLabelCustom() {
	return (
		<div>
			<ChartContainer config={chartConfig} style={{ height: '10rem', width: '100%' }}>
				<BarChart accessibilityLayer data={chartData} layout="vertical" barSize={25}>
					<YAxis
						className="rounded-full"
						dataKey="month"
						type="category"
						tickLine={false}
						tickMargin={10}
						axisLine={false}
						tickFormatter={value => value.slice(0, 3)}
						hide
					/>
					<XAxis dataKey="desktop" type="number" hide />
					<ChartTooltip cursor={false} content={<ChartTooltipContent indicator="line" />} />
					<Bar dataKey="desktop" layout="vertical" fill="var(--color-desktop)" radius={100}>
						<LabelList
							fontWeight={600}
							dataKey="month"
							position="insideLeft"
							offset={8}
							className="fill-(--color-label)"
							fontSize={12}
						/>
						<LabelList
							dataKey="desktop"
							position="insideRight"
							offset={8}
							style={{ fontSize: '10px' }}
							className="fill-(--color-label)"
							fontSize={12}
							formatter={(value: number) => `${value}k`}
						/>
					</Bar>
				</BarChart>
			</ChartContainer>
		</div>
	)
}
