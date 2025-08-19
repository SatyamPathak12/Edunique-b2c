import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts'

const data = [
	{
		subject: 'WEAKNESS 1',
		A: 85,
		B: 125,
		fullMark: 150,
	},
	{
		subject: 'WEAKNESS 2',
		A: 125,
		B: 125,
		fullMark: 150,
	},
	{
		subject: 'WEAKNESS 3',
		A: 95,
		B: 125,
		fullMark: 150,
	},
	{
		subject: 'WEAKNESS 4',
		A: 125,
		B: 125,
		fullMark: 150,
	},
	{
		subject: 'WEAKNESS 5',
		A: 125,
		B: 125,
		fullMark: 150,
	},
	{
		subject: 'WEAKNESS 6',
		A: 65,
		B: 125,
		fullMark: 150,
	},
]

export default function RadarChartAdmin() {
	return (
		<div className="relative" style={{ width: 200, height: 200 }}>
			<ResponsiveContainer width="100%" height="100%">
				<RadarChart cx="50%" cy="50%" outerRadius="89%" data={data}>
					<PolarGrid polarRadius={[85]} />
					<PolarAngleAxis
						dataKey="subject"
						fontSize={8}
						tick={({ payload, cx, cy }) => {
							const RADIAN = Math.PI / 180
							const radius = 85 // Distance from center
							const angle = payload.coordinate
							const newX = cx + radius * Math.cos(-angle * RADIAN)
							const newY = cy + radius * Math.sin(-angle * RADIAN)

							// Add extra vertical spacing based on position
							let yOffset = 0
							if (newY < cy - 20) yOffset = -10 // Top labels, move up more
							else if (newY > cy + 20) yOffset = 10 // Bottom labels, move down more

							return (
								<text x={newX} y={newY + yOffset} fill="#666" fontSize={8} textAnchor="middle" dominantBaseline="middle">
									{payload.value}
								</text>
							)
						}}
					/>
					<PolarRadiusAxis axisLine={false} tick={false} domain={[0, 160]} />
					<Radar name="John" dataKey="B" stroke="#82ca9d" fill="white" fillOpacity={0.3} strokeDasharray="5 5" />
					<Radar name="Mike" dataKey="A" stroke="#3366FF" fill="#3366FF1A" fillOpacity={0.6} strokeWidth={3} />
				</RadarChart>
			</ResponsiveContainer>
		</div>
	)
}
