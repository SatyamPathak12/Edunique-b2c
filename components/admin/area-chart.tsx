import React from 'react'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

export default function AdminAreaChart() {
	const data = [
		{
			name: '2016',
			pv: 8,
		},
		{
			name: '2017',
			pv: 25,
		},
		{
			name: '2018',
			pv: 60,
		},
		{
			name: '2019',
			pv: 75,
		},
		{
			name: '2020',
			pv: 20,
		},
		{
			name: '2021',
			pv: 40,
		},
		{
			name: '2022',
			pv: 80,
		},
		{
			name: '2023',
			pv: 100,
		},
	]

	const scaleMap = (val: number) => {
		const inputMin = 0
		const inputMax = 100 // max value of your real data
		const outputMin = 0
		const outputMax = 100000
		return ((val - inputMin) / (inputMax - inputMin)) * (outputMax - outputMin) + outputMin
	}

	const scaledData = data.map(d => ({ ...d, pv: scaleMap(d.pv) }))
	return (
		<ResponsiveContainer width="100%" height={180}>
			<AreaChart
				data={scaledData}
				syncId="anyId"
				margin={{
					top: 30,
					right: 0,
					left: 0,
					bottom: 0,
				}}>
				<defs>
					<linearGradient id="fadeGreen" x1="0" y1="0" x2="0" y2="1">
						<stop offset="0%" stopColor="#25CD25" stopOpacity={0.8} /> {/* Top color (opaque) */}
						<stop offset="100%" stopColor="#25CD25" stopOpacity={0} /> {/* Bottom transparent */}
					</linearGradient>
				</defs>

				<CartesianGrid stroke="#F1F1F1" className="ml-4" />
				<XAxis dataKey="name" stroke="#F1F1F1" color="black" tick={{ fill: '#7D7D7D', fontSize: 8, fontWeight: 500, dy: 15 }} />
				<YAxis
					stroke="#F1F1F1"
					tick={{ fill: '#7D7D7D', fontSize: 8, dx: -20, fontWeight: 500 }}
					tickFormatter={value => {
						if (value >= 1000) {
							return `${value / 1000}k` // Convert values to 'k' format
						}
						return value
					}}
				/>
				<Tooltip formatter={(value: number) => `${Math.round((value / 100000) * 100)}%`} />
				<Area type="monotone" dataKey="pv" stroke="#25CD25" fill="url(#fadeGreen)" strokeDasharray="3 3" />
			</AreaChart>
		</ResponsiveContainer>
	)
}
