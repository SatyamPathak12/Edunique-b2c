import GoBack from '@/components/principal/goback';
import React from 'react'
import Image from "next/image";
import AdminB2CWrapper from '@/components/b2c-admin/common-component/AdminB2CPageWrapper';
import { FaCheckCircle } from 'react-icons/fa';

const items = [
   "Nam elementum elit nec sollicitudin ultrices.",
   "Nam elementum elit nec sollicitudin ultrices.",
   "Nam elementum elit nec sollicitudin ultrices.",
   "Nam elementum elit nec sollicitudin ultrices.",
   "Nam elementum elit nec sollicitudin ultrices.",
   "Nam elementum elit nec sollicitudin ultrices.",
   "Nam elementum elit nec sollicitudin ultrices.",
];
const knowMore = () => {
   return (
      <>
         <GoBack GoBackHeading="Course Name" />
         <AdminB2CWrapper>
            <div className="bg-white rounded-2xl p-4">
               <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-4">
                  <div className="">
                     <div className="bg-[#99DEFF] px-2 py-3.5 font-semibold mb-2 rounded-2xl">Short Description</div>
                     <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, autem non quam laboriosam inventore consequatur earum, porro dolores commodi maxime temporibus velit eligendi aliquid dolor consectetur sapiente ducimus quasi perferendis!</p>
                     <div className="bg-[#FF99B7] px-2 py-3.5 font-semibold mb-2 rounded-2xl">Overview</div>
                     <p className='mb-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum alias, est ex enim dolor mollitia quaerat excepturi porro cupiditate? Alias sunt, provident iure laudantium suscipit modi quisquam veniam ab minima.</p>
                     <p className='mb-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi, nam! Dolorum voluptates deleniti rem impedit modi culpa fugiat fuga. Numquam nesciunt aspernatur itaque dolore quibusdam sed sapiente vero consequuntur corrupti.</p>
                     <p className='mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis a saepe consequuntur. Accusantium sunt, pariatur qui omnis optio repellat eveniet cum quo odio aperiam nemo, dolores harum eaque eligendi adipisci?</p>
                     <div className="bg-[#8DD9B3] px-2 py-3.5 font-semibold mb-2 rounded-2xl">Characteristics</div>
                     <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur non quas, sunt vel facilis quo officia placeat minus at distinctio quibusdam corrupti hic pariatur dolor doloremque dolorum cum sed id?</p>
                     <ul className="list-disc pl-6  mb-4">
                        <li>Lorem ipsum dolor sit officia, blanditiis tempora, soluta vero</li>
                        <li>Lorem ipsum dolor sit officia, blanditiis tempora, soluta vero</li>
                        <li>Lorem ipsum dolor sit officia, blanditiis tempora, soluta vero</li>
                        <li>Lorem ipsum dolor sit officia, blanditiis tempora, soluta vero</li>
                        <li>Lorem ipsum dolor sit officia, blanditiis tempora, soluta vero</li>
                        <li>Lorem ipsum dolor sit officia, blanditiis tempora, soluta vero</li>
                        <li>Lorem ipsum dolor sit officia, blanditiis tempora, soluta vero</li>
                        <li>Lorem ipsum dolor sit officia, blanditiis tempora, soluta vero</li>
                        <li>Lorem ipsum dolor sit officia, blanditiis tempora, soluta vero</li>
                        <li>Lorem ipsum dolor sit officia, blanditiis tempora, soluta vero</li>
                        <li>Lorem ipsum dolor sit officia, blanditiis tempora, soluta vero</li>
                        <li>Lorem ipsum dolor sit officia, blanditiis tempora, soluta vero</li>
                     </ul>
                     <div className="bg-[#FFCC00] px-2 py-3.5 font-semibold mb-2 rounded-xl">Benefits</div>
                     <ul className="space-y-2">
                        {items.map((text, idx) => (
                           <li key={idx} className="flex items-start gap-2 text-sm text-gray-800">
                              <FaCheckCircle className="text-[#3366ff] mt-0.5" size={16} />
                              <span>{text}</span>
                           </li>
                        ))}
                     </ul>

                  </div>
                  <div className="">
                     <div className="w-full rounded-2xl overflow-hidden">
                        <Image
                           src="/admin/know-more1.jpeg"
                           alt="know-more1"
                           width={800}
                           height={0}
                           className="h-auto w-full rounded-2xl object-cover"
                        />
                     </div>
                     <div className="bg-gray-100 mt-4 gap-5 text-center p-8 border rounded-2xl">
                        <h1 className='font-bold text-3xl mb-3'>15,000</h1>
                        <p className="mb-3 text-sm font-semibold"> 3 Sessions</p>
                        <p className='text-sm font-semibold'>90 Mins</p>
                     </div>
                  </div>
               </div>
               <h1 className="mb-2 mt-4 md:ml-4 text-xl font-semibold">Banner Title</h1>
               <div className="px-4">
                  <div className="w-full max-h-[475px] rounded-2xl overflow-hidden">
                     <Image
                        src="/admin/know-more2.jpeg"
                        alt="know-more2"
                        width={800}
                        height={0}
                        className="h-auto w-full rounded-2xl object-cover"
                     />
                  </div>
               </div>

               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 my-4 lg:gap-15 gap-6  lg:px-5">
                  <div className="w-full rounded-2xl overflow-hidden">
                     <Image
                        src="/admin/know-more1.jpeg"
                        alt="know-more1"
                        width={800}
                        height={0}
                        className="h-auto w-full rounded-2xl object-cover"
                     />
                  </div>
                  <div className="w-full rounded-2xl overflow-hidden">
                     <Image
                        src="/admin/know-more1.jpeg"
                        alt="know-more1"
                        width={800}
                        height={0}
                        className="h-auto w-full rounded-2xl object-cover"
                     />
                  </div>

                  <div className="w-full rounded-2xl overflow-hidden">
                     <Image
                        src="/admin/know-more1.jpeg"
                        alt="know-more1"
                        width={800}
                        height={0}
                        className="h-auto w-full rounded-2xl object-cover"
                     />
                  </div>

               </div>
            </div>
         </AdminB2CWrapper>
      </>
   )
}
export default knowMore;