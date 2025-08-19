'use client'

import { PieChart, Pie, Cell } from 'recharts'

const data = [
	{ name: 'Group A', value: 48 },
	{ name: 'Group C', value: 20 },
	{ name: 'Group B', value: 15 },
	{ name: 'Group D', value: 15 },
]

const COLORS = ['#3366FF', '#FFCC00', '#FF3366', '#8DD9B3']

export default function PieChartAdmin() {
	return (
		<PieChart width={200} height={200}>
			<Pie
				data={data}
				startAngle={180}
				endAngle={0}
				innerRadius={60}
				outerRadius={70}
				fill="#8884d8"
				paddingAngle={2}
				cornerRadius={100}
				dataKey="value">
				{data.map((entry, index) => (
					<Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
				))}
			</Pie>
		</PieChart>
	)
}
