import AttendancePage from '@/components/b2c-admin/attendance-page'
import Link from 'next/link'
import NamingBar from '@/components/admin/ui/naming-bar'
export default function page() {
	return (
		<div>
			<Link href="/admin-b2c/admin-panel/dashboard">
				<NamingBar name="Attendance" />
			</Link>
			<AttendancePage />
		</div>
	)
}
