'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';


export interface UserCardProps {
  name: string;
  image: string;
  address: String;
  detail1: string;
  detail2: string;
  detail3: string;
  detail4: string;
}

const InstitueCard: FC<UserCardProps> = ({
  name,
  image,
  address,
  detail1,
  detail2,
  detail3,
  detail4,
}) => {

  return (
    <Link href="/admin-b2c/admin-panel/institute-profile" className="block">
      <div className="w-full bg-[#f9fafb] border rounded-2xl p-2 flex flex-col sm:flex-row items-start gap-2 sm:gap-4 cursor-pointer transition">
        {/* Profile Image */}
        <div className="relative rounded-2xl overflow-hidden border w-full sm:max-w-[280px] h-[210px]">
          <Image
            src={image}
            alt={name}
            fill
            className="w-full h-full object-cover"
          />
        </div>

        {/* Info */}
        <div className="text-sm flex flex-col gap-1">
          <p className="font-semibold text-base text-gray-900">{name}</p>
          <p className="text-xs text-gray-500">{address}</p>
          <p className="text-xs text-gray-500">{detail1}</p>
          <p className="text-xs text-gray-500">{detail2}</p>
          <p className="text-xs text-gray-500">{detail3}</p>
          <p className="text-xs text-gray-500">{detail4}</p>
        </div>
      </div>
    </Link>
  );
};

export default InstitueCard;