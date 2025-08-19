"use client"
import { ArrowLeft } from 'lucide-react'
import MaxWidthWrapper from '../max-width-wrapper'

import { useRouter } from 'next/navigation';

interface NamingBarProps{
  name: string;
  toLink?:string;}
const NamingBar: React.FC<NamingBarProps> = ({ name, toLink }) => {
  const Router = useRouter();
 const handleBackClick = () => {
    if(toLink){
      Router.push(toLink);

    } else if (typeof window !== "undefined") {
      window.history.back();
    }
  };
	return (
		<div className="bg-white py-2">
			<div className="flex  max-w-[94rem] mx-auto justify-start items-center py-2 gap-3 2xl:px-8 font-main text-lg">
				<ArrowLeft   onClick={handleBackClick}/> <span className="text-[#FF3366] font-medium -tracking-[0.01em]">{name}</span>
			</div>
		</div>
	)
}
export default NamingBar;