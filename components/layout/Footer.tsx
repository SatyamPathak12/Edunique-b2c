import Image from 'next/image'
import { FiInstagram } from 'react-icons/fi'
import { FaLinkedinIn, FaFacebookF } from 'react-icons/fa6'
import { FaXTwitter } from "react-icons/fa6";

const FooterLink = ({ label, href = '#' }: { label: string; href?: string }) => (
	<a href={href} className="block text-white text-sm leading-relaxed hover:underline underline-offset-4 transition">
		{label}
	</a>
)

export default function Footer() {
	return (
		<footer className="bg-[#3366FF] text-[1rem] w-full space-y-4 relative z-20 text-white font-Poppins font-semibold pt-16 pb-6 print:hidden
		
		"
		>
			<div  className=" absolute inset-0 opacity-10"style={{backgroundImage:"url('/images/footer.png')",
				backgroundSize:"cover",
			}}></div>
			<div className="max-w-[1440px] mx-auto px-6">
				{/* Grid Section */}
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
					{/* Column 1 */}
					<div className="space-y-2">
						<FooterLink label="Home" />
						<FooterLink label="About us" />
						<FooterLink label="Academics" />
						<FooterLink label="Co - Parent" />
						<FooterLink label="STEAM" />
						<FooterLink label="Forum" />
						<FooterLink label="Franchises" />
						<FooterLink label="Foundation" />
					</div>

					{/* Column 2 */}
					<div className="space-y-2">
						<FooterLink label="Skill Development" />
						<FooterLink label="Brain Development" />
						<FooterLink label="Schools Collaboration" />
						<FooterLink label="Teacher Collaboration" />
						<FooterLink label="Skill Development Centers" />
						<FooterLink label="Notsoextra curricular" />
						<FooterLink label="Summer Courses" />
						<FooterLink label="Competitions" />
						<FooterLink label="Steamnology" />
					</div>

					{/* Column 3 */}
					<div className="space-y-2">
						<FooterLink label="Products" />
						<FooterLink label="Blogs" />
						<FooterLink label="Privacy Policy" />
						<FooterLink label="Shipping Policy" />
						<FooterLink label="Terms & Conditions" />
						<FooterLink label="Disclaimers" />
					</div>

					{/* Column 4 & 5: Map and Contact Info */}
					<div className="col-span-2 flex flex-col gap-4">
						<div className="w-full rounded-3xl overflow-hidden">
							<Image src="/map-static.png" alt="Map" width={500} height={150} className="object-contain rounded-3xl" />
						</div>
						<div className="text-white text-sm leading-relaxed space-y-1">
							<p>Eldeco Centre, Malviya Nagar</p>
							<p>WeWork Eldeco Centre, Malviya Nagar, Eldeco Centre,</p>
							<p>Block A, Shivalik Colony, Malviya Nagar, Delhi, DL 110017</p>
							<p>Phone: (+91) 922-044-2129</p>
							<p>
								Email for Queries or Info: <a href="mailto:info@edunique.in">info@edunique.in</a>
							</p>
							<p>
								Email for Support or Concerns: <a href="mailto:supportyou@edunique.in">supportyou@edunique.in</a>
							</p>
							<p>
								Email for Careers: <a href="mailto:rightfit@edunique.in">rightfit@edunique.in</a>
							</p>
						</div>
					</div>
				</div>

				{/* Social Icons & Bottom */}
				<div className="border-t mt-12 border-white text-center"></div>
				<div className="pt-4 relative flex justify-between items-center">
					<p className="text-white text-sm">Edunique All Rights Reserved 2025</p>
					<div className="flex gap-3">
						{[
							{
								icon: <FiInstagram className="w-6 h-6" />,
								href: '#',
							},
							{
								icon: <FaXTwitter className="w-6 h-6" />,
								href: '#',
							},
							{
								icon: <FaLinkedinIn className="w-6 h-6" />,
								href: '#',
							},
							{
								icon: <FaFacebookF className="w-6 h-6" />,
								href: '#',
							},
						].map(({ icon, href }, i) => (
							<a
								key={i}
								href={href}
								className="w-10 h-10 bg-white text-[#3366FF] rounded-xl flex items-center justify-center hover:bg-blue-100 transition">
								{icon}
							</a>
						))}
					</div>
				</div>
			</div>
		</footer>
	)
}
